import { ChangeEventHandler } from "react";

export default function FileInput({ name, label, onChange }: { name: string, label: string, onChange: ChangeEventHandler<HTMLInputElement> }) {
    return (
        <label className="flex items-center justify-between border-2 rounded-lg p-2 w-full">
          <span className="text-black font-semibold mx-2">{label}</span>
          <input
            type="file"
            name={name}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-700 hover:file:bg-violet-100"
            onChange={onChange}
          />
        </label>
      );
}