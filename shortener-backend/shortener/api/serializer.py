import secrets

from rest_framework import serializers
from shortener.models import Shortener


class ShortenerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shortener
        fields = '__all__'

    url_shortener = serializers.SerializerMethodField(
        method_name='get_shortener',
        read_only=True,
    )

    def get_shortener(self, Shortener) -> str:
        """Generate url shortener

        Returns:
            string: url shortener
        """
        id_short = secrets.token_urlsafe(8)
        url_shortener = f"http://localhost:8181/{id_short}"
        return url_shortener
