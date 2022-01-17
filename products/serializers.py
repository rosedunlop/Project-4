from jwt_auth.serializers import PopulatedUserSerializer
from rest_framework import serializers
from .models import Product
from reviews.serializers import PopulatedReviewSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class PopulatedProductSerializer(ProductSerializer):
    review_set = PopulatedReviewSerializer(read_only=True, many=True)
    owner = PopulatedUserSerializer(read_only=True)
