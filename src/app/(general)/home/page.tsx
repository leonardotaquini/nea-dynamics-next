"use client";

import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { redirect } from "next/navigation";
import { ChevronsRight } from "lucide-react";
import Logo from "@/assets/images/loguitov2.webp";
import "@/app/custom.css";
import { Banner } from "./Banner";
import Triangle from "@/assets/top-3200.svg";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["Automatizando el presente", "Transformando el futuro"],
    loop: true,
  });

  return (
    <>
      <main className="h-full homepage grid place-items-center relative ">
        <div className="flex justify-center items-center flex-col">
          <section className="grid place-items-center space-y-2 text-center">
            <Image
              src={Logo}
              alt="Nea Dynamics Logo"
              className="rounded-full w-52"
            />
            <h1 className="text-3xl sm:text-6xl text-center title text-white ">
              NEA DYNAMICS
            </h1>
            <span className="text-xl text-white">
              {text}
              <Cursor cursorColor="white" />
            </span>
          </section>
          <ChevronsRight
            className="m-auto animate-pulse cursor-pointer text-white"
            size={42}
            onClick={() => redirect("/services")}
          />
        </div>
      <Image src={Triangle} alt="triangle svg" className=""/>
      </main>
      <Banner />
    </>
  );
}
