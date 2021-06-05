from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', BlogPostCreateView, basename='create')
router.register('<int:pk>/', BlogPostCreateView, basename='create')


urlpatterns = [
    path('new/', include(router.urls)),

    path('', BlogPostListView.as_view()),
    path('featured/', BlogFeaturedView.as_view()),
    path('category/', BlogPostCategoryView.as_view()),
    path('<slug>/', BlogPostDetailView.as_view()),

]
