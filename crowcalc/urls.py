from django.urls import path

from . import views

appname = 'crowcalc'
urlpatterns = [
    path('', views.search, name='index'),
    path('search/', views.search, name='search')
]