import { EmailTemplate, EmailTemplateProps } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_VbFpHY5X_P486r8yStBV4SzsKmcoL9Dn8');


export async function POST( email: EmailTemplateProps ) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'leonardogtaquini@gmail.com',
      to: ['leonardogtaquini@gmail.com'],
      subject: "Solicitud de contacto",
      react: EmailTemplate(email) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}