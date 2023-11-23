interface ButtonProps {
  nome: string;
}

export default function Button( { nome } : ButtonProps ) {

  return (
    <div className="bg-slate-800 hover:bg-slate-600 px-3 py-2 rounded-lg w-full text-center font-semibold">
      <button type="submit">{nome}</button>
    </div>
  );
}
