import { Footer } from "./home/Footer";
import { Navbar } from "./home/Navbar";

export const metadata = {
  title: "Nea Dynamics",
  description: "Automatizando el presente, transformando el futuro.",
};

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr]">
        <Navbar />
        {children}
        <Footer />
    </div>
  );
}
