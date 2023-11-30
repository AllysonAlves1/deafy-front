"use client";

import { useState, useEffect } from "react";

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
        className="flex items-center space-x-6 bg-white p-4 w-full text-black justify-center"
      >
        Enviar nova mídia
      </button>
      {showModal && (
        <div className="flex fixed h-full items-end text-white">
          <div className="flex flex-col bg-slate-800 text-center rounded-lg p-6 shadow-xl">
            <h1>Preencha os campos</h1>
            <form className="flex items-center space-x-6 bg-white p-4">
              <label className="block">
                <span className="sr-only">Escolher arquivo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-blue-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </form>
            <button
              onClick={closeModal}
              className="flex items-center space-x-6 bg-white p-4 w-full text-black justify-center"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
