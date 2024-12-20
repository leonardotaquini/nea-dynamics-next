import { dataService } from "./helpers/data-service";
import { ServiceCard } from "./ServiceCard";


export const metadata = {
 title: 'Servicios',
 description: 'En esta sección encontrarás información sobre los servicios que ofrecemos.',
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col space-y-2">
       <h2 className="text-center text-2xl sm:text-3xl p-8  text-blue-900">
          Nuestros Servicios
        </h2>
        <p className="text-center leading-loose sm:w-3/4 mx-auto px-4 text-slate-600 text-lg">
          Transformamos tus proyectos con soluciones innovadoras. <br />{" "}
          Ofrecemos tecnología avanzada para automatización de riego,
          climatización de piletas y sistemas de cultivo hidropónico. También
          brindamos servicios integrales en ingeniería, automatización y
          reparación de equipos complejos. ¡Llevamos tus ideas al siguiente
          nivel!
        </p>
        <section className="grid grid-cols-10 sm:gap-3 ">
          {dataService.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </section>
    </main>
  );
}