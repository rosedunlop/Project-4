
from django.core.exceptions import PermissionDenied
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from articles.serializers import ArticleSerializer
from .models import Article

# Create your views here.


class ArticleListView(APIView):
    def get(self, request):
        try:
            articles = Article.objects.all()
            serialized_article = ArticleSerializer(articles, many=True)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serialized_article.data, status=status.HTTP_200_OK)


class ArticleDetailView(APIView):
    def get(self, request, pk):
        try:
            article = Article.objects.get(id=pk)
            serialized_article = ArticleSerializer(article)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serialized_article.data, status=status.HTTP_200_OK)
