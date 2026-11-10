import React from 'react';
import Page from './Page';
import { railwayStations } from '../data/portfolioData';
import { VintageStamp, ThematicIllustration } from './VintageDecorations';

export const JourneyMapLeftPage = React.forwardRef(({ onNavigate, onCornerClick, ...props }, ref) => {
  const leftStations = railwayStations.slice(0, 4);

  return (
    <Page
      ref={ref}
      pageNumber="03"
      isLeft={true}
      footerNote="Academic Journey Map • Stations 01–04 (Employment Readiness)"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              The Academic Railway
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#702F3B]">
              My Journey Map <span className="text-sm font-mono font-normal text-[#7A6F68]">(Part I)</span>
            </h2>
          </div>
          <VintageStamp value="LINE 1" label="RAILWAY" code="TRK-01-04" color="burgundy" />
        </div>

        {/* Narrative Intro */}
        <p className="text-xs md:text-sm font-inter text-[#5A504B] mb-2 leading-relaxed">
          The first half of the expedition establishes employment foundations: portfolio reflective discipline, cover letter drafting, CV writing with individual lecturer feedback, and interview S.T.A.R. mastery. Click any station to board.
        </p>

        {/* Railway Line & Stations 01–04 */}
        <div className="relative pl-8 space-y-3 flex-1 flex flex-col justify-between py-1">
          {/* Vertical Track Graphic */}
          <div className="absolute left-3 top-2 bottom-2 w-2.5 bg-[#702F3B]/30 rounded">
            <div className="w-full h-full bg-[repeating-linear-gradient(0deg,#702F3B,#702F3B_3px,transparent_3px,transparent_12px)]" />
          </div>

          {leftStations.map((st) => (
            <button
              key={st.week}
              onClick={() => onNavigate && onNavigate(st.pageIndex)}
              className="relative text-left bg-[#F0E6D2]/80 hover:bg-[#EBDDC7] p-3 rounded-lg border border-[#C7A77B]/60 shadow-sm transition-all duration-150 group cursor-pointer"
            >
              {/* Station Node on track */}
              <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#702F3B] border-2 border-[#F7F1E5] flex items-center justify-center text-[9px] text-[#F7F1E5] font-mono font-bold group-hover:scale-125 transition-transform shadow">
                ●
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#702F3B] text-[#F7F1E5] text-[10px] font-mono font-bold">
                    {st.week}
                  </span>
                  <span className="text-sm md:text-base font-playfair font-bold text-[#702F3B] group-hover:text-[#57242E]">
                    {st.station}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#7A6F68] font-bold">
                  {st.mile}
                </span>
              </div>
              <div className="text-xs text-[#5A504B] mt-1 font-medium truncate">
                {st.theme}
              </div>
              <div className="text-[10px] text-[#702F3B] font-mono font-bold mt-1.5 flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100">
                <span>Board Station Spread</span>
                <span>➔</span>
              </div>
            </button>
          ))}
        </div>

        {/* Vintage Vignette Footer */}
        <div className="mt-2 pt-2 border-t border-[#C7A77B]/40 flex items-center justify-between text-xs font-mono text-[#7A6F68]">
          <span>Track 1: Foundations</span>
          <span className="text-[#702F3B] font-bold">Track 2 on Page 04 ➔</span>
        </div>
      </div>
    </Page>
  );
});
JourneyMapLeftPage.displayName = 'JourneyMapLeftPage';

export const JourneyMapRightPage = React.forwardRef(({ onNavigate, onCornerClick, ...props }, ref) => {
  const rightStations = railwayStations.slice(4, 8);

  return (
    <Page
      ref={ref}
      pageNumber="04"
      isLeft={false}
      footerNote="Academic Journey Map • Stations 05–08 (Workplace & Project)"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              The Academic Railway
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#702F3B]">
              My Journey Map <span className="text-sm font-mono font-normal text-[#7A6F68]">(Part II)</span>
            </h2>
          </div>
          <div className="w-16 h-10 text-[#702F3B]">
            <ThematicIllustration type="train" className="w-full h-full" />
          </div>
        </div>

        {/* Narrative Intro */}
        <p className="text-xs md:text-sm font-inter text-[#5A504B] mb-2 leading-relaxed">
          The second leg develops emotional intelligence, professional etiquettes, oratorical stagecraft, culminating at Station 08: the Environmental Day Project at Turret Tower.
        </p>

        {/* Railway Line & Stations 05–08 */}
        <div className="relative pl-8 space-y-3 flex-1 flex flex-col justify-between py-1">
          {/* Vertical Track Graphic */}
          <div className="absolute left-3 top-2 bottom-2 w-2.5 bg-[#C7A77B]/60 rounded">
            <div className="w-full h-full bg-[repeating-linear-gradient(0deg,#702F3B,#702F3B_3px,transparent_3px,transparent_12px)]" />
          </div>

          {rightStations.map((st) => (
            <button
              key={st.week}
              onClick={() => onNavigate && onNavigate(st.pageIndex)}
              className="relative text-left bg-[#F0E6D2]/80 hover:bg-[#EBDDC7] p-3 rounded-lg border border-[#C7A77B]/60 shadow-sm transition-all duration-150 group cursor-pointer"
            >
              {/* Station Node on track */}
              <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#702F3B] border-2 border-[#F7F1E5] flex items-center justify-center text-[9px] text-[#F7F1E5] font-mono font-bold group-hover:scale-125 transition-transform shadow">
                ●
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#702F3B] text-[#F7F1E5] text-[10px] font-mono font-bold">
                    {st.week}
                  </span>
                  <span className="text-sm md:text-base font-playfair font-bold text-[#702F3B] group-hover:text-[#57242E]">
                    {st.station}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#7A6F68] font-bold">
                  {st.mile}
                </span>
              </div>
              <div className="text-xs text-[#5A504B] mt-1 font-medium truncate">
                {st.theme}
              </div>
              <div className="text-[10px] text-[#702F3B] font-mono font-bold mt-1.5 flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100">
                <span>Board Station Spread</span>
                <span>➔</span>
              </div>
            </button>
          ))}
        </div>

        {/* Conductor Note */}
        <div className="mt-2 pt-2 border-t border-[#C7A77B]/40 flex items-center justify-between text-xs font-mono text-[#5A504B]">
          <span>★ Terminus Station: Turret Tower Event</span>
          <button
            onClick={() => onNavigate && onNavigate(6)}
            className="text-[#702F3B] font-bold hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Start at Station 01</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </Page>
  );
});
JourneyMapRightPage.displayName = 'JourneyMapRightPage';
