import secrets
from ast import arg
from uuid import uuid4

from django.db import models


class Shortener(models.Model):
    create_at = models.DateTimeField(auto_now_add=True, editable=False)
    url = models.URLField()
    url_temporaria = models.BooleanField(default=False)
    key = models.CharField(max_length=32, null=True)
    views_access = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.url

    def save(self, *args, **kwargs) -> None:
        if not self.key:
            self.key = self.key_generator()
        super().save(*args, **kwargs)
        return

    def key_generator(self, *args, **kwargs) -> str:
        """Generate url shortener

        Returns:
            string: url shortener
        """
        key_hash = secrets.token_urlsafe(8)
        return key_hash
