import secrets

from rest_framework import serializers
from shortener.models import Shortener


class ShortenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortener
        fields = [
            'id_shortener', 'url', 'url_shortener',
            'url_temporaria',
        ]

    url_shortener = serializers.SerializerMethodField(
        method_name='get_shortener',
        read_only=True,
    )

    def get_shortener(self, Shortener) -> str:
        """_summary_

        Returns:
            string: _description_
        """
        id_short = secrets.token_urlsafe(8)
        url_shortener = f"http://localhost:8000/{id_short}"
        return url_shortener
