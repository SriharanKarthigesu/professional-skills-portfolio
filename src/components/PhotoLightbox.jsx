import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#F7F1E5] p-4 md:p-6 rounded-lg shadow-2xl border-2 border-[#C7A77B] text-[#2C2523]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full bg-[#702F3B] text-[#F7F1E5] hover:bg-[#57242E] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* High Res Image */}
        <div className="w-full max-h-[70vh] overflow-hidden rounded bg-black/5 flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Clean Caption */}
        {photo.caption && (
          <div className="mt-3 text-center">
            <h3 className="font-playfair text-base md:text-lg font-bold text-[#702F3B]">
              {photo.caption}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
