from re import L
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.utils.datastructures import MultiValueDictKeyError
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.http import JsonResponse

from .models import CraftingRequest
import requests

def all(request):
    latest_req_list = CraftingRequest.objects.order_by('pub_date')
    active_req = latest_req_list.filter(status=1)
    
    unclaimed_req = [item for item in active_req if (item.crafter is None or item.crafter == "")]
    claimed_req = [item for item in active_req if (type(item.crafter) == str and len(item.crafter) > 0)]

    context = {'claimed_req': claimed_req,
               'unclaimed_req': unclaimed_req,
               'completed_req': latest_req_list.filter(status=0)} 

    return render(request, 'craftquests/all.html', context)

def _assign_fields(item_list):
    dict_output = {}

    for item in item_list:
        dict_output[item.id] = {}

        for field, val in item:
            dict_output[item.id][field] = val

    return dict_output

def botindex(request):
    latest_req_list = CraftingRequest.objects.order_by('pub_date')
    active_req = latest_req_list.filter(status=1)   

    unclaimed_req = [item for item in active_req if (item.crafter is None or item.crafter == "")]
    claimed_req = [item for item in active_req if (type(item.crafter) == str and len(item.crafter) > 0)]

    completed_req = latest_req_list.filter(status=0)

    context = {'claimed_req': _assign_fields(claimed_req),
                'unclaimed_req': _assign_fields(unclaimed_req),
                'completed_req': _assign_fields(completed_req)}

    return JsonResponse(context)

@csrf_exempt
def update_status(request, request_id):
    if request.method == "POST":
        req = get_object_or_404(CraftingRequest, pk=request_id)
        return HttpResponse(req.item_name)
        req.status = request.POST['status_update']
        req.crafter = request.POST['crafter']
        req.save()

        return HttpResponse('Success')
    else:
        return HttpResponse('No')

def getstatus(request, request_id):
    req = get_object_or_404(CraftingRequest, pk=request_id)
    return render(request, 'craftquests/detail.html', {'req': req})

def addcraft(request):
    try:
        new_craftingrequest = CraftingRequest(
            requester=request.POST['requester'],
            item_name=request.POST['item_name'],
            custom_name=request.POST['custom_name'],
            crafting_discipline=request.POST['crafting_discipline'],
            stats=request.POST['stats'],
            quantity=request.POST['quantity'],
            special_instruction=request.POST['special_instruction'],
            status=1,
            rarity=request.POST['rarity'],
            resource_provided=int(request.POST['resource_provided']),
            pub_date=timezone.now()
        )
        new_craftingrequest.save()
        return HttpResponseRedirect('/craftquests/')
        
    except MultiValueDictKeyError as e:
        return render(request, 'craftquests/addcraft.html', {})

