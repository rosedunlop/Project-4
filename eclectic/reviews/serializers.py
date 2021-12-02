from rest_framework import serializers
from .models import Review
from jwt_auth.serializers import PopulatedUserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class PopulatedReviewSerializer(ReviewSerializer):
    owner = PopulatedUserSerializer(read_only=True)
