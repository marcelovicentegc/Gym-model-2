import os
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic.edit import FormView, CreateView
from .forms import Contact as ContactForm
from gym.models import WhoAreWe, Service
from django.core.mail import send_mail
from django.contrib import messages





class Home(FormView, CreateView):
    template_name = 'gym/home.html'
    form_class = ContactForm
    success_url = '/'
    success_message = "Your message was succesfully delivered to our team. We'll get back in touch soon!"

    def get_context_data(self, **kwargs):
        kwargs['who'] = WhoAreWe.objects.latest('date')
        kwargs['services'] = Service.objects.all()
        return super(Home, self).get_context_data(**kwargs)

    def form_valid(self, form):
        response = super().form_valid(form)
        form.send_email()
        success_message = self.get_success_message(form.cleaned_data)
        if success_message:
            messages.success(self.request, success_message)
        return response

    def get_success_message(self, cleaned_data):
        return self.success_message % cleaned_data

    def post(self, request):
        if request.method == 'POST':
            form = self.form_class(request.POST or None)
            if form.is_valid():
                form.save(commit=False)
                sender_email = form.cleaned_data['sender_email']
                subject = form.cleaned_data['subject']
                body = form.cleaned_data['body']
                recipients = [os.environ.get('DJANGO_EMAIL_RECIPIENT')]
                send_mail(subject=subject, message=body, from_email=sender_email, recipient_list=recipients, fail_silently=False)
                form.save(commit=True)
                return HttpResponseRedirect(self.success_url)
            else:
                return render(request, self.template_name)        