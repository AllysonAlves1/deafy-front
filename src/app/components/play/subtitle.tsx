import React, { useEffect, useState } from "react";
import Button from "../button/button";
import http from "@/http";

export default function Subtitle({
  subtitle,
  id,
  title,
  setShouldReload,
}: {
  subtitle: string;
  id: string;
  title: string;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [subtitleForm, setSubtitle] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {}, [isEditing]);

  const formattedSubtitle = subtitle.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  function handleText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.currentTarget;
    setSubtitle(value);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    http.patch(
      `/audios/${id}`,
      {
        subtitle: subtitleForm,
      },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setIsEditing(false);
    setShouldReload(true);
  }

  return (
    <div className="p-4 m-4 flex flex-col gap-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-20">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">{title}</h1>
        {!isEditing && (
          <button
            className="rounded-lg p-2 hover:text-neutral-600 dark:hover:text-neutral-300 transition-all"
            onClick={handleEditClick}
          >
            Editar
          </button>
        )}
      </div>
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveClick();
          }}
          className="flex flex-col gap-4"
        >
          <textarea
            className="h-40 dark:bg-neutral-800 rounded-lg p-2 break-words w-full"
            placeholder="Digite a legenda aqui"
            value={subtitleForm}
            onChange={handleText}
          ></textarea>
          <button
            type="submit"
            className="bg-neutral-400 dark:bg-neutral-800 border-transparent border-[1px] hover:border-black dark:hover:border-white p-2 rounded-md"
          >
            Salvar
          </button>
        </form>
      )}
      {!isEditing && <p className="text-sm">{formattedSubtitle}</p>}
    </div>
  );
}
