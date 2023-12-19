"use client"

// Importações dos módulos
import { useEffect, useState } from "react";
import http from "@/http";
import dynamic from "next/dynamic";
import RootLayout from "../../layout";
import Subtitle from "../../components/play/subtitle";
import { AudioProps } from "@/app/components/media/audio";

// Importação dinâmica do componente AudioPlayer
const AudioPlayer = dynamic(() => import("../../components/play/play"), {
  ssr: false,
});

export default function PlayerPage({ params }: { params: { id: string } }) {
  const layoutProps = true;

  const [audio, setAudio] = useState<AudioProps>({
    id: "",
    title: "",
    subtitle: "",
    audio: "",
    image: "",
    author: {
      name: "",
    },
  });
  const [shouldReload, setShouldReload] = useState(true);

  useEffect(() => {
    const id = params.id;
    if(shouldReload) {
      http
      .get(`/audios/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setAudio(res.data);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setShouldReload(false);
      });
    }
   
  }, [shouldReload]);

  // Verifica se todos os campos de áudio necessários estão preenchidos
  const isAudioReady = audio.id !== "" && audio.audio !== "" && audio.title !== "";

  return (
    <RootLayout layoutProps={layoutProps}>
      <div>
        {/* Renderiza o reprodutor de áudio e o subtítulo apenas quando o áudio estiver pronto */}
        {isAudioReady && (
          <>
            <AudioPlayer
              audio={audio.audio}
              title={audio.title}
              author={{ name: audio.author?.name ?? "" }}
              image={audio.image}
              id={audio.id}
            />
            <Subtitle subtitle={audio.subtitle ?? ""} id={audio.id} title={audio.title} setShouldReload={setShouldReload}/>
          </>
        )}
      </div>
    </RootLayout>
  );
}
