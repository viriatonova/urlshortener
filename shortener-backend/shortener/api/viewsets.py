from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from shortener import models
from shortener.api.serializer import ShortenerSerializer


class ShortenerViewSet(viewsets.ModelViewSet):
    serializer_class = ShortenerSerializer
    queryset = models.Shortener.objects.all()
