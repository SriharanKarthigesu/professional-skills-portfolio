import React from 'react';
import Page from './Page';

/**
 * PAGE 04: 01. INTRODUCTION TO PROFESSIONAL SKILLS
 */
export const IntroSkillsLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="04"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 01
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            01. INTRODUCTION TO PROFESSIONAL SKILLS
          </h2>
          <p className="text-xs md:text-sm text-[#7A6F68] mt-0.5 font-jakarta">
            Employability skills, workplace classification, values & self-awareness
          </p>
        </div>

        <div className="space-y-3 text-sm text-[#2C2523] my-auto">
          {/* What are Professional & Employability Skills */}
          <div className="p-3 bg-white/80 rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-sm">
              What are Professional & Employability Skills?
            </h4>
            <p className="text-xs md:text-sm text-[#5A504B] mt-1 leading-relaxed">
              <strong>Professional Skills:</strong> The core competencies, behavioral etiquettes, and interpersonal capabilities that allow individuals to excel in workplace environments.
            </p>
            <p className="text-xs md:text-sm text-[#5A504B] mt-1 leading-relaxed">
              <strong>Employability Skills:</strong> Transferable skills needed by employers, including critical thinking, problem-solving, collaboration, dependability, and continuous learning.
            </p>
          </div>

          {/* Classification & Values */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 bg-[#F0E6D2]/60 rounded-lg border border-[#C7A77B]/40">
              <strong className="text-xs md:text-sm text-[#702F3B] block mb-1">Classifying Workplace Skills</strong>
              <div className="text-xs text-[#5A504B] space-y-1">
                <div>• <strong>Hard Skills:</strong> Technical coding, database systems, IT tools.</div>
                <div>• <strong>Soft Skills:</strong> Active listening, teamwork, adaptability, emotional control.</div>
              </div>
            </div>

            <div className="p-2.5 bg-[#F0E6D2]/60 rounded-lg border border-[#C7A77B]/40">
              <strong className="text-xs md:text-sm text-[#702F3B] block mb-1">Values, Beliefs & Character</strong>
              <div className="text-xs text-[#5A504B] space-y-1">
                <div>• <strong>Values:</strong> Guiding moral principles.</div>
                <div>• <strong>Beliefs:</strong> Core mindsets shaping actions.</div>
                <div>• <strong>Attitudes:</strong> How we react to challenge.</div>
              </div>
            </div>
          </div>

          {/* Johari Window Exercise: Centered, Clear and Big */}
          <div className="p-3 bg-white rounded-lg border border-[#C7A77B]/50 shadow-sm flex flex-col items-center">
            <h4 className="font-bold text-[#702F3B] text-xs md:text-sm mb-1.5 uppercase font-mono tracking-wider">
              Johari Window Self-Awareness Exercise
            </h4>
            <div className="w-full max-w-sm h-44 md:h-48 overflow-hidden rounded bg-white flex items-center justify-center p-1 border border-[#C7A77B]/30">
              <img
                src="./images/johari_window.jpg"
                alt="Johari Window Exercise"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-2 text-xs text-[#5A504B]">
              <div className="bg-[#F0E6D2]/50 p-1.5 rounded">
                <strong>Arena:</strong> Known to self & known to others.
              </div>
              <div className="bg-[#F0E6D2]/50 p-1.5 rounded">
                <strong>Blind Spot:</strong> Not known to self, known to others.
              </div>
              <div className="bg-[#F0E6D2]/50 p-1.5 rounded">
                <strong>Façade:</strong> Known to self, hidden from others.
              </div>
              <div className="bg-[#F0E6D2]/50 p-1.5 rounded">
                <strong>Unknown:</strong> Hidden from self & others.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
IntroSkillsLeftPage.displayName = 'IntroSkillsLeftPage';

/**
 * PAGE 05: Individual Activity: Professional Identity Tree
 * Expanding lightbox removed; title placed directly below the image.
 * All extra wording ("academic artifact", "workshop...", "recorded during coursework...") removed.
 */
export const IntroSkillsRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="05"
      isLeft={false}
      footerNote="Individual Activity: Professional Identity Tree"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Full Image Display - No Modal Expanding on Click */}
        <div className="my-auto flex-1 flex flex-col items-center justify-center py-2">
          <div className="w-full h-[520px] md:h-[580px] bg-white p-2 rounded-lg shadow-sm border border-[#C7A77B]/40 flex items-center justify-center">
            <img
              src="./images/professional_identity_tree.jpg"
              alt="Individual Activity: Professional Identity Tree"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title placed directly below the image as requested */}
          <h2 className="font-playfair text-lg md:text-xl font-bold text-[#702F3B] mt-3 text-center">
            Individual Activity: Professional Identity Tree
          </h2>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
IntroSkillsRightPage.displayName = 'IntroSkillsRightPage';

/**
 * PAGE 06: Group Activity: Candle Holder
 * Images fully visible with object-contain (zero cropping!)
 * Left column: 2 stacked photos (top & bottom)
 * Right column: IMG_7375 candle holder full height
 */
export const CandleHolderLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="06"
      isLeft={true}
      footerNote="Group Activity: Candle Holder"
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B]">
            Group Activity: Candle Holder
          </h2>
        </div>

        {/* 2-Column Collage with ZERO CROPPING (object-contain) */}
        <div className="my-auto flex-1 grid grid-cols-2 gap-3 py-2">
          {/* Left Column: 2 stacked photos */}
          <div className="flex flex-col gap-3 h-full">
            {/* Top Photo */}
            <div className="flex-1 bg-white p-1.5 rounded-lg border border-[#C7A77B]/40 shadow-xs flex items-center justify-center">
              <img
                src="./images/candle_making_group.jpg"
                alt="Group activity workshop"
                className="w-full h-full max-h-[250px] object-contain rounded"
              />
            </div>

            {/* Bottom Photo (Group Photo with craft) */}
            <div className="flex-1 bg-white p-1.5 rounded-lg border border-[#C7A77B]/40 shadow-xs flex items-center justify-center">
              <img
                src="./images/candle_group_presentation.jpg"
                alt="Group photo with candle holder"
                className="w-full h-full max-h-[250px] object-contain rounded"
              />
            </div>
          </div>

          {/* Right Column: IMG_7375 Candle Holder Full Height - Zoomed in */}
          <div className="h-full bg-white p-1 rounded-lg border border-[#C7A77B]/40 shadow-xs flex items-center justify-center overflow-hidden">
            <img
              src="./images/img_7375_candle.jpg"
              alt="Candle holder close-up"
              className="w-full h-full max-h-[550px] object-cover scale-110 rounded transition-transform"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
CandleHolderLeftPage.displayName = 'CandleHolderLeftPage';

/**
 * PAGE 07: 02. CV WRITING AND WRITING COVER LETTERS
 * Text fitted compactly so Key Learnings box is never cropped or cut off!
 */
/**
 * PAGE 07: 02. CV WRITING AND WRITING COVER LETTERS
 * Restored to full dedicated page with increased font size as requested.
 */
export const CVWritingRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="07"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 02
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            02. CV WRITING AND WRITING COVER LETTERS
          </h2>
        </div>

        <div className="space-y-3 text-sm text-[#2C2523] my-auto">
          {/* What is a CV? */}
          <div className="p-3 bg-white/85 rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-sm md:text-base mb-1">What is a CV?</h4>
            <ul className="space-y-1 text-xs md:text-[13px] text-[#5A504B] leading-relaxed">
              <li>• A Curriculum Vitae (CV) is a comprehensive document summarizing education, work experience, technical skills, and achievements.</li>
              <li>• Its primary purpose is to showcase your professional qualifications and suitability for a specific target role.</li>
              <li>• Your CV creates the vital first impression on hiring managers and determines whether you are shortlisted for interviews.</li>
              <li>• A tailored, strategically crafted CV sets you apart from competing applicants.</li>
            </ul>
          </div>

          {/* Tailoring Your CV */}
          <div className="p-3 bg-white/85 rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-sm md:text-base mb-1">Tailoring Your CV</h4>
            <ul className="space-y-1 text-xs md:text-[13px] text-[#5A504B] leading-relaxed">
              <li>• A tailored CV aligns directly with the job requirements and tech stack of the position.</li>
              <li>• Highlight relevant technical competencies, university coursework, and portfolio projects.</li>
              <li>• Researching the hiring company reveals industry keywords necessary to pass automated Applicant Tracking Systems (ATS).</li>
            </ul>
          </div>

          {/* Essential CV Components */}
          <div className="p-3 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-sm mb-1.5">Essential CV Architecture:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-[12.5px] text-[#5A504B]">
              <div>• <strong>Personal Contact Details</strong></div>
              <div>• <strong>Professional Summary</strong></div>
              <div>• <strong>Technical & Soft Skills</strong></div>
              <div>• <strong>Work & Internship Experience</strong></div>
              <div>• <strong>Higher Education & Degrees</strong></div>
              <div>• <strong>Projects, Awards & Referees</strong></div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
CVWritingRightPage.displayName = 'CVWritingRightPage';

/**
 * PAGE 08: Lecturer CV Inspection Session
 * Restored to its own dedicated page with large classroom photo and exact advice as before.
 */
export const CVReviewLeftPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="08"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B]">
            Lecturer Reviewing My CV
          </h2>
          <p className="text-xs md:text-sm text-[#7A6F68] mt-0.5 font-jakarta">
            Individual assessment and personalized feedback on resume structure and visual formatting
          </p>
        </div>

        {/* Real Classroom Photo Featured Large Exactly As Before */}
        <div className="my-auto flex-1 flex flex-col items-center justify-center py-1">
          <div className="w-full h-full max-h-[580px] bg-white p-2.5 rounded-lg shadow-sm border border-[#C7A77B]/50 flex flex-col items-center justify-between">
            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "./images/cv_checking_lecturer.jpg",
                caption: "Classroom Feedback Session: Lecturer reviewing Sriharan's CV formatting and structure."
              })}
              className="w-full flex-1 max-h-[470px] overflow-hidden rounded bg-black/5 flex items-center justify-center cursor-pointer group"
            >
              <img
                src="./images/cv_checking_lecturer.jpg"
                alt="Lecturer checking CV"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-2.5 text-center px-3 py-2 bg-[#FBF8F1] rounded border border-[#C7A77B]/30 w-full">
              <span className="text-xs md:text-sm font-jakarta font-bold text-[#702F3B] block">
                ★ Advice Received from Lecturer:
              </span>
              <p className="text-xs md:text-[13px] text-[#5A504B] font-inter mt-1 leading-snug">
                "Miss told me to add skills that I have, and she told me colors and font styles are perfect, and she told me to add projects that we did during university."
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
CVReviewLeftPage.displayName = 'CVReviewLeftPage';

/**
 * PAGE 09: Cover Letter Guidelines & Workshop Preparation
 */
export const CoverLetterRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="09"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            WORKSHOP ESSENTIALS
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            Cover Letter Preparation & Principles
          </h2>
        </div>

        <div className="space-y-3.5 text-sm text-[#2C2523] my-auto">
          {/* Definition */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-sm md:text-base mb-1">
              What is a Professional Cover Letter?
            </h4>
            <p className="text-xs md:text-[13px] text-[#5A504B] leading-relaxed">
              A <strong>Cover Letter</strong> is a formal one-page document accompanying your CV. Its core purpose is to introduce you personally to the hiring committee, specify the exact job opening applied for, articulate your motivation, and highlight how your specific competencies provide direct, measurable value to the company.
            </p>
          </div>

          {/* 3-Part Structure */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-2">
            <h4 className="font-bold text-[#702F3B] text-sm mb-1">Standard 3-Part Cover Letter Formula:</h4>
            <div className="space-y-1.5 text-xs md:text-[12.5px] text-[#5A504B] leading-relaxed">
              <div><strong>1. Opening Hook:</strong> State the exact position applied for, where you discovered the listing, and your enthusiasm for the organization.</div>
              <div><strong>2. The Value Pitch:</strong> Highlight 2–3 major technical projects and quantify your achievements with clear metrics showing your competence.</div>
              <div><strong>3. Call to Action:</strong> Reiterate your interest in an interview, thank the reader for their consideration, and provide direct contact details.</div>
            </div>
          </div>

          {/* Golden Rules */}
          <div className="p-3 bg-[#F0E6D2]/70 rounded-lg border-l-4 border-[#702F3B]">
            <h4 className="font-bold text-[#702F3B] text-xs md:text-sm uppercase font-mono tracking-wider mb-1">
              Golden Rules Learned in Session:
            </h4>
            <div className="text-xs md:text-[12.5px] text-[#57242E] space-y-1">
              <div>• Always address the hiring manager or recruiter by name whenever possible.</div>
              <div>• Never exceed one page (300 to 400 words maximum).</div>
              <div>• Proofread meticulously to ensure zero typographical or grammatical errors.</div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
CoverLetterRightPage.displayName = 'CoverLetterRightPage';

/**
 * PAGE 10: Student CV — Page 1 (Full Page, No White Frame, Maximum Space)
 */
export const CVPageOneLeftPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="10"
      isLeft={true}
      noPadding={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div
        onClick={() => onPhotoClick && onPhotoClick({
          url: "./images/sriharan_cv_page_1.jpg",
          caption: "Curriculum Vitae — Page 1: Sriharan Karthigesu (Professional Experience, Education, Projects)."
        })}
        className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden p-0.5"
      >
        <img
          src="./images/sriharan_cv_page_1.jpg"
          alt="Sriharan Karthigesu CV - Page 1"
          className="w-full h-full object-contain rounded drop-shadow-sm hover:scale-[1.01] transition-transform"
        />
      </div>
    </Page>
  );
});
CVPageOneLeftPage.displayName = 'CVPageOneLeftPage';

/**
 * PAGE 11: Student CV — Page 2 (Full Page, No White Frame, Maximum Space)
 */
export const CVPageTwoRightPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="11"
      isLeft={false}
      noPadding={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div
        onClick={() => onPhotoClick && onPhotoClick({
          url: "./images/sriharan_cv_page_2.jpg",
          caption: "Curriculum Vitae — Page 2: Sriharan Karthigesu (Projects, Skills & Certifications, Languages, Referees)."
        })}
        className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden p-0.5"
      >
        <img
          src="./images/sriharan_cv_page_2.jpg"
          alt="Sriharan Karthigesu CV - Page 2"
          className="w-full h-full object-contain rounded drop-shadow-sm hover:scale-[1.01] transition-transform"
        />
      </div>
    </Page>
  );
});
CVPageTwoRightPage.displayName = 'CVPageTwoRightPage';
