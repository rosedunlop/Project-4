from django.urls import path
from articles.views import ArticleDetailView, ArticleListView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<int:pk>/', ArticleDetailView.as_view()),
]
