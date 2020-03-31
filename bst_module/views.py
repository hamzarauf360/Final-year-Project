from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse_lazy
from django.views.generic import View
from django.http import HttpResponse

# Create your views here.
class bst_sim(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy('login')
#    request.session['fav_color'] = 'blue'
    template_name = 'bst_module/bst_home.html'




class bst_sim2(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy('login')
    template_name = 'bst_module/bst_home_2.html'





class bst_sim3(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/bst_home_3.html'



class bst_sim4(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/bst_home_4.html'


class bst_ques(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/random_trees.html'

class bst_question_2(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/bst_question_2.html'
class bst_question_3(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/bst_question_3.html'

class bst_question_4(LoginRequiredMixin, TemplateView):
      login_url = reverse_lazy('login')

      template_name = 'bst_module/bst_question_4.html'
class bst_question_5(LoginRequiredMixin, TemplateView):
        login_url = reverse_lazy('login')

        template_name = 'bst_module/bst_question_5.html'
