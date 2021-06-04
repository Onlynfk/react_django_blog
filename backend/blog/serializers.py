from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BlogPost


# Serializers define the API representation.
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'  # pk stuff

