from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse_lazy
from django.views.generic import View

class graph_home(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'graph_htmls/graph_home.html'

class graph_q2(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'graph_htmls/graph_q2.html'

class dijkstraa(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'graph_htmls/dijkstra.html'

class performance(LoginRequiredMixin, TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'graph_htmls/performancee.html'
