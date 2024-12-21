"use client";
import { Card } from "@/components/shadcn/ui/card";
import { useAppStore } from "@/store/app.store";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Service() {
  const serviceSelected = useAppStore((state) => state.serviceSelected);
  useEffect(() => {
    if (!serviceSelected) {
      redirect("/services");
    }
  }, [serviceSelected]);

  return (
    <div className="flex flex-col min-h-screen">
      <ArrowLeft
        className="w-8 h-8 m-4 cursor-pointer"
        onClick={() => redirect("/services")}
      />
      <main className="flex-grow grid grid-cols-12 shadow">
        <section className="col-span-12 h-full sm:col-span-6 order-2 hidden sm:flex flex-col items-center justify-center">
          <Image
            src={serviceSelected?.imageUrl || "/placeholder-image.jpg"} // Proveer una imagen por defecto
            alt="service"
            className="sm:w-9/12 sm:h-5/6 object-cover rounded-lg"
          />
        </section>
        <Card className="col-span-12 h-full sm:col-span-6 flex flex-col px-3 items-center justify-center space-y-6">
          <h2 className="text-2xl mt-4 font-medium text-blue-900">
            {serviceSelected?.title}
          </h2>
          <h3 className="text-center">{serviceSelected?.subtitle}</h3>
          <span className="text-justify px-4 leading-loose">
            {serviceSelected?.descriptionComplete}
          </span>
          {serviceSelected?.features && serviceSelected.features.length > 0 && (
            <>
              <ul className="leading-loose">
                {serviceSelected.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex flex-col justify-center items-start"
                  >
                    <h4 className="font-bold text-blue-900 flex space-x-2 justify-center items-center">
                      <CheckCircle size={16} className="text-green-700" />
                      <p>{feature.title}:</p>
                    </h4>
                    <p className="">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          <span className="text-justify px-4 pb-4 leading-loose">
            {serviceSelected?.motivation}
          </span>
        </Card>
      </main>
    </div>
  );
}
