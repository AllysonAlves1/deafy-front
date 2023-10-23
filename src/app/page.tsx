import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello World!</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Link href='/login' className="bg-white text-black rounded-lg px-4 py-2">Home</Link>
    </main>
  );
}
