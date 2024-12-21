'use client'
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
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
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

    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
         const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
        if (!res.ok) {
          setIsLoading(false);
          toast.error('Error al enviar el mensaje', {
            className:'bg-red-600 text-white'
          })
          return
        }
        toast.success('Mensaje enviado con éxito',{
          className:'bg-green-700 text-white'
        })
        setIsLoading(false);
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
        <Button className="p-4 uppercase bg-green-700 text-white w-full" type="submit">
          {isLoading ? <Loader2 className="animate-spin"/> : "Enviar"}
        </Button>
      </form>
    </Form>
  )
}
