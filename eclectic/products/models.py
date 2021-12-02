from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=300)
    type = models.CharField(max_length=100)
    description = models.TextField()
    imageOne = models.CharField(max_length=1000)
    imageTwo = models.CharField(max_length=1000)
    brand = models.CharField(max_length=100)
    url = models.CharField(max_length=1000)
    price = models.IntegerField()
    colour = models.CharField(max_length=100)
    owner = models.ForeignKey(
        "jwt_auth.User", on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return "Product" + self.name
