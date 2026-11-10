import React from 'react';
import Page from './Page';
import { skillsAuditData } from '../data/portfolioData';
import { VintageStamp } from './VintageDecorations';

export const ReflectionLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  const { baselineWeek1, achievedWeek12 } = skillsAuditData;

  return (
    <Page
      ref={ref}
      pageNumber="31"
      isLeft={true}
      footerNote="Personal Reflection • Competency Growth Audit"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Cognitive & Behavioral Growth
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              Skills Competency Audit
            </h2>
          </div>
          <VintageStamp value="AUDIT" label="GROWTH" code="SKL-12" color="gold" />
        </div>

        {/* Audit Legend */}
        <div className="flex items-center justify-between text-xs font-mono mb-2 bg-[#F0E6D2]/70 p-2 rounded-lg border border-[#C7A77B]/50 shadow-sm">
          <span className="text-[#7A6F68] font-bold">Scale: 1 (Novice) to 10 (Mastery)</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#C7A77B]/80" />
              <span>Week 01</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#702F3B]" />
              <span className="font-bold text-[#702F3B]">Week 12</span>
            </span>
          </div>
        </div>

        {/* Skills Audit Bars with larger sizing */}
        <div className="space-y-2 flex-1 flex flex-col justify-between py-1">
          {baselineWeek1.map((item, idx) => {
            const finalRating = achievedWeek12[idx]?.rating || item.rating;
            const diff = finalRating - item.rating;

            return (
              <div key={idx} className="bg-[#FBF8F1] p-2 rounded-lg border border-[#C7A77B]/50 shadow-sm">
                <div className="flex items-center justify-between text-xs md:text-sm font-jakarta mb-1">
                  <span className="font-bold text-[#2C2523]">{item.skill}</span>
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-[#7A6F68]">{item.rating}/10</span>
                    <span className="text-[#C7A77B]">➔</span>
                    <span className="font-bold text-[#702F3B]">{finalRating}/10</span>
                    <span className="text-emerald-700 font-bold ml-1">(+{diff})</span>
                  </div>
                </div>

                {/* Double Progress Bar */}
                <div className="w-full bg-[#EBDDC7]/60 h-2.5 rounded-full overflow-hidden relative">
                  {/* Final Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#702F3B] rounded-full transition-all duration-500"
                    style={{ width: `${(finalRating / 10) * 100}%` }}
                  />
                  {/* Initial Bar overlay */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-[#C7A77B] rounded-full border-r border-[#F7F1E5] opacity-75"
                    style={{ width: `${(item.rating / 10) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanatory Footnote */}
        <div className="mt-2 pt-2 border-t border-[#C7A77B]/50 text-xs font-inter text-[#5A504B] leading-relaxed">
          Self-evaluated progression demonstrating marked delta in high-stakes oratory, collaborative sprint moderation, and structured academic writing.
        </div>
      </div>
    </Page>
  );
});
ReflectionLeftPage.displayName = 'ReflectionLeftPage';

export const ReflectionRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  const { swotAnalysis } = skillsAuditData;

  return (
    <Page
      ref={ref}
      pageNumber="32"
      isLeft={false}
      footerNote="Personal Reflection • Professional SWOT Matrix"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="border-b-2 border-[#C7A77B]/60 pb-3 mb-2 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#702F3B] font-bold">
              Strategic Self-Analysis
            </div>
            <h2 className="font-playfair text-xl md:text-2xl font-extrabold text-[#702F3B]">
              Personal SWOT Matrix
            </h2>
          </div>
          <div className="text-xs font-mono text-[#7A6F68] font-bold">
            GIBBS' SYNTHESIS
          </div>
        </div>

        {/* 2x2 SWOT Grid */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {/* Strengths */}
          <div className="bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-[#702F3B] mb-1.5 flex items-center gap-1.5">
                <span>✦</span>
                <span>Strengths</span>
              </div>
              <ul className="space-y-1.5 text-xs font-inter text-[#2C2523] leading-relaxed">
                {swotAnalysis.strengths.map((str, i) => (
                  <li key={i}>• {str}</li>
                ))}
              </ul>
            </div>
            <div className="text-[9px] font-mono text-[#7A6F68] font-bold text-right mt-2">INTERNAL / POSITIVE</div>
          </div>

          {/* Weaknesses */}
          <div className="bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-[#8C6C38] mb-1.5 flex items-center gap-1.5">
                <span>✦</span>
                <span>Weaknesses</span>
              </div>
              <ul className="space-y-1.5 text-xs font-inter text-[#5A504B] leading-relaxed">
                {swotAnalysis.weaknesses.map((w, i) => (
                  <li key={i}>• {w}</li>
                ))}
              </ul>
            </div>
            <div className="text-[9px] font-mono text-[#7A6F68] font-bold text-right mt-2">INTERNAL / AREAS TO GROW</div>
          </div>

          {/* Opportunities */}
          <div className="bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-[#702F3B] mb-1.5 flex items-center gap-1.5">
                <span>✦</span>
                <span>Opportunities</span>
              </div>
              <ul className="space-y-1.5 text-xs font-inter text-[#2C2523] leading-relaxed">
                {swotAnalysis.opportunities.map((o, i) => (
                  <li key={i}>• {o}</li>
                ))}
              </ul>
            </div>
            <div className="text-[9px] font-mono text-[#7A6F68] font-bold text-right mt-2">EXTERNAL / HORIZON</div>
          </div>

          {/* Threats */}
          <div className="bg-[#FBF8F1] p-3 rounded-lg border border-[#C7A77B]/70 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-[#8C6C38] mb-1.5 flex items-center gap-1.5">
                <span>✦</span>
                <span>Threats & Mitigations</span>
              </div>
              <ul className="space-y-1.5 text-xs font-inter text-[#5A504B] leading-relaxed">
                {swotAnalysis.threats.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </div>
            <div className="text-[9px] font-mono text-[#7A6F68] font-bold text-right mt-2">EXTERNAL / SYSTEMIC</div>
          </div>
        </div>

        {/* Synthesis Takeaway */}
        <div className="mt-3 bg-[#F0E6D2] p-2.5 rounded-lg border-l-4 border-[#702F3B] text-xs font-inter text-[#57242E] leading-relaxed shadow-sm">
          <span className="font-bold">Core Insight: </span>
          Progress in professional capability is an ongoing equilibrium between technical craft and interpersonal emotional regulation.
        </div>
      </div>
    </Page>
  );
});
ReflectionRightPage.displayName = 'ReflectionRightPage';
