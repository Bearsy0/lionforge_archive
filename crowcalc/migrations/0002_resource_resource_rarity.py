# Generated by Django 3.2.5 on 2021-07-05 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crowcalc', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='resource_rarity',
            field=models.CharField(choices=[('C', 'Common'), ('U', 'Uncommon'), ('R', 'Rare'), ('E', 'Epic'), ('L', 'Legendary')], default='C', max_length=1),
        ),
    ]
