"use client";

import { useState, useEffect } from "react";
import FormMedia from "../form/FormMedia";
import { useAuth } from "@/app/Providers/AuthContext";
import { useModal } from "@/app/Providers/ModalContext";

export default function SendMedia({ setShouldReload } : { setShouldReload: React.Dispatch<React.SetStateAction<boolean>> }) {
  const {user} = useAuth();
  const { showModal, openModal, closeModal } = useModal() as {showModal: boolean, openModal: () => void, closeModal: () => void};

  const handleSendMedia = () => {
    closeModal();
    setShouldReload(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={openModal}
        className="flex items-center space-x-6 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-300 hover:bg-neutral-400 p-4 w-full font-bold justify-center rounded-lg"
      >
        Enviar nova mídia
      </button>
      {showModal && (
        <div className="flex fixed top-40 z-50">
          <div className="flex flex-col bg-neutral-300 dark:bg-neutral-700 text-center rounded-lg p-6 drop-shadow-lg">
            <h1 className="text-xl font-bold pb-4 border-gray-200 text-black dark:text-white">
              Preencha os campos abaixo
            </h1>
            <FormMedia user={user?.role} />
            <button
              onClick={handleSendMedia}
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
