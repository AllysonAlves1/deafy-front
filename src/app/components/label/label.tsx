interface LabelProps {
  nome: string;
}

export default function Label({ nome }: LabelProps) {
  return (
      <form action="" className="flex flex-col gap-4 w-full">
        <label className="">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-neutral-300">
            {nome}
          </span>
        </label>
        <input
          type="text"
          className="text-black pl-3 py-1 border-neutral-700 hover:border-neutral-700 active:border-neutral-700 font-light"
        />
      </form>

  );
}
