from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django import forms

class StudentUserCreateForm(UserCreationForm):
        age = forms.CharField(max_length=3, required=True,)
        institute = forms.CharField(max_length=50, required=True)


class Meta:
        fields = ('username','email','age','institute','password1','password2') #fields which we gonna show to user
        model = get_user_model()

        def __init__(self,*args,**kwargs):
            super().__init__(*args,**kwargs)
            self.fields['username'].label = 'Username'  #labels for the fields
            self.fields['email'].label = 'Email Address'
            self.fields['age'].label = 'Age'
            self.fields['institute'].label = 'Institute'
