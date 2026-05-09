import React, { useState } from 'react';
import VeggieBurger from '/images/Dishes/veggieburger.avif';
import Paneer from '/images/Dishes/malaipaneer.avif';
import Rasmalai from '/images/Dishes/Rasmalai.avif';
import Dahi from '/images/Dishes/dahi.avif';
import Kabab from '/images/Dishes/kabab.avif';
import Samosa from '/images/Dishes/samosa-pink.avif';
import Tikki from '/images/Dishes/tikki.avif';
import Barfi from '/images/Dishes/khoa-barfi.avif';
import RotatingBgShape from '/images/mandala-spin.svg';

const dietaryOptions = [
  {
    id: 'vegan',
    label: 'VEGAN',
    images: [
      { src: VeggieBurger, bgShape: RotatingBgShape, styling: 'top-10 -left-12 md:left-0 w-32 md:w-48 -rotate-12' },
      { src: Paneer, bgShape: RotatingBgShape, styling: 'bottom-10 -right-12 md:right-0 w-36 md:w-56 rotate-6' },
    ]
  },
  {
    id: 'gelatin-free',
    label: 'GELATIN FREE',
    images: [
      { src: Rasmalai, bgShape: RotatingBgShape, styling: 'top-20 -right-10 md:right-0 w-32 md:w-48 rotate-12' },
      { src: Dahi, bgShape: RotatingBgShape, styling: 'bottom-10 -left-10 md:left-0 w-40 md:w-56 -rotate-6' },
    ]
  },
  {
    id: 'gluten-free',
    label: 'GLUTEN FREE',
    images: [
      { src: Kabab, bgShape: RotatingBgShape, styling: 'top-16 -left-8 md:left-0 w-32 md:w-48 -rotate-6' },
      { src: Samosa, bgShape: RotatingBgShape, styling: 'bottom-20 -right-8 md:right-0 w-36 md:w-56 rotate-12' },
    ]
  },
  {
    id: 'dairy-free',
    label: 'DAIRY FREE',
    images: [
      { src: VeggieBurger, bgShape: RotatingBgShape, styling: 'bottom-5 -left-12 md:left-5 w-44 md:w-64 -rotate-12' },
      { src: Tikki, bgShape: RotatingBgShape, styling: 'top-32 -right-12 md:right-5 w-36 md:w-52 rotate-6' },
    ]
  },
  {
    id: 'keto',
    label: 'KETO FRIENDLY',
    images: [
      { src: Dahi, bgShape: RotatingBgShape, styling: 'top-10 -right-10 md:right-0 w-32 md:w-48 rotate-6' },
      { src: Paneer, bgShape: RotatingBgShape, styling: 'bottom-20 -left-10 md:left-0 w-40 md:w-56 -rotate-12' },
    ]
  },
  {
    id: 'halal',
    label: 'HALAL',
    images: [
      { src: Barfi, bgShape: RotatingBgShape, styling: 'bottom-16 -right-10 md:right-0 w-36 md:w-56 -rotate-6' },
      { src: Kabab, bgShape: RotatingBgShape, styling: 'top-16 -left-10 md:left-0 w-32 md:w-48 rotate-12' },
    ]
  }
];

const DietaryFeatures = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
   
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white  px-4 font-venice -mt-32  overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {dietaryOptions.map((option) => (
          <div key={option.id}>
            {option.images.map((img, index) => {
              const isVisible = hoveredId === option.id;
              return (
                <div
                  key={index}
                  className={`
                    absolute flex items-center justify-center transition-all ease-out
                    ${img.styling}
                    ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10'}
                  `}
                >
                  <img
                    src={img.bgShape}
                    alt=""
                    className="absolute w-[120%] h-[120%] max-w-none  z-0 opacity-80 animate-[spin_15s_linear_infinite]"
                  />
                  <img
                    src={img.src}
                    alt="Dish"
                    className="relative z-10 w-[160%] h-[160%] lg:w-[300%] lg:h-[300%] object-contain drop-shadow-xl"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="relative z-20 text-center flex flex-col items-center justify-center">
        {dietaryOptions.map((option) => (
          <h2
            key={option.id}
            onMouseEnter={() => setHoveredId(option.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`
              text-3xl sm:text-6xl md:text-7xl lg:text-8xl
              font-black uppercase tracking-tighter cursor-pointer transition-colors duration-200
              ${hoveredId === option.id ? 'text-[#ff5722]' : 'text-[#111111] hover:text-[#ff5722]'}
            `}
          >
            {option.label}
          </h2>
        ))}   
      </div>
    </section>
  );
};

export default DietaryFeatures;