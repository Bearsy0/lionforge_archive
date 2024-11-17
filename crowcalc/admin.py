from django.contrib import admin

from .models import CraftedResource, GatherableResource, Stat

class StatInline(admin.TabularInline):
    model = Stat
    extra = 0

class GatherableResourceInline(admin.TabularInline):
    model = GatherableResource
    extra = 0

class CraftedResourceInline(admin.TabularInline):
    model = CraftedResource
    extra = 0
    exclude = ['recipe']

class CraftedResourceAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,  {'fields': ['name', 'recipe' ,'quantity',  'crafting_discipline']} ),
    ]
    
    inlines = [StatInline, GatherableResourceInline, CraftedResourceInline]
    list_display = ('name','recipe','quantity','crafting_discipline')
    search_fields = ['name']
    list_filter = (
        ('recipe', admin.BooleanFieldListFilter),
        'crafting_discipline' 
    )

    def get_changeform_initial_data(self, request):
        return {
            'recipe': True
        }    

admin.site.register(CraftedResource, CraftedResourceAdmin)
# admin.site.register(GatherableResource)