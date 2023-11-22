import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import deafyicon from "../../../public/deafyicon.png";
import Label from "../components/label/label";
import Button from "../components/button/button";

export default function login() {
  const layoutProps = false;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700">
        <div className="bg-neutral-900 rounded-3xl w-[80%] md:w-[50%] lg:w-[40%] h-[70%] p-10 flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={deafyicon}
              style={{ cursor: "pointer" }}
              alt="Deafy Icon"
              className="w-32"
            />
            <h1 className="text-3xl text-white font-bold">Entrar na Deafy</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Label nome="E-mail" />
            <Label nome="Senha" />
            <Button nome="Login" />
            <Link href="">
              <p className="text-neutral-200 hover:underline hover:text-neutral-300">
                Esqueceu sua senha?
              </p>
            </Link>
          </div>
          <div className="flex gap-2">
            <p className="text-white">Não tem uma conta?</p>
            <Link href="/register">
              <p className="text-white font-semibold hover:underline hover:text-neutral-200">
                Cadastre-se
              </p>
            </Link>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
