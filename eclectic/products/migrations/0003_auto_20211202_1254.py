# Generated by Django 3.2.9 on 2021-12-02 12:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image_one',
            new_name='imageOne',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='image_two',
            new_name='imageTwo',
        ),
    ]
