from django.urls import path
from .views import RegisterView, LoginView, WishListDetailView, WishListView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('', WishListView.as_view()),
    path('<int:pk>/', WishListDetailView.as_view()),

]
