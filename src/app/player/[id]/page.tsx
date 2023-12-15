"use client";
import RootLayout from "../../layout";
import Subtitle from "../../components/play/subtitle";
import { useEffect, useState } from "react";
import http from "@/http";
import dynamic from "next/dynamic";
import { AudioProps } from "@/app/components/media/audio";

const AudioPlayer = dynamic(() => import("../../components/play/play"), {
  ssr: false,
});

export default function PlayerPage({ params }: { params: { id: string } }) {
  const layoutProps = true;

  const [audio, setAudio] = useState<AudioProps>({
    id: "",
    title: "",
    audio: "",
    image: "",
    author: {
      name: "",
    },
  });

  useEffect(() => {
    const id = params.id;
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
      });
  }, []);

  return (
    <RootLayout layoutProps={layoutProps}>
      <div>
        <AudioPlayer
          audio={audio.audio}
          title={audio.title}
          author={{ name: audio.author?.name ?? "" }}
          image={audio.image}
          id={audio.id}
        />
        <Subtitle />
      </div>
    </RootLayout>
  );
}
