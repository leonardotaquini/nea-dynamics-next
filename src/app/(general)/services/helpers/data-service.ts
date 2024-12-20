import Regador from "@/assets/images/riegoautomatico.jpg";
import Warmpool from "@/assets/images/warmpool.jpg";
import Hydrofuzzy from "@/assets/images/hydrofuzzy.jpg";
import Ingenieria from "@/assets/images/ingenieria.jpg";
import Reparaciones from "@/assets/images/reparaciones.jpg";
import { type StaticImageData } from "next/image";

export interface DataService {
  imageUrl: StaticImageData;
  title: string;
  subtitle: string;
  features: Feature[];
  descriptionComplete: string;
  motivation: string;
  description: string;
  url: string;
}

interface Feature{
  title: string;
  description: string;
}

export const dataService: DataService[] = [
  {
    imageUrl: Regador,
    title: "RIEGO",
    description: "INSTALACIÓN DE SISTEMAS DE RIEGO AUTOMÁTICO",
    url: "/services/riego",
    descriptionComplete: 'Diseñamos e instalamos sistemas de control automático para brindarte el dominio total sobre el riego de tu jardín y tus espacios verdes. Utilizamos controladores Hunter para garantizar un riego eficiente, optimizando el consumo de agua y asegurando el crecimiento saludable de tus plantas, ya sea por aspersión o goteo. ',
    subtitle: '¡Automatizá el riego de tu jardín con precisión y comodidad!',
    features: [{
      title:'Control Remoto por Wi-Fi',
      description:'Gestioná el riego desde cualquier lugar mediante tu dispositivo móvil.'
    },
    {
      title:'Programación Personalizada',
      description: 'Configurá horarios y duración del riego adaptados a las necesidades de tus plantas.'
    },
    {
      title: 'Detección automática de lluvia',
      description: 'Ahorra agua con sensores que interrumpen el riego en días lluviosos'
    },
    {
      title: 'Zonas independientes',
      description: 'Controlá múltiples sectores de riego de forma independiente para una distribución eficiente.'
    },
    {
      title: 'Modo Manual',
      description: 'Activa o detén el riego manualmente en cualquier momento desde el dispositivo.'
    }
  ],
    motivation: '¡Optimizá el cuidado de tus espacios verdes con riego automático! Ahorro de agua, comodidad y control total en un solo sistema. ¡Dale vida a tu jardín sin esfuerzo!'

  },
  {
    imageUrl: Warmpool,
    title: "WARMPOOL",
    description: "CONTROLADOR AUTOMÁTICO PARA CLIMATIZACIÓN DE PICINAS",
    url: "/services/warmpool",
    descriptionComplete: 'WARMPOOL es un innovador dispositivo que te brinda el control total sobre tu sistema de climatización de piletas, garantizando un ambiente ideal con solo tocar un botón. Con nuestro controlador, no solo podrás regular la temperatura del agua con precisión, sino que también podrás aprovechar eficientemente la energía solar.',
    subtitle:'¡Controlá la temperatura de tu pileta con precisión y comodidad!',
    features:[
      {
        title:'Control Remoto por Wi-Fi',
        description: 'Enciende y apaga el dispositivo desde cualquier lugar.'
      },
      {
        title:'Medición de Temperatura',
        description: 'Monitorea la temperatura del agua en la pileta y en los colectores solares para un ajuste preciso. '
      },
      {
        title:'Regulación Personalizada',
        description: 'Establece la temperatura deseada de tu pileta para una experiencia perfecta.'
      },
      {
        title:'Modo de Bombeo Inteligente',
        description: 'Optimiza el rendimiento de la bomba con datos de temperatura y variables programadas. '
      },
      {
        title:'Encendido Manual',
        description: 'Activa la bomba de la pileta y la de los colectores de forma manual desde el dispositivo.'
      }
    ],
    motivation:'¡Optimiza tu experiencia de pileta con WARMPOOL! Control total, comodidad y eficiencia en un solo dispositivo. ¡Haz que cada momento en tu pileta sea perfecto!'
  },
  {
    imageUrl: Hydrofuzzy,
    title: "HYDROFUZZY",
    description: "CONTROLADOR CON LÓGICA DIFUSA PARA SISTEMAS HIDROPÓNICOS",
    url: "/services/hydrofuzzy",
    descriptionComplete: 'Nuestro controlador HYDROFUZZY es la solución ideal para tus cultivos hidropónicos. Con un modelo de control difuso, mantiene la Conductividad Eléctrica (CE) de la solución nutritiva en niveles óptimos para un crecimiento saludable de tus plantas. ',
    subtitle:'¡Optimizá tus cultivos con nuestro controlador de sistemas hidropónicos!',
    features:[
      {
        title: 'Medición precisa de variables',
        description: 'Medición precisa de la Conductividad Eléctrica (CE), Temperatura de la Solución (TE), Temperatura Ambiente (TA) y Humedad Ambiente (HA).'
      },
      {
        title: 'Almacenamiento y recuperación',
        description: 'Almacenamiento y recuperación de variables de funcionamiento para garantizar el control y análisis eficiente del sistema.'
      },
      {
        title: 'Control inteligente de válvulas',
        description: 'Control inteligente del tiempo de apertura de la válvula de llenado mediante lógica difusa para optimizar el proceso.'
      },
      {
        title: 'Compatibilidad con solución madre',
        description: 'Funciona independientemente de la Conductividad Eléctrica (CE) de la solución madre, adaptándose a diversas condiciones.'
      },
      {
        title: 'Alimentación versátil',
        description: 'Alimentación para válvulas y motores, compatible con sistemas de 12V DC y 220V AC.'
      },
      {
        title: 'Calibración sencilla del sensor',
        description: 'Calibración sencilla del sensor de conductividad eléctrica utilizando solución de calibración de 1413 μS/cm en diferentes temperaturas.'
      },
      {
        title: 'Modos de bombeo configurables',
        description: 'Modo de bombeo por tramos de alimentación continuo o intermitente, con tiempos fijados por el usuario para mayor flexibilidad.'
      }
    ],
    motivation:'Asegurá el éxito de tus cultivos hidropónicos con nuestro controlador. ¡Haz que tus plantas crezcan más sanas y fuertes que nunca!'
  },

  {
    imageUrl: Ingenieria,
    title: "INGENIERIA",
    description: "DESARROLLO INTEGRAL DE PROYECTOS DE INGENIERÍA",
    url: "/services/ingenieria",
    descriptionComplete: 'En NEA Dynamics, nos dedicamos a convertir tus ideas en realidad, ofreciéndote un servicio completo de desarrollo de proyectos de ingeniería y automatización. Ya sea que necesites diseñar nuevas instalaciones, optimizar procesos existentes o implementar sistemas de automatización avanzados, estamos aquí para ayudarte en cada paso del camino.',
    subtitle:'¡Haz realidad tus proyectos con nuestro servicio integral de ingeniería y automatización! ',
    features:[],
    motivation:'Confía en nosotros para llevar tus proyectos de ingeniería y automatización al siguiente nivel. ¡Contactanos hoy mismo y descubrí cómo podemos hacer realidad tus ideas!'
  },
  {
    imageUrl: Reparaciones,
    title: "REPARACIONES",
    description: "SERVICIO DE REPARACIÓN DE EQUIPOS COMPLEJOS",
    url: "/services/reparaciones",
    descriptionComplete: 'En NEA Dynamics, nos especializamos en la reparación de equipos que requieren un cuidado y conocimiento excepcionales. Nuestro equipo de expertos está listo para abordar los desafíos más complejos y devolverle la funcionalidad a tus dispositivos. ',
    subtitle:'¡Confía en nosotros para la reparación de tus equipos complejos y altamente específicos! ',
    features:[],
    motivation:'Estamos preparados para devolverle la vida a tus equipos complejos. ¡Contactanos hoy mismo y deja que nuestros expertos se encarguen de todo!'
  }

];
