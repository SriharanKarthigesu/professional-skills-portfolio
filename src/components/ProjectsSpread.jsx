import React from 'react';
import Page from './Page';
import { projectShowcase } from '../data/portfolioData';
import { VintageStamp, WashiTape, PhotoCorner } from './VintageDecorations';

export const ProjectsLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="29"
      isLeft={true}
      footerNote="Capstone Showcase • Project Architecture"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Major Project Showcase
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              {projectShowcase.title}
            </h2>
          </div>
          <VintageStamp value="CAPSTONE" label="EXCELLENCE" code="PROJ-01" color="burgundy" />
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-3 gap-2 bg-[#F0E6D2] p-2.5 rounded-lg border border-[#C7A77B]/60 text-center mb-3">
          <div>
            <div className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold">Role</div>
            <div className="text-xs md:text-sm font-jakarta font-bold text-[#702F3B] truncate">{projectShowcase.role}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold">Timeline</div>
            <div className="text-xs md:text-sm font-jakarta font-bold text-[#2C2523] truncate">{projectShowcase.projectPeriod}</div>
          </div>
          <div>
            <div className="text-[9px] font-mono uppercase text-[#7A6F68] font-bold">Team</div>
            <div className="text-xs md:text-sm font-jakarta font-bold text-[#2C2523] truncate">{projectShowcase.teamSize}</div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-3 bg-[#FBF8F1] p-3 rounded-lg border-l-4 border-[#702F3B] shadow-sm">
          <span className="text-[10px] font-mono uppercase font-bold text-[#702F3B] block mb-1">
            Problem Formulation & Scope
          </span>
          <p className="text-xs md:text-sm font-inter text-[#2C2523] leading-relaxed">
            {projectShowcase.problemStatement}
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-3 text-xs md:text-sm font-inter text-[#5A504B] leading-relaxed flex-1">
          <span className="font-bold text-[#702F3B]">Executive Overview: </span>
          {projectShowcase.overview}
        </div>

        {/* Key Project Metrics */}
        <div className="mt-2 pt-2.5 border-t border-[#C7A77B]/50">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] mb-1.5">
            Quantified Project Metrics
          </div>
          <div className="grid grid-cols-4 gap-2">
            {projectShowcase.keyMetrics.map((metric, i) => (
              <div key={i} className="bg-[#F0E6D2]/80 p-2 rounded-lg border border-[#C7A77B]/50 text-center shadow-sm">
                <div className="text-base md:text-lg font-playfair font-extrabold text-[#702F3B]">{metric.value}</div>
                <div className="text-[9px] font-mono text-[#7A6F68] uppercase font-bold truncate">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
});
ProjectsLeftPage.displayName = 'ProjectsLeftPage';

export const ProjectsRightPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="30"
      isLeft={false}
      footerNote="Capstone Showcase • Evidence & Deliverables"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Deliverables List */}
        <div className="mb-3">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider mb-2 flex items-center gap-1.5">
            <span>📋</span>
            <span>Formal Academic Deliverables & Assessment</span>
          </div>
          <div className="space-y-1.5">
            {projectShowcase.deliverables.map((del, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#F0E6D2]/70 px-3 py-1.5 rounded-lg border border-[#C7A77B]/50 text-xs shadow-sm"
              >
                <span className="font-jakarta font-semibold text-[#2C2523] truncate flex-1">
                  • {del.title}
                </span>
                <span className="font-mono text-[#702F3B] font-bold pl-3 flex-shrink-0">
                  [{del.grade}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Contributions */}
        <div className="mb-3 bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex-1 shadow-sm">
          <div className="text-[10px] font-mono uppercase font-bold text-[#702F3B] tracking-wider mb-1.5">
            Individual Technical & Leadership Contributions
          </div>
          <div className="space-y-1.5">
            {projectShowcase.myContributions.map((contrib, i) => (
              <div key={i} className="text-xs md:text-sm font-inter text-[#5A504B] leading-relaxed">
                <span className="text-[#702F3B] font-bold">({i + 1})</span> {contrib}
              </div>
            ))}
          </div>
        </div>

        {/* Photographs / Evidence Polaroids */}
        <div className="flex items-center justify-around gap-3 py-1">
          {projectShowcase.photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => onPhotoClick && onPhotoClick(photo)}
              style={{ transform: `rotate(${photo.rotation || '0deg'})` }}
              className="relative bg-white p-2 pb-3 shadow-polaroid border border-[#EBDDC7] rounded-sm max-w-[48%] flex-1 group hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-200 cursor-pointer"
            >
              <WashiTape color={photo.tapeColor || 'gold'} className="top-[-10px] left-1/2" />
              <PhotoCorner position="top-left" />
              <PhotoCorner position="top-right" />
              <PhotoCorner position="bottom-left" />
              <PhotoCorner position="bottom-right" />

              <div className="w-full h-24 md:h-28 overflow-hidden rounded-[1px] bg-[#EBDDC7]/40">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="mt-1 text-[10px] md:text-xs font-script text-[#2C2523] text-center leading-tight truncate font-semibold">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
});
ProjectsRightPage.displayName = 'ProjectsRightPage';
