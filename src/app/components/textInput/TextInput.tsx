interface InputProps {
  name: string;
  label: string;
  onChange: (event: { target: { value: any; name: any } }) => void;
}

export default function TextInput({ name, label, onChange }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={label}
      className="border-2 border-gray-300 dark:bg-white p-3 rounded-lg dark:text-black w-full"
      onChange={onChange}
    />
  );
}
