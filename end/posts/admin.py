from django.contrib import admin
from . import models


@admin.register(models.Post)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'text', 'date_of_creation', 'author')
    list_display_links = ('name', )