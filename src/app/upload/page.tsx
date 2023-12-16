"use client";
import { useEffect, useState } from "react";
import Audio, { AudioProps } from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";
import http from "@/http";
import { useAuth } from "../Providers/AuthContext";

export default function UploadPage() {
  const layoutProps = true;
  const [audios, setAudios] = useState<AudioProps[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    http
      .get(`/users/${user?.id}`)
      .then((res) => {
        setAudios(res.data.audios);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [audios, user?.id]);

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 mt-20 mb-16 md:mb-0">
        <SendMedia />
        <div className="grid grid-cols-2 min-[600px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {audios.map((audio) => (
            <Audio
              key={audio.id}
              title={audio.title}
              image={audio.image}
              id={audio.id}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
