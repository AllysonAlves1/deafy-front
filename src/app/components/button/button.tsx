interface ButtonProps {
  nome: string;
}

export default function Button( { nome } : ButtonProps ) {

  return (
    <div className="bg-neutral-700 px-3 py-2 rounded-lg">
      <button type="submit">{nome}</button>
    </div>
  );
}
