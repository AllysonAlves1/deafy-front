import Image from "next/image";
import deafyIcon from "../../../../public/deafyicon.png"

export default function LandingFooter() {
    return (
        <div className="flex flex-col gap-4 bg-slate-900 pt-6 pb-10 px-2 md:flex-row">
            <Image
                    src={deafyIcon}
                    style={{ cursor:"pointer" }}
                    alt="Deafy Icon"
                    className="w-20 md:w-32 max-h-32"
            />
            <div className="flex flex-col gap-8 md:flex-row md:justify-center md:w-[60%]">
                <div className="flex flex-col gap-2 px-2 md:text-2xl">
                    <p className="text-neutral-400">Responsáveis</p>
                    <p className="text-white">Allyson Alves</p>
                    <p className="text-white">Giovani Feitosa</p>
                    <p className="text-white">Lucas Emanuel</p>
                </div>
                <div className="flex flex-col gap-2 px-2 md:text-2xl">
                    <p className="text-neutral-400">Comunidade</p>
                    <p className="text-white">Lorem</p>
                    <p className="text-white">Ipsum</p>
                    <p className="text-white">Dolor</p>
                </div>
                <div className="flex flex-col gap-2 px-2 md:text-2xl">
                    <p className="text-neutral-400">Links Úteis</p>
                    <p className="text-white">Lorem</p>
                    <p className="text-white">Ipsum</p>
                    <p className="text-white">Dolor</p>
                </div>
            </div>    
        </div>
    );
}
