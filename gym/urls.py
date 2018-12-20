from django.urls import re_path
from .views import Home

urlpatterns = [
    re_path(r'^$', Home.as_view(), name='home')
]