import {
  ArrowUpTrayIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideBar({ children }: any) {
  return (
    <div className="flex">
      <div className="flex min-h-screen hidden sm:hidden md:flex bg-slate-800">
        <div className="flex flex-col gap-10">
          <Link href="/home">
            <div className="flex items-center gap-2">
              <HomeIcon className="w-10 text-white" />
              <span className="text-xl text-white">Início</span>
            </div>
          </Link>

          <Link href="/search">
            <div className="flex items-center gap-2">
              <MagnifyingGlassIcon className="w-10 text-white" />
              <span className="text-xl text-white">Buscar</span>
            </div>
          </Link>

          <Link href="/upload">
            <div className="flex items-center gap-2">
              <ArrowUpTrayIcon className="w-10 text-white" />
              <span className="text-xl text-white">Uploads</span>
            </div>
          </Link>

          <Link href="/profile">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="w-10 text-white" />
              <span className="text-xl text-white">Perfil</span>
            </div>
          </Link>
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
