import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaArrowRight, FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import LogoMain from '../../public/images/Navbar/logo.svg';
import IconDairy from '../../public/images/Navbar/Catagories/Dairy.avif';
import IconDesserts from '../../public/images/Navbar/Catagories/Desserts.avif';
import IconSnacks from '../../public/images/Navbar/Catagories/Snacks.avif';
import IconSamosas from '../../public/images/Navbar/Catagories/Samosas.avif';
import IconVegan from '../../public/images/Navbar/Types/Vegan.avif';
import IconGelatinFree from '../../public/images/Navbar/Types/GelatinFree.avif';
import IconGlutenFree from '../../public/images/Navbar/Types/GlutenFree.avif';
import IconHalal from '../../public/images/Navbar/Types/Halal.avif';
import BurgerFeatured from '../../public/images/VeggieBurger.avif';
import BadgeCanadianFamily from '../../public/images/MadeInCanada_Yellow.avif';

const productCategories = [
  { name: 'DAIRY', icon: IconDairy },
  { name: 'DESSERTS', icon: IconDesserts },
  { name: 'SNACKS', icon: IconSnacks },
  { name: 'SAMOSAS', icon: IconSamosas },
  { name: 'ALL PRODUCTS', icon: null },
];

const productTypes = [
  { name: 'VEGAN', icon: IconVegan },
  { name: 'GELATIN FREE', icon: IconGelatinFree },
  { name: 'GLUTEN FREE', icon: IconGlutenFree },
  { name: 'HALAL', icon: IconHalal },
];

const DesktopMegaMenu = ({ isOpen, closeMenu }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[106rem] mt-3 z-40 animate-fade-in-up pointer-events-auto overflow-x-hidden">

      <div className="bg-white rounded-md shadow-2xl border-8 border-main overflow-hidden">
        <div className="p-8 flex gap-8 w-full max-h-[70vh] overflow-y-auto custom-scrollbar">

          <div className="flex-1">
            <h3 className="font-degular font-bold text-gray-900 mb-6">Product Categories</h3>
            <ul className="space-y-4">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <Link to="/products" onClick={closeMenu} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      {item.icon ? (
                        <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain rounded-lg bg-blue-50/50" />
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                          <FaArrowRight className="text-gray-400" />
                        </div>
                      )}
                      <span className="font-venice font-black text-lg text-gray-900">{item.name}</span>
                    </div>

                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-degular font-bold text-gray-900 mb-6">Type of Products</h3>
            <ul className="space-y-4">
              {productTypes.map((item, idx) => (
                <li key={idx}>
                  <Link to="/products" onClick={closeMenu} className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain rounded-lg" />
                      <span className="font-venice font-black text-lg text-gray-900">{item.name}</span>
                    </div>


                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-degular font-bold text-gray-900 mb-6">Featured</h3>
            <div className="bg-[#8b3a4a] rounded-3xl p-8 relative overflow-hidden min-h-[420px] flex flex-col justify-start">
              <div className="relative z-30 max-w-[60%]">
                <h2 className="font-venice text-5xl font-black text-white leading-none mb-4 uppercase">Veggie<br />Burger</h2>
                <p className="font-degular text-white/90 text-sm mb-6 leading-relaxed">
                  Home-style frozen veggie burgers with an Indian-style twist. Deliciously seasoned with our secret masala spice blend, these burgers are packed with paneer, carrots, corn, and potatoes—egg free, 100% vegetarian.
                </p>
                <Link to="/product/veggie-burger" onClick={closeMenu} className="inline-flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                  View Product
                  <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center">
                    <FaAngleRight />
                  </div>
                </Link>
              </div>
              <img src={BadgeCanadianFamily} alt="Canadian Family Recipe" className="absolute right-[38%] bottom-[12%] w-28 h-28 z-20 object-contain rotate-[-12deg]" />
              <img src={BurgerFeatured} alt="Veggie Burger Box" className="absolute -right-12 -bottom-16 w-[380px] object-contain rotate-[6deg] z-10" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const DesktopSearchMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-full mt-3 z-40 animate-fade-in-up pointer-events-auto px-6 overflow-x-hidden">
      <div className="bg-white rounded-[2rem] shadow-2xl  mx-auto border-4 border-white/50 ring-1 ring-gray-100 overflow-hidden py-8 px-12">
        <div className="flex items-center  bg-[#fcfaf8] border border-[#e5e5e5] rounded-[1rem] p-2 pl-6 gap-4">
          <FiSearch className="text-gray-900 text-2xl" />
          <input
            type="text"
            placeholder=""
            className="flex-1 bg-transparent outline-none text-xl font-degular text-gray-900"
            autoFocus
          />
          <button className="bg-main text-white px-8 py-3.5 rounded-xl font-bold text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, closeMenu }) => {
  const [view, setView] = useState('base');
  const [activeTab, setActiveTab] = useState('categories');

  useEffect(() => {
    if (!isOpen) setTimeout(() => setView('base'), 300);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 top-0 bg-[#cfa144] pt-[100px] px-4 pb-4 animate-fade-in flex flex-col pointer-events-auto w-full">
      <div className="flex-1 bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border-8 border-[#211f20]">
        <div className={`absolute w-full inset-0 p-8 flex flex-col overflow-y-auto pb-32 transition-transform duration-500 ease-in-out ${view === 'base' ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col gap-2 mb-auto">

            <button onClick={() => setView('products')} className="flex items-center justify-between text-left group w-full">
              <span className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">Products</span>
              <div className="w-10 h-10 bg-[#211f20] rounded-xl flex items-center justify-center text-white shrink-0">
                <FaAngleRight className="text-xl" />
              </div>
            </button>

            <Link to="/recipes" onClick={closeMenu} className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">Recipes</Link>
            <Link to="/about" onClick={closeMenu} className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">About Us</Link>
            <Link to="/news" onClick={closeMenu} className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">News</Link>
            <Link to="/contact" onClick={closeMenu} className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">Contact</Link>

            <button onClick={() => setView('search')} className="flex items-center justify-between text-left group w-full">
              <span className="font-venice text-6xl font-black text-[#ff5722] uppercase tracking-tighter leading-tight">Search</span>
              <div className="w-10 h-10 bg-[#211f20] rounded-xl flex items-center justify-center text-white shrink-0">
                <FaAngleRight className="text-xl" />
              </div>
            </button>

          </div>

          <div className="flex flex-col gap-3 mt-8">
            <a href="#" className="flex items-center gap-1 text-[#ff5722] font-bold text-lg">
              Instagram <FiArrowUpRight className="text-xl" />
            </a>
            <a href="#" className="flex items-center gap-1 text-[#ff5722] font-bold text-lg">
              Facebook <FiArrowUpRight className="text-xl" />
            </a>
          </div>
        </div>
        <div className={`absolute inset-0 bg-white p-6 flex flex-col transition-transform duration-500 ease-in-out overflow-y-auto pb-32 ${view === 'products' ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => setView('base')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-50">
              <FaAngleLeft className="text-2xl text-black" />
            </button>
            <div className="flex items-center gap-4 font-degular font-bold">
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-4 py-2 rounded-xl transition-colors ${activeTab === 'categories' ? 'bg-[#ffca28] text-black' : 'text-gray-500'}`}
              >
                Categories
              </button>
              <button
                onClick={() => setActiveTab('types')}
                className={`px-4 py-2 rounded-xl transition-colors ${activeTab === 'types' ? 'bg-[#ffca28] text-black' : 'text-gray-500'}`}
              >
                Types
              </button>
            </div>
          </div>
          <ul className="space-y-6">
            {(activeTab === 'categories' ? productCategories : productTypes).map((item, idx) => (
              <li key={idx}>
                <Link to="/products" onClick={closeMenu} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} className="w-16 h-16 object-contain rounded-xl" />
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-xl">
                        <FaArrowRight className="text-gray-400" />
                      </div>
                    )}
                    <span className="font-venice font-black text-2xl text-gray-900">{item.name}</span>
                  </div>
                  <div className="w-10 h-10 bg-[#211f20] rounded-xl flex items-center justify-center text-white shrink-0">
                    <FaArrowRight className="text-sm" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`absolute inset-0 bg-white p-6 flex flex-col transition-transform duration-500 ease-in-out ${view === 'search' ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => setView('base')} className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors relative z-50">
              <FaAngleLeft className="text-2xl text-black" />
            </button>
          </div>

          <div className="flex flex-col w-full h-full pt-4">
            <div className="flex items-center w-full bg-[#fcfaf8] border border-[#e5e5e5] rounded-[1rem] p-2 pl-4 gap-3">
              <FiSearch className="text-gray-900 text-xl" />
              <input
                type="text"
                placeholder=""
                className="flex-1 bg-transparent outline-none text-lg font-degular text-gray-900 w-full"
              />
              <button className="bg-[#211f20] text-white px-5 py-3 rounded-xl font-bold text-sm">
                Search
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Navbar = () => {
  const [isDesktopMegaMenuOpen, setIsDesktopMegaMenuOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
      if (window.innerWidth < 1024) {
        setIsDesktopMegaMenuOpen(false);
        setIsDesktopSearchOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const NavItem = ({ name, path }) => {
    const isActive = activeLink === name;
    return (
      <Link
        to={path}
        onClick={() => {
          setActiveLink(name);
          setIsDesktopMegaMenuOpen(false);
          setIsDesktopSearchOpen(false);
        }}
        className="relative py-1 hover:text-gray-300 transition-colors pointer-events-auto"
      >
        {name}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-full animate-fade-in"></span>
        )}
      </Link>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] font-degular pointer-events-none">

        <div className="relative w-full max-w-[106rem] mx-auto px-3 pt-4 lg:pt-6 z-50">
          <nav className="bg-[#211f20] rounded-xl lg:rounded-3xl px-4 py-2 lg:px-8 lg:py-6 flex items-center justify-between shadow-2xl relative z-50 pointer-events-auto">

            <div className="hidden lg:flex items-center space-x-3 2xl:space-x-8 text-white font-bold text-base tracking-wide">
              <button
                onClick={() => {
                  setIsDesktopMegaMenuOpen(!isDesktopMegaMenuOpen);
                  setIsDesktopSearchOpen(false);
                  setActiveLink('Products');
                }}
                className="relative flex items-center gap-2 py-1 hover:text-gray-300 transition-colors pointer-events-auto"
              >
                Products <FaChevronDown className={`transition-transform duration-300 ${isDesktopMegaMenuOpen ? 'rotate-180' : ''}`} />
                {activeLink === 'Products' && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-full animate-fade-in"></span>
                )}
              </button>

              <NavItem name="Recipes" path="/recipes" />
              <NavItem name="About Us" path="/about" />
              <NavItem name="News" path="/news" />

              <button
                onClick={() => {
                  setIsDesktopSearchOpen(!isDesktopSearchOpen);
                  setIsDesktopMegaMenuOpen(false);
                  setActiveLink('Search');
                }}
                className="relative flex items-center gap-2 py-1 hover:text-gray-300 transition-colors pointer-events-auto"
              >
                Search <div className="bg-white text-black p-1 rounded"><FiSearch className="text-xs" /></div>
                {activeLink === 'Search' && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-full animate-fade-in"></span>
                )}
              </button>
            </div>

            <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-50 pointer-events-auto">
              <Link to="/">
                <img src={LogoMain} alt="BRAR'S Logo" className="h-7 w-[75px] lg:h-10 lg:w-[150px]" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4 pointer-events-auto">
              <button className="bg-white text-black px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Find Product
                <div className="bg-black text-white p-1 rounded-lg"><FaAngleRight className="text-xs" /></div>
              </button>
              <button className="border border-white/30 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-black transition-colors group">
                Dine with Us
                <div className="bg-white text-black p-1 rounded-lg group-hover:bg-black group-hover:text-white transition-colors"><FaAngleRight className="text-xs" /></div>
              </button>
            </div>


            <div className="flex lg:hidden items-center gap-2 ml-auto z-50 pointer-events-auto">

              <button className="border border-white/30 text-white px-3 py-2 rounded-xl font-bold text-xs hover:bg-white/10 transition-colors">
                Find Product
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-9 bg-white rounded-xl flex flex-col justify-center items-center gap-1.5 relative overflow-hidden focus:outline-none"
              >
                <span className={`w-5 h-[2px] bg-black block relative transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 top-[4px]' : 'top-0'}`} />
                <span className={`w-5 h-[2px] bg-black block relative transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 bottom-[4px]' : 'bottom-0'}`} />
              </button>

            </div>
          </nav>

          <DesktopMegaMenu
            isOpen={isDesktopMegaMenuOpen}
            closeMenu={() => setIsDesktopMegaMenuOpen(false)}
          />

          <DesktopSearchMenu
            isOpen={isDesktopSearchOpen}
          />
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default Navbar;











