interface LabelProps {
  nome: string;
}

export default function Label({ nome }: LabelProps) {
  return (
    <div>
      <form action="" className="flex flex-col py-2 px-10">
        <label className="">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-neutral-300">
            {nome}
          </span>
        </label>
        <input
          type="text"
          className="text-black pl-3 border-neutral-700 hover:border-neutral-700 active:border-neutral-700"
        />
      </form>
    </div>
  );
}
