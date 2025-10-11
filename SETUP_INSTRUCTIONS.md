**Important:** 
- `EMAIL_USER` = Your Gmail address (srd@gmail.com)
- `EMAIL_PASS` = Your Gmail App Password (not your regular password)
- `EMAIL_TO` = Where emails will be sent (also srd@gmail.com)
- **Users never input any email credentials - they just fill the form!**

## 1. Email Setup (Gmail Example)

### For Gmail (srd@gmail.com):
1. **Enable 2-Factor Authentication** on your Gmail account (srd@gmail.com)
2. **Generate an App Password**:
   - Go to [Google Account settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - **Copy this 16-character password** (like: abcd efgh ijkl mnop)
   - Use this password in `EMAIL_PASS` (remove spaces: abcdefghijklmnop)

**What this does:**
- When someone fills your contact form → Your server sends an email TO you
- You receive the inquiry at srd@gmail.com
- Users don't need any email setup - they just fill the form!

### For Other Email Services:
- **Outlook/Hotmail**: Use `EMAIL_SERVICE=hotmail`
- **Yahoo**: Use `EMAIL_SERVICE=yahoo`
- **Custom SMTP**: Configure with host, port, secure settings

## 2. ReCAPTCHA Setup

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Create a new site:
   - Choose reCAPTCHA v2 ("I'm not a robot" Checkbox)
   - Add your domain (localhost:3000 for development)
3. Copy the Site Key to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
4. Copy the Secret Key to `RECAPTCHA_SECRET_KEY`

## 3. ReCAPTCHA Setup

1. In src/api/contact/route.js go on line number 29 and 30 and change the email to original email.




## 4. Production Deployment

1. Update environment variables for production
2. Add your production domain to reCAPTCHA settings
3. Update `NEXTAUTH_URL` to your production URL
4. Test thoroughly before going live

## Troubleshooting

### Email not sending:
- Check email credentials
- Verify app password (not regular password)
- Check spam folder
- Verify EMAIL_TO address
