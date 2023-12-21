"use client";
import RootLayout from "../layout";
import QuadradosSlider from "../components/slider/Slider";
import { useEffect, useState } from "react";
import http from "@/http";
import { AudioProps } from "../components/media/audio";
import { formatAuthorName } from "../utils/formatAuthor";
export default function HomePage() {
  const layoutProps = true;

  const [audios, setAudios] = useState<AudioProps[]>([]);
  useEffect(() => {
    http
      .get("/audios", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setAudios(res.data);
      });
  }, []);

  const filterAudiosByCategory = (category: string | undefined) => {
    return audios.filter((audio) => audio.category === category);
  };

  const filterAudiosByAuthor = (author: string) => {
    return audios.filter((audio) => audio.author?.name === author);
  };

  const getUniqueAuthors = () => {
    const allAuthors = audios.map((audio) => audio.author?.name);
    return Array.from(new Set(allAuthors));
  };

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col mt-20 mb-8 md:mb-0">
        {/* {["MUSIC", "PODCAST", "AUDIOBOOK"].map((category) => (
          <QuadradosSlider
            key={category}
            titulo={category}
            audios={filterAudiosByCategory(category)}
          /> // TODO: filtrar por categoria
        ))} */}
        {getUniqueAuthors().map((author) => (
          <QuadradosSlider
            key={author}
            titulo={`Para fãs de ${formatAuthorName(author || "")}`}
            audios={filterAudiosByAuthor(author || "")}
          /> // TODO: filtrar por Autor
        ))}
      </div>
    </RootLayout>
  );
}
