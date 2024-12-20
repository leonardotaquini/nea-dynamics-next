import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";

export const Banner = () => {
  return (
    <>
      <section className="grid place-items-center">
        <div className="border border-l-0 border-r-0 w-fit p-10 m-5 bg-gray-100 rounded-xl">
          <p className="text-3xl text-center text-gray-600 font-light">
            Transformamos desafíos en oportunidades <br />
            mediante soluciones de automatización <br />
            inteligentes y personalizadas
          </p>
        </div>
      </section>
      <section className="grid place-items-center">
        <div className="border border-l-0 border-r-0 w-fit p-10 m-5 grid place-items-center space-y-3">
          <h3 className="text-2xl text-center font-medium">
            ¡Conocé nuestro trabajo!
          </h3>
          <p className=" text-center sm:text-xl text-gray-600 font-light">
            Si querés informarte en detalle sobre los productos y las soluciones
            que <br />
            ofrecemos en NEA Dynamics, hacé clic en el botón de abajo.
          </p>
          <Button className="p-6 uppercase sm:text-lg bg-green-700 text-white font-sans">
            <Link href="/services">Conocé más</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
