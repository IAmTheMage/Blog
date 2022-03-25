from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views #new
from . import views

urlpatterns = [
    path('admin/login/', views.login, name='login'),
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path("__reload__/", include("django_browser_reload.urls")),
    path('contact', include("contact.urls")),
    path('backend', include("backend.urls"), name="backend")
]
