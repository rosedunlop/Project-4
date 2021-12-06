from django.urls import path
from .views import RegisterView, LoginView, WishListView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('<int:pk>/', WishListView.as_view()),

]
