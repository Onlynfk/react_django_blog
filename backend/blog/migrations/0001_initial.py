# Generated by Django 3.2 on 2021-06-05 09:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('love', 'Love'), ('God', 'God'), ('adventure', 'Adventure'), ('code', 'Code'), ('programming', 'Programming')], default='code', max_length=50)),
                ('image_cover', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('excerpt', models.CharField(max_length=50)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=3)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
