"use server";

import { EmailTemplate } from "@/app/contact/components/EmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  subject: z.string().min(5).max(100),
  message: z.string().min(20).max(1000),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export async function sendContactEmail(formData: EmailFormData) {
  try {
    // Validate the form data
    const validatedData = emailSchema.parse(formData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Email From Diamond Labs",
      to: process.env.CONTACT_EMAIL as string,
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      react: EmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      }) as React.ReactNode,
    });

    if (error) {
      console.error("Error sending email:", error);

      return { success: false, error: "Failed to send email" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error in sendContactEmail:", error);

    return { success: false, error: "Invalid form data or server error" };
  }
}
