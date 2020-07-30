from django.db import models

# Create your models here.

class Question(models.Model):
	theory = models.CharField(max_length = 500)
	option1 = models.CharField(max_length = 50)
	option2 = models.CharField(max_length = 50)
	option3 = models.CharField(max_length = 50)
	option4 = models.CharField(max_length = 50)
	correctAns = models.CharField(max_length = 50)