from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.shortcuts import render
from django.db.models import Q

from .models import CraftedResource

def find_recipe(name):
    obj = CraftedResource.objects.filter(name=name, recipe=True)

    if len(obj) > 1:
        raise ValueError('Found more than one recipe')
    else:
        obj = obj[0]

    return obj

def find_all_crafted(obj, crafted_list):
    crafted = [find_recipe(item.name) for item in obj.crafted_prod.all()]
    
    
    [find_all_crafted(item, crafted_list) for item in crafted]
    
    crafted_list += crafted
    return crafted

def find_all_gatherables(obj, gather_list):
    crafted = [find_recipe(item.name) for item in obj.crafted_prod.all()]
    gatherables = [item for item in obj.gather_prod.all()]
    
    for item in crafted:        
        find_all_gatherables(item, gather_list)
    
    gather_list += gatherables

def consolidate_gatherables(gather_list):
    output = {}
    for item in gather_list:
        output[item.name] = 0
    for item in gather_list:
        output[item.name] += item.quantity
    return output

def get_items(request):
    context = {'motd': 'Hello World'}

    obj_name = 'Leather Tunic'
    obj = find_recipe(obj_name)

    test = []
    find_all_crafted(obj, test)
    print(test)
    test2 = []
    find_all_gatherables(obj, test2)
    print(consolidate_gatherables(test2))

    return render(request, 'crowcalc/index.html', context)

def index(request):
    print('hi')
    return "Hi"

def search(request):
    query = request.GET.get('item_name', '')

    if query:
        queryset = (Q(name__icontains=query))
        #I assume "text" is a field in your model
        #i.e., text = model.TextField()
        #Use | if searching multiple fields, i.e., 
        #queryset = (Q(text__icontains=query))|(Q(other__icontains=query))
        results = CraftedResource.objects.filter(queryset, recipe=True)
    else:
       results = []
    return render(request, 'crowcalc/index.html', {'results': results, 'query': query})

