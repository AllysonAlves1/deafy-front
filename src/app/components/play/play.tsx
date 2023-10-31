import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlayPauseIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const Play = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="mx-auto">
        <Image src="/notamusica.png" alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">Nome da Musica/PodCast</p>
        <p className="text-sm">Autor</p>
      </div>
      <div className="flex justify-around">
        <ChevronDoubleLeftIcon className="w-8"/>
        <PlayPauseIcon className="w-8"/>
        <ChevronDoubleRightIcon className="w-8"/>
      </div>
    </div>
  );
};

export default Play;
