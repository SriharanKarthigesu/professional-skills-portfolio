import React from 'react';

/**
 * Antique Gold Corner Ornaments (SVG)
 */
export const CornerOrnament = ({ position = 'top-left', className = '' }) => {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return 'rotate-0';
    }
  };

  return (
    <div className={`absolute w-7 h-7 pointer-events-none text-[#C7A77B]/80 ${getRotation()} ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Ornate corner filigree */}
        <path d="M2 38V12C2 6.47715 6.47715 2 12 2H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 34V14C6 9.58172 9.58172 6 14 6H34" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
        <path d="M12 21C12 16.0294 16.0294 12 21 12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="21" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

/**
 * Washi Tape Strip for Scrapbook Photos
 */
export const WashiTape = ({ color = 'gold', className = '', style = {} }) => {
  const colorMap = {
    gold: 'bg-[#C7A77B]/45 border-[#A88555]/30',
    burgundy: 'bg-[#702F3B]/35 border-[#4C1F28]/30',
    cream: 'bg-[#EBDDC7]/80 border-[#C7A77B]/40',
    kraft: 'bg-[#C8B293]/50 border-[#8C6C38]/30',
  };

  return (
    <div
      style={style}
      className={`h-4 w-16 md:w-20 shadow-sm backdrop-blur-[1px] border-y ${colorMap[color] || colorMap.gold} transform -translate-x-1/2 z-20 pointer-events-none ${className}`}
    >
      <div className="w-full h-full opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
    </div>
  );
};

/**
 * Scrapbook Photo Corner Mounts
 */
export const PhotoCorner = ({ position = 'top-left' }) => {
  const rotation = {
    'top-left': 'top-0 left-0 border-t-2 border-l-2',
    'top-right': 'top-0 right-0 border-t-2 border-r-2',
    'bottom-left': 'bottom-0 left-0 border-b-2 border-l-2',
    'bottom-right': 'bottom-0 right-0 border-b-2 border-r-2',
  }[position];

  return (
    <div className={`absolute w-3 h-3 ${rotation} border-[#C7A77B] z-10 pointer-events-none opacity-80`} />
  );
};

/**
 * Vintage Postage Stamp with Cancellation Mark
 */
export const VintageStamp = ({ value = "12 WEEKS", label = "EXPEDITION", code = "PS-2026", color = "burgundy" }) => {
  const isBurgundy = color === 'burgundy';
  
  return (
    <div className="relative inline-block p-1 bg-[#F7F1E5] shadow-md border border-[#C7A77B]/40 transform rotate-2 hover:rotate-0 transition-transform">
      {/* Perforated stamp edge border */}
      <div className={`p-2 border-2 border-dashed ${isBurgundy ? 'border-[#702F3B] bg-[#702F3B]/5' : 'border-[#C7A77B] bg-[#C7A77B]/10'} flex flex-col items-center justify-center min-w-[75px]`}>
        <div className="text-[9px] uppercase tracking-widest font-mono font-bold text-[#702F3B]">{label}</div>
        <div className="text-sm font-playfair font-extrabold text-[#702F3B]">{value}</div>
        <div className="text-[8px] font-mono text-[#7A6F68]">{code}</div>
      </div>
      {/* Rubber cancellation mark overlay */}
      <div className="absolute -top-1 -right-2 w-14 h-14 border border-[#702F3B]/40 rounded-full flex flex-col items-center justify-center pointer-events-none transform -rotate-12 opacity-70">
        <div className="text-[7px] font-mono text-[#702F3B] tracking-tighter">PORTFOLIO POST</div>
        <div className="w-10 h-[1px] bg-[#702F3B]/50 my-0.5"></div>
        <div className="text-[6px] font-mono text-[#702F3B]">★ 2026 ★</div>
      </div>
    </div>
  );
};

/**
 * Vintage Train Ticket Header / Plaque
 */
export const VintageTicketHeader = ({ week, station, date, ticketNo }) => {
  return (
    <div className="relative mb-3 bg-[#F0E6D2] border border-[#C7A77B] p-2.5 rounded shadow-sm text-[#2C2523] flex items-center justify-between overflow-hidden">
      {/* Notches for vintage ticket look */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#F7F1E5] rounded-full border-r border-[#C7A77B]" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#F7F1E5] rounded-full border-l border-[#C7A77B]" />
      
      <div className="flex items-center gap-3 pl-2">
        <div className="flex flex-col items-center justify-center bg-[#702F3B] text-[#F7F1E5] w-9 h-9 rounded font-playfair font-bold text-sm shadow-inner">
          <span className="text-[8px] font-mono uppercase tracking-tighter opacity-80">WK</span>
          <span>{week}</span>
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#702F3B] font-bold">
            {station}
          </div>
          <div className="text-[11px] font-medium text-[#5A504B]">
            {date}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pr-2 border-l border-dashed border-[#C7A77B]/60 pl-3">
        <div className="text-right">
          <div className="text-[8px] uppercase tracking-widest text-[#7A6F68] font-mono">TICKET NO.</div>
          <div className="text-[10px] font-mono font-bold text-[#702F3B]">{ticketNo}</div>
        </div>
        <div className="w-5 h-5 rounded-full border border-[#702F3B]/40 flex items-center justify-center text-[8px] font-mono text-[#702F3B] transform -rotate-12">
          OK
        </div>
      </div>
    </div>
  );
};

/**
 * Wax Seal Emblem
 */
export const WaxSeal = ({ text = "ACADEMIC EXCELLENCE", size = "normal" }) => {
  const dim = size === "small" ? "w-10 h-10 text-[6px]" : "w-14 h-14 text-[8px]";
  return (
    <div className={`relative ${dim} rounded-full bg-[#702F3B] shadow-md border-2 border-[#57242E] flex items-center justify-center text-[#F7F1E5] font-playfair font-bold tracking-wider uppercase select-none transform hover:scale-105 transition-transform`}>
      <div className="absolute inset-1 rounded-full border border-[#C7A77B]/60 flex items-center justify-center text-center p-1 leading-tight">
        <span className="drop-shadow-sm">{text}</span>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/25 via-transparent to-white/20 pointer-events-none" />
    </div>
  );
};

/**
 * Thematic Chapter Illustrations (Scalable Vintage Engravings)
 */
export const ThematicIllustration = ({ type = 'compass', className = '' }) => {
  switch (type) {
    case 'compass':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <circle cx="50" cy="50" r="44" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="40" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <polygon points="50,14 55,45 50,42 45,45" fill="#702F3B" />
          <polygon points="50,86 55,55 50,58 45,55" fill="#C7A77B" />
          <polygon points="14,50 45,45 42,50 45,55" fill="#C7A77B" />
          <polygon points="86,50 55,45 58,50 55,55" fill="#C7A77B" />
          <text x="50" y="10" textAnchor="middle" fontSize="8" fontFamily="serif" fontWeight="bold" fill="#702F3B">N</text>
          <text x="50" y="97" textAnchor="middle" fontSize="8" fontFamily="serif" fill="#7A6F68">S</text>
          <text x="96" y="53" textAnchor="middle" fontSize="8" fontFamily="serif" fill="#7A6F68">E</text>
          <text x="6" y="53" textAnchor="middle" fontSize="8" fontFamily="serif" fill="#7A6F68">W</text>
        </svg>
      );
    case 'train':
      return (
        <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <rect x="5" y="20" width="60" height="25" rx="3" strokeWidth="2" fill="#F7F1E5" />
          <rect x="65" y="15" width="25" height="30" rx="2" strokeWidth="2" fill="#702F3B" fillOpacity="0.1" />
          <rect x="15" y="8" width="10" height="12" strokeWidth="1.5" />
          <line x1="12" y1="8" x2="28" y2="8" strokeWidth="2" />
          <circle cx="20" cy="48" r="7" strokeWidth="2" fill="#F7F1E5" />
          <circle cx="45" cy="48" r="7" strokeWidth="2" fill="#F7F1E5" />
          <circle cx="75" cy="46" r="9" strokeWidth="2" fill="#F7F1E5" />
          <line x1="20" y1="48" x2="45" y2="48" strokeWidth="2" />
          <line x1="2" y1="56" x2="98" y2="56" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M70 20 H85 V30 H70 Z" strokeWidth="1.5" />
        </svg>
      );
    case 'quill':
      return (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <path d="M65 10 C50 15 25 35 15 65 C25 60 40 50 45 42" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 10 C60 25 48 38 35 48" strokeWidth="1.5" />
          <line x1="15" y1="65" x2="10" y2="70" strokeWidth="2" />
          <rect x="50" y="55" width="22" height="15" rx="2" strokeWidth="1.5" fill="#702F3B" fillOpacity="0.1" />
          <line x1="55" y1="55" x2="55" y2="50" strokeWidth="2" />
          <line x1="67" y1="55" x2="67" y2="50" strokeWidth="2" />
        </svg>
      );
    case 'pocketwatch':
      return (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <circle cx="40" cy="46" r="30" strokeWidth="2" fill="#F7F1E5" />
          <circle cx="40" cy="46" r="26" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M40 16 V10 M34 10 H46" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="10" r="4" strokeWidth="1.5" />
          <line x1="40" y1="46" x2="40" y2="28" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="46" x2="52" y2="46" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="40" cy="46" r="2.5" fill="#702F3B" />
        </svg>
      );
    case 'scales':
      return (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <line x1="40" y1="15" x2="40" y2="68" strokeWidth="2.5" />
          <line x1="15" y1="24" x2="65" y2="24" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="40" cy="16" r="3" fill="#702F3B" />
          {/* Left Pan */}
          <line x1="18" y1="25" x2="12" y2="42" strokeWidth="1" />
          <line x1="18" y1="25" x2="24" y2="42" strokeWidth="1" />
          <path d="M10 42 Q18 48 26 42 Z" strokeWidth="1.5" fill="#C7A77B" fillOpacity="0.3" />
          {/* Right Pan */}
          <line x1="62" y1="25" x2="56" y2="42" strokeWidth="1" />
          <line x1="62" y1="25" x2="68" y2="42" strokeWidth="1" />
          <path d="M54 42 Q62 48 70 42 Z" strokeWidth="1.5" fill="#C7A77B" fillOpacity="0.3" />
          {/* Base */}
          <path d="M25 68 H55" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={`text-[#702F3B] ${className}`}>
          <circle cx="40" cy="40" r="32" strokeWidth="2" strokeDasharray="2 2" />
          <path d="M40 18 L46 32 L60 34 L50 44 L53 58 L40 50 L27 58 L30 44 L20 34 L34 32 Z" strokeWidth="1.5" fill="#C7A77B" fillOpacity="0.2" />
        </svg>
      );
  }
};
