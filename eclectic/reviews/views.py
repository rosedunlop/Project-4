from django.core.exceptions import PermissionDenied
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from products.models import Product
from .serializers import ReviewSerializer, PopulatedReviewSerializer


# Create your views here.


class ReviewListView(APIView):

    def get(self, request):
        try:
            reviews = Review.objects.all()
            serialized_review = PopulatedReviewSerializer(reviews, many=True)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serialized_review.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            review = ReviewSerializer(data=request.data)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        if review.is_valid():
            review.save(owner=request.user)
            return Response(review.data, status=status.HTTP_201_CREATED)
        else:
            return Response(review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ReviewDetailView(APIView):
    def delete(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if review.owner != request.user:
            raise PermissionDenied()
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get(self, request, pk):
        review = Review.objects.get(id=pk)
        serialized_review = PopulatedReviewSerializer(review)
        return Response(serialized_review.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
            updated_review = ReviewSerializer(
                review, data=request.data, partial=True)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if updated_review.owner != request.user:
            raise PermissionDenied()
        if updated_review.is_valid():
            updated_review.save()
            return Response(updated_review.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
