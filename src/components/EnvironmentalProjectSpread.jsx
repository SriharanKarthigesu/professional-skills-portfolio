import React from 'react';
import Page from './Page';
import { finalProjectData } from '../data/portfolioData';
import { VintageStamp, WashiTape, PhotoCorner } from './VintageDecorations';
import { Camera, MapPin, Calendar, Users, Award, Leaf } from 'lucide-react';

/**
 * Environmental Project Left Page:
 * - Official Event Poster (Image 3)
 * - Event Details: Date (27 Sept 2026), Venue (Turret Tower), For: Students & Lecturers
 * - Organized by HDIT Y2S2 Weekend Students
 * - Slogan & Core Objectives
 */
export const EnvironmentalProjectLeftPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="21"
      isLeft={true}
      footerNote="Final Project • World Environmental Health Day at Turret Tower"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-2.5 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold flex items-center gap-1.5">
              <Leaf size={14} className="text-emerald-700" />
              <span>Final Module Project • Station 08: Green Horizon</span>
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B] leading-tight">
              {finalProjectData.eventTitle}
            </h2>
          </div>
          <VintageStamp value="FINAL" label="PROJECT" code="TURRET-26" color="burgundy" />
        </div>

        {/* Venue, Date & Audience Ribbon */}
        <div className="grid grid-cols-3 gap-2 bg-[#F0E6D2] p-2 rounded-lg border border-[#C7A77B]/60 text-center mb-2 shadow-xs">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold flex items-center gap-1">
              <Calendar size={11} className="text-[#702F3B]" /> Date
            </span>
            <span className="text-xs font-jakarta font-bold text-[#702F3B] mt-0.5">{finalProjectData.date}</span>
          </div>
          <div className="flex flex-col items-center justify-center border-x border-[#C7A77B]/40 px-1">
            <span className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold flex items-center gap-1">
              <MapPin size={11} className="text-[#702F3B]" /> Venue
            </span>
            <span className="text-xs font-jakarta font-bold text-[#2C2523] mt-0.5">{finalProjectData.venue}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold flex items-center gap-1">
              <Users size={11} className="text-[#702F3B]" /> Audience
            </span>
            <span className="text-[11px] font-jakarta font-bold text-[#2C2523] mt-0.5">{finalProjectData.audience}</span>
          </div>
        </div>

        {/* Organizer Banner */}
        <div className="bg-[#35141B] text-[#F7F1E5] px-3 py-1 rounded text-center text-xs font-mono font-bold tracking-wider mb-2">
          Organized by {finalProjectData.organizers}
        </div>

        {/* Center: Big Official Poster Showcase */}
        <div className="flex-1 flex flex-col md:flex-row items-center gap-3 bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/60 shadow-sm overflow-hidden">
          {/* Poster Polaroid (Image 3) */}
          <div
            onClick={() => onPhotoClick && onPhotoClick({
              url: finalProjectData.posterImage,
              caption: "Official Event Poster: Environmental Awareness Quiz & Indoor Plant Giveaway at Turret Tower"
            })}
            className="relative bg-white p-2 pb-3 shadow-polaroid border border-[#EBDDC7] rounded-sm max-w-[210px] md:max-w-[230px] flex-shrink-0 group hover:scale-105 transition-all duration-200 cursor-pointer mx-auto"
          >
            <WashiTape color="gold" className="top-[-10px] left-1/2" />
            <PhotoCorner position="top-left" />
            <PhotoCorner position="top-right" />
            <PhotoCorner position="bottom-left" />
            <PhotoCorner position="bottom-right" />

            <div className="w-full h-48 md:h-56 overflow-hidden rounded-[1px] bg-black/5 relative">
              <img
                src={finalProjectData.posterImage}
                alt="Environmental Awareness Quiz Poster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-1 text-[10px] font-script text-[#2C2523] text-center leading-tight font-bold">
              ★ 3rd Image: Official Event Poster
            </div>
          </div>

          {/* Slogan & Pillars Narrative */}
          <div className="flex-1 flex flex-col justify-between h-full space-y-2 py-1">
            <div className="bg-[#F0E6D2]/80 p-2.5 rounded border-l-4 border-emerald-700">
              <div className="text-[10px] font-mono uppercase font-bold text-emerald-900 tracking-wider">
                {finalProjectData.occasion}
              </div>
              <div className="text-xs md:text-sm font-playfair font-bold text-[#702F3B] italic mt-0.5">
                “{finalProjectData.slogan}”
              </div>
              <p className="text-[11px] font-inter text-[#5A504B] mt-1 leading-snug">
                {finalProjectData.motto}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {finalProjectData.goals.map((goal, i) => (
                <div key={i} className="bg-white p-1.5 rounded border border-[#C7A77B]/40 text-center">
                  <div className="text-sm">{goal.icon}</div>
                  <div className="text-[10px] font-jakarta font-bold text-[#702F3B]">{goal.label}</div>
                  <div className="text-[9px] font-inter text-[#7A6F68] leading-tight">{goal.text}</div>
                </div>
              ))}
            </div>

            {/* Potted Plant Messages */}
            <div className="flex items-center justify-around bg-[#F0E6D2]/50 p-1 rounded text-[10px] font-script text-emerald-800 font-bold border border-dashed border-[#C7A77B]">
              {finalProjectData.potTags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-2 pt-2 border-t border-[#C7A77B]/40 text-xs font-inter text-[#5A504B] flex items-center justify-between">
          <span>Campus Community Initiative</span>
          <span className="font-bold text-[#702F3B]">Continued on Page 22 (Working Photos) ➔</span>
        </div>
      </div>
    </Page>
  );
});
EnvironmentalProjectLeftPage.displayName = 'EnvironmentalProjectLeftPage';

/**
 * Environmental Project Right Page:
 * - 4th and 5th Images: THE 2 MAIN WORKING IMAGES (PUT BIG!)
 * - Reserved space/slots for the other 7 smaller images
 * - Executive Reflections & Outcomes
 */
export const EnvironmentalProjectRightPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="22"
      isLeft={false}
      footerNote="Final Project • Hands-On Working Evidence & Gallery"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-2 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#702F3B] font-bold">
              Turret Tower Execution Evidence
            </div>
            <h2 className="font-playfair text-lg md:text-xl font-extrabold text-[#702F3B]">
              Hands-On Working Photos & Team Coordination
            </h2>
          </div>
          <div className="flex items-center gap-1 text-xs font-mono text-emerald-800 font-bold bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-300">
            <span>27 SEPT 2026</span>
          </div>
        </div>

        {/* Narrative Contribution */}
        <p className="text-xs font-inter text-[#5A504B] mb-2 leading-relaxed bg-[#F0E6D2]/60 p-2 rounded border border-[#C7A77B]/40">
          <strong className="text-[#702F3B]">My Active Role: </strong>
          {finalProjectData.myContribution}
        </p>

        {/* MAIN BIG IMAGES: 4th and 5th Images (PUT BIG!) */}
        <div className="mb-3">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider mb-1.5 flex items-center gap-1.5">
            <span>📷</span>
            <span>Main Working Evidence (Featured Big)</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {finalProjectData.mainWorkingPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => onPhotoClick && onPhotoClick(photo)}
                style={{ transform: `rotate(${photo.rotation})` }}
                className="relative bg-white p-2.5 pb-3.5 shadow-polaroid border border-[#EBDDC7] rounded-sm group hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-200 cursor-pointer"
              >
                <WashiTape color={photo.tapeColor} className="top-[-10px] left-1/2" />
                <PhotoCorner position="top-left" />
                <PhotoCorner position="top-right" />
                <PhotoCorner position="bottom-left" />
                <PhotoCorner position="bottom-right" />

                <div className="w-full h-36 md:h-44 overflow-hidden rounded-[1px] bg-black/5 relative">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 text-[#F7F1E5] text-[9px] font-mono px-1.5 py-0.5 rounded backdrop-blur-xs">
                    {photo.tag}
                  </div>
                </div>
                <div className="mt-1.5 text-xs font-script text-[#2C2523] text-center leading-tight font-bold">
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESERVED SLOTS FOR THE OTHER 7 SMALLER IMAGES */}
        <div className="bg-[#FBF8F1] p-2.5 rounded-lg border border-[#C7A77B]/60 shadow-sm flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#C7A77B]/40 pb-1 mb-1.5">
            <span className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider flex items-center gap-1">
              <span>🖼</span>
              <span>Additional Event Gallery (Space Reserved for 7 Photos)</span>
            </span>
            <span className="text-[9px] font-mono text-[#7A6F68] bg-[#F0E6D2] px-2 py-0.5 rounded">
              7 Photo Slots
            </span>
          </div>

          {/* 7 Compact Polaroid Placeholder Slots */}
          <div className="grid grid-cols-7 gap-1 py-1">
            {finalProjectData.smallPhotoSlots.map((slot) => (
              <div
                key={slot.id}
                className="bg-white border-2 border-dashed border-[#C7A77B]/70 rounded p-1 text-center flex flex-col items-center justify-center min-h-[58px] hover:border-[#702F3B] hover:bg-[#F0E6D2]/50 transition-all cursor-pointer group"
                title={`${slot.title}: ${slot.desc}`}
              >
                <Camera size={14} className="text-[#C7A77B] group-hover:text-[#702F3B] mb-0.5" />
                <span className="text-[7.5px] font-mono font-bold text-[#702F3B] leading-none">
                  #{slot.id}
                </span>
                <span className="text-[7px] font-jakarta text-[#5A504B] leading-none mt-0.5 line-clamp-1">
                  {slot.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-1 text-[9px] font-mono text-[#7A6F68] border-t border-dashed border-[#C7A77B]/40 pt-1 flex items-center justify-between">
            <span>★ Main working images featured big above</span>
            <span className="italic">Ready for 7 supplemental event photos</span>
          </div>
        </div>
      </div>
    </Page>
  );
});
EnvironmentalProjectRightPage.displayName = 'EnvironmentalProjectRightPage';
