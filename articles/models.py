from django.db import models

# Create your models here.


class Article(models.Model):
    name = models.CharField(max_length=300)
    url = models.CharField(max_length=1000)
    author = models.CharField(max_length=300)
    description = models.TextField()
    imageOne = models.CharField(max_length=1000)
    imageTwo = models.CharField(max_length=1000)
