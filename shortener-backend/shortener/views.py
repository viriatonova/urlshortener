from django.http import HttpResponseNotFound
from django.shortcuts import redirect

from .models import Shortener


def redirect_url(request, key):
    try:
        obj = Shortener.objects.get(key=key)
        obj.views_access += 1
        obj.save()
        return redirect(obj.url)
    except Shortener.DoesNotExist:
        return HttpResponseNotFound("Url don't exist")
