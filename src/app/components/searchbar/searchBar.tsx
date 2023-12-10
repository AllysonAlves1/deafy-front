'use client'

import { useState } from 'react';
import Audio from '../media/audio';

// Suponha que 'musics' é o array de músicas no formato JSON
const musics = [
  {
    id: 1,
    title: "Quer Voar",
    audio: "audio1",
    author: {
      id: 1,
      name: "Matuê"
    }
  },
  {
    id: 2,
    title: "212",
    audio: "audio2",
    author: {
      id: 2,
      name: "Mc Igu"
    }
  },
  {
    id: 3,
    title: "kamikaze",
    audio: "audio2",
    author: {
      id: 2,
      name: "Mc Igu"
    }
  },
  // ... adicione mais músicas conforme necessário
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMusics, setFilteredMusics] = useState(musics);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  
    const filtered = musics.filter(music =>
      music.title.toLowerCase().includes(searchTerm) ||
      music.author.name.toLowerCase().includes(searchTerm)
    );
  
    setFilteredMusics(searchTerm ? filtered : musics);
  };
  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {/* MagnifyingGlassIcon aqui */}
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for music, podcast, author..."
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>

      <div className='grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-5 p-4'>
        {filteredMusics.map(audio => (
          <Audio key={audio.id} title={audio.title} author={audio.author.name} />
        ))}
      </div>
    </div>
  );
}
