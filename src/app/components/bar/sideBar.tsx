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
      <div className="min-h-screen hidden md:flex bg-slate-800 md:w-[240px] p-4 fixed top-14 z-0">
        <div className="flex flex-col gap-10 py-6">
          <Link href="/home">
            <div className="flex items-center gap-2">
              <HomeIcon className="w-10 text-white" />
              <span className="text-xl text-white font-semibold">Início</span>
            </div>
          </Link>

          <Link href="/search">
            <div className="flex items-center gap-2">
              <MagnifyingGlassIcon className="w-10 text-white" />
              <span className="text-xl text-white font-semibold">Buscar</span>
            </div>
          </Link>

          <Link href="/upload">
            <div className="flex items-center gap-2">
              <ArrowUpTrayIcon className="w-10 text-white" />
              <span className="text-xl text-white font-semibold">Uploads</span>
            </div>
          </Link>

          <Link href="/profile">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="w-10 text-white" />
              <span className="text-xl text-white font-semibold">Perfil</span>
            </div>
          </Link>
        </div>
      </div>
      <main className="w-full md:ml-[240px]">{children}</main>
    </div>
  );
}
