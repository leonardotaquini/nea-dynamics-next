'use client';
import { ContactForm } from "./ContactForm";
import { LottieAnimation } from "./LottieAnimation";


export const metadata = {
 title: 'Contacto',
 description: 'En esta página podés completar un formulario para que nos pongamos en contacto con vos.',
};

export default function ContactPage() {

    
  return (
    <main className="h-full grid grid-cols-12 ">
      <div className="col-span-12 sm:col-span-6  flex justify-center items-center shadow">
        <section className="p-10 grid place-items-center space-y-5">
          <h3 className="text-2xl sm:text-3xl text-blue-900">¡Contactanos!</h3>
          <p className="text-gray-500 text-center">
            Si querés que nos pongamos en contacto con vos para obtener mas
            información, completá el siguiente formulario.
          </p>
          <ContactForm />
        </section>
      </div>
      <div className="hidden sm:flex sm:justify-center sm:items-center sm:col-span-6 ">
        <LottieAnimation />
      </div>
    </main>
  );
}
