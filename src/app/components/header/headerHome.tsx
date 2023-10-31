import Link from "next/link";
import Image from "next/image";

export default function HeaderHome() {
  return (
    <div className="flex justify-between mx-4 my-2">
      <Link href="#">
        <Image
          src="/deafyicon.png"
          style={{ cursor: "pointer" }}
          alt="Deafy Icon"
          width={50}
          height={50}
        />
      </Link>
      <Link href="">
        <Image src="/config.svg" alt="" width={50} height={50}/>
      </Link>
    </div>
  );
}
