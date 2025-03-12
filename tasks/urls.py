from django.urls import path, include
from rest_framework import routers
from task import views

# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path('api/v1', include(router.urls))
]

# Generate GET, POST, PUT, DELETE