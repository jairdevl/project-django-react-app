from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
def task_view(request):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
