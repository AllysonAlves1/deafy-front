import Image from "next/image"
import Link from "next/link";
import Button from "../button/button";

interface ImageProps {
    image: any;
}

export default function LandingHeader({image} : ImageProps) {
    return (
        <div className="flex justify-between p-4 items-center bg-slate-800 h-16">
            
            <Image
                    src={image}
                    style={{ cursor:"pointer" }}
                    alt="Deafy Icon"
                    className=" w-16"
            />
            <div className="flex items-center gap-2">
                <Link href='/register'>
                    <p className="text-neutral-300 font-semibold hover:text-white focus:underline">Inscreva-se</p>
                </Link>
                <Link href='/login'>
                    <Button nome="Entrar"/>
                </Link>
            </div>
        </div>
    );
}