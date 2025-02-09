"use client";

import { sendContactEmail } from "@/app/lib/actions/email.action";
import { ValidationSchemas, sanitize } from "@/app/lib/utils/validation.utils";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getTranslations } from "next-intl/server";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const ContactForm = async () => {
  const t = await getTranslations("contact.form");

  const contactSchema = z.object({
    name: ValidationSchemas.name,
    email: ValidationSchemas.email,
    phone: ValidationSchemas.phone,
    subject: z

      .string()
      .min(5, t("validation.subject.min"))
      .max(100, t("validation.subject.max"))
      .transform(sanitize.text),
    message: z
      .string()
      .min(20, t("validation.message.min"))
      .max(1000, t("validation.message.max"))
      .transform(sanitize.text),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

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
          message: t("success"),
        });
        resetForm();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || t("error.default"),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: t("error.unexpected"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
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
                  {t("name.label")}
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder={t("name.placeholder")}
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
                  {t("email.label")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder={t("email.placeholder")}
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
                  {t("phone.label")}
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder={t("phone.placeholder")}
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
                  {t("subject.label")}
                </label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                  placeholder={t("subject.placeholder")}
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
                {t("message.label")}
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-md border border-[var(--main-light)] px-4 py-2 focus:border-[var(--main-normal)] focus:outline-none focus:ring-1 focus:ring-[var(--main-normal)]"
                placeholder={t("message.placeholder")}
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
              className="w-full rounded-md bg-[var(--main-darker)] px-6 py-3 text-white transition-colors hover:bg-[var(--main-dark)] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? t("submit.sending") : t("submit.send")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
