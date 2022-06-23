from rest_framework import serializers
from shortener.models import Shortener


class ShortenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortener
        fields = '__all__'


class PublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortener
        fields = ['url', 'key']
