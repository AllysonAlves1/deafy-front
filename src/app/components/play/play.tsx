import Image from "next/image";
const Play = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="mx-auto">
        <Image src="/notamusica.png" alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">I Wonder</p>
        <p className="text-sm">Kayne West</p>
      </div>
      <div className="flex justify-around">
        <audio controls className="w-full">
          <source src="./audios/IWonder.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  );
};

export default Play;
