from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from shortener import views
from shortener.api.viewsets import PublicViewSet, ShortenerViewSet

from .api.viewset import LoginAuthToken

route = routers.SimpleRouter()
route.register(r'api/v1', ShortenerViewSet,
               basename="shortener")
route.register(r'api/public', PublicViewSet, basename="public")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
    path('login/', LoginAuthToken.as_view()),
    path('<str:key>', views.redirect_url)
]
