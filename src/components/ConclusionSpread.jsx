import React from 'react';
import Page from './Page';
import { conclusionData, portfolioConfig } from '../data/portfolioData';
import { VintageStamp, WaxSeal } from './VintageDecorations';
import confetti from 'canvas-confetti';

export const ConclusionLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#702F3B', '#C7A77B', '#F7F1E5', '#35141B']
    });
  };

  return (
    <Page
      ref={ref}
      pageNumber="33"
      isLeft={true}
      footerNote="Conclusion • End of Learning Journey"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Expedition Culmination
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              {conclusionData.title}
            </h2>
          </div>
          <VintageStamp value="TERMINUS" label="JOURNEY" code="END-2026" color="burgundy" />
        </div>

        {/* Thematic Quote */}
        <div className="bg-[#F0E6D2] p-3 rounded-lg border-l-4 border-[#702F3B] text-xs md:text-sm font-playfair italic text-[#57242E] mb-3 leading-relaxed shadow-sm">
          {conclusionData.summaryQuote}
        </div>

        {/* Narrative Summary */}
        <div className="space-y-3 text-xs md:text-sm font-inter text-[#2C2523] leading-relaxed flex-1 overflow-hidden">
          {conclusionData.reflectionSummary.map((para, i) => (
            <p key={i} className="text-justify indent-4">
              {para}
            </p>
          ))}
        </div>

        {/* Journey Completion Celebration Badge */}
        <div className="mt-3 pt-3 border-t border-[#C7A77B]/50 flex items-center justify-between bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/60 shadow-sm">
          <div>
            <div className="text-xs font-mono font-bold text-[#702F3B] uppercase">
              ★ 12 Stations Completed
            </div>
            <div className="text-[11px] font-mono text-[#7A6F68]">
              Academic travelogue successfully compiled
            </div>
          </div>
          <button
            onClick={triggerConfetti}
            className="px-3.5 py-1.5 bg-[#702F3B] text-[#F7F1E5] text-xs font-jakarta font-bold rounded-full shadow hover:bg-[#57242E] cursor-pointer flex items-center gap-1.5 transition-all active:scale-95"
          >
            <span>🎉</span>
            <span>Celebrate Milestone</span>
          </button>
        </div>
      </div>
    </Page>
  );
});
ConclusionLeftPage.displayName = 'ConclusionLeftPage';

export const ConclusionRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  const { student } = portfolioConfig;

  return (
    <Page
      ref={ref}
      pageNumber="34"
      isLeft={false}
      footerNote="Forward Horizon • CPD Trajectory & Declaration"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Forward Horizon
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              3-Year CPD Roadmap
            </h2>
          </div>
          <WaxSeal text="COMPLETED" size="small" />
        </div>

        {/* 3-Year CPD Timeline */}
        <div className="space-y-2 mb-3 flex-1 flex flex-col justify-between">
          {conclusionData.cpdPlan.map((plan, i) => (
            <div
              key={i}
              className="bg-[#F0E6D2]/70 p-2.5 rounded-lg border border-[#C7A77B]/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold bg-[#702F3B] text-[#F7F1E5] px-2 py-0.5 rounded">
                  {plan.year}
                </span>
                <span className="text-xs md:text-sm font-jakarta font-bold text-[#702F3B]">
                  {plan.milestone}
                </span>
              </div>
              <p className="text-xs font-inter text-[#5A504B] leading-relaxed mt-1">
                {plan.goals}
              </p>
            </div>
          ))}
        </div>

        {/* Formal Declaration of Academic Integrity */}
        <div className="bg-[#FBF8F1] border border-[#C7A77B]/70 rounded-lg p-2.5 text-xs font-inter text-[#2C2523] mb-3 shadow-sm">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] mb-1">
            Declaration of Authorship & Integrity
          </div>
          <p className="italic text-[#5A504B] leading-relaxed">
            "{conclusionData.declaration}"
          </p>
        </div>

        {/* Signature Box */}
        <div className="pt-2.5 border-t border-[#C7A77B]/50 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-[#7A6F68]">Signed:</div>
            <div className="font-script text-2xl text-[#702F3B] font-bold my-0.5">
              {student.signature}
            </div>
            <div className="text-[11px] font-mono text-[#5A504B]">
              {student.name} • {conclusionData.signatureDate}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono uppercase text-[#7A6F68]">Verified By:</div>
            <div className="text-xs font-jakarta font-bold text-[#702F3B] mt-1">
              Module Assessment Panel
            </div>
            <div className="text-[10px] font-mono text-[#7A6F68]">
              PS-4012 Accredited
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
});
ConclusionRightPage.displayName = 'ConclusionRightPage';
