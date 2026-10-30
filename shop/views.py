from django.shortcuts import render, get_object_or_404
from .models import Category, Product
from cart.forms import CartAddProductForm
from .recommender import Recommender
from .forms import SearchForm
from django.contrib.postgres.search import TrigramSimilarity
from taggit.models import Tag
from blog.views import post_list
from django.http import HttpResponse
from blog.models import Post
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


def index(request):
    post_list = Post.published.all()
    paginator = Paginator(post_list, 4)
    # page_number = request.GET.get("page", 1)
    posts = paginator.page(1)
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(new=True)
    paginator_news = Paginator(products, 3)
    products = paginator_news.page(1)
    language = request.LANGUAGE_CODE
    if language == "en":
        category_slug = "vapes"
    else:
        category_slug = "vapeadores"
    products_vapes = Product.objects.filter(available=True)
    category = get_object_or_404(Category,
                                 translations__language_code=language,
                                 translations__slug=category_slug)
    products_vapes = products_vapes.filter(category=category)
    paginator_vapes = Paginator(products_vapes, 4)
    products_vapes = paginator_vapes.page(1)
    return render(request, "shop/product/index.html", {"posts": posts,
                                                       "category": category,
                                                       "categories": categories,
                                                       "products": products,
                                                       "products_vapes": products_vapes})


def product_list(request, category_slug=None, tag_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    tag = None
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        products = products.filter(tags__in=[tag])
    if category_slug:
        language = request.LANGUAGE_CODE
        category = get_object_or_404(Category,
                                     translations__language_code=language,
                                     translations__slug=category_slug)
        products = products.filter(category=category)
    return render(
        request,
        "shop/product/list.html",
        {"category": category, "categories": categories, "products": products, "tag": tag},
    )


def product_detail(request, id, slug):
    language = request.LANGUAGE_CODE
    product = get_object_or_404(Product,
                                translations__language_code=language,
                                id=id, translations__slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    r = Recommender()
    recommended_products = r.suggest_products_for([product], 4)
    return render(
        request,
        "shop/product/detail.html",
        {"product": product, "cart_product_form": cart_product_form,
         'recommended_products': recommended_products},
    )


def product_search(request):
    language = request.LANGUAGE_CODE
    form = SearchForm()
    query = None
    results = []
    products = Product.objects.filter(available=True,
                                      translations__language_code=language)

    if 'query' in request.GET:
        form = SearchForm(request.GET)
        if form.is_valid():
            query = form.cleaned_data['query']
            results = products.annotate(
                similarity=TrigramSimilarity('translations__name', query),
            ).filter(similarity__gt=0.1).order_by('-similarity')

    return render(request,
                  "shop/product/search.html",
                  {'form': form,
                   'query': query,
                   'results': results})


def product_news(request):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(new=True)
    return render(
        request,
        "shop/product/list.html",
        {"category": category, "categories": categories, "products": products},
    )
