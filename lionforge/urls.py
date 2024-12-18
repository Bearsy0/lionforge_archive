"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView

favicon_view = RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)

urlpatterns = [
    path('craftquests/', include('craftquests.urls')),
    path('alliancecrafts/', include('alliancecrafts.urls')),
    # path('crowcalc/', include('crowcalc.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^favicon\.ico$', favicon_view),
    path('', TemplateView.as_view(template_name='index.html')),
    path('recruitment/', TemplateView.as_view(template_name='recruitment.html')),
]