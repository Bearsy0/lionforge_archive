from django.urls import path
from . import views

appname = 'alliancecrafts'
urlpatterns = [
    path('all/', views.all, name='all'),
    path('botindex/', views.botindex, name='botindex'),
    path('<int:request_id>/', views.getstatus, name='getstatus'),
    path('push/<int:request_id>/', views.update_status, name='update_status'),
    path('', views.addcraft, name='addcraft')
]