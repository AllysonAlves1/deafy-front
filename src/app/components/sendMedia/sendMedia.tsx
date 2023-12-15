"use client";

import { useState, useEffect } from "react";
import FormMedia from "../form/FormMedia";

export default function SendMedia() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    function getPayloadFromToken(token) {
      const [, payloadBase64] = token.split(".");
      const payload = JSON.parse(atob(payloadBase64));
      return payload;
    }
    const payload = getPayloadFromToken(token);
    setRole(payload.role);
    console.log(payload.role);
 
  }, []); 

  // Modal
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
            <FormMedia user={role} />
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
