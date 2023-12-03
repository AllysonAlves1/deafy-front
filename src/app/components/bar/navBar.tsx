import {
  ArrowUpTrayIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-around bg-slate-800 p-3 md:hidden min-w-full fixed bottom-0">
      <Link href="/home">
        <HomeIcon className="w-10 text-white hover:text-zinc-700" />
      </Link>

      <Link href="/search">
        <MagnifyingGlassIcon className="w-10 text-white hover:text-zinc-700" />
      </Link>

      <Link href="/upload">
        <ArrowUpTrayIcon className="w-10 text-white hover:text-zinc-700" />
      </Link>

      <Link href="/profile">
        <UserCircleIcon className="w-10 text-white hover:text-zinc-700" />
      </Link>
    </div>
  );
}
