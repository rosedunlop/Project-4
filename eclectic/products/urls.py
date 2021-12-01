from django.urls import path
from . import views
from .views import ProductListView
from .views import ProductDetailView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('<int:pk>/', ProductDetailView.as_view()),
]
