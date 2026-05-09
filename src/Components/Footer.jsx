import React from 'react';
import Marquee from 'react-fast-marquee'; 
import { FaInstagram, FaFacebookF, FaTiktok, FaArrowRight } from "react-icons/fa6";
import Logo from '../../public/images/Navbar/logo.svg';


const Footer = () => {
  return (
    <footer className="w-full bg-main text-white font-venice 
     pt-56 xl:pt-60 
       pb-20 px-6 z-50">
    
      <div className="flex flex-col justify-center items-center gap-6 mb-16">
        <img src={Logo} alt="Brar's Logo" className="h-16" />
        
        <div className="w-full xl:hidden">
            <Marquee speed={25} pauseOnHover={true} className="overflow-hidden py-2">
                <div className='font-venice text-4xl font-extrabold tracking-tighter text-yellowfooter xl:hidden'>
                    <span className='uppercase mx-4'>#VegetariandoneBetter</span> 
                </div>
            </Marquee>
        </div>

        <div className="hidden xl:block text-center">
             <div className="font-venice xl:text-6xl xl:font-extrabold xl:tracking-tighter xl:text-yellowfooter xl:uppercase xl:items-center">
                <span>#VegetariandoneBetter</span>
             </div>
        </div>
        
      </div>


      <div className="max-w-96 xl:max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-20 mb-16 place-content-center xl:place-content-between justify-items-center xl:justify-items-stretch">
        
        <div className='grid grid-cols-2 w-full xl:col-span-2 gap-8 text-center xl:text-left'>
            <div className="flex flex-col gap-2">
               {['HOME', 'PRODUCTS', 'WHERE TO BUY', 'RECIPES'].map((item) => (
                 <a key={item} href="#" className="text-xl font-black uppercase tracking-normal">
                   {item}
                 </a>
               ))}
            </div>

            <div className="flex flex-col gap-2">
               {['ABOUT US', 'NEWS', 'CONTACT US', 'TERMS OF USE', 'PRIVACY POLICY'].map((item) => (
                 <a key={item} href="#" className="text-xl font-black uppercase tracking-normal">
                   {item}
                 </a>
               ))}
            </div>
        </div>

        <div className="flex flex-col gap-6 mx-auto xl:mx-0 w-full xl:items-start">
          <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start xl:text-left'>
            <h3 className="text-lg font-black uppercase tracking-normal">SUBSCRIBE</h3>
            <p className="text-sm font-medium leading-relaxed font-degular">
              Sign up for the latest updates and exclusive offers from Brar's.
            </p>
          </div>

            <form className="flex flex-col gap-4 px-6 xl:px-0 w-full">
                <div className="relative border-b border-white/30 focus-within:border-white transition-colors pb-2">
                    <input 
                      type="text" 
                      placeholder="Full Name*" 
                      className="w-full bg-transparent outline-none text-white placeholder:text-white font-bold text-sm"
                    />
                </div>
                
                <div className="relative border-b border-white/30 focus-within:border-white transition-colors pb-2 flex items-center justify-between">
                    <input 
                      type="email" 
                      placeholder="Email Address*" 
                      className="w-full bg-transparent outline-none text-white placeholder:text-white font-bold text-sm"
                    />
                    <button type="submit" className="bg-white text-black w-6 h-6 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                        <FaArrowRight className="text-[10px]" />
                    </button>
                </div>
            </form>

            <div className="flex items-start gap-3 mt-2 px-6 xl:px-0">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1 w-4 h-4 border border-white rounded cursor-pointer accent-white bg-transparent shrink-0"
                />
                <label htmlFor="consent" className="text-xs leading-tight cursor-pointer select-none font-degular font-light text-left">
                   *Yes, I would like to receive updates, promotions, and offers from Brar's Retail & Restaurants. I understand I can unsubscribe at any time.
                </label>
            </div>
        </div>

        <div className="flex flex-row xl:flex-col gap-8 text-center xl:text-center justify-center xl:justify-start w-full xl:items-center">
            
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-black uppercase">CONTACT US</h3>
                <div className='font-degular leading-normal transition-colors text-base opacity-80'>
                    <p>+1.905.502.7277</p>
                    <p>info@oicfoods.com</p>
                    <p>sales@oicfoods.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-black uppercase tracking-wide">HEAD OFFICE</h3>
                <p className="text-base opacity-80 leading-normal font-degular">
                    Ontario Impex of Canada <br />
                    190 Statesman Drive <br />
                    Mississauga, Ontario L5S 1X7
                </p>
            </div>

        </div>

      </div>
      
      <div className="flex gap-4 mt-4 justify-center">
          <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"><FaInstagram /></a>
          <a href="#" className="w-12 h-12 border-white rounded-full flex items-center justify-center transition-colors"><FaFacebookF /></a>
          <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"><FaTiktok /></a>
      </div>

    </footer>
  );
};

export default Footer;












