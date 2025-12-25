from django.conf.urls.static import static  # Добавь этот импорт
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('api.urls', namespace='api')),#app_name
    path("", TemplateView.as_view(template_name="base.html")),
        #SEO по адресу http://127.0.0.1:8001/sitemap.xml
    path('sitemap.xml', TemplateView.as_view(template_name="sitemap.xml", content_type="application/xml")),
    #SEO по адресу http://127.0.0.1:8001/robots.txt
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
]





if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)