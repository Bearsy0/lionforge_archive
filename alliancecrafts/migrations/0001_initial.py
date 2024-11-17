# Generated by Django 3.2.5 on 2021-09-11 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CraftingRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requester', models.CharField(max_length=50)),
                ('item_name', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='Requested time')),
                ('quantity', models.IntegerField()),
                ('crafting_discipline', models.CharField(choices=[('ALC', 'Alchemy'), ('ARM', 'Armorsmithing'), ('BKS', 'Blacksmithing'), ('CKG', 'Cooking'), ('JWL', 'Jewelcrafting'), ('LTW', 'Leatherworking'), ('NEC', 'Necromancy'), ('RUN', 'Runemaking'), ('STO', 'Stonemasonry'), ('WPN', 'Weaponsmithing'), ('WOO', 'Woodworking')], max_length=3)),
                ('special_instruction', models.TextField(blank=True, null=True)),
                ('stats', models.TextField(blank=True, default="Crafter's choice", null=True)),
                ('rarity', models.CharField(choices=[('C', 'Common'), ('U', 'Uncommon'), ('R', 'Rare'), ('E', 'Epic'), ('L', 'Legendary')], max_length=3)),
                ('resource_provided', models.IntegerField(choices=[(1, 'Yes'), (0, 'No')])),
                ('custom_name', models.CharField(blank=True, max_length=200, null=True)),
                ('status', models.IntegerField(choices=[(1, 'Active'), (0, 'Complete')], default=1)),
                ('crafter', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
