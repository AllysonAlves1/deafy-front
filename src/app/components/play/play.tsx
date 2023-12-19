'use client'
import Image from "next/image";
import { AudioProps } from "../media/audio";
import { formatAuthorName } from "@/app/utils/formatAuthor";

export default function Play({ title, author, audio, image }: AudioProps) {
  
  const definirTipoDeAudio = (audio: string | undefined) => {
    const extensao = audio?.split('.').pop()?.toLowerCase();
    
    switch (extensao) {
      case 'mp3':
        return 'audio/mp3';
      case 'ogg':
        return 'audio/ogg';
      case 'wav':
        return 'audio/wav';
      default:
        return 'audio/wav';
    }
  };

  const tipoDeAudio = definirTipoDeAudio(audio);

  return (
    <div className="p-4 flex flex-col gap-4 mt-20">
      <div className="mx-auto">
        <Image src={image? image : "/notamusica.png"} alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">{title}</p>
        <p className="text-sm">{formatAuthorName(author?.name ?? '')}</p>
      </div>
      <div className="flex justify-around">
        <span className="sr-only">{audio}</span>
        <audio controls className="w-full">
          <source src={audio} type={tipoDeAudio} />
        </audio>
      </div>
    </div>
  );
}
