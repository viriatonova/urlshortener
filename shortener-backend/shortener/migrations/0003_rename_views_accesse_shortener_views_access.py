# Generated by Django 4.0.5 on 2022-06-23 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0002_shortener_views_accesse_alter_shortener_key'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shortener',
            old_name='views_accesse',
            new_name='views_access',
        ),
    ]