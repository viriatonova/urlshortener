# Generated by Django 4.0.5 on 2022-07-20 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shortener', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shortener',
            old_name='url_temporaria',
            new_name='url_temporary',
        ),
        migrations.AddField(
            model_name='shortener',
            name='views_access',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='shortener',
            name='key',
            field=models.CharField(max_length=32, null=True),
        ),
    ]