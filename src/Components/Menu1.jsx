import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { BgShape } from './BackgroundShapes';
import Marquee from 'react-fast-marquee';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Samosa25pcs from '../../public/images/Dishes/samosa-25pcs.avif';
import SamosaMedium from '../../public/images/Dishes/samosa-plasticpacked.avif';
import SamosaBox from '../../public/images/Dishes/samosa-box.avif';
import SamosaPack from '../../public/images/Dishes/samosa-pack.avif';
import Superfan1 from '../../public/images/Dishes/superfan.avif'
import Superfan2 from '../../public/images/Dishes/superfan2.avif'
import SamosaOrange from '../../public/images/Dishes/samosa-orange.avif'
import SamosaPink from '../../public/images/Dishes/samosa-pink.avif'
import SamosaGreen from '../../public/images/Dishes/samosa-green.avif'
import Kabab from '../../public/images/Dishes/Kabab.avif'
import KajuKatli from '../../public/images/Dishes/KajuKatli.avif'
import MilkCake from '../../public/images/Dishes/milkcake.avif'
import MotiChorLadoo from '../../public/images/Dishes/motichoor.avif'
import MangoRasmalai from '../../public/images/Dishes/mango-rasmalai.avif'
import BesanBarfi from '../../public/images/Dishes/besan-barfi.avif'
import KhoaBarfi from '../../public/images/Dishes/khoa-barfi.avif'
import Rasmalai from '../../public/images/Dishes/Rasmalai.avif'
import Makhani from '../../public/images/Dishes/Makhani.avif'
import MalaiPaneer from '../../public/images/Dishes/MalaiPaneer.avif'
import Ghee from '../../public/images/Dishes/ghee.avif'
import ShiriKhand from '../../public/images/Dishes/shirikhand.avif'
import Dahi from '../../public/images/Dishes/dahi.avif'

import Blue from '../../public/images/svgs/blue.svg';
import Star from '../../public/images/svgs/star.svg';
import Purple from '../../public/images/svgs/purple.svg';
import Orange from '../../public/images/svgs/orange.svg';
import Yellow from '../../public/images/svgs/yellow.svg';
import LeftArrowIcon from '../../public/images/svgs/leftarrow.svg';
import RightArrowIcon from '../../public/images/svgs/rightarrow.svg';
import CheckIcon from '../../public/images/svgs/tick.svg';
import DropdownIcon from '../../public/images/svgs/dropdown.svg';


const categories = [
  { id: 'all', label: 'Most Popular', icon: Star },
  { id: 'samosas', label: 'Samosas', icon: Yellow },
  { id: 'desserts', label: 'Desserts', icon: Purple },
  { id: 'snacks', label: 'Snacks', icon: Orange },
  { id: 'dairy', label: 'Dairy', icon: Blue },
];

const products = [
  {
    id: 1,
    category: 'samosas',
    image: Samosa25pcs,
    title: 'Potatoes & Peas Samosas (25 piece)',
    tags: ['Vegetarian', 'Halal', 'GelatinFree'],
    description: 'Gametime Special',
    shapeId: 'shape1',
    shapeColor: 'text-black',
  },
  {
    id: 2,
    category: 'samosas',
    image: SamosaMedium,
    title: 'Potatoes & Peas Samosas (12 piece)',
    tags: ['Vegetarian', 'Halal', 'GelatinFree'],
    description: 'Gametime Special',
    shapeId: 'shape1',
    shapeColor: 'text-black',
  },
  {
    id: 3,
    category: 'samosas',
    image: SamosaBox,
    title: 'Potatoes & Peas Samosas (4 piece)',
    tags: ['Vegetarian', 'Halal', 'GelatinFree'],
    description: 'Gametime Special',
    shapeId: 'shape1',
    shapeColor: 'text-black',
  },
  {
    id: 4,
    category: 'samosas',
    image: SamosaPack,
    title: 'Potaotes & Peas Samosas (6 piece)',
    tags: ['Vegetarian', 'Halal', 'GelatinFree'],
    description: 'Gametime Special',
    shapeId: 'shape1',
    shapeColor: 'text-black',
  },
  {
    id: 5,
    category: 'snacks',
    image: Superfan1,
    title: 'Spicy Tandoori Pizza & Spicy Potatoes & Peas',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalaorange'
  },
  {
    id: 6,
    category: 'snacks',
    image: Superfan2,
    title: 'Spicy Tandoori Paneer & Spicy Potatoes & Peas',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalapurple'
  },
  {
    id: 7,
    category: 'snacks',
    image: SamosaPink,
    title: 'Dosa Masala Samosas',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalapurple'
  },
  {
    id: 8,
    category: 'snacks',
    image: SamosaOrange,
    title: 'Cheese Pizza Samosas',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalaorange'
  },
  {
    id: 9,
    category: 'snacks',
    image: SamosaGreen,
    title: 'Potatoes & Peas Samosas',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalacyan'
  },
  {
    id: 10,
    category: 'snacks',
    image: Kabab,
    title: 'Dahi Ke Kabab',
    tags: ['Vegetarian', 'Halal', 'High in Protein'],
    description: 'BBQ Style',
    shapeId: 'shape3',
    shapeColor: 'text-mandalalightyellow'
  },
  {
    id: 11,
    category: 'desserts',
    image: KajuKatli,
    title: 'Kaju Katli',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Traditional Dessert',
    shapeId: 'shape1',
    shapeColor: 'text-mandalabrown'
  },
  {
    id: 12,
    category: 'desserts',
    image: MilkCake,
    title: 'Milk Cake',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalayellow'
  },
  {
    id: 13,
    category: 'desserts',
    image: MotiChorLadoo,
    title: 'Motichoor Ladoo',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalablue'
  },
  {
    id: 14,
    category: 'desserts',
    image: MangoRasmalai,
    title: 'Mango Rasmalai',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalapurple'
  },
  {
    id: 15,
    category: 'desserts',
    image: BesanBarfi,
    title: 'Besan Barfi',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalablue'
  },
  {
    id: 16,
    category: 'desserts',
    image: KhoaBarfi,
    title: 'Khoa Barfi',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalaorange'
  },
  {
    id: 17,
    category: 'desserts',
    image: Rasmalai,
    title: 'Elaichi Rasmalai',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape1',
    shapeColor: 'text-mandalapink',
  },
  {
    id: 18,
    category: 'dairy',
    image: Makhani,
    title: 'Makhani (500g)',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape2',
    shapeColor: 'text-mandalaorange',
  },
  {
    id: 19,
    category: 'dairy',
    image: MalaiPaneer,
    title: 'Malai Paneer (375g)',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape2',
    shapeColor: 'text-mandalablue',
  },
  {
    id: 20,
    category: 'dairy',
    image: Ghee,
    title: 'Pure Desi Ghee (800g)',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape2',
    shapeColor: 'text-mandalablue',
  },
  {
    id: 21,
    category: 'dairy',
    image: ShiriKhand,
    title: 'Nut Mix Shrikhand',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape2',
    shapeColor: 'text-mandalapurple',
  },
  {
    id: 22,
    category: 'dairy',
    image: Dahi,
    title: 'Malai Dahi 6% (650g)',
    tags: ['Vegetarian', 'Sweet', 'GelatinFree'],
    description: 'Soft Cheese',
    shapeId: 'shape2',
    shapeColor: 'mandalaorange',
  },
];

const Menu1 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sliderRef = useRef(null);
  const activeLabel = categories.find(c => c.id === activeCategory)?.label;

  return (
    <section className="w-full  min-h-screen 2xl:min-h-[80vh] py-0 px-4 font-venice overflow-hidden mx-auto relative bottom-40 overflow-x-hidden
    ">
      <div className="w-full max-w-full lg:max-w-[103rem] mx-auto mb-0 relative z-30">
        <div className='flex items-center justify-center overflow-hidden px-0 font-degular '>
          <Marquee speed={100} pauseOnHover={true} className='bg-marquee text-black pt-4 pb-6 uppercase rounded-t-2xl '>
            <span className='font-medium mx-4'>Bringing you the best in snacks, desserts & dairy</span>
            <span className='font-bold mx-3 '>• Vegeterian Done Better•  </span>
            <span className='font-medium mx-4'>Bringing you the best in snacks, desserts & dairy</span>
            <span className='font-bold mx-3 '>• Vegeterian Done Better•  </span>
          </Marquee>
        </div>

        <div className='relative bottom-3 bg-bgmenu rounded-2xl  py-5 '>



          <div className="hidden  lg:flex items-center justify-center gap-8 bg-bgmenu  ">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeCategory === cat.id
                  ? 'bg-[#211f20] text-white shadow-lg scale-105'
                  : 'text-[#211f20] hover:bg-white/50'
                  }`}
              >
                <img src={cat.icon} alt="" className={`w-5 h-5 ${activeCategory === cat.id ? 'brightness-0 invert' : ''}`} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden relative flex justify-center bg-bgmenu">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-64 bg-[#211f20] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl"
            >
              <span className="flex items-center gap-2">
                <img src={Blue} alt="" className="w-5 h-5 invert text-white" />
                {activeLabel}
              </span>

              <img src={DropdownIcon} className={`w-[20px] bg-white text-black border-2 border-white rounded-md transition-transform   ${isDropdownOpen ? 'rotate-90' : 'rotate-120'}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 animate-fade-in-up z-50">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-4 font-bold flex items-center gap-3 transition-colors ${activeCategory === cat.id ? 'bg-[#fdf8f0] text-[#ff5722]' : 'text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    <img src={cat.icon} alt="" className="w-5 h-5" />
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full max-w-full lg:max-w-[103rem] mx-auto bg-bgmenu">
            <Swiper
              ref={sliderRef}
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="product-swiper !pb-20 "
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className=" ">
                  {({ isActive }) => (
                    <div
                      className={`relative flex flex-col items-center justify-center transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60 blur-[1px]'
                        }`}
                    >
                      <div className="relative w-[300px] h-[300px] flex items-center justify-center mb-6 mt-10">
                        <BgShape
                          variant={product.shapeId}
                          className={`absolute inset-0 w-full h-full transition-all duration-700
                        ${isActive
                              ? `animate-[spin_10s_linear_infinite] opacity-100 ${product.shapeColor}`
                              : 'text-gray-300 opacity-30'
                            }
                          `}
                        />

                        <img
                          src={product.image}
                          alt={product.title}
                          className="relative z-10 w-[80%] h-[80%] object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="text-center space-y-3 relative z-20">
                        <h3 className="text-4xl font-black text-[#211f20] uppercase tracking-tighter leading-none">
                          {product.title}
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          {product.tags.map((tag, idx) => (
                            <span key={idx} className="flex items-center gap-1.5 text-sm font-bold text-[#211f20]">
                              <div className="w-5 h-5 rounded-full bg-[#ff5722] flex items-center justify-center text-white text-xs">
                                <img src={CheckIcon} className="w-3 h-3" />
                              </div>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full sm:w-max max-w-4xl mx-auto mt-2 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-2 bg-transparent sm:bg-[#211f20] px-0 sm:px-3 border-none sm:border rounded-xl py-0 sm:py-2">

            <div className="flex items-center gap-4 sm:gap-6 bg-transparent sm:bg-[#211f20] p-0 sm:p-2 rounded-full sm:pr-6 sm:pl-2 shadow-none sm:shadow-2xl">

              <button
                onClick={() => sliderRef.current?.swiper.slidePrev()}
                className="w-10 h-10 rounded-xl sm:rounded-full bg-[#211f20] sm:bg-white/10 hover:opacity-80 sm:hover:bg-white text-white sm:hover:text-black flex items-center justify-center transition-all rotate-180"
              >
                <img src={LeftArrowIcon} className="w-4 h-4 sm:w-auto" />
              </button>


              <div className="custom-pagination  !w-auto flex items-center justify-center gap-2 "></div>
              <button
                onClick={() => sliderRef.current?.swiper.slideNext()}
                className="w-10 h-10 rounded-xl sm:rounded-full bg-[#211f20] sm:bg-white/10 hover:opacity-80 sm:hover:bg-white text-white sm:hover:text-black flex items-center justify-center transition-all"
              >
                <img src={RightArrowIcon} className="w-4 h-4 sm:w-auto" />
              </button>
            </div>

            <button className="flex items-center gap-3 bg-white border-2 border-[#211f20] px-8 py-3 rounded-full sm:rounded-xl font-bold text-[#211f20] hover:bg-[#211f20] hover:text-white transition-all shadow-lg group">
              View All
              <div className="w-6 h-6 bg-[#211f20] text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <img src={RightArrowIcon} className="w-3 h-3 sm:w-auto" />
              </div>
            </button>

          </div>

        </div>
        <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 !important;
          !static !transform-none
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 20px;
          border-radius: 10px;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.2s ease-out forwards;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Menu1;




















