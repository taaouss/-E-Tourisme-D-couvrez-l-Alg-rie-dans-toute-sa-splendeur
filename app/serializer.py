from django.forms import IntegerField
from rest_framework import serializers
from .models import Annonce , Client

class AnnonceSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    surface = serializers.FloatField(allow_null=False)
    prix = serializers.IntegerField(allow_null=False)
    description = serializers.CharField(allow_blank=True, allow_null=True)
    date = serializers.DateTimeField(read_only = True)
    pos = serializers.CharField(allow_null=False)
    photos = serializers.CharField(allow_null=False)
    categories = serializers.CharField(allow_null=False)
    types = serializers.CharField(allow_null=False)
    
    def create(self , data):
        return Annonce.objects.create(**data)
    
    def update(self, instance, data):
        instance.surface = data.get('surface', instance.surface)
        instance.prix = data.get('prix', instance.prix)
        instance.description = data.get('description', instance.description)
        instance.pos = data.get('pos', instance.pos)
        instance.photos = data.get('photos', instance.photos)
        instance.categories = data.get('categories', instance.categories)
        instance.types = data.get('types', instance.types)
        instance.save()
        return instance
        
    
    
class ClientSerializer(serializers.Serializer):
    email = serializers.EmailField(allow_null=False)
    nom = serializers.CharField(allow_null=False)
    prenom = serializers.CharField(allow_null=False)
    telephone = serializers.IntegerField(allow_null=False)
    annonces = serializers.CharField(allow_null=True)
    
    def create(self , data):
        return Client.objects.create(**data)
    
    def update(self, instance, data):
        instance.email = data.get('email', instance.email)
        instance.nom = data.get('nom', instance.nom)
        instance.prenom = data.get('prenom', instance.prenom)
        instance.telephone = data.get('telephone', instance.telephone)
        instance.annonces = data.get('annonces', instance.annonces)