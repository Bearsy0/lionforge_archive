# Generated by Django 3.2.5 on 2021-07-05 09:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crowcalc', '0003_auto_20210705_0900'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='components',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='crowcalc.resource'),
        ),
    ]
