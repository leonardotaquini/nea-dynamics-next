"use client";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleClick = (to: string) => {
    const urls: { [key: string]: string } = {
      whatsapp: "https://wa.me/3705183469",
      instagram: "https://www.instagram.com/nea.dynamics/",
      facebook: "https://www.facebook.com/profile.php?id=61555704091788",
      twitter: "https://twitter.com/neadynamics",
    };
    window.open(urls[to], "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="bg-blue-950 text-white py-8 mt-2 font-sans">
      <div className="flex justify-center space-x-6 mb-6">
        <FaWhatsapp
          className="text-3xl text-green-500 cursor-pointer hover:text-green-400 transition duration-200"
          onClick={() => handleClick("whatsapp")}
        />
        <FaInstagram
          className="text-3xl text-pink-600 cursor-pointer hover:text-pink-500 transition duration-200"
          onClick={() => handleClick("instagram")}
        />
        <FaFacebook
          className="text-3xl text-blue-600 cursor-pointer hover:text-blue-500 transition duration-200"
          onClick={() => handleClick("facebook")}
        />
        <FaTwitter
          className="text-3xl text-sky-500 cursor-pointer hover:text-sky-400 transition duration-200"
          onClick={() => handleClick("twitter")}
        />
      </div>

      <div className="text-center space-y-2 mb-6">
        <p className="text-gray-200">Formosa, Argentina</p>
        <p className="text-gray-200">Cel: +54 9 370-5183469</p>
        <p className="text-gray-200">
          Email:{" "}
          <a
            href="mailto:nea.dynamics@gmail.com"
            className="underline hover:text-gray-300"
          >
            nea.dynamics@gmail.com
          </a>
        </p>
      </div>

      <div className="border-t border-gray-500 pt-8 px-2 ">
        <p className="text-center text-sm ">
          © {currentYear} <span className="font-semibold">NEA Dynamics</span>.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
