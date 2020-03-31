from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse_lazy



class TestPage(LoginRequiredMixin,TemplateView):
    login_url = reverse_lazy ('login')
    template_name='test.html'
class ThanksPage(TemplateView):
    template_name = 'thanks.html'
class HOMEPAGE(LoginRequiredMixin,TemplateView):
    login_url = reverse_lazy ('login')
    template_name = 'index.html'
