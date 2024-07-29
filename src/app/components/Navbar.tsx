"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function Navbar() {
    const pathname = usePathname();
    
    const LINKS = [ 
        { "text": "Inicio", "url": "/" },
        { "text": "Argencompras", "url": "/argencompras" },
        { "text": "Cuponizate", "url": "/cuponizate" },
        { "text": "Consultá tu cuenta", "url": "/consulta" },
        { "text": "Medios de pago", "url": "/medios-de-pago" },
        { "text": "Sucursales", "url": "/sucursales" },
        { "text": "Adherite", "url": "/adherite" },
        { "text": "Contactanos", "url": "/contactanos" },
     ] 

    const [ activeLink, setActiveLink ] = useState('')

    useEffect(() => {
        setActiveLink(pathname)
    }, [pathname])

    return (
        <div className="flex items-center gap-8">
            {LINKS && LINKS.length > 0 ? 
                LINKS.map((LINK, index) => (
                    <a key={index} href={LINK.url} className={`text-grey-primary text-lg hover:text-lightblue-primary ${activeLink === LINK.url ? 'font-bold !text-lightblue-primary underline' : ''}`}>
                        {LINK.text}
                    </a>
                )) 
                : null
            }     
        </div>
    )
}