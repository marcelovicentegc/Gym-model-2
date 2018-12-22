from django.db import models
from django.utils import timezone





class Contact(models.Model):
    sender_name = models.CharField(max_length=100)
    sender_email = models.EmailField()
    subject = models.CharField(max_length=100)
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(default=timezone.now)

