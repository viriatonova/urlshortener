from django.db import models
from uuid import uuid4

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
    create_at = models.DateField(auto_now_add=True)
    username = models.CharField(max_length=255)
    url = models.CharField(max_length=2000)
    url_shortener = models.CharField(max_length=520)
    url_temporaria = models.BooleanField()
    url_clicks = models.IntegerField()
    ip_user = models.CharField(max_length=255)
    