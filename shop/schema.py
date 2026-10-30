import strawberry
from typing import List, Optional
from strawberry import auto
from strawberry_django import type, field


from .models import Product, Category


# ---------------------------------------
# 🔤 Tipos de traducción manual (Parler)
# ---------------------------------------

@strawberry.type
class CategoryTranslationType:
    name: str
    slug: str


@strawberry.type
class ProductTranslationType:
    name: str
    slug: str
    description: Optional[str]


# ---------------------------------------
# 🏷️ Producto y Categoría
# ---------------------------------------

@type(Category)
class CategoryType:
    id: auto
    translations: List[CategoryTranslationType]

    @strawberry.field
    def name(self) -> str:
        return self.safe_translation_getter("name", any_language=True)

    @strawberry.field
    def slug(self) -> str:
        return self.safe_translation_getter("slug", any_language=True)


@type(Product)
class ProductType:
    id: auto
    price: auto
    cost: auto
    available: auto
    new: auto
    created: auto
    updated: auto
    image: Optional[str] = None
    category: CategoryType

    @strawberry.field
    def name(self) -> str:
        return self.safe_translation_getter("name", any_language=True)

    @strawberry.field
    def slug(self) -> str:
        return self.safe_translation_getter("slug", any_language=True)

    @strawberry.field
    def description(self) -> Optional[str]:
        return self.safe_translation_getter("description", any_language=True)

    @strawberry.field
    def tags(self) -> List[str]:
        return [tag.name for tag in self.tags.all()]

    @strawberry.field
    def image_url(self) -> Optional[str]:
        return self.image.url if self.image else None


# ---------------------------------------
# 🔍 Query principal
# ---------------------------------------

@strawberry.type
class Query:
    products: List[ProductType] = field(resolver=lambda: Product.objects.all())
    categories: List[CategoryType] = field(resolver=lambda: Category.objects.all())

    @strawberry.field
    def product(self, id: strawberry.ID) -> Optional[ProductType]:
        try:
            return Product.objects.get(pk=id)
        except Product.DoesNotExist:
            return None

    @strawberry.field
    def products_by_category_slug(self, slug: str) -> List[ProductType]:
        return Product.objects.filter(category__translations__slug=slug)

    
schema = strawberry.Schema(query=Query)
