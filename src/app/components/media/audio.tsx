import Image from "next/image";
import Link from "next/link";
import musicaImg from "../../../../public/notamusica.png";

export interface AudioProps {
  title: string;
  author: string;
  image: string;
  audio?: string;
  id: string;
}

export default function Audio({ title, author, image, id }: AudioProps) {
  return (
    <Link href={`/player/${id}`}>
      <div className="flex flex-col dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl bg-neutral-300 hover:bg-neutral-400 m-2">
        <div className="relative object-cover h-40 xl:h-60 m-2">
          <Image
            src={image ? image : musicaImg}
            alt=""
            className="rounded-xl"
            layout="fill"
          />
        </div>
        <div className="px-4 pb-4">
          <p className="lg:text-xl">0:30</p>
          <p className="lg:text-lg whitespace-nowrap text-ellipsis max-w-[30ch] overflow-hidden">
            {title}
          </p>
          <p className="lg:text-lg whitespace-nowrap text-ellipsis max-w-[30ch] overflow-hidden">
            {author}
          </p>
        </div>
      </div>
    </Link>
  );
}
