import * as React from "react";

export interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => (
  <div>
    <div>
        <h1 className="text-blue-500 text-center">Hola mi nombre es {name}</h1>
    </div>
    <div className="leading-loose">
        <p style={{color:'red'}}>{message}</p>
    </div>
    <footer className="text-blue text-center">
        <p>Me pueden contactar a través de { email } o a mi número telefónico: {phone}</p>
    </footer>
  </div>
);
