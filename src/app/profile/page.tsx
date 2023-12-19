"use client";
import RootLayout from "../layout";
import notamusica from "../../../public/notamusica.png";
import Image from "next/image";
import Button from "../components/button/button";
import { useAuth } from "../Providers/AuthContext";
import { useRouter } from "next/navigation";
import TextInput from "../components/textInput/TextInput";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { formatAuthorName } from "../utils/formatAuthor";
import http from "@/http";
import FileInput from "../components/fileInput/FileInput";

export default function ProfilePage() {
  const layoutProps = true;
  const { user, logout } = useAuth();
  const router = useRouter();
  const [values, setValues] = useState({
    name: user?.name || "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState({
    sucess: "",
    update: "",
  });

  const handleLogout = async () => {
    try {
      logout();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout: ", error);
    }
  };

  const handleChange = (event: { target: { value: any; name: any } }) => {
    const { value, name } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFileChange = (event: { target: { files: any } }) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (file) {
      formData.append("image", file);
    }
    try {
      await http.patch(`/users/${user?.id}`, formData);
      setMessage({
        sucess: "Usuário atualizado com sucesso!",
        update: "Caso queira ver as atualizações faça o login novamente!",
      });
    } catch (error) {
      console.error("Erro ao atualizar o usuário: ", error);
    }
  };

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="flex flex-col items-center bg-neutral-200 dark:bg-neutral-900 min-h-screen mt-20">
        <div className="flex flex-col gap-4 items-center mt-4">
          <h1 className="text-3xl font-bold">
            Olá {formatAuthorName(user?.name || "")}
          </h1>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={(event) => {
              event.preventDefault();
              handleUpdate();
            }}
          >
            <Image
              className="rounded-full mb-2"
              src={user?.image ? user?.image : notamusica}
              width={144}
              height={144}
              alt="generico"
            />
            <FileInput name="image" label="" onChange={handleFileChange} />
            <TextInput name="name" label="Nome" onChange={handleChange}/>
            <Button nome="Alterar" type="submit"/>
          </form>
          {message && <><p className="text-center text-green-500 w-[30ch]">{message.sucess}</p>
          <p className="text-center text-green-500 w-[30ch]">{message.update}</p>
          </>
          }
          <button
            className="bg-neutral-400 dark:bg-neutral-800 rounded-lg py-2 px-4 text-red-500 font-bold flex items-center gap-4 hover:text-white transition-all"
            onClick={handleLogout}
          >
            <span className="text-lg">Sair</span>
            <ArrowLeftOnRectangleIcon className="w-8" />
          </button>
        </div>
      </div>
    </RootLayout>
  );
}
