# Generated by Django 4.0.5 on 2022-06-17 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0004_alter_shortener_url_shortener'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shortener',
            name='create_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
