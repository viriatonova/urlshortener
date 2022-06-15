import string
from xmlrpc.client import boolean
from django.db import models
from uuid import uuid4
import validators
import pyshorteners

"""
- id_hash_usuário_url 
- nome do usuário
- url de entrada
- url encurtada
- clicks na url encurtada
- ip do usuário
- url temporária
"""
class Shortener(models.Model):
    id_shortener = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    create_at = models.DateField(auto_now_add=True, editable=False)
    username = models.CharField(max_length=255)
    url = models.CharField(max_length=2000)
    url_checked = models.BooleanField(default=True)
    url_shortener = models.CharField(max_length=520)
    url_temporaria = models.BooleanField(default=False)
    url_clicks = models.IntegerField(default=0)
    ip_user = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.pk

    def check_url(self) -> boolean:
        """Returns false for no valid url's
        :params self.url_check: boolean
        """
        if not validators.url(self.url):
            self.url_checked = False
        return self.url_checked
    
    def short_url(self) -> string:
        """Returns url shortener if is valid url
        :params self.url_short: string
        """
        if not self.url_checked:
            self.url_shortener = "";
            return self.url_shortener
        short = pyshorteners.Shortener()
        self.url_shortener = short.inyurl.short(self.url)
        return self.url_shortener

        