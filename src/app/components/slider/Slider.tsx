'use client' //Necessário para rodar esse módulo de slide

import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Audio from '../media/audio';

interface SliderProps {
  titulo: string;
}

const QuadradosSlider = ({titulo}: SliderProps) => {
  const settings: Settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col">
      <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
      <Slider {...settings}>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        <div>
          <div className=" w-32 flex items-center justify-center"><Audio/></div>
        </div>
        
        {/* Adicione mais quadrados conforme necessário */}
      </Slider>
    </div>
  );
};

export default QuadradosSlider;
