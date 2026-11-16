import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-transparent pt-10 pb-10 flex flex-col items-center justify-end select-none">
      {/* هاله نوری ملایم از رنگ برند */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-100  bg-[#3525cd]/10 blur-[120px] pointer-events-none rounded-full"
      />

      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <h2 className="font-changa text-[17vw] sm:text-[20vw] tracking-normal leading-[0.9] text-center select-none bg-linear-to-b from-black via-black/30 to-transparent bg-clip-text text-transparent">
          FaraList
        </h2>
      </div>
    </footer>
  );
};
