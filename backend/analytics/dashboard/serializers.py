from rest_framework import serializers
from .models import PageView, UserClick

class PageViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageView
        fields = '__all__'

class UserClickSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserClick
        fields = '__all__'
