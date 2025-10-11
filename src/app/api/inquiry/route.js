import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters').max(50, 'Country must be less than 50 characters'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  file: z.string().optional(), // Base64 encoded file
  fileName: z.string().optional(),
  fileType: z.string().optional(),
  captchaToken: z.string().min(1, 'Please complete the reCAPTCHA verification'),
});


async function verifyCaptcha(token) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  
  const data = await response.json();
  return data.success;
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Verify reCAPTCHA first
    if (!await verifyCaptcha(body.captchaToken)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'reCAPTCHA verification failed. Please try again.' 
        },
        { status: 400 }
      );
    }
    

    const validatedData = inquirySchema.parse(body);
    
    // Extract email from message or company field if provided
    let userEmail = null;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (emailRegex.test(validatedData.message)) {
      const emailMatch = validatedData.message.match(emailRegex);
      if (emailMatch) userEmail = emailMatch[0];
    } else if (emailRegex.test(validatedData.company)) {
      const emailMatch = validatedData.company.match(emailRegex);
      if (emailMatch) userEmail = emailMatch[0];
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = [];
    if (validatedData.file && validatedData.fileName && validatedData.fileType) {
      attachments.push({
        filename: validatedData.fileName,
        content: validatedData.file.split(',')[1], 
        encoding: 'base64',
        contentType: validatedData.fileType,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'srd.developmet@gmail.com',
      to: process.env.EMAIL_TO || 'sales@srdmachines.com',
      replyTo: userEmail || process.env.EMAIL_USER,
      subject: `New Inquiry from ${validatedData.name} - ${validatedData.country}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #eb6379 0%, #d8566b 100%); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Inquiry Received</h2>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Contact Information</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${validatedData.name}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Country:</strong> ${validatedData.country}</p>
              ${validatedData.company ? `<p style="margin: 5px 0; color: #333;"><strong>Company:</strong> ${validatedData.company}</p>` : ''}
              ${validatedData.phone ? `<p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              ${userEmail ? `<p style="margin: 5px 0; color: #333;"><strong>Email:</strong> ${userEmail}</p>` : ''}
            </div>
            <div>
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Inquiry Message</h3>
              <p style="color: #333; background: #f8f9fb; padding: 15px; border-radius: 5px; border-left: 4px solid #eb6379; white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            ${validatedData.fileName ? `
            <div style="margin-top: 20px;">
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Attached File</h3>
              <p style="color: #333; background: #f8f9fb; padding: 15px; border-radius: 5px; border-left: 4px solid #eb6379;">
                📎 ${validatedData.fileName}
              </p>
            </div>
            ` : ''}
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This inquiry was sent from the SRD Machines floating inquiry form</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Inquiry form error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your input and try again.',
          errors: error.errors.map(err => ({
            field: err.path[0],
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error sending your inquiry. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
