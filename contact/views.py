from django.shortcuts import render

# Create your views here.
def index(request):
  return render(request, 'index.html', {'id': 15, 'header': [
    {'value': 'Projetos', 'link': 's'}, 
    {'value': 'Sobre o site', 'link': 's'}, 
    {'value': 'Sobre mim', 'link': 's'}, 
  ]})