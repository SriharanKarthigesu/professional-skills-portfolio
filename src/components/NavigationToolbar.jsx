import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sliders,
} from 'lucide-react';
import { tableOfContents } from '../data/portfolioData';

export default function NavigationToolbar({
  currentPage,
  totalPages = 26,
  onPrevPage,
  onNextPage,
  onJumpToPage,
  onToggleTOC,
  soundEnabled,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen,
  reducedMotion,
  onToggleReducedMotion,
}) {
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionSelect = (e) => {
    const val = e.target.value;
    setSelectedSection(val);
    if (val !== '') {
      onJumpToPage(parseInt(val, 10));
    }
  };

  const isCover = currentPage === 0;
  const leftPageStr = String(currentPage).padStart(2, '0');
  const rightPageStr = String(Math.min(currentPage + 1, totalPages - 1)).padStart(2, '0');

  return (
    <nav aria-label="Book Navigation" className="fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[96%] max-w-5xl">
      <div className="bg-[#2C2523]/95 text-[#F7F1E5] backdrop-blur-md px-4 md:px-6 py-3 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.6)] border-2 border-[#C7A77B]/70 flex items-center justify-between gap-3 md:gap-6 select-none">
        {/* Left Section: TOC & Quick Navigation */}
        <div className="flex items-center gap-2">
          {/* Table of Contents Button */}
          <button
            onClick={onToggleTOC}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#702F3B] hover:bg-[#8B3A4A] text-[#F7F1E5] text-xs md:text-sm font-jakarta font-bold transition-all cursor-pointer shadow-md active:scale-95"
            title="Open Table of Contents (Index)"
          >
            <BookOpen size={16} />
            <span>Table of Contents</span>
          </button>

          {/* Quick Jump to Chapter Dropdown */}
          <div className="relative hidden md:flex items-center">
            <select
              value={selectedSection}
              onChange={handleSectionSelect}
              aria-label="Jump directly to chapter or section"
              className="bg-[#35141B] text-[#C7A77B] text-xs font-jakarta font-semibold py-2 px-3 pr-7 rounded-full border border-[#C7A77B]/50 focus:outline-none focus:border-[#C7A77B] cursor-pointer appearance-none shadow-sm"
            >
              <option value="">Jump to Chapter...</option>
              <option value="0">Page 01: Cover Page</option>
              <option value="2">Pages 02–03: Overview & TOC</option>
              <optgroup label="Coursework Chapters">
                {tableOfContents.map((item) => (
                  <option key={item.id} value={item.page}>
                    {item.id}. {item.title} (p. {String(item.page).padStart(2, '0')})
                  </option>
                ))}
                <option value="22">07. Root & Rise: Overview & Contributions (p. 22)</option>
                <option value="23">07. Project Budget & Expenses (p. 23)</option>
                <option value="24">Conclusion & Thank You (p. 24)</option>
              </optgroup>
            </select>
            <div className="absolute right-2.5 pointer-events-none text-[#C7A77B] text-[10px]">
              ▼
            </div>
          </div>
        </div>

        {/* Center Section: 2-Page Flip Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Previous Page Button */}
          <button
            onClick={onPrevPage}
            disabled={currentPage <= 0}
            aria-label="Previous Spread (Left)"
            className="p-2 md:p-2.5 rounded-full bg-[#35141B] hover:bg-[#702F3B] disabled:opacity-30 disabled:cursor-not-allowed text-[#F7F1E5] transition-all cursor-pointer shadow-md border border-[#C7A77B]/50 active:scale-90"
            title="Previous Two-Page Spread (or Left Arrow Key)"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Two-Page Spread Counter Indicator */}
          <div className="text-center font-mono text-xs md:text-sm text-[#EBDDC7] tracking-wider min-w-[130px]">
            <span className="text-[#7A6F68] text-[10px] block uppercase font-bold tracking-widest">
              Two-Page Spread
            </span>
            <span>
              {isCover ? (
                <strong className="text-[#C7A77B] font-bold text-sm md:text-base">Page 01: Cover Page</strong>
              ) : currentPage >= totalPages - 2 ? (
                <strong className="text-[#C7A77B] font-bold text-sm md:text-base">Page 24: Thank You</strong>
              ) : (
                <>
                  Pages <strong className="text-[#C7A77B] font-bold text-sm md:text-base">{leftPageStr}</strong> &{' '}
                  <strong className="text-[#C7A77B] font-bold text-sm md:text-base">{rightPageStr}</strong>
                </>
              )}
            </span>
          </div>

          {/* Next Page Button */}
          <button
            onClick={onNextPage}
            disabled={currentPage >= totalPages - 2}
            aria-label="Next Spread (Right)"
            className="p-2 md:p-2.5 rounded-full bg-[#35141B] hover:bg-[#702F3B] disabled:opacity-30 disabled:cursor-not-allowed text-[#F7F1E5] transition-all cursor-pointer shadow-md border border-[#C7A77B]/50 active:scale-90"
            title="Next Two-Page Spread (or Right Arrow Key)"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Section: Sound, Fullscreen, Accessibility */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle (Muted by default) */}
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? "Mute Page-Turn Sound" : "Enable Page-Turn Sound"}
            className={`p-2 rounded-full transition-all cursor-pointer border shadow-sm ${
              soundEnabled
                ? 'bg-[#C7A77B] text-[#35141B] border-[#C7A77B] font-bold'
                : 'bg-[#35141B] text-[#7A6F68] hover:text-[#F7F1E5] border-[#C7A77B]/40'
            }`}
            title={soundEnabled ? "Mute Page Flip Sound" : "Enable Page Flip Sound (Muted by default)"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={onToggleReducedMotion}
            aria-label="Toggle Reduced Motion"
            className={`p-2 rounded-full transition-all cursor-pointer border hidden sm:flex shadow-sm ${
              reducedMotion
                ? 'bg-[#C7A77B] text-[#35141B] border-[#C7A77B]'
                : 'bg-[#35141B] text-[#7A6F68] hover:text-[#F7F1E5] border-[#C7A77B]/40'
            }`}
            title={reducedMotion ? "Reduced Motion Active (Fast Transitions)" : "Standard 3D Page Turn Animation"}
          >
            <Sliders size={18} />
          </button>

          {/* Fullscreen Mode */}
          <button
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            className="p-2 rounded-full bg-[#35141B] text-[#EBDDC7] hover:text-[#F7F1E5] hover:bg-[#702F3B] border border-[#C7A77B]/40 transition-all cursor-pointer shadow-sm"
            title={isFullscreen ? "Exit Fullscreen" : "Full Screen Reading Mode"}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
