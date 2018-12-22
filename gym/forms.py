from django import forms
from gym.models import Contact as ContactModel





class Contact(forms.ModelForm):
    sender_name = forms.CharField(max_length=100, label='Name', label_suffix=None, required=True)
    sender_email = forms.EmailField(label='Email', label_suffix=None, required=True)
    subject = forms.CharField(max_length=100, label_suffix=None, required=True)
    body = forms.CharField(max_length=1000, widget=forms.Textarea, label='Message', label_suffix=None, required=True)

    class Meta:
        model = ContactModel
        fields = ['sender_name', 'sender_email', 'subject', 'body']


