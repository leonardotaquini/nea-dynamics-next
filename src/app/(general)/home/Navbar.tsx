'use client'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/shadcn/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Logo from '@/assets/images/sinfondo.webp'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isHome = usePathname() === '/home';
    
    const items = [
        { title: "Inicio", url: "/home", style: "text-2xl hover:text-cyan-700", onClick: () => setIsOpen(false) },
        { title: "Servicios", url: "/services", style: "text-2xl hover:text-cyan-700", onClick: () => setIsOpen(false)  },
        { title: "Nosotros", url: "/about" , style: "text-2xl hover:text-cyan-700", onClick: () => setIsOpen(false) },
        { title: "Contacto", url: "/contact" , style: "text-2xl hover:text-cyan-700", onClick: () => setIsOpen(false) },
    ]
  return (
    <nav className="p-4 flex" style={{backgroundColor:'#243579'}}>
    <div
      onClick={() => redirect("/home")}
      className={`flex items-center cursor-pointer ${isHome ? 'hidden' : 'block'}`}
    >
      <Image src={Logo} alt="Logo" className="w-20" />
      <h2 className='title text-xl sm:text-2xl text-white'>NEA DYNAMICS</h2>
    </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="ml-auto">
        <MenuIcon className="text-slate-100 min-h-8 min-w-8 m-3" />
      </SheetTrigger>
      <SheetContent className="bg-slate-900 border-none text-white flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="title text-2xl text-center text-white">
            NEA DYNAMICS
          </SheetTitle>
          <SheetDescription className="text-slate-300 text-center">
            Automatizando el presente, transformando el futuro
          </SheetDescription>
        </SheetHeader>
        <ul className="h-3/4 flex flex-col justify-around items-center">
            {
                items.map((item, index) => (
                    <li key={index} className="text-center">
                        <Link href={item.url} className={item.style} onClick={item.onClick}>
                            {item.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <p className="text-center text-sm">
          © NEA Dynamics
        </p>
      </SheetContent>
    </Sheet>
  </nav>
  )
}
