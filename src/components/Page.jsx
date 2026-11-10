import React, { forwardRef } from 'react';

/**
 * Clean, Simple & Modern Editorial Page Component
 */
const Page = forwardRef(({
  children,
  pageNumber,
  isLeft = false,
  isCover = false,
  density = 'soft',
  className = '',
  onCornerClick,
  hideNumber = false,
  noPadding = false,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-density={density}
      className={`page relative w-full h-full select-none overflow-hidden ${
        isCover 
          ? 'bg-[#4A1D25] text-[#F7F1E5]' 
          : 'bg-[#F9F6F0] text-[#2C2523]'
      } ${className}`}
      {...props}
    >
      {/* Subtle Spine Center Shadow */}
      {!isCover && (
        <div
          className={`absolute top-0 bottom-0 pointer-events-none z-30 ${
            isLeft
              ? 'right-0 w-6 bg-gradient-to-l from-black/10 to-transparent'
              : 'left-0 w-6 bg-gradient-to-r from-black/10 to-transparent'
          }`}
        />
      )}

      {/* Clean, Minimalist Outer Hairline Border */}
      {!isCover && (
        <div className="absolute inset-4 border border-[#C7A77B]/40 pointer-events-none z-20" />
      )}

      {/* Clickable Page Corner Dog-Ear */}
      {!isCover && onCornerClick && (
        <button
          onClick={onCornerClick}
          aria-label={isLeft ? "Flip to previous page" : "Flip to next page"}
          title={isLeft ? "Click to flip back" : "Click to flip forward"}
          className={`absolute top-2 z-40 w-7 h-7 cursor-pointer group ${
            isLeft ? 'left-2' : 'right-2'
          }`}
        >
          <div
            className={`w-0 h-0 border-solid transition-colors duration-200 ${
              isLeft
                ? 'border-t-[18px] border-l-[18px] border-r-0 border-b-0 border-t-[#C7A77B]/30 border-l-[#C7A77B]/30 group-hover:border-t-[#702F3B] group-hover:border-l-[#702F3B]'
                : 'border-t-[18px] border-r-[18px] border-l-0 border-b-0 border-t-[#C7A77B]/30 border-r-[#C7A77B]/30 group-hover:border-t-[#702F3B] group-hover:border-r-[#702F3B]'
            }`}
          />
        </button>
      )}

      {/* Main Page Content Body */}
      <div className={`relative z-20 w-full h-full ${noPadding ? 'p-3 md:p-4' : 'p-8 md:p-10'} flex flex-col justify-between overflow-hidden`}>
        <div className="flex-1 w-full overflow-hidden flex flex-col">
          {children}
        </div>

        {/* Clean Page Footer: Only Page Number, Title text removed as requested */}
        {!isCover && !hideNumber && pageNumber && (
          <div className="mt-1 pt-1.5 border-t border-[#C7A77B]/30 flex items-center justify-between text-xs font-mono text-[#7A6F68] select-none">
            {isLeft ? (
              <span className="font-playfair font-bold text-[#702F3B] text-sm">
                {pageNumber}
              </span>
            ) : (
              <span className="w-full text-right font-playfair font-bold text-[#702F3B] text-sm">
                {pageNumber}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;
