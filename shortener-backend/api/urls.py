from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from shortener.api import viewsets as shortenerViewset

route = routers.SimpleRouter()
route.register(r'api/v1', shortenerViewset.ShortenerViewSet,
               basename="shortener")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
]
