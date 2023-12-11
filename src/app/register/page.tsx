"use client";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import Label from "../components/label/label";
import deafyicon from "../../../public/deafyicon.png";
import Button from "../components/button/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import http from "@/http";

export default function Register() {
  const layoutProps = false;

  // Criar usuário

  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event: { target: { value: any; name: any } }) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((values) => ({
      ...values,
      [fieldName]: fieldValue,
    }));
  }

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700">
        <div className="bg-neutral-900 rounded-3xl w-[90%] md:w-[50%] lg:w-[40%] p-10 flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={deafyicon}
              style={{ cursor: "pointer" }}
              alt="Deafy Icon"
              className="w-32"
            />
            <h1 className="text-2xl text-white font-bold text-center">
              Se inscreva e comece a curtir
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                http
                  .post("/users", values)
                  .then(() => {
                    router.push("/login");
                  })
                  .catch((error) => {
                    console.log(error);
                    alert("Preencha todos os campos!");
                  });
              }}
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="bg-neutral-800 rounded-lg p-2 text-white"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="bg-neutral-800 rounded-lg p-2 text-white"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="bg-neutral-800 rounded-lg p-2 text-white"
                  onChange={handleChange}
                />
                <Button nome="Criar conta" />
              </div>
            </form>
          </div>
          <div className="flex gap-2 justify-center">
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
