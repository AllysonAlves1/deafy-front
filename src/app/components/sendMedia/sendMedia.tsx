"use client";

import { useState, useEffect } from "react";
import Button from "../button/button";

export default function SendMedia() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Desabilita o scroll
    } else {
      document.body.style.overflow = "unset"; // Habilita o scroll
    }
  }, [showModal]);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={openModal}
        className="flex items-center space-x-6 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-300 hover:bg-neutral-400 p-4 w-full font-bold justify-center rounded-lg backdrop-blur"
      >
        Enviar nova mídia
      </button>
      {showModal && (
        <div className="flex fixed top-40 z-999">
          <div className="flex flex-col bg-neutral-300 dark:bg-neutral-700 text-center rounded-lg p-6 drop-shadow-2xl">
            <h1
              className="
            text-xl
            font-bold
            pb-4
            border-gray-200
            text-black dark:text-white
            "
            >
              Preencha os campos abaixo
            </h1>
            <form
              className="
            flex flex-col
            gap-4
            w-full
            max-w-sm
            mx-auto
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
            p-4
            mb-2
           "
            >
              <input
                type="text"
                placeholder="Título"
                className="
                border-2
                border-gray-300
                dark:bg-white
                p-3
                rounded-lg
                focus:outline-none
                dark:text-black
              "
              ></input>
              <select
                className="
                border-2
                border-gray-300
                text-zinc-400
                dark:bg-white
                p-3
                rounded-lg
                focus:outline-none
              
              "
              >
                <option value="AUDIO">Áudio</option>
                <option value="MUSIC">Música</option>
                <option value="PODCAST">Podcast</option>
                <option value="AUDIOBOOK">Audiobook</option>
              </select>
              <label className="flex items-center justify-between border-2 rounded-lg p-2 w-full">
                <span className="text-black font-semibold mx-2">Image</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700
      hover:file:bg-violet-100
    "
                />
              </label>
              <label className="flex items-center justify-between border-2 rounded-lg p-2 w-full">
                <span className="text-black font-semibold mx-2">Audio</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-slate-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </form>
            <Button nome="Enviar" />
            <button
              onClick={closeModal}
              className="bg-white dark:bg-neutral-800 dark:text-white border-transparent border-2 border-solid hover:border-black dark:hover:border-white px-3 py-2 rounded-lg w-full text-center font-semibold text-black my-2"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
