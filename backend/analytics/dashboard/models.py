from django.db import models

# Create your models here.
class PageView(models.Model):
    page_url=models.CharField(max_length=255)
    timestamp=models.DateTimeField(auto_now_add=True)
    ip_address=models.GenericIPAddressField(null=True)

class UserClick(models.Model):
    element_id = models.CharField(max_length=255)
    page_url = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)