import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import Label from "../components/label/label";
import deafyicon from "../../../public/deafyicon.png";
import Button from "../components/button/button";

export default function register() {
  const layoutProps = false;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700">
        <div className="bg-neutral-900 rounded-3xl w-[80%] md:w-[50%] lg:w-[40%] h-[80%] p-10 flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={deafyicon}
              style={{ cursor: "pointer" }}
              alt="Deafy Icon"
              className="w-32"
            />
            <h1 className="text-3xl text-white font-bold">Se inscreva e comece a curtir</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Label nome="Nome" />
            <Label nome="E-mail" />
            <Label nome="Senha" />
            <Button nome="Register" />
          </div>
          <div className="flex gap-2">
            <p className="text-white">Já tem uma conta?</p>
            <Link href="/login">
              <p className="text-white font-semibold hover:underline hover:text-neutral-200">
                Faça login aqui.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
