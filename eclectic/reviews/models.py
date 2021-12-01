from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.


class Review(models.Model):
    text = models.TextField()
    rating = models.IntegerField()
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    owner = models.ForeignKey(
        "jwt_auth.User", on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return f"Review: {self.rating}/5. {self.text}"
