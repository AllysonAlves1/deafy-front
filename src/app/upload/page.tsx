"use client";
import { useEffect, useState } from "react";
import Audio, { AudioProps } from "../components/media/audio";
import SendMedia from "../components/sendMedia/sendMedia";
import RootLayout from "../layout";
import http from "@/http";
import { useAuth } from "../Providers/AuthContext";

export default function UploadPage() {
  const layoutProps = true;
  // const [id, setId] = useState<number>();
  const [audios, setAudios] = useState<AudioProps[]>([]);
  const { user } = useAuth();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   function getPayloadFromToken(token) {
  //     const [, payloadBase64] = token.split(".");
  //     const payload = JSON.parse(atob(payloadBase64));
  //     return payload;
  //   }
  //   const payload = getPayloadFromToken(token);
  //   setId(payload.sub);
  //   console.log(payload.sub);
  // }, []);

  useEffect(() => {
    http
      .get(`/users/${user?.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setAudios(res.data.audios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const uploadPost = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("audio", file);
    http
      .post("/post/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
