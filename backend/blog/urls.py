from django.urls import path
from .views import *

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured/', BlogFeaturedView.as_view()),
    path('category/', BlogPostCategoryView.as_view()),
    path('<slug>/', BlogPostDetailView.as_view())
]
