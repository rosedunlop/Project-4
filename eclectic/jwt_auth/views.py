from django.shortcuts import render
from rest_framework import status

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

from products.serializers import ProductSerializer
from products.models import Product

from .serializers import UserSerializer, PopulatedUserSerializer
User = get_user_model()


class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode(
            {'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!', 'id': {user.id}, 'email': {user.email}, 'username': {user.username}, 'profile-image': {user.profile_image}})


class WishListView(APIView):

    def get(self, request, pk):
        user = User.objects.get(id=pk)
        user_serializer = PopulatedUserSerializer(user)
        return Response(user_serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk):
        product = Product.objects.get(id=pk)
        user = request.user

        updated_wishlist = user.wish_list.save(product)
        return Response(updated_wishlist.data, status=status.HTTP_200_OK)
