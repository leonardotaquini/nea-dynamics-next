import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./shadcn/ui/card";

export interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => (
  <Card>
    <CardHeader>
        <CardTitle>Hola mi nombre es {name}</CardTitle>
    </CardHeader>
    <CardContent>
        <p>{message}</p>
    </CardContent>
    <CardFooter>
        <p>Me pueden contactar a través de { email } o a mi número telefónico: {phone}</p>
    </CardFooter>
  </Card>
);
