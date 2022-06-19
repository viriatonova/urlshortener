# Generated by Django 4.0.5 on 2022-06-17 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0002_shortener_url_checked_alter_shortener_url_clicks_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shortener',
            name='ip_user',
        ),
        migrations.RemoveField(
            model_name='shortener',
            name='url_checked',
        ),
        migrations.RemoveField(
            model_name='shortener',
            name='url_clicks',
        ),
        migrations.RemoveField(
            model_name='shortener',
            name='username',
        ),
        migrations.AlterField(
            model_name='shortener',
            name='url',
            field=models.URLField(max_length=2000),
        ),
        migrations.AlterField(
            model_name='shortener',
            name='url_shortener',
            field=models.URLField(max_length=520),
        ),
    ]