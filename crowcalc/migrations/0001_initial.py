# Generated by Django 3.2.5 on 2021-07-06 19:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CraftedResource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('recipe', models.BooleanField(default=False)),
                ('rarity_matters', models.BooleanField(default=True)),
                ('quantity', models.IntegerField(default=0)),
                ('crafting_discipline', models.CharField(choices=[('ALC', 'Alchemy'), ('BKS', 'Blacksmithing'), ('FOO', 'Cooking'), ('JWL', 'Jewelcrafting'), ('LTW', 'Leatherworking'), ('NEC', 'Necromancy'), ('RUN', 'Runemaking'), ('STO', 'Stonemasonry'), ('WOO', 'Woodworking')], default='ALC', max_length=3)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='crafted_prod', to='crowcalc.craftedresource')),
            ],
        ),
        migrations.CreateModel(
            name='Stat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('combination', models.CharField(max_length=200)),
                ('stat', models.CharField(max_length=200)),
                ('rarity', models.CharField(choices=[('EL', 'Epic-Legendary'), ('AL', 'All')], default='AL', max_length=2)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='stats', to='crowcalc.craftedresource')),
            ],
        ),
        migrations.CreateModel(
            name='GatherableResource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('rarity_matters', models.BooleanField(default=True)),
                ('quantity', models.IntegerField(default=0)),
                ('resource_type', models.CharField(choices=[('W', 'Wood'), ('O', 'Ore'), ('S', 'Stone'), ('L', 'Leather'), ('B', 'Body Parts'), ('X', 'Other')], default='W', max_length=1)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gather_prod', to='crowcalc.craftedresource')),
            ],
        ),
    ]