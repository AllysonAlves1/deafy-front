interface ButtonProps {
  nome: string;
}

export default function Button( { nome } : ButtonProps ) {

  return (
    <div className="bg-neutral-200 hover:bg-neutral-300 px-3 py-2 rounded-lg w-full text-center font-semibold">
      <button type="submit">{nome}</button>
    </div>
  );
}
