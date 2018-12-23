from django.db import models
from django.utils import timezone





class WhoAreWe(models.Model):
    who_are_we = models.TextField(default=None)
    date = models.DateTimeField(default=timezone.now)





class Service(models.Model):
    service_name = models.CharField(max_length=60, default=None)
    service_pic = models.ImageField(upload_to='services', null=True, blank=True, default=None)
    service = models.TextField(default=None)
    date = models.DateTimeField(default=timezone.now)





class Contact(models.Model):
    sender_name = models.CharField(max_length=100)
    sender_email = models.EmailField()
    subject = models.CharField(max_length=100)
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(default=timezone.now)

