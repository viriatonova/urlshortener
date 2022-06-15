from rest_framework import viewsets
from shortener.api import serializer
from shortener import models

class ShortnerViewSet(viewsets.ModelViewSet):
    serializer_class = serializer.ShortenerSerializer
    queryset = models.Shortener.objects.all()