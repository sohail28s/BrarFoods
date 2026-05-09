import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaAngleRight } from "react-icons/fa6";
import SparkleImg from '../../public/images/Hero/sparkle.svg'; 
import BgShape1 from '../../public/images/Hero/bg1.avif'; 
import BgShape2 from '../../public/images/Hero/bg2.avif'; 
import BgShape3 from '../../public/images/Hero/bg3.avif'; 
import BgShape4 from '../../public/images/Hero/bg4.avif'; 
import Product1 from '../../public/images/Hero/kabab.png'; 
import Product2 from '../../public/images/Hero/burger.png'; 
import Product3 from '../../public/images/Hero/rasmalai.png'; 
import Product4 from '../../public/images/Hero/dahi.png'; 
import Badge1 from '../../public/images/Hero/canadapurple.png'; 
import Badge2 from '../../public/images/Hero/paneer.png'; 
import Badge3 from '../../public/images/Hero/canadagreen.png'; 
import Badge4 from '../../public/images/Hero/canadablue.png'; 
import Badge5 from '../../public/images/Hero/veg.png'; 

const slidesData = [
  {
    id: 1,
    title: "Yogurt & kilantro",
    titleColor: "text-titleveggie",
    bgColor: "bg-heroyellow", 
    bgPattern: BgShape1,     
    mainImage: Product1,
    badges: { topLeft: Badge1, bottomRight: Badge2 } 
  },
  {
    id: 2,
    title: "Paneer & Mixed Veggies",
    titleColor: "text-titleveggie",
    bgColor: "bg-mandalapurpledark", 
    bgPattern: BgShape2,     
    mainImage: Product2,
    badges: { topLeft: Badge3, bottomRight: null } 
  },
  {
    id: 3,
    title: "Indian Dessert Delicacy",
    titleColor: "text-mandalapurpledark",
    bgColor: "bg-marquee", 
    bgPattern: BgShape3,     
    mainImage: Product3,
    badges: { topLeft: Badge3, bottomRight: null } 
  },
  {
    id: 4,
    title: "Plain Home-Style Yogurt",
    titleColor: "text-white",
    bgColor: "bg-herocyan", 
    bgPattern: BgShape4,     
    mainImage: Product4,
    badges: { topLeft: Badge4, bottomRight: Badge5 } 
  }
];

const MainHeroSlider = () => {
  return (
    <section className="relative w-full h-auto  overflow-hidden font-degular flex flex-col pb-20 z-0 min-h-[1200px]">
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 20000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="h-full w-full flex-grow relative z-10"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className={`${slide.bgColor} transition-colors duration-1000 h-auto`}>
            <div className="w-full h-full flex flex-col items-center justify-center pt-24 pb-48 px-4 text-center relative z-10 min-h-[1200px]">
              
              <h1 className={`font-venice text-[10vw] md:text-[80px] lg:text-[100px] leading-[0.85] font-black uppercase tracking-[-2px] mb-12 md:mb-16 max-w-4xl ${slide.titleColor} z-50`}>
                {slide.title}
              </h1>
              <div className="relative w-full max-w-[280px] md:max-w-[450px] aspect-[4/3] flex justify-center items-center mb-6 md:mb-8">
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-20 z-0">
                  <img 
                    src={slide.bgPattern} 
                    alt="Background Pattern" 
                    className="w-[130%] h-[130%] md:w-[180%] md:h-[180%]  max-w-none object-contain" 
                  />
                </div>
                <img 
                  src={slide.mainImage} 
                  alt={slide.title} 
                  className="relative z-50 w-full lg:h-[120%] lg:w-[115%]  h-auto object-cover drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)] animate-float" 
                />
                {slide.badges.topLeft && (
                  <img 
                    src={slide.badges.topLeft} 
                    alt="Badge Left" 
                    className="absolute z-30 top-[0%] -left-[12%] md:-left-[15%] w-[90px] md:w-[150px] drop-shadow-xl" 
                  />
                )}
                {slide.badges.bottomRight && (
                  <img 
                    src={slide.badges.bottomRight} 
                    alt="Badge Right" 
                    className="absolute z-30 bottom-[0%] -right-[12%] md:-right-[15%] w-[90px] md:w-[150px] drop-shadow-xl" 
                  />
                )}
                <div className="absolute w-full h-full z-10 pointer-events-none inset-0">
                    <img 
                      src={SparkleImg} 
                      alt="Sparkle" 
                      className="absolute top-[10%] right-[0%] w-8 h-8 md:w-12 md:h-12 animate-[spin_20s_linear_infinite]" 
                    />
                    <img 
                      src={SparkleImg} 
                      alt="Sparkle" 
                      className="absolute bottom-[10%] left-[0%] w-8 h-8 md:w-12 md:h-12 animate-[spin_20s_linear_infinite]" 
                    />
                </div>
              </div>
              <div className="flex flex-row gap-3 md:gap-5 items-center z-30 relative ">
                <button className="inline-flex items-center h-[52px] px-7 rounded-lg text-sm md:text-base font-bold bg-[#FCFAF8] text-main hover:scale-105 active:scale-95 transition-all shadow-lg">
                  View Product
                  <div className="bg-main rounded-md p-1 ml-3 flex items-center justify-center">
                    <FaAngleRight className="text-white text-xs" />
                  </div>
                </button>
                
                <button className="inline-flex items-center h-[52px] px-7 rounded-lg text-sm md:text-base font-bold bg-transparent text-[#FCFAF8] border-[1.5px] border-[#FCFAF8] ">
                  Find Product
                  <div className="border border-[#FCFAF8] rounded-md p-1 ml-3 flex items-center justify-center ">
                    <FaAngleRight className="text-xs text" />
                  </div>
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        .swiper-pagination-bullet {
          background: #FCFAF8 !important;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px; 
          border-radius: 4px;
        }
        .swiper-pagination {
          bottom: 250px !important;
          z-index: 40 !important;
        }
        .swiper-slide {
          pointer-events: auto !important;
          height: auto !important;
        }
        .swiper-wrapper {
          height: auto !important;
        }
      `}</style>

    </section>
  );
};

export default MainHeroSlider;