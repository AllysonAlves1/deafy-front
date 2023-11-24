import Audio from "../media/audio";

interface categoryProps {
  category: string;
}

export default function Category({ category }: categoryProps) {
  return (
    <>
      <h1 className="text-xl">{category}</h1>
      <div className="flex gap-2 flex-wrap justify-start">
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
      </div>
    </>
  );
}
