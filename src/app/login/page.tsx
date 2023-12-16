"use client";
import Image from "next/image";
import Link from "next/link";
import deafyicon from "../../../public/deafyicon.png";
import Button from "../components/button/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Providers/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const handleLogin = async () => {
    try {
      const result = await login(values);
      if (result.success) {
        router.push("/home");
      } else {
        setError(result.error || null);
      }
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      setError("Erro ao processar a solicitação. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-700">
      <div className="bg-neutral-900 rounded-3xl w-[90%] min-[500px]:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] p-10 flex flex-col gap-5">
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
          <form
            className="flex flex-col gap-2 w-[80%]"
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="rounded-lg p-2 bg-neutral-800 text-neutral-200 w-full"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className="rounded-lg p-2 bg-neutral-800 text-neutral-200 w-full"
              onChange={handleChange}
            />
            <Button nome="Login" type="submit"/>
          </form>
          {error && <p className="text-red-500">{error}</p>}
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
