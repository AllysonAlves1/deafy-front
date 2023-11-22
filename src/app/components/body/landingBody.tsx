"use client";
import Link from "next/link";
import {useState} from "react"
import Image from "next/image"
import deafyicon from "../../../../public/deafyicon.png"
import menubars from "../../../../public/menubars.png"
import closebutton from "../../../../public/closebutton.webp"


export default function LandingBody(){
    const [isOpen, setIsOpen] = useState(false);

    const alteraEstado = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <div className="flex justify-between px-4 py-2 items-center bg-slate-800 h-16">
                <Image
                        src={deafyicon}
                        style={{ cursor: "pointer" }}
                        alt="Deafy Icon"
                        className=" w-20"
                    />
                <Image
                    src={menubars}
                    style={{ cursor: "pointer" }}
                    alt="Deafy Icon"
                    className={`${isOpen? "hidden" : "w-12"}`}
                    onClick={alteraEstado}
                />
                <Image
                    src={closebutton}
                    style={{ cursor: "pointer" }}
                    alt="Deafy Icon"
                    className={`${isOpen? "w-10" : "hidden" }`}
                    onClick={alteraEstado}
                />
            </div>
            <div className={`${isOpen? "w-screen" : "hidden"} h-screen bg-slate-800`}>

            </div>
            <div className="flex flex-col items-center justify-center pr-25 pl-25 pt-25 pb-25 gap-5 h-screen">
                <h1 className="text-6xl font-bold text-center">Deafy Project</h1>
                <p className="text-sm text-center">Bem-vindo ao nosso aplicativo de música voltada à inclusão!</p>
                <Link href='/login' className="bg-white text-black rounded-lg px-4 py-2">Página de Login</Link>
                <Link href='/register' className="bg-white text-black rounded-lg px-4 py-2">Página de Registro</Link>
                <footer className="text-sm text-center">Coders: Allyson Alves, Giovani Feitosa, Lucas Emanuel.</footer>
            </div>
        </div>
    )
}
