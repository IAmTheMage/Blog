from django.shortcuts import render

def index(request):
  return render(request, 'index.html', {'id': 15, 'header': [
    {'value': 'Projetos', 'link': 's'}, 
    {'value': 'Opiniões', 'link': 's'}, 
    {'value': 'Sobre mim', 'link': 's'}, 
    {'value': 'Contato', 'link': 's'}
  ]})
