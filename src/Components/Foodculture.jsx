import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaArrowRight } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';
import Blue from '../../public/images/svgs/blue.svg';
import Star from '../../public/images/svgs/star.svg';
import Purple from '../../public/images/svgs/purple.svg';
import Orange from '../../public/images/svgs/orange.svg';
import Yellow from '../../public/images/svgs/yellow.svg';


import Post1 from '../../public/images/Footer/dahi.avif';
import Post2 from '../../public/images/Footer/mango.avif';
import Post3 from '../../public/images/Footer/rice.avif';
import Post4 from '../../public/images/Footer/ghee.avif';
import Post5 from '../../public/images/Footer/veggie.avif';

import BgShape from '../../public/images/mandala-spin.svg';
import NewsletterCard from './Newsletter';

const socialImages = [Post1, Post2, Post3, Post4, Post5];

function FoodCulture() {
  return (
    <>
      <Marquee speed={50} pauseOnHover={true} className='bg-marquee text-black py-3 uppercase  overflow-hidden w-full'>
        <div className='flex flex-row gap-4 font-venice text-base font-black p-2'>

          <img src={Blue} />
          <span className=''>Dairy</span>
          <img src={Yellow} />
          <span className=''>Samosas</span>
          <img src={Orange} />
          <span className=''>Snacks</span>
          <img src={Purple} />
          <span className=''>Desserts</span>
          <img src={Blue} />
          <span className=''>Dairy</span>
          <img src={Yellow} />
          <span className=''>Samosas</span>
          <img src={Orange} />
          <span className=''>Snacks</span>
          <img src={Purple} />
          <span className=''>Desserts</span>
          <img src={Blue} />
          <span className=''>Dairy</span>
          <img src={Yellow} />
          <span className=''>Samosas</span>
          <img src={Orange} />
          <span className=''>Snacks</span>
          <img src={Purple} />
          <span className=''>Desserts</span>
          <span className=''>Dairy</span>
          <img src={Yellow} />
          <span className=''>Samosas</span>
          <img src={Orange} />
          <span className=''>Snacks</span>
          <img src={Purple} />
          <span className=''>Desserts</span>
          <span className=''>Dairy</span>
          <img src={Yellow} />
          <span className=''>Samosas</span>
          <img src={Orange} />
          <span className=''>Snacks</span>
          <img src={Purple} />
          <span className=''>Desserts</span>
        </div>
      </Marquee>


      <section className="w-full bg-orangefooter pt-10  font-venice flex flex-col items-center justify-center text-center overflow-hidden z-0">
        <div className="bg-orangebg text-white px-3 py-3 rounded-md font-black text-xl tracking-tighter uppercase mb-8 shadow-sm">
          Stay in Touch
        </div>
        <h2 className="text-white text-3xl md:text-5xl lg:text-7xl leading-[0.85] font-black uppercase tracking-tighter mb-16 drop-shadow-sm px-3">
          Follow <br />
          @Brarsfoodculture <br />
          For More
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

          <a href="#" className="group bg-orangebg rounded-2xl p-4 flex items-center justify-between transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 text-white">
              <FaInstagram className="text-2xl" />
              <span className="font-bold text-lg pt-1">Instagram</span>
            </div>
            <div className="bg-white text-orangebg w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
              <FaArrowRight />
            </div>
          </a>

          <a href="#" className="group bg-orangebg rounded-2xl p-4 flex items-center justify-between transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 text-white">
              <FaFacebookF className="text-xl" />
              <span className="font-bold text-lg pt-1">Facebook</span>
            </div>
            <div className="bg-white text-orangebg w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
              <FaArrowRight />
            </div>
          </a>

          <a href="#" className="group bg-orangebg rounded-2xl p-4 flex items-center justify-between transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 text-white">
              <FaTiktok className="text-xl" />
              <span className="font-bold text-lg pt-1">TikTok</span>
            </div>
            <div className="bg-white text-orangebg w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
              <FaArrowRight />
            </div>
          </a>

        </div>
        <Marquee
          speed={50} pauseOnHover={true} direction="right"
        >
          <div className="flex gap-2  py-3 px-2 mt-10">

            {[...socialImages, ...socialImages, ...socialImages].map((img, index) => (
              <div
                key={index}
                className="relative w-52 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shrink-0 group/card  cursor-pointer"
              >
                <img
                  src={img}
                  alt="Social Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-bold z-20">
                  <FaInstagram className="text-sm" /> Instagram
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-100 flex items-center justify-center z-30">
                  <div className=" bg-transparent text-white  font-bold text-base flex items-center gap-2">
                    View Post <FaArrowRight className="text-sm -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>


        <div className="relative w-full min-h-[700px] overflow-hidden flex justify-center pt-32 z-0 ">
          <img
            src={BgShape}
            alt="Spinning Background"
            className="absolute  object-contain pointer-events-none z-0 animate-[spin_15s_linear_infinite] origin origin-center rotate-45 w-[900px] "
          />
        </div>
      </section>
    </>
  )
}
export default FoodCulture;












