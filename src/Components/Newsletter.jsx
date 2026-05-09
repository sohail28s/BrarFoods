import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import StarIcon from '../../public/images/Newsletter/since1986.svg';  
import MaroonBadge from '../../public/images/Newsletter/newimproved.svg'; 
import OrangeBadge from '../../public/images/Newsletter/madeincanada.svg'; 

const NewsletterCard = () => {
  return (
    <section className="w-full px-4 absolute z-30  pointer-events-none 
    -bottom-[375rem]
   md:-bottom-[410rem]
    lg:-bottom-[425rem]
   xl:-bottom-[415rem]
   2xl:-bottom-[405rem]
   
  



    
    ">
  <div className="w-full max-w-[1200px] mx-auto relative pointer-events-auto">
        <div className="bg-[#cbb6e2] rounded-lg  p-8 md:p-16 flex flex-col items-center text-center shadow-2xl relative z-10">
          
          <h2 className="font-venice text-[13vw] md:text-[5rem] lg:text-[7.5rem] leading-[0.8] font-black uppercase tracking-tighter text-[#211f20] mb-6">
            Spice Up <br />Your Inbox
          </h2>
          
          <p className="text-[#211f20] text-base md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
            Get special offers and all the latest products, recipes, and news delivered to your inbox!
          </p>

          <form className="w-full max-w-4xl flex flex-col lg:flex-row gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Full Name*" 
              className="flex-1 bg-white rounded-lg px-6 py-4 text-[#211f20] font-bold outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black transition-all"
            />
            <input 
              type="email" 
              placeholder="Email Address*" 
              className="flex-1 bg-white rounded-lg px-6 py-4 text-[#211f20] font-bold outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black transition-all"
            />
            <button className="bg-[#211f20] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-transform hover:scale-105 active:scale-95">
              Submit 
              <div className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                <FaArrowRight />
              </div>
            </button>
          </form>

          <div className="flex items-start gap-3 max-w-lg text-left">
             <input 
               type="checkbox" 
               className="mt-1 w-5 h-5 border-2 border-[#211f20] rounded cursor-pointer accent-[#211f20]" 
             />
             <p className="text-[10px] md:text-xs font-bold text-[#211f20] opacity-70 leading-tight">
               *Yes, I would like to receive updates, promotions, and offers from Brar's Retail & Restaurants. I understand I can unsubscribe at any time.
             </p>
          </div>

        </div>

        <img 
          src={StarIcon} 
          alt="Since 1986" 
          className="hidden lg:block absolute -top-12 :-left-6 md:-top-20 md:-left-15 w-24 md:w-44 z-50 "
        />
        <img 
          src={MaroonBadge} 
          alt="New Improved" 
          className="absolute  
          -top-[2.5rem] 
          -right-3 
          md:-top-16 
          md:-right-0 
          w-20 
          md:w-36 
          z-50 
          rotate-12"
        />

        <img 
          src={OrangeBadge} 
          alt="Made in Canada" 
          className="absolute -bottom-12  md:-bottom-24 md:left-16 w-20 md:w-44 z-50 "
        />

      </div>
    </section>
  );
};

export default NewsletterCard;