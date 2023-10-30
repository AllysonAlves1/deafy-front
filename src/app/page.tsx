import Link from "next/link";
import RootLayout from "./layout";

export default function home() {

  const layoutProps = false;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center justify-between pr-25 pl-25 pt-25 pb-25 h-96">
        <h1 className="text-6xl font-bold">Deafy Project</h1>
        <p>Bem-vindo ao nosso aplicativo de música voltada à inclusão!</p>
        <Link href='/login' className="bg-white text-black rounded-lg px-4 py-2">Página de Login</Link>
        <Link href='/register' className="bg-white text-black rounded-lg px-4 py-2">Página de Registro</Link>
        <footer>Coders: Allyson Alves, Giovani Feitosa, Lucas Emanuel.</footer>
      </div>
    </RootLayout>
  );
}
