
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import NewsImg1 from '../../public/images/Accordian/1.avif'; 
import NewsImg2 from '../../public/images/Accordian/2.avif'; 
import NewsImg3 from '../../public/images/Accordian/3.jpg'; 

const newsData = [
  {
    id: 1,
    category: 'LATEST NEWS',
    color: 'bg-heroyellow', 
    date: 'August 5, 2025',
    headline: "Our Small Story Wins Big At the Marketing Awards",
    description: `The "Growing With You" campaign, highlighting the importance of family and connection, earned Silver and Bronze recognitions.`,
    image: NewsImg1,
  },
  {
    id: 2,
    category: 'COMPANY UPDATES',
    color: 'bg-accblue', 
    date: 'July 4, 2025',
    headline: 'HELPING MORE KIDDOS TAKE THEIR FIRST STEPS',
    description: "Brar's and Trexo Robotics partner up to donate pediatric mobility devices to clinics in Toronto and BC.",
    image: NewsImg2,
  },
  {
    id: 3,
    category: 'PRODUCT NEWS',
    color: 'bg-marquee', 
    date: 'August 5, 2025',
    headline: `Brar's X Vikas Khanna`,
    description: "Brar’s partners with Chef Vikas Khanna to spotlight how its traditional ghee complements modern cuisine, celebrating quality and authenticity.",
    image: NewsImg3,
  }
];

const NewsAccordion = () => {
  const [activeId, setActiveId] = useState(1); 
  const [reloadKey, setReloadKey] = useState(0); 
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (id) => {
    if (isDesktop) {
     
      if (activeId === id) {
        setReloadKey(prev => prev + 1); 
      } else {
        setActiveId(id);
      }
    } else {
      setActiveId(activeId === id ? null : id);
    }
  };

  return (
    <section className="w-full px-4 py-10 bg-white font-venice">
      <div className="text-center mb-12 space-y-2">
        <h4 className="font-bold text-sm tracking-widest uppercase">What's New</h4>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
          The World of <br /> Brar's
        </h2>
      </div>
      
      <div className="w-full max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-2 xl:h-[420px] 2xl:h-[450px] overflow-hidden">
        
        {newsData.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              className={`
                relative transition-all duration-500 all-ease
                w-full ${isActive ? 'h-[500px]' : 'h-16'} 
                xl:h-full ${isActive ? 'xl:flex-[4]' : 'xl:w-14 xl:flex-none'}
              `}
            >
              <div className="flex flex-col xl:flex-row w-full h-full gap-2">
                <div 
                  onClick={() => handleTabClick(item.id)}
                  className={`
                  ${item.color} 
                  shrink-0 flex items-center justify-between px-6 z-20 rounded-[1.5rem] cursor-pointer
                  w-full h-16 
                  xl:w-14 xl:h-full xl:flex-col xl:justify-center xl:py-12 xl:px-0
                `}>
                  <h3 className={`
                     text-sm font-black uppercase tracking-wide text-black whitespace-nowrap
                     xl:rotate-[-90deg] xl:origin-center
                  `}>
                    {item.category}
                  </h3>
                  <div className={`
                    w-8 h-8 bg-black/10 rounded-full flex items-center justify-center xl:hidden transition-transform duration-300
                    ${isActive ? 'rotate-180' : 'rotate-0'}
                  `}>
                     <FaChevronDown className="text-xs text-black" />
                  </div>
                </div>
                <div className={`
                   ${item.color} 
                   flex-1 overflow-hidden rounded-[1.5rem]
                   transition-opacity duration-500
                   ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}>
                  
                  <div 
                   
                    key={`${item.id}-${reloadKey}`}
                    className={`
                      flex flex-col xl:flex-row w-full h-full
                      ${isActive ? 'animate-slide-up opacity-0' : 'opacity-0'}
                    `}
                    style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}
                  >
                    <div className="w-full xl:w-[45%] h-[40%] xl:h-full p-3 pl-0">
                      <img 
                        src={item.image} 
                        alt="News" 
                        className="w-full h-full object-cover  rounded-[1.2rem] shadow-sm ml-3" 
                      />
                    </div>
                    <div className="w-full xl:w-[55%] h-[60%] xl:h-full p-6 xl:p-8 flex flex-col justify-center text-left">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-2 opacity-80 text-black">
                        {item.date}
                      </p>
                      <h2 className="text-2xl xl:text-3xl font-black uppercase leading-[0.9] mb-4 text-black">
                        {item.headline}
                      </h2>
                      <p className="font-degular text-xs xl:text-sm font-medium leading-relaxed mb-6 opacity-90 text-black">
                        {item.description}
                      </p>
                      <button className="bg-white text-black px-5 py-2 rounded-xl font-bold text-xs inline-flex items-center gap-2 w-fit hover:scale-105 transition-transform shadow-sm">
                        Read More 
                        <div className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-[8px]">
                          <FaArrowRight />
                        </div>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
      <style>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUpFade 0.6s ease-out forwards;
        }
      `}</style>

    </section>
  );
};

export default NewsAccordion;