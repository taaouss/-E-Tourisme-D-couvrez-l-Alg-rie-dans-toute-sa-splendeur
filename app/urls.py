from django.contrib import admin
from django.urls import path
from app.views import Annonce_list , Annonce_creat , annonce , Client_list , Client_creat , client

urlpatterns = [
    path('listannonces/', Annonce_list),  # pour afficher toutes les annonces
    path('creatannonce/', Annonce_creat), # pour creer une annone
    path('<int:pk>', annonce),  # pour afficher , modifier ou supprimer une annonce
    path('listclients/', Client_list),  # pour afficher la liste des clients
    path('creatclient/', Client_creat),  # pour creer un utilisateur
    path('<int:pk>', client)  # pour afficher , modifier ou supprimer un client
]
