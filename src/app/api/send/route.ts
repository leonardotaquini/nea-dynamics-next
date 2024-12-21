import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY as string);


export async function POST(request: NextRequest) {
  const email = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'onborading@resend.dev',
      to: [ process.env.EMAIL as string],
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