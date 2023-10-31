import Link from "next/link";
import Image from "next/image";
import deafyicon from "../../../../public/deafyicon.png"
import { ArrowLeftOnRectangleIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";

export default function HeaderUser() {
  return (
    <div className="flex justify-between px-4 py-2 items-center bg-slate-800">
      <Link href="#">
        <Image
          src={deafyicon}
          style={{ cursor: "pointer" }}
          alt="Deafy Icon"
          className="w-16"
        />
      </Link>
      <Link href="">
        <ArrowLeftOnRectangleIcon className="text-white w-11"/>
      </Link>
    </div>
  );
}
