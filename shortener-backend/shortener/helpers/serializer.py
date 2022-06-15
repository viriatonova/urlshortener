from textwrap import shorten
from rest_framework import serializers
from shortener import models

class ShortenerSerializer(serializers.ModelSerializer):
    model = models.Shortener
    fields = '__all__'