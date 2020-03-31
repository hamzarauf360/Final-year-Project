from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse_lazy
from django.views.generic import View


class queue_stack_tut(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'queue_stack/queue_tutorial.html'

class stack_simm(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'queue_stack/stack_sim.html'

class queue_stack_testing(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'queue_stack/queue_stack_home.html'

class stack_ques(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'queue_stack/stack_1.html'

class ques_2(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'queue_stack/testing.html'
