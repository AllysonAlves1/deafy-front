/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react';
import Audio, { AudioProps } from '../media/audio';
import http from '@/http';

export default function SearchBar() {
  const [audios, setAudios] = useState<AudioProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    http
      .get('/audios', {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // Filtro dos áudios com base no termo de pesquisa
        const filteredAudios = res.data.filter((audio: AudioProps) => {
          const titleMatch = audio.title.toLowerCase().includes(searchTerm.toLowerCase());
          const authorMatch = audio.author.name.toLowerCase().includes(searchTerm.toLowerCase());
          return titleMatch || authorMatch;
        });
        setAudios(filteredAudios);
      });
  }, [searchTerm]);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
        <input
          className="placeholder:italic placeholder:text-slate-400 text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for music, podcast, author..."
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <div className='grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-5 p-4'>
          {audios.map((audio) => (
            <Audio key={audio.id} {...audio} />
          ))}
      </div>
    </div>
  );
}
