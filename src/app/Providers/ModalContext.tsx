"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

type ModalContextType = {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};
// Crie o contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Crie um provedor para o contexto
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useModal = () => {
  return useContext(ModalContext);
};
