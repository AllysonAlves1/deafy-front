"use client";
import Link from "next/link";
import {useState} from "react"
import Image from "next/image"
import deafyicon from "../../../../public/deafyicon.png"
import menubars from "../../../../public/menubars.png"
import closebutton from "../../../../public/closebutton.jpg"
import facebook from "../../../../public/SocialImgs/icons8-facebook.svg"
import uploadicon from "../../../../public/upload.png"


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
                    alt="Menu bars"
                    className={`${isOpen? "hidden" : "w-10"} mr-2`}
                    onClick={alteraEstado}
                />
                <Image
                    src={closebutton}
                    style={{ cursor: "pointer" }}
                    alt="Close button"
                    className={`${isOpen? "w-8" : "hidden"} mr-3`}
                    onClick={alteraEstado}
                />
            </div>
            <div className={`${isOpen? "w-screen overflow-hidden" : "hidden"} h-screen bg-slate-800`}>
                <div className="flex flex-col gap-8 text-neutral-200 text-3xl font-bold p-8">
                    <Link href='/login' className="hover:underline">Login</Link>
                    <Link href='/register' className="hover:underline">Registro</Link>
                    <Link href='#' className="hover:underline">Sobre Nós</Link>
                </div>
            </div>
            <div className={`${isOpen? "hidden" : "w-screen"} flex flex-col h-screen bg-slate-800`}>
                <div className="bg-landingImage bg-center bg-cover bg-blend-darken bg-no-repeat h-96 w-full">
                    <div className="flex flex-col justify-center items-center gap-2 w-full h-full backdrop-blur-sm">
                        <h1 className="text-white text-6xl font-bold text-center drop-shadow-md">Deafy </h1>
                        <p className="text-white text-base text-center drop-shadow-md">Bem-vindo ao nosso aplicativo de música voltado à inclusão!</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white h-screen">
                    <h2 className="flex justify-center">Por que usar o Deafy?</h2>
                    <div className="flex items-start">
                        <Image
                            src={uploadicon}
                            alt="Upload Icon"
                            className="w-10"
                        />
                    </div>
                </div>
                <footer className="flex flex-col justify-center gap-4 items-center h-auto text-center">
                    <div className="flex justify-between gap-16">
                        <Image
                            src={deafyicon}
                            style={{ cursor: "pointer" }}
                            alt="Deafy Icon"
                            className="w-20 mt-4"
                        />
                        <Image
                            src={facebook}
                            style={{cursor : "pointer"}}
                            alt = "Facebook Icon"
                            className="w-14"
                        />
                    </div>
                    <ul className="flex flex-col gap-2 text-neutral-200 text-lg">
                        <li>Sobre o Projeto</li>
                        <li>Precisa de suporte?</li>
                    </ul>
                    <p className="text-sm text-neutral-200 mb-3">Coders: Allyson Alves, Giovani Feitosa, Lucas Emanuel.</p>
                </footer>
            </div>
        </div>
    )
}
