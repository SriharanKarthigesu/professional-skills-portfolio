import React, { forwardRef } from 'react';
import { portfolioConfig } from '../data/portfolioData';

/**
 * Page 0 (Left Wing): Pure Black background as requested
 */
export const CoverLeftPage = forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-density="hard"
      className="page relative w-full h-full bg-[#080607] select-none overflow-hidden shadow-2xl border-r-2 border-[#030203]"
      {...props}
    >
      <div className="w-full h-full" />
    </div>
  );
});
CoverLeftPage.displayName = 'CoverLeftPage';

/**
 * Page 1 (Right Wing): Official Front Cover
 * - New SCU logo (SLIIT CITY UNI) centered, below top
 * - "Professional Skills" & "PORTFOLIO" in vertical and horizontal center
 * - Name, Student ID, Y2S2 in bottom center
 * - Page number 01 at right bottom corner
 */
export const CoverRightPage = forwardRef(({ onCornerClick, ...props }, ref) => {
  const { student } = portfolioConfig;

  return (
    <div
      ref={ref}
      data-density="hard"
      className="page relative w-full h-full bg-[#EBDDC7] text-[#2C2523] select-none overflow-hidden shadow-2xl p-8 md:p-12 border-l border-[#C7A77B]/60"
      {...props}
    >
      {/* Clean Hairline Page Border: Same as other pages */}
      <div className="absolute inset-4 border border-[#C7A77B]/40 pointer-events-none z-20" />

      {/* Top Section: SCU Logo top center as attached */}
      <div className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="bg-white px-5 py-2.5 rounded-xl shadow-sm border border-[#C7A77B]/50 flex items-center justify-center">
          <img
            src="./images/scu_sliit_city_uni_logo_page1.png"
            alt="SCU SLIIT City Uni Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Center Section: Precisely Centered Vertically & Horizontally */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-6 z-10">
        <div className="w-28 h-0.5 bg-[#702F3B]/60 mx-auto mb-4" />

        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#3D141C]">
          Professional Skills
        </h2>

        {/* PORTFOLIO: Huge, Dark Brown (#2B0E14), perfectly centered */}
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#2B0E14] mt-2 mb-4 leading-none drop-shadow-sm">
          PORTFOLIO
        </h1>

        <div className="inline-block px-5 py-2 rounded-full bg-[#35141B] text-[#F7F1E5] text-xs md:text-sm font-mono font-bold tracking-wider shadow-sm border border-[#C7A77B]">
          Module Code : {student.moduleCode}
        </div>

        <div className="w-28 h-0.5 bg-[#702F3B]/60 mx-auto mt-5" />
      </div>

      {/* Bottom Section: Name, Student ID, Batch at the bottom */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 w-full text-center z-10 space-y-1">
        <div className="font-playfair text-lg md:text-xl font-bold text-[#2C2523]">
          Name : {student.name}
        </div>
        <div className="text-xs md:text-sm font-mono font-semibold text-[#5A504B]">
          Student ID : {student.studentId}
        </div>
        <div className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#702F3B] font-bold">
          {student.batch}
        </div>
      </div>

      {/* Page Number: Right Bottom Corner at Page Bottom */}
      <div className="absolute bottom-5 right-7 md:bottom-6 md:right-8 text-sm font-mono font-bold text-[#702F3B] z-10">
        01
      </div>
    </div>
  );
});
CoverRightPage.displayName = 'CoverRightPage';

export default CoverRightPage;
