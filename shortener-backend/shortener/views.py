import string

from django.http import HttpResponseNotFound
from django.shortcuts import redirect

from .models import Shortener


def redirect_url(request, key):
    """View to redirect shorter url

    Args:
        :param key: key for query on database
        :type key: integer
    """
    try:
        obj = Shortener.objects.get(key=key)
        obj.views_access += 1
        obj.save()
        return redirect(obj.url)
    except Shortener.DoesNotExist:
        return HttpResponseNotFound("Url don't exist")
