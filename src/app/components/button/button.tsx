interface ButtonProps {
  nome: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

export default function Button( { nome, onClick, type = 'button' }: ButtonProps ) {

  return (
    <div className="bg-neutral-400 dark:bg-neutral-800 border-transparent border-[1px] hover:border-black dark:hover:border-white px-3 py-2 rounded-lg w-full text-center font-semibold my-2">
      <button type={type} onClick={onClick}>{nome}</button>
    </div>
  );
}
