from django.shortcuts import render

# Create your views here.
def index(request):
  return render(request, 'contact.html', {'id': 15, 'header': [
    {'value': 'Projetos', 'link': 's'}, 
    {'value': 'Sobre o site', 'link': 's'}, 
    {'value': 'Sobre mim', 'link': 's'}, 
  ],  'additional_scripts': [
    'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
  ]
  
  })