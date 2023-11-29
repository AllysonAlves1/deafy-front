"use client";

import { useState, useEffect, useRef } from "react";

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
          <div className="flex flex-col bg-slate-800 text-center rounded-lg p-6">
            <h1>Preencha os campos</h1>
            <form action="" method="post" className="flex flex-col">
              <label htmlFor="title">Título</label>
              <input type="text" name="title" id="title" />
              <div className="flex flex-col">
                <h6>Imagem</h6>
                <input type="file" name="image" id="image" />
              </div>
              <div className="flex flex-col">
                <h6>Áudio</h6>
                <input type="file" name="file" id="file" />
              </div>
              <div className="flex flex-col">
                <input type="radio" id="audio" name="option" value="audio" />
                <label htmlFor="audio">audio</label>

                <input type="radio" id="music" name="option" value="music" />
                <label htmlFor="music">music</label>

                <input
                  type="radio"
                  id="podcast"
                  name="option"
                  value="podcast"
                />
                <label htmlFor="podcast">podcast</label>

                <input
                  type="radio"
                  id="audiobook"
                  name="option"
                  value="audiobook"
                />
                <label htmlFor="audiobook">audiobook</label>
              </div>
              <input type="submit" value="Upload" className="cursor-pointer bg-black"/>
            </form>
            <button onClick={closeModal}>Fechar modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
