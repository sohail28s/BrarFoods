import React from 'react';
import BgShape from '../../public/images/mandala-spin.svg'; 

const SpinningWheel = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      
      <img 
        src={BgShape} 
        alt="" 
        className="absolute top-1/2 left-1/2 min-w-[120%] min-h-[120%] object-cover opacity-100"
        style={{
            animation: 'slow-rotate 60s linear infinite',
            transformOrigin: 'center center'
        }}
      />

      <style>{`
        @keyframes slow-rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg) scale(1.2);
          }
        }
      `}</style>

    </div>
  );
};

export default SpinningWheel;