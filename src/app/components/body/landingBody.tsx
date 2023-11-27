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
            <div className={`${isOpen? "w-screen overflow-hidden" : "hidden"} flex flex-col justify-center items-center gap-2 h-screen bg-slate-800`}>
                <Link href='/login' className=" text-black text-xl">Login</Link>
                <Link href='/register' className="bg-white text-black rounded-lg px-4 py-2">Página de Registro</Link>
            </div>
            <div className={`${isOpen? "hidden" : "w-screen"} flex flex-col h-screen bg-slate-800`}>
                <div className="bg-landingImage bg-center bg-cover bg-blend-darken bg-no-repeat h-96 w-full">
                    <div className="flex flex-col justify-center items-center gap-2 w-full h-full backdrop-blur-sm">
                        <h1 className="text-white text-6xl font-bold text-center drop-shadow-md">Deafy </h1>
                        <p className="text-white text-base text-center drop-shadow-md">Bem-vindo ao nosso aplicativo de música voltado à inclusão!</p>
                    </div>
                </div>
                <div className="bg-white h-screen">

                </div>
                <footer className="text-sm text-center">Coders: Allyson Alves, Giovani Feitosa, Lucas Emanuel.</footer>
            </div>
        </div>
    )
}
