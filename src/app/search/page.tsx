'use client'
import { useEffect, useState } from "react";
import SearchBar from "../components/searchbar/searchBar";
import RootLayout from "../layout";
import http from "@/http";

export default function SearchPage() {
  const layoutProps = true;

  return (
    <RootLayout layoutProps={layoutProps}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 p-4 flex flex-col mt-20">
        <SearchBar />
      </div>
    </RootLayout>
  );
}
