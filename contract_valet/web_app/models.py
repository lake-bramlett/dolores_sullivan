from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Contract(models.Model):
    date_posted = models.DateTimeField(default=timezone.now)
    date_due = models.DateTimeField()
    conract_pdf = models.FileField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    notes = models.TextField()