from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login

# Create your views here.
def gimmic(request):
  if(request.user.is_authenticated and request.method == "GET"):
    return render(request, "gimmic.html", {
      'additional_styles': ['gimmic.css', 'gimmicOutput.css'],
      'additional_intern_scripts': ['gimmic.js']
    })
