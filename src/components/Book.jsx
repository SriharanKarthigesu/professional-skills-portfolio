import React, { useRef, useState, useEffect, useCallback } from 'react';
import HTMLFlipBook from './HTMLFlipBook';
import { CoverLeftPage, CoverRightPage } from './BookCover';
import { IntroLeftPage, IntroRightPage } from './IntroSpread';
import {
  IntroSkillsLeftPage,
  IntroSkillsRightPage,
  CandleHolderLeftPage,
  CVWritingRightPage,
  CVReviewLeftPage,
  CoverLetterRightPage,
  CVPageOneLeftPage,
  CVPageTwoRightPage,
} from './Chapters';
import {
  InterviewSkillsLeftPage,
  InterviewSkillsRightPage,
  MeetingsLeftPage,
  MeetingsRightPage,
  EmotionalIntelligenceLeftPage,
  EmotionalIntelligenceRightPage,
  DiningEtiquetteLeftPage,
  DiningEtiquetteRightPage,
  GroupProjectLeftPage,
  GroupProjectRightPage,
  ProjectOverviewLeftPage,
  ProjectBudgetRightPage,
  ConclusionThankYouLeftPage,
  BackCoverRightPage,
} from './ChaptersRemaining';
import NavigationToolbar from './NavigationToolbar';
import TableOfContentsModal from './TableOfContentsModal';
import PhotoLightbox from './PhotoLightbox';
import { playPageFlipSound } from '../utils/audio';

export default function Book() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTOCModalOpen, setIsTOCModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false); // Muted by default
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Total pages: 26 (13 two-page spreads: 0 to 25)
  const totalPages = 26;

  // Responsive two-page dimensions filling screen generously
  const [dimensions, setDimensions] = useState({ width: 600, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const maxAvailableHeight = Math.max(h - 120, 540);
      const maxPageWidth = Math.max(Math.floor((w - 60) / 2), 350);

      let pHeight = Math.min(maxAvailableHeight, 880);
      let pWidth = Math.min(maxPageWidth, Math.floor(pHeight / 1.30));

      if (pWidth * 1.30 > maxAvailableHeight) {
        pHeight = maxAvailableHeight;
        pWidth = Math.floor(pHeight / 1.30);
      } else {
        pHeight = Math.floor(pWidth * 1.30);
      }

      setDimensions({
        width: Math.max(pWidth, 340),
        height: Math.max(pHeight, 480),
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  const onFlip = useCallback((e) => {
    const newPage = e.data;
    setCurrentPage(newPage);
    playPageFlipSound(soundEnabled);
  }, [soundEnabled]);

  const jumpToPage = useCallback((pageIndex) => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flip(pageIndex);
    }
  }, []);

  const flipNext = useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipNext();
    }
  }, []);

  const flipPrev = useCallback(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      bookRef.current.pageFlip().flipPrev();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if (isTOCModalOpen || activePhoto) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        flipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        flipPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        jumpToPage(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        jumpToPage(totalPages - 2);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipNext, flipPrev, jumpToPage, isTOCModalOpen, activePhoto, totalPages]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#151011] overflow-x-hidden selection:bg-[#C7A77B]/40 selection:text-[#702F3B]">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(199, 167, 123, 0.18), transparent 75%), radial-gradient(circle at 15% 85%, rgba(112, 47, 59, 0.3), transparent 55%)',
        }}
      />

      {/* Top Header Bar */}
      <header className="w-full max-w-7xl px-4 py-2 z-30 flex items-center justify-between text-[#EBDDC7] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C7A77B] animate-pulse shadow-[0_0_8px_#C7A77B]" />
          <span className="font-playfair font-bold tracking-wide text-sm md:text-base text-[#F7F1E5]">
            Professional Skills Portfolio
          </span>
          <span className="hidden md:inline text-xs font-mono text-[#C7A77B]/90 border-l border-[#C7A77B]/40 pl-2.5">
            Module Code : IT1215 • K.Sriharan (SA25610001)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsTOCModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-jakarta font-semibold text-[#C7A77B] hover:text-[#F7F1E5] transition-colors cursor-pointer bg-[#35141B] px-3 py-1 rounded-full border border-[#C7A77B]/40 shadow-sm"
          >
            <span>Table of Contents</span>
            <span className="font-mono text-[10px] bg-[#702F3B] text-[#F7F1E5] px-1.5 py-0.2 rounded">TOC</span>
          </button>
          <div className="text-[11px] font-mono text-[#7A6F68] hidden lg:block">
            Use ← / → keys or click page corners
          </div>
        </div>
      </header>

      {/* Main Book Display Container */}
      <main className="flex-1 w-full flex items-center justify-center p-1 sm:p-2 md:p-3 mb-20 md:mb-24">
        <div
          className="relative transition-transform duration-300 flex items-center justify-center"
          style={{
            width: `${dimensions.width * 2}px`,
            height: `${dimensions.height}px`,
          }}
        >
          {/* Deep Ambient Shadow */}
          <div
            className="absolute -inset-4 md:-inset-6 bg-[#080607] rounded-xl -z-10 blur-2xl opacity-90 pointer-events-none"
          />

          {/* Book Spine Center Gutter Shadow */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/40 via-black/10 to-black/40 z-10 pointer-events-none"
          />

          {/* FlipBook Component: 2 Pages side-by-side on desktop */}
          <HTMLFlipBook
            ref={bookRef}
            width={dimensions.width}
            height={dimensions.height}
            size="fixed"
            minWidth={320}
            maxWidth={800}
            minHeight={450}
            maxHeight={1000}
            maxShadowOpacity={0.5}
            showCover={false}
            usePortrait={false}
            mobileScrollSupport={true}
            flippingTime={reducedMotion ? 180 : 750}
            onFlip={onFlip}
            className="book-viewport"
            style={{ margin: '0 auto' }}
          >
            {/* SPREAD 0: Pages 00 & 01 (Cover) */}
            <CoverLeftPage onCornerClick={flipPrev} />
            <CoverRightPage onCornerClick={flipNext} />

            {/* SPREAD 1: Pages 02 & 03 (Welcome & Acknowledgement / Table of Contents) */}
            <IntroLeftPage onCornerClick={flipPrev} />
            <IntroRightPage onNavigate={jumpToPage} onCornerClick={flipNext} />

            {/* SPREAD 2: Pages 04 & 05 (01. Introduction to Professional Skills / Identity Tree) */}
            <IntroSkillsLeftPage onCornerClick={flipPrev} />
            <IntroSkillsRightPage onPhotoClick={setActivePhoto} onCornerClick={flipNext} />

            {/* SPREAD 3: Pages 06 & 07 (Candle Holder / 02. CV Writing & Cover Letters) */}
            <CandleHolderLeftPage onCornerClick={flipPrev} />
            <CVWritingRightPage onPhotoClick={setActivePhoto} onCornerClick={flipNext} />

            {/* SPREAD 4: Pages 08 & 09 (Lecturer Reviewing CV / Cover Letter Preparation) */}
            <CVReviewLeftPage onPhotoClick={setActivePhoto} onCornerClick={flipPrev} />
            <CoverLetterRightPage onCornerClick={flipNext} />

            {/* SPREAD 5: Pages 10 & 11 (Student CV — Full Page 1 & Full Page 2 side-by-side) */}
            <CVPageOneLeftPage onPhotoClick={setActivePhoto} onCornerClick={flipPrev} />
            <CVPageTwoRightPage onPhotoClick={setActivePhoto} onCornerClick={flipNext} />

            {/* SPREAD 6: Pages 12 & 13 (03. Interview Skills / Attire DOs & DON'Ts) */}
            <InterviewSkillsLeftPage onCornerClick={flipPrev} />
            <InterviewSkillsRightPage onPhotoClick={setActivePhoto} onCornerClick={flipNext} />

            {/* SPREAD 7: Pages 14 & 15 (04. Facilitating & Conducting Meetings / Contributing Effectively) */}
            <MeetingsLeftPage onCornerClick={flipPrev} />
            <MeetingsRightPage onCornerClick={flipNext} />

            {/* SPREAD 8: Pages 16 & 17 (05. Emotional Intelligence / Application & Reflection) */}
            <EmotionalIntelligenceLeftPage onCornerClick={flipPrev} />
            <EmotionalIntelligenceRightPage onCornerClick={flipNext} />

            {/* SPREAD 9: Pages 18 & 19 (06. Etiquettes / Social & Email Etiquette) */}
            <DiningEtiquetteLeftPage onCornerClick={flipPrev} />
            <DiningEtiquetteRightPage onCornerClick={flipNext} />

            {/* SPREAD 10: Pages 20 & 21 (07. Group Project / Project Evidence) */}
            <GroupProjectLeftPage onPhotoClick={setActivePhoto} onCornerClick={flipPrev} />
            <GroupProjectRightPage onPhotoClick={setActivePhoto} onCornerClick={flipNext} />

            {/* SPREAD 11: Pages 22 & 23 (Project Description & My Contributions / Budget & Expenses) */}
            <ProjectOverviewLeftPage onCornerClick={flipPrev} />
            <ProjectBudgetRightPage onCornerClick={flipNext} />

            {/* SPREAD 12: Pages 24 & 25 (Thank You Page / Back Cover) */}
            <ConclusionThankYouLeftPage onReopenBook={() => jumpToPage(0)} onCornerClick={flipPrev} />
            <BackCoverRightPage onReopenBook={() => jumpToPage(0)} onCornerClick={flipPrev} />
          </HTMLFlipBook>
        </div>
      </main>

      {/* Floating Brass Navigation Toolbar */}
      <NavigationToolbar
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={flipPrev}
        onNextPage={flipNext}
        onJumpToPage={jumpToPage}
        onToggleTOC={() => setIsTOCModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
      />

      {/* Table of Contents Modal */}
      <TableOfContentsModal
        isOpen={isTOCModalOpen}
        onClose={() => setIsTOCModalOpen(false)}
        onNavigate={jumpToPage}
        currentPage={currentPage}
      />

      {/* Photograph Lightbox */}
      <PhotoLightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
