from django.db import models
import datetime
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class CraftingDiscipline(models.TextChoices):
    ALC = 'ALC', _('Alchemy')
    ARM = 'ARM', _('Armorsmithing')
    BKS = 'BKS', _('Blacksmithing')
    CKG = 'CKG', _('Cooking')
    JWL = 'JWL', _('Jewelcrafting')
    LTW = 'LTW', _('Leatherworking')
    NEC = 'NEC', _('Necromancy')
    RUN = 'RUN', _('Runemaking')
    STO = 'STO', _('Stonemasonry')
    WPN = 'WPN', _('Weaponsmithing')
    WOO = 'WOO', _('Woodworking')

class Rarity(models.TextChoices):
    C = 'C', _('Common')
    U = 'U', _('Uncommon')
    R = 'R', _('Rare')
    E = 'E', _('Epic')
    L = 'L', _('Legendary')

class ActiveCompleted(models.IntegerChoices):
    Active = 1
    Complete = 0

class ResourceProvided(models.IntegerChoices):
    Yes = 1
    No = 0
    
class CraftingRequest(models.Model):
    requester = models.CharField(max_length=50)
    item_name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('Requested time')
    
    quantity = models.IntegerField()
    crafting_discipline = models.CharField(max_length=3, choices=CraftingDiscipline.choices)
    special_instruction = models.TextField(null=True, blank=True)
    stats = models.TextField(default="Crafter's choice", null=True, blank=True)
    rarity = models.CharField(max_length=3, choices=Rarity.choices)
    resource_provided = models.IntegerField(choices=ResourceProvided.choices)
    custom_name = models.CharField(max_length=200, null=True, blank=True)

    status = models.IntegerField(choices=ActiveCompleted.choices, default=1)
    crafter = models.CharField(max_length=50, null=True, blank=True)
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return f'{self.requester}[{self.crafting_discipline}]: {self.item_name}'

    def __iter__(self):
        field_names = [f.name for f in self._meta.get_fields()]
        for field_name in field_names:
            value = getattr(self, field_name, None)
            yield (field_name, value)