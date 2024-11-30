from django.shortcuts import render

#Create your views here.
def index(request):
    return render(request,'mainapp/index.html',{
        'tittle':'Inicion | Pagina principal',
        'content':'..::¡Bienvenido a mBienvenido a mi pagina priincipali pagina priincipal!::..'
    })

def about(request):
    return render(request,'mainapp/about.html',{
        'tittle':'Acerca de',
        'content':'..::Somos un equipo de Desarrollo de SW con DJango::..'
    })


def mision(request):
    return render(request,'mainapp/mision.html',{
        'tittle':'Mision de la UTD',
    })


def vision(request):
    return render(request,'mainapp/vision.html',{
        'tittle':'Vision de la UTD',
    })