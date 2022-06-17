from uuid import uuid4

from django.db import models


class Shortener(models.Model):
    id_shortener = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    create_at = models.DateTimeField(auto_now_add=True, editable=False)
    url = models.URLField()
    url_temporaria = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.pk
