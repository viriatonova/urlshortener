from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from shortener import models
from shortener.api.serializer import PublicSerializer, ShortenerSerializer


class ShortenerViewSet(viewsets.ModelViewSet):
    serializer_class = ShortenerSerializer
    queryset = models.Shortener.objects.all()
    permission_classes = [IsAuthenticated]


class PublicViewSet(viewsets.ModelViewSet):
    serializer_class = PublicSerializer
    queryset = models.Shortener.objects.all()
