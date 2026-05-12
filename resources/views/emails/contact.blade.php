<x-mail::message>
# New Contact Form
- **Name:** {{$formResponse->name}}
- **Email:** {{$formResponse->email}}
- **Subject:** {{$formResponse->subject}}
- **Message:** {{$formResponse->message}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
