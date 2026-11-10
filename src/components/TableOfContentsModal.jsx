import React, { useEffect } from 'react';
import { X, BookOpen, Award, Leaf, FileText, Briefcase, Heart, Users, UserCheck } from 'lucide-react';
import { tableOfContents, portfolioConfig } from '../data/portfolioData';

export default function TableOfContentsModal({ isOpen, onClose, onNavigate, currentPage }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { student } = portfolioConfig;

  const quickLinks = [
    { label: "Front Cover", page: 0, icon: BookOpen },
    { label: "Welcome & TOC", page: 2, icon: FileText },
    { label: "01. Introduction", page: 4, icon: BookOpen },
    { label: "02. CV Writing", page: 6, icon: UserCheck },
    { label: "03. Interview", page: 12, icon: Briefcase },
    { label: "07. Project", page: 20, icon: Leaf },
    { label: "Contributions", page: 22, icon: Heart },
    { label: "Thank You", page: 24, icon: Award },
  ];

  const getSectionIcon = (id) => {
    switch (id) {
      case "01": return BookOpen;
      case "02": return UserCheck;
      case "03": return Briefcase;
      case "04": return Users;
      case "05": return Heart;
      case "06": return Award;
      case "07": return Leaf;
      default: return FileText;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#F7F1E5] rounded-xl shadow-2xl border-4 border-[#C7A77B] p-6 md:p-8 text-[#2C2523] max-h-[90vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[#C7A77B]/60 pb-3 mb-4">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Module Code : {student.moduleCode} • {student.name} ({student.studentId})
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-extrabold text-[#702F3B] tracking-wide">
              TABLE OF CONTENTS
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Navigation"
            className="p-2 rounded-full bg-[#702F3B] text-[#F7F1E5] hover:bg-[#57242E] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Jumps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
          {quickLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={() => {
                  onNavigate(item.page);
                  onClose();
                }}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F0E6D2] hover:bg-[#EBDDC7] border border-[#C7A77B]/60 text-left transition-all cursor-pointer group shadow-xs"
              >
                <Icon size={16} className="text-[#702F3B] group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-sm font-jakarta font-semibold text-[#2C2523] truncate">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Complete Chapters List (All Caps, 01 to 07) */}
        <div className="text-xs font-mono uppercase font-bold text-[#702F3B] mb-2 flex items-center gap-2">
          <span>📚</span>
          <span>SYLLABUS CHAPTERS (01 TO 07)</span>
        </div>

        <div className="space-y-1.5 overflow-y-auto flex-1 pr-1 max-h-[46vh]">
          {tableOfContents.map((item) => {
            const Icon = getSectionIcon(item.id);
            const isCurrentSpread = currentPage === item.page || currentPage === item.page + 1;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.page);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-left transition-all cursor-pointer group shadow-xs ${
                  isCurrentSpread
                    ? 'bg-[#702F3B] text-[#F7F1E5] border-[#702F3B]'
                    : 'bg-[#FBF8F1] hover:bg-[#EBDDC7] text-[#2C2523] border-[#C7A77B]/40'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold flex-shrink-0 ${
                      isCurrentSpread ? 'bg-[#C7A77B] text-[#35141B]' : 'bg-[#702F3B] text-[#F7F1E5]'
                    }`}
                  >
                    {item.id}
                  </span>
                  <div className="flex items-center gap-2 truncate">
                    <Icon size={14} className={isCurrentSpread ? 'text-[#C7A77B]' : 'text-[#702F3B]'} />
                    <span className="text-xs md:text-sm font-jakarta font-bold uppercase truncate">
                      {item.title}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-xs font-mono font-bold ml-2 flex-shrink-0 ${
                    isCurrentSpread ? 'text-[#C7A77B]' : 'text-[#7A6F68] group-hover:text-[#702F3B]'
                  }`}
                >
                  p. {String(item.page).padStart(2, '0')} ➔
                </span>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-[#C7A77B]/40 flex items-center justify-between text-xs font-mono text-[#7A6F68]">
          <span>Select any chapter to jump directly</span>
          <span className="text-[#702F3B] font-bold">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
