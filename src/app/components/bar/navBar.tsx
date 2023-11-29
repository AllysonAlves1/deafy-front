import {
    ArrowUpTrayIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/outline";
  import Link from "next/link";
  
  export default function NavBar({ children }: any) {
    return (
      <div className="flex bottom-0 justify-around bg-slate-800 p-2 w-11/12 sm:flex md:hidden lg:hidden">
        <Link href="/home">
          <HomeIcon className="w-10 text-white hover:text-zinc-700"/>
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
  