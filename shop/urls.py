from django.urls import path, include
from . import views

app_name = "shop"

urlpatterns = [
    path('blog/', include('blog.urls', namespace='blog')),
    path("", views.index, name="index"),
    path("", views.product_list, name="product_list"),
    path('tags/<slug:tag_slug>/',
         views.product_list, name='product_list_by_tag'),
    path("news/", views.product_news, name='product_news'),
    path("search/", views.product_search, name='product_search'),
    path("<slug:category_slug>/", views.product_list, name="product_list_by_category"),
    path("<int:id>/<slug:slug>/", views.product_detail, name="product_detail"),
]
