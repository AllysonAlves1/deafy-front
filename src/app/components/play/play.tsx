'use client'
import Image from "next/image";
import { AudioProps } from "../media/audio";

export default function Play({ title, author, audio, image }: AudioProps) {
  return (
    <div className="p-4 flex flex-col gap-4 mt-20">
      <div className="mx-auto">
        <Image src={image? image : "/notamusica.png"} alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">{title}</p>
        <p className="text-sm">{author.name}</p>
      </div>
      <div className="flex justify-around">
        <span className="sr-only">{audio}</span>
        <audio controls className="w-full">
          <source src={audio} type="audio/wav" />
        </audio>
      </div>
    </div>
  );
}
