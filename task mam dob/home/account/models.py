
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usredetails(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    
    dob=models.DateField(null=True,blank=True)
    Adhaar_number=models.CharField(max_length=10)
    def __str__(self):
        return str(self.user)