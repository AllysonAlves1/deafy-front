import Link from "next/link";
import Image from "next/image";
import deafyicon from "../../../../public/deafyicon.png";
import ThemeSwitcher from "@/app/Providers/ThemeSwitch";

export default function HeaderHome() {

  return (
    <div className="flex justify-between px-4 py-2 items-center bg-slate-800 w-full">
      <Link href="/home">
        <Image src={deafyicon} alt="Deafy Icon" className="w-16" />
      </Link>
      <ThemeSwitcher />
    </div>
  );
}
