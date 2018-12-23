import os
from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import Contact as ContactForm
from gym.models import WhoAreWe, Services
from django.core.mail import send_mail





class Home(FormView):
    template_name = 'gym/home.html'
    form_class = ContactForm
    success_url = '/'

    def get_context_data(self, **kwargs):
        kwargs['who'] = WhoAreWe.objects.latest('date')
        kwargs['services'] = Services.objects.all()
        return super(Home, self).get_context_data(**kwargs)

    def form_valid(self, form):
        form.send_email()
        return super().form_valid(form)

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
            else:
                return render(request, self.template_name)
            return render(request, self.template_name, {'form': form})
        