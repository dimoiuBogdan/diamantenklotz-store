"use client";

import { sendContactEmail } from "@/app/lib/actions/email.action";
import { ValidationSchemas, sanitize } from "@/app/lib/utils/validation.utils";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const contactSchema = z.object({
  name: ValidationSchemas.name,
  email: ValidationSchemas.email,
  phone: ValidationSchemas.phone,
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters")
    .transform(sanitize.text),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters")
    .transform(sanitize.text),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const result = await sendContactEmail(values);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. We'll get back to you soon!",
        });
        resetForm();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm">
      {submitStatus.type && (
        <div
          className={`mb-6 rounded-md p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(contactSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--main-darker)]"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder="Your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--main-darker)]"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder="your.email@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[var(--main-darker)]"
                >
                  Phone
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder="+49 123 456 7890"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[var(--main-darker)]"
                >
                  Subject
                </label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder="How can we help?"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--main-darker)]"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                placeholder="Tell us more about your inquiry..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[var(--main-darker)] px-6 py-3 text-white transition-colors hover:bg-[var(--main-dark)] disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
