# Generated by Django 4.0.4 on 2022-07-10 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_merge_0002_auto_20220616_0937_0004_auto_20220616_0656'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usredetails',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='usredetails',
            name='hobbies',
        ),
        migrations.RemoveField(
            model_name='usredetails',
            name='profile',
        ),
        migrations.AlterField(
            model_name='usredetails',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
