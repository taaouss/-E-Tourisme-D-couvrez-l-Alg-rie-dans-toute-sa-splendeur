from django.contrib import admin
from .models import Client , Annonce , Position , Photo , Message
# Register your models here.
admin.site.register(Client)
admin.site.register(Annonce)
admin.site.register(Position)
admin.site.register(Photo)
admin.site.register(Message)
