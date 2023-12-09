import Image from "next/image";
import Link from "next/link";
import musicaImg from "../../../../public/notamusica.png";

interface AudioProps {
  title: string;
  author: string;
}

export default function Audio({ title, author }: AudioProps) {
  return (
    <Link href="/player">
      <div className="flex flex-col dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl bg-neutral-300 hover:bg-neutral-400 m-2">
        <div className="p-2">
          <Image src={musicaImg} alt="" className="rounded-xl"/>
        </div>
        <div className="px-4 pb-4">
          <p className="lg:text-xl">0:30</p>
          <p className="lg:text-lg whitespace-nowrap text-ellipsis max-w-[30ch] overflow-hidden">{title}</p>
          <p className="lg:text-lg whitespace-nowrap text-ellipsis max-w-[30ch] overflow-hidden">{author}</p>
        </div>
      </div>
    </Link>
  );
}
