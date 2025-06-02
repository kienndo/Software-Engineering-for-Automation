from django.contrib import admin
from .models import Trip, Event, Participant, Expense, Task

admin.site.register(Trip)
admin.site.register(Event)
admin.site.register(Participant)
admin.site.register(Expense)
admin.site.register(Task)

