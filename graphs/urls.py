from . import views
from django.conf.urls import url
app_name = 'graphs'

urlpatterns = [
    url(r'graph_home/$',views.graph_home.as_view(),name='graph_home'),
    url(r'graph_q2/$',views.graph_q2.as_view(),name='graph_q2'),
    url(r'dijkstraa/$',views.dijkstraa.as_view(),name='dijkstraa'),
    url(r'performance/$',views.performance.as_view(),name='performance'),


]
