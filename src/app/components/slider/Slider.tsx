"use client"; //Necessário para rodar esse módulo de slide

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Audio, { AudioProps } from "../media/audio";

interface SliderProps {
  titulo: string;
  audios: AudioProps[];
}

const QuadradosSlider = ({ titulo, audios }: SliderProps) => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
      <Slider {...settings}>
        {audios.map((audio: any) => (
          <Audio
            key={audio.id}
            title={audio.title}
            author={audio.author}
            image={audio.image}
            id={audio.id}
          />
        ))}
        {/* Adicione mais quadrados conforme necessário */}
      </Slider>
    </div>
  );
};

export default QuadradosSlider;
