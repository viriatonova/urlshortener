from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from shortener.api import viewsets as shortenerViewset

from .api.viewset import LoginAuthToken, UserViewSet

route = routers.SimpleRouter()
route.register(r'api/v1', shortenerViewset.ShortenerViewSet,
               basename="shortener")
route.register(r'users/', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
    path('login/', LoginAuthToken.as_view()),
]
