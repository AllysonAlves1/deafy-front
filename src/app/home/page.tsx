"use client";
import RootLayout from "../layout";
import QuadradosSlider from "../components/slider/Slider";
import { useEffect, useState } from "react";
import http from "@/http";
export default function HomePage() {
  const layoutProps = true;

  const [audios, setAudios] = useState([]);
  useEffect(() => {
    http
      .get('/audios', {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setAudios(res.data);
      });
    }, []);

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col gap-4">
        <QuadradosSlider titulo="Musics" audios={audios} />
        {/* <QuadradosSlider titulo="Podcasts" />
        <QuadradosSlider titulo="Audiobooks" /> */}
      </div>
    </RootLayout>
  );
}
