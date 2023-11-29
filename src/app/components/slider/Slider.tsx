"use client"; //Necessário para rodar esse módulo de slide

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Audio from "../media/audio";

interface SliderProps {
  titulo: string;
}

const QuadradosSlider = ({ titulo }: SliderProps) => {
  const settings: Settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
          slidesToShow: 4,
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
          slidesToShow: 3,
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
    <div className="w-full h-full flex flex-col p-6">
      <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
      <Slider {...settings}>
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />
        <Audio />

        {/* Adicione mais quadrados conforme necessário */}
      </Slider>
    </div>
  );
};

export default QuadradosSlider;
