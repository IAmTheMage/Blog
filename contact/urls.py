from django.urls import path
from . import views

urlpatterns = [
  path('ss', views.index, name='index')
]