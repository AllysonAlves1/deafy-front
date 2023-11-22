import Image from "next/image";
import Link from "next/link";
import musicaImg from "../../../../public/notamusica.png";

export default function Audio() {
  return (
    <Link href="/player">
      <div className="flex flex-col dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl bg-neutral-300 hover:bg-neutral-400">
        <div className="p-2">
          <Image src={musicaImg} alt="" className="rounded-xl"/>
        </div>
        <div className="px-4 pb-4">
          <p className="lg:text-xl">0:26</p>
          <p className="lg:text-xl">Music</p>
          <p className="lg:text-xl">Author</p>
        </div>
      </div>
    </Link>
  );
}
