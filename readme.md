# Send mail using Sendgrid

## Step1: Create Sendgrid account

- follow steps as per this article (https://medium.com/@methodius/how-to-send-email-using-sendgrid-5f46b82e9a63)
- Now you will get SENDGRID_API_KEY

## Step2: Create a sender

- Add email id from which email will be send (https://app.sendgrid.com/settings/sender_auth/senders)

## Step3: Create dynamic template if you want to send any

- https://mc.sendgrid.com/dynamic-templates
- You will get templateId when need to pass in payload to send mail
- It you want to add dynamic data in template then you can go to template -> Edit and add `{{ dynamic_param }}`

## Step4: Send mail object

- https://docs.sendgrid.com/api-reference/mail-send/mail-send
- Follow abouve article to send mail using sendgrid
