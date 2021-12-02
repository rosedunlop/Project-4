
from django.core.exceptions import PermissionDenied
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer, PopulatedProductSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.


class ProductListView(APIView):
    def get(self, request):
        try:
            products = Product.objects.all()
            serialized_product = PopulatedProductSerializer(
                products, many=True)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            product = ProductSerializer(data=request.data)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        if product.is_valid():
            product.save(owner=request.user)
            return Response(product.data, status=status.HTTP_201_CREATED)
        else:
            return Response(product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ProductDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
            serialized_product = PopulatedProductSerializer(product)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if product.owner != request.user:
            raise PermissionDenied()
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
            updated_product = ProductSerializer(
                product, data=request.data, partial=True)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        if product.owner != request.user:
            raise PermissionDenied()

        if updated_product.is_valid():
            updated_product.save()
            return Response(updated_product.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
