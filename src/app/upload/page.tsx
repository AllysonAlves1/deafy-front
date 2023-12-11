"use client";
import { useEffect, useState } from "react";
import Audio from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";
import http from "@/http";

export default function UploadPage() {
  const layoutProps = true;
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    http
      .get("/audios", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setAudios(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 mt-20">
        <SendMedia />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {audios.map((audio) => (
            <Audio
              key={audio.id}
              title={audio.title}
              author={audio.author.name}
              image={audio.image}
              id={audio.id}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
