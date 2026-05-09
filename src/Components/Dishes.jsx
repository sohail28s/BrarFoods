import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

import CanadaSticker from '../../public/images/CanadaStickerPurple.avif';
import Group from '../../public/images/group.avif';
import Celebrate from '../../public/images/celebrate.avif';


const Dishes = () => {
    return (
        <section className="w-full bg-[#fdf8f0] overflow-hidden">
           
            <div className="relative w-full max-w-[1300px] 2xl:max-w-[90rem] mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-14 xl:pb-5 flex flex-col">

                <div className="relative z-10">
                    <h1 className="absolute -top-[2rem] lg:static font-venice text-center lg:text-start text-[13vw]  lg:text-[8.5rem] leading-[0.8] tracking-tighter uppercase text-[#0a0a0a]">
                        Rooted in <br className="hidden md:block" />
                        <span className="relative">
                            Tradition,
                           
                            <img 
                                src={CanadaSticker} 
                                alt="Made in Canada"
                                className="hidden lg:block absolute -right-40 -top-13 w-40 lg:-top-[7.5rem] xl:w-48 z-50"
                            />
                        </span>
                    </h1>
                </div>

                <div className="relative mt-8 lg:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className="relative lg:col-span-8">
                    
                        <img 
                            src={CanadaSticker} 
                            alt="Made in Canada"
                            className="lg:hidden absolute -right-[13rem] bottom-[5rem] -top-12 w-28 z-20 animate-[spin_12s_linear_infinite]"
                        />
                        
                        <img 
                            src={Group} 
                            alt="Brar's Product Collection" 
                            className="w-full h-auto object-contain relative" 
                        />
                    </div>

                    <div className=" absolute items-center text-center lg:static lg:items-start lg:text-left lg:col-span-4   flex flex-col gap-3 lg:pl-8   top-[20rem]  md:top-[36rem]">
                        <p className="font-degular text-lg  font-medium leading-relaxed text-[#0a0a0a]">
                            We’re on a mission to share our love of authentic, vegetarian Indian cuisine with every Canadian. 
                            That’s why you’ll never see food on the shelves that we wouldn’t serve up at our own family function.
                        </p>
                        
                        <button className="w-fit bg-[#0a0a0a] text-white pl-6 pr-2 py-2 rounded-xl font-bold text-sm md:text-base flex items-center gap-4 transition-transform hover:scale-105 group text-center">
                            Learn More
                            <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#ff5722] group-hover:text-white transition-colors">
                                <FaAngleRight />
                            </div>
                        </button>
                    </div>

                </div>

                <div className="relative mt-12 pb-0 lg:mt-4">
                    
                    <img 
                        src={Celebrate} 
                        className="absolute -left-7  md:-left-12 -top-[6rem] md:top-0 md:-translate-y-1/2 w-28 md:w-40 lg:w-52 z-20 rotate-[-12deg]"
                    />

                    <h2 className="font-venice text-[11vw]  left-[3rem] bottom-[4rem]  lg:text-[7rem] leading-[0.85] tracking-tighter uppercase text-black relative z-10 ml-8 md:ml-0 md:left-40 md:bottom-20">
                        Growing <br /> With <br />
                        Community
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default Dishes;