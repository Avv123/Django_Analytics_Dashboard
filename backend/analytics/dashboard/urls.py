from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'pageviews', views.PageViewViewSet)
router.register(r'userclicks', views.UserClickViewSet)

urlpatterns = [
    path('', include(router.urls)),
]