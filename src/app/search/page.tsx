'use client'
import { useEffect, useState } from "react";
import HeaderHome from "../components/header/header";
import SearchBar from "../components/searchbar/searchBar";
import RootLayout from "../layout";
import http from "@/http";

export default function SearchPage() {
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
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col mt-20">
        <SearchBar />
      </div>
    </RootLayout>
  );
}
