from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'web_app/home.html')

@login_required
def dashboard(request):
    return render(request, 'web_app/dashboard.html')

@login_required
def upload(request):
    form = ContractUploadForm()
    return render(request, 'web_app/upload.html')