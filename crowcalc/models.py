from django.db import models
from django.utils.translation import gettext_lazy as _

BASIC_RESOURCE_TYPES = 'wood ore stone leather body'
RESOURCE_RARITY = 'common uncommon rare epic legendary'
CRAFTING_TYPES = 'alchemy armorsmithing cooking jewelcrafting leatherworking necromancy runemaking stonemasonry weaponsmithing woodworking'

class Stat(models.Model):
    combination = models.CharField(max_length=200)
    stat = models.CharField(max_length=200)

    class StatRarity(models.TextChoices):
        EL = 'EL', _('Epic-Legendary')
        AL = 'AL', _('All')
    rarity = models.CharField(
        max_length=2,
        choices=StatRarity.choices,
        default=StatRarity.AL
    )

    product = models.ForeignKey('CraftedResource', on_delete=models.CASCADE, related_name='stats', null=True)

    def __str__(self):
        return f'{self.stat}'

class CraftedResource(models.Model):
    name = models.CharField(max_length=50)    
    recipe = models.BooleanField(default=False)

    rarity_matters = models.BooleanField(default=True)
    quantity = models.IntegerField(default=0)   
    product = models.ForeignKey('self', on_delete=models.CASCADE, related_name='crafted_prod', null=True)
    
    class CraftingDiscipline(models.TextChoices):
        ALC = 'ALC', _('Alchemy')
        BLC = 'BKS', _('Blacksmithing')
        CKG = 'FOO', _('Cooking')
        JWL = 'JWL', _('Jewelcrafting')
        LTW = 'LTW', _('Leatherworking')
        NEC = 'NEC', _('Necromancy')
        RUN = 'RUN', _('Runemaking')
        STO = 'STO', _('Stonemasonry')
        WOO = 'WOO', _('Woodworking')

    crafting_discipline = models.CharField(
        max_length=3,
        choices=CraftingDiscipline.choices,
        default=CraftingDiscipline.ALC
    )    
    
    def __str__(self):
        return f'{self.name}'

class GatherableResource(models.Model):
    name = models.CharField(max_length=50)

    rarity_matters = models.BooleanField(default=True)
    quantity = models.IntegerField(default=0)   
    product = models.ForeignKey('CraftedResource', on_delete=models.CASCADE, related_name='gather_prod')

    class ResourceType(models.TextChoices):
        W = 'W', _('Wood')
        O = 'O', _('Ore')
        S = 'S', _('Stone')
        L = 'L', _('Leather')
        B = 'B', _('Body Parts')
        X = 'X', _('Other')

    resource_type = models.CharField(
        max_length=1,
        choices=ResourceType.choices,
        default=ResourceType.W
    )

    def __str__(self):
        return self.name