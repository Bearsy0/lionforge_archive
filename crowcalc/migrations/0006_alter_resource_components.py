# Generated by Django 3.2.5 on 2021-07-05 09:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crowcalc', '0005_alter_resource_components'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='components',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='crowcalc.resource'),
        ),
    ]
