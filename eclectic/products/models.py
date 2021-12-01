from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=300)
    type = models.CharField(max_length=100)
    description = models.TextField()
    image_one = models.CharField(max_length=1000)
    image_two = models.CharField(max_length=1000)
    brand = models.CharField(max_length=100)
    url = models.CharField(max_length=1000)
    price = models.IntegerField()
    colour = models.CharField(max_length=100)

    def __str__(self):
        return "Product" + self.name
