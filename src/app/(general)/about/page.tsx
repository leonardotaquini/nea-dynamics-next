import { CardList } from "./CardList";


export const metadata = {
 title: 'Acerca de nosotros',
 description: 'En esta sección podrás encontrar información sobre nuestra empresa y los servicios que ofrecemos.',
};

export default function AboutPage() {
  return (
    <main className="h-full">
       <h2 className="text-2xl sm:text-3xl my-10 text-center text-blue-900">Acerca de nosotros</h2>
       <CardList />
    </main>
  );
}