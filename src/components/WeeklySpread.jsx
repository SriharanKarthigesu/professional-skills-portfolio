import React from 'react';
import Page from './Page';
import {
  VintageTicketHeader,
  ThematicIllustration,
  WashiTape,
  PhotoCorner,
} from './VintageDecorations';

/**
 * Weekly Left Page:
 * - Week number and topic title
 * - Introduction
 * - Key learnings
 * - Decorative illustration & quote
 */
export const WeekLeftPage = React.forwardRef(({
  chapter,
  pageNumber,
  onCornerClick,
  ...props
}, ref) => {
  const { week, station, date, ticketNo, title, subtitle, illustrationType, leftPage } = chapter;

  return (
    <Page
      ref={ref}
      pageNumber={String(pageNumber).padStart(2, '0')}
      isLeft={true}
      footerNote={`Week ${week} • ${title}`}
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Ticket Header */}
        <VintageTicketHeader
          week={week}
          station={station}
          date={date}
          ticketNo={ticketNo}
        />

        {/* Title & Subtitle */}
        <div className="mb-3">
          <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B] leading-tight">
            {title}
          </h2>
          <div className="text-xs md:text-sm font-jakarta font-medium text-[#7A6F68] mt-1 italic">
            {subtitle}
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-3 bg-[#F0E6D2]/70 p-3 rounded-lg border-l-4 border-[#702F3B] text-xs md:text-sm leading-relaxed font-inter text-[#2C2523] shadow-sm">
          <span className="font-bold text-[#702F3B] font-mono uppercase text-[10px] block mb-1 tracking-wider">
            Chapter Introduction & Context
          </span>
          {leftPage.introduction}
        </div>

        {/* Key Learnings (3 Structured Ledger Cards) */}
        <div className="flex-1 space-y-2 overflow-hidden flex flex-col justify-between mb-3">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider flex items-center gap-1.5">
            <span>◆</span>
            <span>Key Learnings & Theoretical Frameworks</span>
          </div>

          {leftPage.keyLearnings.map((learning, idx) => (
            <div
              key={idx}
              className="bg-[#FBF8F1] border border-[#C7A77B]/60 rounded-lg p-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#702F3B]/10 text-[#702F3B] font-mono text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs md:text-sm font-jakarta font-bold text-[#702F3B]">
                  {learning.heading}
                </span>
              </div>
              <p className="text-xs font-inter text-[#5A504B] mt-1 pl-7 leading-relaxed">
                {learning.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section: Quote & Thematic Illustration */}
        <div className="pt-2.5 border-t border-[#C7A77B]/50 flex items-center gap-4 bg-[#F0E6D2]/50 p-2.5 rounded-lg">
          <div className="w-12 h-12 flex-shrink-0 text-[#702F3B]">
            <ThematicIllustration type={illustrationType} className="w-full h-full" />
          </div>
          <div className="text-xs md:text-sm font-playfair italic text-[#57242E] leading-snug">
            {leftPage.quote}
          </div>
        </div>
      </div>
    </Page>
  );
});
WeekLeftPage.displayName = 'WeekLeftPage';

/**
 * Weekly Right Page:
 * - Classroom activities
 * - Scrapbook photographs (Polaroids with tape)
 * - Skills developed tags
 * - Personal reflection (Gibbs' cycle)
 */
export const WeekRightPage = React.forwardRef(({
  chapter,
  pageNumber,
  onPhotoClick,
  onCornerClick,
  ...props
}, ref) => {
  const { week, title, rightPage } = chapter;

  return (
    <Page
      ref={ref}
      pageNumber={String(pageNumber).padStart(2, '0')}
      isLeft={false}
      footerNote={`Week ${week} • Evidence & Reflection`}
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top Header / Section Indicator */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-2 mb-2 flex items-center justify-between">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#702F3B] font-bold">
            Evidence, Workshop & Reflection
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {rightPage.skillsDeveloped.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full bg-[#702F3B]/10 text-[#702F3B] text-[10px] font-mono font-bold border border-[#702F3B]/20"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Classroom Activities */}
        <div className="mb-3 bg-[#F0E6D2]/60 p-2.5 rounded-lg border border-[#C7A77B]/50 shadow-sm">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider mb-1.5 flex items-center gap-1.5">
            <span>⚙</span>
            <span>Classroom Workshops & Exercises</span>
          </div>
          <div className="space-y-1.5">
            {rightPage.classroomActivities.map((act, i) => (
              <div key={i} className="text-xs leading-relaxed font-inter">
                <span className="font-bold text-[#2C2523]">• {act.title}: </span>
                <span className="text-[#5A504B]">{act.details}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrapbook Photographs (Polaroid Layout with Generous Size) */}
        <div className="mb-3 flex items-center justify-around gap-3 py-1 px-1">
          {rightPage.photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => onPhotoClick && onPhotoClick(photo)}
              style={{ transform: `rotate(${photo.rotation || '0deg'})` }}
              className="relative bg-white p-2 pb-3 shadow-polaroid border border-[#EBDDC7] rounded-sm max-w-[48%] flex-1 group hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-200 cursor-pointer"
            >
              <WashiTape
                color={photo.tapeColor || 'gold'}
                className="top-[-10px] left-1/2"
              />
              <PhotoCorner position="top-left" />
              <PhotoCorner position="top-right" />
              <PhotoCorner position="bottom-left" />
              <PhotoCorner position="bottom-right" />

              <div className="w-full h-24 md:h-28 overflow-hidden rounded-[1px] bg-[#EBDDC7]/40 relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C7A77B]/10 mix-blend-color pointer-events-none" />
              </div>
              <div className="mt-1.5 text-[10px] md:text-xs font-script text-[#2C2523] text-center leading-tight truncate px-1 font-semibold">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Reflection (Gibbs' Framework) */}
        <div className="flex-1 bg-[#FBF8F1] border border-[#C7A77B]/70 rounded-lg p-3 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#C7A77B]/40 pb-1.5 mb-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider flex items-center gap-1.5">
                <span>✍</span>
                <span>Personal Reflection</span>
              </span>
              <span className="text-[9px] font-mono text-[#7A6F68] bg-[#F0E6D2] px-2 py-0.5 rounded font-semibold">
                {rightPage.reflection.framework}
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-inter text-[#2C2523] italic">
              "{rightPage.reflection.entry}"
            </p>
          </div>

          {/* Prompt Note */}
          <div className="mt-2 text-[9px] font-mono text-[#7A6F68] border-t border-dashed border-[#C7A77B]/40 pt-1 text-right">
            [Editable student reflection • portfolioData.js]
          </div>
        </div>
      </div>
    </Page>
  );
});
WeekRightPage.displayName = 'WeekRightPage';
