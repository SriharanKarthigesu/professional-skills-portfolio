import React, { forwardRef } from 'react';
import Page from './Page';
import { libraryCheckoutSlip, portfolioConfig } from '../data/portfolioData';
import { WaxSeal } from './VintageDecorations';

/**
 * Inside Back Cover (Page 35):
 * Vintage Library Checkout Slip & Circulation Card
 */
export const InsideBackCoverPage = forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="35"
      isLeft={true}
      footerNote="Archival Record • Library Circulation Slip"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Academic Repository
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              Circulation & Assessment Record
            </h2>
          </div>
          <div className="text-[10px] font-mono text-[#7A6F68] font-bold">
            ARCHIVE NO. 4012
          </div>
        </div>

        {/* Vintage Library Checkout Card Sleeve */}
        <div className="bg-[#F0E6D2] border border-[#C7A77B] p-3 rounded-lg shadow-sm mb-3">
          <div className="text-center pb-2 border-b border-dashed border-[#C7A77B] mb-2.5">
            <div className="text-xs font-mono font-bold tracking-widest text-[#702F3B]">
              {libraryCheckoutSlip.cardTitle}
            </div>
            <div className="text-[10px] font-mono text-[#7A6F68] mt-0.5">
              CALL NO: {libraryCheckoutSlip.callNumber}
            </div>
            <div className="text-xs font-mono text-[#2C2523] mt-1 font-bold">
              CANDIDATE: {libraryCheckoutSlip.borrower}
            </div>
          </div>

          {/* 12-Week Verification Stamps Grid */}
          <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
            {libraryCheckoutSlip.stamps.map((stamp, i) => (
              <div
                key={i}
                className="border border-[#C7A77B]/60 bg-[#FBF8F1] p-1.5 rounded text-center flex flex-col justify-center shadow-xs"
              >
                <div className="font-bold text-[#702F3B]">{stamp.week}</div>
                <div className="text-[#7A6F68] text-[9px]">{stamp.date}</div>
                <div className="text-emerald-700 font-extrabold text-[10px] tracking-tight">
                  ✓ {stamp.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Rubric Assessment Summary */}
        <div className="bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex-1 flex flex-col justify-between shadow-sm">
          <div className="text-xs font-mono uppercase font-bold text-[#702F3B] mb-1.5">
            Assessor Criterion Checklist
          </div>
          <div className="space-y-1.5">
            {libraryCheckoutSlip.rubricScores.map((rubric, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs border-b border-dashed border-[#C7A77B]/40 pb-1"
              >
                <span className="text-[#2C2523] font-medium">{rubric.criterion}</span>
                <span className="text-emerald-800 font-mono font-bold">{rubric.grade}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-[#7A6F68] text-right mt-2">
            Standard: UK Quality Code Framework for Higher Education
          </div>
        </div>
      </div>
    </Page>
  );
});
InsideBackCoverPage.displayName = 'InsideBackCoverPage';

/**
 * Back Cover (Hardcover):
 * Deep Burgundy leather, gold stamped colophon, thank you, barcode
 */
export const BackCoverPage = forwardRef(({ onReopenBook, onCornerClick, ...props }, ref) => {
  const { student } = portfolioConfig;

  return (
    <div
      ref={ref}
      data-density="hard"
      className="page relative w-full h-full bg-[#57242E] text-[#F7F1E5] select-none overflow-hidden shadow-2xl flex flex-col justify-between p-8 md:p-12 border-4 border-[#35141B]"
      {...props}
    >
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#F7F1E5 1px, transparent 1px), radial-gradient(#C7A77B 1px, #35141B 1px)`,
          backgroundSize: '14px 14px',
          backgroundPosition: '0 0, 7px 7px',
        }}
      />

      {/* Book Spine Edge Ridge on Right Edge */}
      <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/60 via-black/25 to-transparent pointer-events-none z-20 border-l border-[#C7A77B]/30" />

      {/* Antique Gold Foil Filigree Outer Border */}
      <div className="absolute inset-5 md:inset-7 border-2 border-[#C7A77B] pointer-events-none z-10 p-2">
        <div className="w-full h-full border border-dashed border-[#C7A77B]/60 p-2" />
      </div>

      {/* Corner Protectors */}
      <div className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 border-[#C7A77B] pointer-events-none z-20" />
      <div className="absolute top-3 right-3 w-12 h-12 border-t-4 border-r-4 border-[#C7A77B] pointer-events-none z-20" />
      <div className="absolute bottom-3 left-3 w-12 h-12 border-b-4 border-l-4 border-[#C7A77B] pointer-events-none z-20" />
      <div className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 border-[#C7A77B] pointer-events-none z-20" />

      {/* Top Colophon / Publisher Mark */}
      <div className="relative z-20 text-center pt-2">
        <div className="w-14 h-14 mx-auto mb-2 text-[#C7A77B]">
          <WaxSeal text="JOURNEY DONE" size="small" />
        </div>
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A77B]">
          Academic Press & Archival Edition
        </div>
      </div>

      {/* Center Thank You Message */}
      <div className="relative z-20 text-center my-auto px-4">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C7A77B] to-transparent mx-auto mb-4" />
        <h2 className="font-playfair text-3xl md:text-4xl font-extrabold text-[#F7F1E5]">
          Thank You
        </h2>
        <p className="mt-3 text-sm md:text-base font-jakarta text-[#EBDDC7] max-w-sm mx-auto leading-relaxed font-light">
          For reviewing this academic portfolio and walking alongside my professional skills learning journey.
        </p>
        <div className="mt-4 text-2xl font-script text-[#C7A77B]">
          "{student.signature}"
        </div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C7A77B] to-transparent mx-auto mt-4" />
      </div>

      {/* Barcode & Re-open Button */}
      <div className="relative z-20 pb-2 text-center">
        {/* Vintage Barcode Box */}
        <div className="bg-[#F7F1E5] text-[#2C2523] p-2.5 rounded-lg max-w-[220px] mx-auto shadow-md">
          {/* Faux Barcode Lines */}
          <div className="flex items-center justify-between h-10 px-1 mb-1.5 bg-white">
            <div className="w-1 h-full bg-[#2C2523]" />
            <div className="w-2 h-full bg-[#2C2523]" />
            <div className="w-0.5 h-full bg-[#2C2523]" />
            <div className="w-1.5 h-full bg-[#2C2523]" />
            <div className="w-0.5 h-full bg-[#2C2523]" />
            <div className="w-2.5 h-full bg-[#2C2523]" />
            <div className="w-1 h-full bg-[#2C2523]" />
            <div className="w-0.5 h-full bg-[#2C2523]" />
            <div className="w-2 h-full bg-[#2C2523]" />
            <div className="w-1 h-full bg-[#2C2523]" />
            <div className="w-1.5 h-full bg-[#2C2523]" />
            <div className="w-0.5 h-full bg-[#2C2523]" />
            <div className="w-2 h-full bg-[#2C2523]" />
          </div>
          <div className="text-[9px] font-mono tracking-widest text-[#5A504B] font-bold">
            ISBN 978-0-2026-PS-4012
          </div>
        </div>

        {/* Reopen / Return to Front */}
        <button
          onClick={onReopenBook}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-[#35141B] border border-[#C7A77B] text-[#C7A77B] hover:text-[#F7F1E5] hover:bg-[#702F3B] font-jakarta font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md"
        >
          <span>↺</span>
          <span>Return to Front Cover</span>
        </button>
      </div>
    </div>
  );
});
BackCoverPage.displayName = 'BackCoverPage';
