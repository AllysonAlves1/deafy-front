import Image from "next/image";

interface ImageProps {
    imagem: any;
    titulo : string;
    texto : string;
}

export default function LandingCard({imagem, titulo, texto} : ImageProps) {
    return(
        <div className=" flex px-2 gap-2">
            <div className="flex items-center justify-center bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 rounded-full max-w-[6rem] min-w-[6rem] h-24">
                <Image src={imagem} alt="Text Icon" className="w-14"/>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{titulo}</h2>
                <p className="">{texto}</p>
            </div>
        </div>
    );
}