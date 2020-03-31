from . import views
from django.conf.urls import url
app_name = 'queue_stack'

urlpatterns = [
    url(r'queue_stack_tut/$',views.queue_stack_tut.as_view(),name='queue_stack_tut'),
    url(r'stack_simm/$',views.stack_simm.as_view(),name='stack_simm'),
    url(r'queue_stack_testing/$',views.queue_stack_testing.as_view(),name='queue_stack_testing'),
    url(r'stack_ques/$',views.stack_ques.as_view(),name='stack_ques'),
    url(r'ques_2/$',views.ques_2.as_view(),name='ques_2'),

]
