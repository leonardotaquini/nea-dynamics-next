'use client'
import { Card } from "@/components/shadcn/ui/card";
import { DataService } from "./helpers/data-service";
import { useAppStore } from "@/store/app.store";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


  
  export const ServiceCard = (service: DataService) => {

    const setServiceSelected = useAppStore((state) => state.setServiceSelected);
    const { imageUrl, url } = service;


    const handleServiceClick = () => {
      setServiceSelected(service);
      redirect(url);
    }

    return (
      <Card 
        className="cursor-pointer relative col-span-12 sm:w-3/4 sm:mx-auto lg:w-80 lg:col-span-2 aspect-square overflow-hidden rounded-xl shadow-lg m-2 transform transition-transform duration-300 hover:scale-105"
        onClick={ handleServiceClick }
        >
        <Image
          src={imageUrl}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-blue-950  z-20 p-6">
          <ArrowRight className="mt-4 animate-pulse" size={32} />
        </div>
      </Card>
    );
  }
  