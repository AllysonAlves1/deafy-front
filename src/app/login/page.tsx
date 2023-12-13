"use client";
import Image from "next/image";
import Link from "next/link";
import deafyicon from "../../../public/deafyicon.png";
import Button from "../components/button/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import http from "@/http";

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState({
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
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-700">
      <div className="bg-neutral-900 rounded-3xl w-[90%] md:w-[50%] lg:w-[40%]  p-10 flex flex-col gap-5">
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
          {/* <Label nome="E-mail" />
            <Label nome="Senha" />
            <Button nome="Login" /> */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              http.post("/auth/login", values)
                .then((res) => {
                  const token = JSON.stringify(res.data.access_token).replace(/^"(.*)"$/, "$1");
                  localStorage.setItem("token", token);
                  router.push("/home");
                })
                .catch((error) => {
                  console.log(error);
                  alert("Usuário ou senha inválidos");
                });
            }}
          >
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="rounded-lg p-2 bg-neutral-800 text-neutral-200"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="rounded-lg p-2 bg-neutral-800 text-neutral-200"
                onChange={handleChange}
              />
              <Button nome="Login" />
            </div>
          </form>

          <Link href="">
            <p className="text-neutral-200 hover:underline hover:text-neutral-300">
              Esqueceu sua senha?
            </p>
          </Link>
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-white">Não tem uma conta?</p>
          <Link href="/register">
            <p className="text-white font-semibold hover:underline hover:text-neutral-200">
              Cadastre-se
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
