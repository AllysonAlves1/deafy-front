import {
    ArrowUpTrayIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/outline";
  import Link from "next/link";
  
  export default function NavBar() {
    return (
      <div className="fixed bottom-0 flex justify-around bg-white p-1 w-screen sm:flex md:hidden lg:hidden">
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
  