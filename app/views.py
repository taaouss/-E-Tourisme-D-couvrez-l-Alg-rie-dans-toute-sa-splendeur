from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Annonce , Position , Client , Photo
from .serializer import AnnonceSerializer , ClientSerializer 
# Create your views here.
def front(request):
    context = { }
    return render(request, "index.html", context)
@api_view(['GET'])
def Annonce_list(request):
    annonces = Annonce.objects.all()
    lesannonces = AnnonceSerializer(annonces, many= True)
    return Response(lesannonces.data)

@api_view(['POST'])
def Annonce_creat(request):
    lesannonces = AnnonceSerializer(data= request.data)
    if lesannonces.is_valid():
        lesannonces.save()
        return Response(lesannonces.data)
    else :
        return Response(lesannonces.errors)
    
@api_view(['POST', 'PUT', 'DELETE'])  
def annonce(request, pk):
    annonce = Annonce.objects.get(pk=pk)
    if request.method == 'GET':
        lesannonces = AnnonceSerializer(annonce)
        return Response(lesannonces.data)
    if request.method == 'PUT':
        lesannonces = AnnonceSerializer(annonce, data=request.data)
        if lesannonces.is_valid():
            lesannonces.save()
            return Response(lesannonces.data)
        return lesannonces.errors
    if request.method == 'DELETE':
        annonce.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
   
@api_view(['DELETE'])
def delete_annonce(request, pk):
    annonce.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def show_annonce(request, pk):
    lesannonces = AnnonceSerializer(annonce)
    return Response(lesannonces.data)
    
@api_view(['PUT'])
def modifier_annonce(request, pk):
    lesannonces = AnnonceSerializer(annonce, data=request.data)
    if lesannonces.is_valid():
        lesannonces.save()
        return Response(lesannonces.data)
    return lesannonces.errors
   
@api_view(['GET'])
def Client_list(request):
    clients = Client.objects.all()
    lesclients = ClientSerializer(clients , many=True)
    return Response(lesclients.data)

     
@api_view(['POST'])
def Client_creat(request):
    lesclients = ClientSerializer(data= request.data)
    if lesclients.is_valid():
        lesclients.save()
        return Response(lesclients.data)
    else :
        return Response(lesclients.errors)
    
@api_view(['POST', 'PUT', 'DELETE'])  
def client(request, pk):
    client = Client.objects.get(pk=pk)
    if request.method == 'GET':
        lesclients = ClientSerializer(client)
        return Response(lesclients.data)
    if request.method == 'PUT':
        lesclients = ClientSerializer(client , data=request.data)
        if lesclients.is_valid():
            lesclients.save()
            return Response(lesclients.data)
        return lesclients.errors
    if request.method == 'DELETE':
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['DELETE'])
def delete_client(request, pk):
    client.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def show_client(request, pk):
    lesclients = ClientSerializer(client)
    return Response(lesclients.data)
    
@api_view(['PUT'])
def modifier_client(request, pk):
    lesclients = ClientSerializer(client , data=request.data)
    if lesclients.is_valid():
        lesclients.save()
        return Response(lesclients.data)
    return lesclients.errors