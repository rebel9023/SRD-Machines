import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject must be less than 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    const validatedData = contactSchema.parse(body);
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'srd.developmet@gmail.com',
      to: process.env.EMAIL_TO || 'sales@srdmachines.com',
      replyTo: validatedData.email, 
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #eb6379 0%, #d8566b 100%); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Contact Details</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${validatedData.name}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> ${validatedData.email}</p>
              ${validatedData.phone ? `<p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              ${validatedData.company ? `<p style="margin: 5px 0; color: #333;"><strong>Company:</strong> ${validatedData.company}</p>` : ''}
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Subject</h3>
              <p style="color: #333; background: #f8f9fb; padding: 15px; border-radius: 5px; border-left: 4px solid #eb6379;">${validatedData.subject}</p>
            </div>
            <div>
              <h3 style="color: #eb6379; margin-bottom: 10px; font-size: 18px;">Message</h3>
              <p style="color: #333; background: #f8f9fb; padding: 15px; border-radius: 5px; border-left: 4px solid #eb6379; white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This message was sent from the SRD Machines contact form</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
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
        message: 'Sorry, there was an error sending your message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
