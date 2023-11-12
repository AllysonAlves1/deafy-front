import {
  ArrowUpTrayIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="absolute left-0 top-0 hidden flex-col justify-between bg-white p-1 h-full sm:hidden md:flex lg:flex">
      <Link href="/home">
        <HomeIcon className="w-10 text-black hover:text-zinc-700"/>
      </Link>

      <Link href="/search">
        <MagnifyingGlassIcon className="w-10 text-black hover:text-zinc-700" />
      </Link>

      <Link href="/upload">
        <ArrowUpTrayIcon className="w-10 text-black hover:text-zinc-700" />
      </Link>

      <Link href="/profile">
        <UserCircleIcon className="w-10 text-black hover:text-zinc-700" />
      </Link>
    </div>
  );
}
