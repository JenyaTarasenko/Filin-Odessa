from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 1.0
    changefreq = "weekly"

    def items(self):
        return ['/']  # имена URL, которые будут в sitemap

    def location(self, item):
        return reverse(item)
