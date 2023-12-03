interface LabelProps {
  nome: string;
}

export default function Label({ nome }: LabelProps) {
  return (
    <form action="" className="flex flex-col w-full">
      <input
        type="text"
        placeholder="Nome"
        className="border-2
          border-gray-300
          dark:bg-white
          p-3
          rounded-lg
          focus:outline-none
          focus:border-neutral-700
          dark:text-black"
      />
    </form>
  );
}
