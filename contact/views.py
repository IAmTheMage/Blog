from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.template import Context
from django.views.decorators.csrf import csrf_protect



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

@csrf_protect
def sendMail(request):
  if(request.method == 'POST'):
    post = request.POST
    htmly = render_to_string('email.html', 
    {'email': post.get('email'), 'name': post.get('name'),
    'content': post.get('content')
    }
    )
    try:
      send_mail(
      post.get('subject'),
      '',
      post.get('email'),
      ['gustavosjn2013@gmail.com'],
      fail_silently=False,
      html_message=htmly
      )
    except:
      print("Error")

    return HttpResponseRedirect('/contact/thanks')

def thanks(request):
  return render(request, 'thanks.html')