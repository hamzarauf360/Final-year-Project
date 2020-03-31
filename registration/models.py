from django.db import models
from django.contrib import auth
# Create your models here.
class studentUser (auth.models.User,auth.models.PermissionsMixin): #imported user model for auth from built in function
    def __str__(self):
        return "@{}".format(self.username)
