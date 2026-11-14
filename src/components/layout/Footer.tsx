import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-white pt-16 pb-0 flex flex-col items-center justify-end select-none">
      {/* هاله نوری ملایم از رنگ برند */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-44 bg-[#3525cd]/10 blur-[120px] pointer-events-none rounded-full" 
      />

      {/* تایپوگرافی بزرگ FaraList با نیمه سایه و فید در تم سفید */}
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <h2
          className="text-[17vw] sm:text-[18vw] font-black tracking-tighter leading-[0.85] text-center select-none bg-gradient-to-b from-black via-black/20 to-transparent bg-clip-text text-transparent translate-y-[10%]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 80%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 80%)',
          }}
        >
          FaraList
        </h2>

        {/* لایه گرادیان فید سفید روی نیمه پایینی متن */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none" 
        />
      </div>
    </footer>
  );
};
