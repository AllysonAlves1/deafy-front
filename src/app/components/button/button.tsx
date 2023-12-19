import React from 'react';

interface ButtonProps {
  nome: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button( { nome, onClick, type = 'button', disabled }: ButtonProps ) {

  return (
    <div className="bg-neutral-400 dark:bg-neutral-800 border-transparent border-[1px] hover:border-black dark:hover:border-white px-3 py-2 rounded-lg w-full text-center font-semibold my-2">
      <button type={type} onClick={onClick} disabled={disabled}>{nome}</button>
    </div>
  );
}
