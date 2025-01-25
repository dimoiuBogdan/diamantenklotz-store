import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  subject,
  message,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);
