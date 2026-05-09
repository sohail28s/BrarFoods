


import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaArrowRight } from "react-icons/fa6";

import Tick from '/images/svgs/tickblack.svg';
import BgShape from '/images/mandala-spin.svg';
import LeftArrowIcon from '/images/svgs/leftarrow.svg';
import RightArrowIcon from '/images/svgs/rightarrow.svg';

const Recipe1 =  '/images/FoodSlider/Mango.avif';
const Recipe2  ='/images/FoodSlider/ProteinDahi.avif';
const Recipe3  ='/images/FoodSlider/samosachat.avif';
const Recipe4 = '/images/FoodSlider/loadedbowl.avif';
const Recipe5 = '/images/FoodSlider/ghee.avif';
const Recipe6 = '/images/FoodSlider/grilledpaneer.avif';

const recipes = [
  {
    id: 1,
    title: 'Mango Rasmalai Milkshake',
    time: '6 min',
    image: Recipe2,
    tag: 'Vegetarian',
    bgColor: 'bg-mandalablue',
    hueRotation: '180deg', 
  },
  {
    id: 2,
    title: 'Protein Dahi Bowl',
    time: '15 min',
    image: Recipe2,
    tag: 'Vegetarian',
    bgColor: 'bg-marquee', 
    hueRotation: '240deg', 
  },
  {
    id: 3,
    title: 'Samosa Chaat Cups',
    time: '10 min',
    image: Recipe3,
    tag: 'Vegetarian',
    bgColor: 'bg-mandalalightyellow',
    hueRotation: '45deg', 
  },
  {
    id: 4,
    title: 'Veggie Burger Bowl',
    time: '30 min',
    image: Recipe4,
    tag: 'Vegan',
    bgColor: 'bg-mandalapurple', 
    hueRotation: '320deg', 
  },
  {
    id: 5,
    title: 'Ghee Podi Dosa',
    time: '30 min',
    image: Recipe5,
    tag: 'Vegan',
    bgColor: 'bg-marquee', 
    hueRotation: '320deg', 
  },
  {
    id: 6,
    title: 'Grilled Peri Peri Paneer',
    time: '30 min',
    image: Recipe6,
    tag: 'Vegan',
    bgColor: 'bg-mandalapurpledark',
    hueRotation: '320deg', 
  },
];

const RecipeSlider = () => {
  const sliderRef = useRef(null);

  return (
    <section className="w-full min-h-screen bg-white py-16 font-venice overflow-hidden ">
      
      <div className="text-center mb-12 space-y-2 px-4">
        <h4 className="font-bold text-2xl tracking-tighter  uppercase">Recipes</h4>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
          From Our Kitchen <br /> To Yours
        </h2>
      </div>

      <div className="relative w-full  mx-auto ">
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          breakpoints={{
            640: { spaceBetween: 30 }
          }}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true, el: '.recipe-pagination' }}
          className="!pb-12 !pt-8" 
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id} className="!w-auto">
              {({ isActive }) => (
                <div 
                  className={`transition-all duration-500 ease-out ${
                    isActive 
                      ? 'scale-105 sm:scale-110 z-20 opacity-100' 
                      : 'scale-95 sm:scale-90 z-0 opacity-100 blur-[1px]'
                  }`}
                >
                  <div className={`w-[75vw] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[450px] sm:h-[480px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-sm flex flex-col group cursor-pointer ${recipe.bgColor} bg-opacity-100`}>
                    
                    <div className="h-[45%] relative flex items-center justify-center border border-marquee rounded-3xl m-3 sm:m-4 overflow-hidden ">
                      
                      <img 
                        src={BgShape} 
                        alt="" 
                        className="absolute w-[200%] h-[200%] max-w-none animate-[spin_15s_linear_infinite] opacity-30  object-contain"
                        style={{ filter: `sepia(1) saturate(3) hue-rotate(${recipe.hueRotation})` }} 
                      />
                    

                      <img 
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="relative z-10 h-full w-full object-cover drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 border-marquee rounded-xl "
                        />
                       
                      
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-sm z-20">
                        <p className="text-black">{recipe.time}</p>
                      </div>
                    </div>

                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between items-start">
                      
                      <div className="space-y-2 sm:space-y-4 w-full">
                      
                          <div className="flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-normal text-black opacity-90">
                          <div className="w-4 h-4 rounded-full flex justify-center text-[8px] gap-1 ml-4 sm:ml-8 mb-2">
                            <img src={Tick} className="text-black text-lg items-center" alt="tick" /> 
                            {recipe.tag}
                          </div>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black uppercase leading-[0.9] text-black">
                          {recipe.title}
                        </h3>
                      </div>

                      <button className="text-black bg-white px-4 py-3 rounded-md text-xs font-bold flex items-center gap-2 hover:bg-opacity-90 transition-colors shadow-sm self-start mt-4">
                        View Recipe
                        <div className="bg-black text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px]">
                           <FaArrowRight />
                        </div>
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full sm:w-max max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-2 bg-transparent sm:bg-[#211f20] px-0 sm:px-3 border-none sm:border rounded-xl py-0 sm:py-2">
        
        <div className="flex items-center gap-4 sm:gap-6 bg-transparent sm:bg-[#211f20] p-0 sm:p-2 rounded-full sm:pr-6 sm:pl-2 shadow-none sm:shadow-2xl">
          <button 
            onClick={() => sliderRef.current?.swiper.slidePrev()}
            className="w-10 h-10 rounded-xl sm:rounded-full bg-[#211f20] sm:bg-white/10 hover:opacity-80 sm:hover:bg-white text-white sm:hover:text-black flex items-center justify-center transition-all rotate-180"
          >
           <img src={LeftArrowIcon} className="w-4 h-4 sm:w-auto" alt="Prev" />
          </button>

          <div className="recipe-pagination !static !transform-none !w-auto flex items-center justify-center gap-2"></div>

          <button 
            onClick={() => sliderRef.current?.swiper.slideNext()}
            className="w-10 h-10 rounded-xl sm:rounded-full bg-[#211f20] sm:bg-white/10 hover:opacity-80 sm:hover:bg-white text-white sm:hover:text-black flex items-center justify-center transition-all"
          >
            <img src={RightArrowIcon} className="w-4 h-4 sm:w-auto" alt="Next" />
          </button>
        </div>
      </div>

      <style>{`
        .recipe-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .recipe-pagination .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 20px;
          border-radius: 10px;
        }
        
        /* Mobile specific dot colors */
        @media (max-width: 639px) {
          .recipe-pagination .swiper-pagination-bullet {
            background: rgba(33, 31, 32, 0.3) !important; 
          }
          .recipe-pagination .swiper-pagination-bullet-active {
            background: #211f20 !important; 
          }
        }
      `}</style>

    </section>
  );
};

export default RecipeSlider;