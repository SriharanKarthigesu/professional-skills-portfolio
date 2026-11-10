import React from 'react';
import Page from './Page';
import { tableOfContents } from '../data/portfolioData';

/**
 * PAGE NO 2: Welcome and Overview & Acknowledgement
 * Candidate info at bottom removed as requested.
 */
export const IntroLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="02"
      isLeft={true}
      footerNote="Welcome & Acknowledgement"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top Header */}
        <div className="border-b border-[#C7A77B]/40 pb-3 mb-4">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B]">
            Welcome and Overview
          </h2>
        </div>

        {/* Welcome and Overview: Exactly one simple paragraph */}
        <div className="space-y-6 flex-1 my-auto font-inter text-[#2C2523]">
          <div className="p-4 bg-white/70 rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <p className="text-sm md:text-base leading-relaxed text-[#2C2523]">
              This portfolio documents my academic coursework, professional skills, and practical skills developed during this session. It showcases our learning across workplace communication, career document preparation, interview readiness, and hands-on team project delivery.
            </p>
          </div>

          {/* Acknowledgement Section */}
          <div className="space-y-3">
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B] border-b border-[#C7A77B]/40 pb-1.5">
              Acknowledgement
            </h3>

            <div className="p-4 bg-[#F0E6D2]/70 rounded-lg border-l-4 border-[#702F3B] space-y-3 text-xs md:text-sm text-[#4A1D25] leading-relaxed">
              <p>
                I would like to express a great heartfelt thanks to <strong>Ms. Ishara Raviharee</strong>, who made this professional skills session amazing, engaging, and knowledgeable. Her guidance, continuous encouragement, and practical insights helped us build essential career capabilities.
              </p>
              <p>
                I would also like to express my gratitude to all my batchmates, and especially to my group members, who collaborated with great enthusiasm and dedication to make this journey truly beautiful and memorable.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom space clean, without candidate info */}
        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
IntroLeftPage.displayName = 'IntroLeftPage';

/**
 * PAGE NO 3: TABLE OF CONTENTS (ALL CAPS LOCK, NO ADDITIONAL WORDINGS)
 * "INDEX", "CLICK ANY ITEM", and "USE ARROW KEY" wordings removed as requested.
 */
export const IntroRightPage = React.forwardRef(({ onNavigate, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="03"
      isLeft={false}
      footerNote="TABLE OF CONTENTS"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header: Clean, without top-left index wording */}
        <div className="border-b-2 border-[#702F3B] pb-3 mb-4">
          <h2 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#702F3B] tracking-wide">
            TABLE OF CONTENTS
          </h2>
        </div>

        {/* Clean, All Caps List */}
        <div className="space-y-3 my-auto flex-1">
          {tableOfContents.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate && onNavigate(item.page)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-[#F0E6D2] border border-[#C7A77B]/40 hover:border-[#702F3B] text-left transition-all cursor-pointer group shadow-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-xs md:text-sm text-[#702F3B] bg-[#F0E6D2] px-2.5 py-0.5 rounded">
                  {item.id}
                </span>
                <span className="text-xs md:text-sm font-jakarta font-bold text-[#2C2523] group-hover:text-[#702F3B] tracking-wide uppercase transition-colors">
                  {item.title}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#7A6F68] group-hover:text-[#702F3B]">
                p. {String(item.page).padStart(2, '0')} ➔
              </span>
            </button>
          ))}
        </div>

        {/* Bottom space clean, without extra instructions */}
        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
IntroRightPage.displayName = 'IntroRightPage';
