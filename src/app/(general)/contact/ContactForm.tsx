'use client'
import { POST } from "@/app/api/send/route"
import { Button } from "@/components/shadcn/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form"
import { Input } from "@/components/shadcn/ui/input"
import { Textarea } from "@/components/shadcn/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
    phone: z.string().min(2, {
        message: "El teléfono debe tener al menos 2 caracteres",
    }),
    email: z.string().min(2, {
        message: "El email debe tener al menos 2 caracteres",
    }).email({
        message: "El email debe ser válido",
    }),
    message: z.string().min(2, {
        message: "El mensaje debe tener al menos 2 caracteres",
    }),
})

export const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          phone: "",
          email: "",
          message: "",
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await POST(values);
        console.log(res);
        form.reset()
      }
    


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" font-sans space-y-8 w-full xl:w-1/2 shadow-xl rounded p-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escriba su mensaje aquí" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="p-4 uppercase bg-green-700 text-white w-full" type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
