from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as log
from django.http import HttpResponse

def login(request):
  if(request.method == "GET"):
    return render(request, 'login.html')
  else:
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
      log(request, user=user)
      return redirect('/backend/gimmic')
    else:
      return redirect('/unauthorized')