interface ButtonProps {
  nome: string;
}

export default function Button( { nome } : ButtonProps ) {

  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-white border-transparent border-2 border-solid hover:border-black dark:hover:border-white px-3 py-2 rounded-lg w-full text-center font-semibold text-black my-2">
      <button type="submit">{nome}</button>
    </div>
  );
}
