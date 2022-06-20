from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .serializer import UserSerializer


class UserViewSet(ModelViewSet):
    """_summary_
    API endpoint that allows users to be viewed or edited.
    Args:
        ModelViewSet (_type_): 

    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class LoginAuthToken(ObtainAuthToken):
    """_summary_
    API endpoint to authenticate users
    Args:
        ObtainAuthToken (_type_): _description_
    """

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
        })
