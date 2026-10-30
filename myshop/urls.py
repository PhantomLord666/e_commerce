from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from blog.sitemaps import PostSitemap
from . import views
from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import gettext_lazy as _
from payment import webhooks
from strawberry.django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from shop.schema import schema  # o la ruta correcta según tu estructura

sitemaps = {
    'posts': PostSitemap,
}


urlpatterns = i18n_patterns(
    path("admin/", admin.site.urls),
    path(_('cart/'), include('cart.urls', namespace='cart')),
    path(_('orders/'), include('orders.urls', namespace='orders')),
    path(_('payment/'), include('payment.urls', namespace='payment')),
    path(_('coupons/'), include('coupons.urls', namespace='coupons')),
    path("account/", include("account.urls")),
    path('social-auth/', include('social_django.urls', namespace='social')),
    path('blog/', include('blog.urls', namespace='blog')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps},
         name='django.contrib.sitemaps.views.sitemap'),
    # path('', views.index, name='welcome'),
    path('rosetta/', include('rosetta.urls')),
    #path("graphql/", GraphQLView.as_view(schema=schema)),
    path("graphql/", csrf_exempt(GraphQLView.as_view(schema=schema))),
    path("", include("shop.urls", namespace="shop")),
)

urlpatterns += [
    path('payment/webhook/', webhooks.stripe_webhook, name='stripe-webhook'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
