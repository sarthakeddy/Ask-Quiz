from django.shortcuts import render
from .models import Question
# Create your views here.

def exam(request):
	obj = Question.objects.all()
	context = {
		"object":obj
	}
	return render(request, "questions/quiz_view.html", context)