import { ChangeEventHandler } from "react";

export default function SelectInput({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select
      className="border-2 border-gray-300 text-zinc-400 dark:bg-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-white"
      onChange={onChange}
      name="category"
    >
      <option value="AUDIO">Audio</option>
      <option value="MUSIC">Música</option>
      <option value="PODCAST">Podcast</option>
      <option value="AUDIOBOOK">Audiobook</option>
    </select>
  );
}
