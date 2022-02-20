from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path("__reload__/", include("django_browser_reload.urls")),
    path('contact/', include("contact.urls"))
]
