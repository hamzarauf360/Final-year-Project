from . import views
from django.conf.urls import url
app_name = 'bst_module'

urlpatterns = [

    url(r'bst_sim/$',views.bst_sim.as_view(),name='bst_sim'),
    url(r'bst_sim2/$',views.bst_sim2.as_view(),name='bst_sim2'),
    url(r'bst_sim3/$',views.bst_sim3.as_view(),name='bst_sim3'),
    url(r'bst_sim4/$',views.bst_sim4.as_view(),name='bst_sim4'),
    url(r'bst_ques/$',views.bst_ques.as_view(),name='bst_ques'),
    url(r'bst_question_2/$',views.bst_question_2.as_view(),name='bst_question_2'),
    url(r'bst_question_3/$',views.bst_question_3.as_view(),name='bst_question_3'),
    url(r'bst_question_4/$',views.bst_question_4.as_view(),name='bst_question_4'),
    url(r'bst_question_5/$',views.bst_question_5.as_view(),name='bst_question_5'),


]
