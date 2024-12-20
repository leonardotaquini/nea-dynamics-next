import { CardItem } from "./CardItem";
import Foto3 from "@/assets/images/foto03_11zon.webp";
import Foto7 from "@/assets/images/foto07_11zon.webp";
import Pbc from "@/assets/images/pcb_11zon.webp";
import { type StaticImageData } from "next/image";
interface AboutInfo {
  title: string;
  content: string;
  image: StaticImageData;
  end?: boolean;
}

export const CardList = () => {
  const aboutInfo: AboutInfo[] = [
    {
      title: "LA EMPRESA",
      content:
        "Nuestra misión es proporcionar innovación tecnológica para mejorar la eficiencia, la productividad y la calidad de vida. Guiados por la excelencia y la creatividad, buscamos ser líderes en el desarrollo de soluciones automatizadas que superen las expectativas de nuestros clientes, contribuyendo al progreso y la sostenibilidad.",
      image: Foto3,
    },
    {
      title: "SOLUCIONES",
      content:
        "Nos destacamos por proporcionar soluciones personalizadas en automatización, orientadas siempre a satisfacer las necesidades específicas de nuestros clientes. Nos dedicamos a ofrecer respuestas a medida para los desafíos particulares que enfrentan, asegurándonos de comprender a fondo sus objetivos y problemáticas.",
      image: Foto7,
      end: true,
    },
    {
      title: "NUESTRO EQUIPO",
      content:
        "Nos enorgullece ser un equipo de profesionales altamente calificados, provenientes de diversas ramas de la ingeniería y unidos por nuestra apasionada dedicación a la tecnología. Nos consideramos innovadores comprometidos con el desarrollo de soluciones avanzadas que transforman ideas en realidades tangibles.",
      image: Pbc,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 place-items-center px-2">
        {aboutInfo.map((info, index) => (
            <CardItem
              key={index}
              title={info.title}
              content={info.content}
              image={info.image}
              end={info.end}
            />
        ))}
      </div>
    </>
  );
};
