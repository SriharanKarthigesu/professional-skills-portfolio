import React from 'react';
import Page from './Page';

/**
 * PAGE 12: 03. INTERVIEW SKILLS (Left Page)
 */
export const InterviewSkillsLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="12"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 03
          </span>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B] mt-0.5">
            03. INTERVIEW SKILLS
          </h2>
        </div>

        <div className="space-y-2.5 my-auto text-xs text-[#2C2523]">
          {/* Humanized Session Overview */}
          <div className="p-3 bg-white/80 rounded border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-xs uppercase tracking-wider font-mono mb-1">
              Session Overview:
            </h4>
            <p className="text-xs text-[#5A504B] leading-relaxed">
              This lecture took away the fear of job interviews by showing us that an interview is not an interrogation or an exam. Instead, it is simply a meaningful, two-way professional conversation where both sides gather information. While the interviewer evaluates our skills, character, and team fit, we are also deciding whether the role and company culture match our own personal goals and career expectations. The session taught us practical preparation strategies, how to make a genuine first impression, and how to structure our responses with confidence.
            </p>
          </div>

          {/* 6 C's of Effective Communication */}
          <div className="p-2.5 bg-white rounded border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-xs mb-1.5 flex items-center gap-1.5">
              <span>💬</span>
              <span>6 C’s of Effective Communication:</span>
            </h4>
            <div className="grid grid-cols-3 gap-1.5 text-center font-jakarta">
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Clear</strong>
                <span className="text-[10px] text-[#5A504B]">Simple language</span>
              </div>
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Concise</strong>
                <span className="text-[10px] text-[#5A504B]">No wordiness</span>
              </div>
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Correct</strong>
                <span className="text-[10px] text-[#5A504B]">Accurate facts</span>
              </div>
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Complete</strong>
                <span className="text-[10px] text-[#5A504B]">All key points</span>
              </div>
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Concrete</strong>
                <span className="text-[10px] text-[#5A504B]">Real examples</span>
              </div>
              <div className="p-1.5 bg-[#F0E6D2] rounded border border-[#C7A77B]/40">
                <strong className="text-[#702F3B] text-xs block">Courteous</strong>
                <span className="text-[10px] text-[#5A504B]">Polite & warm</span>
              </div>
            </div>
          </div>

          {/* S.T.A.R. Model Framework */}
          <div className="p-2.5 bg-white rounded border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-xs mb-1.5">
              The S.T.A.R. Model Framework:
            </h4>
            
            <div className="grid grid-cols-4 gap-1 mb-2 text-center">
              <div className="p-1.5 bg-[#702F3B] text-[#F7F1E5] rounded">
                <span className="text-base font-bold font-mono block">S</span>
                <span className="text-[9px] uppercase font-bold tracking-wider">Situation</span>
              </div>
              <div className="p-1.5 bg-[#8B3A4A] text-[#F7F1E5] rounded">
                <span className="text-base font-bold font-mono block">T</span>
                <span className="text-[9px] uppercase font-bold tracking-wider">Target</span>
              </div>
              <div className="p-1.5 bg-[#A85163] text-[#F7F1E5] rounded">
                <span className="text-base font-bold font-mono block">A</span>
                <span className="text-[9px] uppercase font-bold tracking-wider">Action</span>
              </div>
              <div className="p-1.5 bg-[#C7A77B] text-[#35141B] rounded">
                <span className="text-base font-bold font-mono block">R</span>
                <span className="text-[9px] uppercase font-bold tracking-wider">Result</span>
              </div>
            </div>

            <div className="space-y-1 text-xs text-[#5A504B]">
              <div><strong>S –</strong> Give brief details of the situation.</div>
              <div><strong>T –</strong> Say what you wanted to achieve – your target.</div>
              <div><strong>A –</strong> Say what you did – your actions.</div>
              <div><strong>R –</strong> Say what the result was.</div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
InterviewSkillsLeftPage.displayName = 'InterviewSkillsLeftPage';

/**
 * PAGE 13: Interview Attire Standards (Right Page)
 * Uses the entire page with no awkward blank spaces top and bottom.
 * Attire image placed straight, large, and without any "click to view" button.
 */
export const InterviewSkillsRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="13"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B]">
            Interview Attire Standards
          </h2>
        </div>

        {/* Full-Page Clean Attire Standards Guide (DO and DON'T) */}
        <div className="my-auto flex-1 flex flex-col justify-between py-1 gap-2">
          <div className="w-full flex-1 max-h-[460px] md:max-h-[500px] bg-white rounded-lg p-2 border border-[#C7A77B]/40 shadow-xs flex items-center justify-center overflow-hidden">
            <img
              src="/images/attire_clean_guide.png"
              alt="Interview Attire Standards: DO and DON'T"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Key Standards Box filling the bottom completely */}
          <div className="p-3 bg-white/90 rounded border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-xs uppercase tracking-wider font-mono mb-1">
              Key Standards & Takeaways:
            </h4>
            <p className="text-xs text-[#5A504B] font-inter leading-relaxed">
              Professional appearance creates an immediate positive impression. Choose a tailored business suit, neatly pressed collared shirt, and polished formal leather shoes. Avoid untucked shirts, mismatched khakis, wrinkled fabrics, or casual sneakers to demonstrate readiness, credibility, and respect.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
InterviewSkillsRightPage.displayName = 'InterviewSkillsRightPage';

/**
 * PAGE 14: 04. FACILITATING AND CONDUCTING MEETINGS (Left Page)
 * Types of meetings + SVG Mind Map Diagram "Planning the Meeting"
 */
export const MeetingsLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="14"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 04
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            04. FACILITATING AND CONDUCTING MEETINGS
          </h2>
        </div>

        <div className="space-y-3 my-auto text-sm text-[#2C2523]">
          {/* Types of Meeting */}
          <div className="p-3 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-xs md:text-sm mb-1">Types of Meeting</h4>
            <p className="text-xs text-[#7A6F68] mb-1.5">
              Meetings come in all shapes and sizes across business contexts. Common types include:
            </p>
            <div className="space-y-1 text-xs md:text-[12px] text-[#5A504B] leading-snug">
              <div>• <strong>Chat:</strong> Informal discussion with colleagues at the coffee machine.</div>
              <div>• <strong>Brainstorming:</strong> Among colleagues, where as many ideas as possible are produced quickly, to be evaluated later.</div>
              <div>• <strong>Project Meeting / Team Meeting:</strong> Of employees involved in a particular activity.</div>
              <div>• <strong>Department / Departmental Meeting.</strong></div>
              <div>• <strong>Meeting with Suppliers:</strong> For example, to negotiate prices for an order.</div>
              <div>• <strong>Meeting with a Customer:</strong> For example, to discuss a contract.</div>
              <div>• <strong>Board Meeting:</strong> An official, formal meeting of a company’s directors.</div>
              <div>• <strong>Annual General Meeting / AGM (BrE); Annual Meeting (AmE):</strong> Where shareholders discuss the company’s annual report.</div>
              <div>• <strong>EGM (Extraordinary General Meeting):</strong> A shareholders’ meeting to discuss an important issue such as a proposed merger.</div>
            </div>
          </div>

          {/* Mind Map Diagram: "Planning the Meeting" */}
          <div className="bg-white p-2.5 rounded-lg border border-black/30 shadow-xs flex flex-col items-center">
            <svg
              viewBox="0 0 540 250"
              className="w-full h-auto max-h-[220px]"
              style={{ fontFamily: '"Times New Roman", Times, serif', backgroundColor: '#FFFFFF' }}
            >
              <ellipse cx="270" cy="125" rx="85" ry="24" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
              <text x="270" y="130" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#000000">
                Planning the meeting
              </text>

              <line x1="270" y1="101" x2="270" y2="40" stroke="#000000" strokeWidth="1" />
              <text x="270" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#000000">
                desired outcome
              </text>
              <text x="270" y="36" textAnchor="middle" fontSize="10" fill="#000000">
                (objectives)
              </text>

              <line x1="330" y1="108" x2="425" y2="55" stroke="#000000" strokeWidth="1" />
              <text x="435" y="52" textAnchor="start" fontSize="11" fill="#000000">
                participants
              </text>

              <line x1="352" y1="120" x2="455" y2="95" stroke="#000000" strokeWidth="1" />
              <text x="462" y="98" textAnchor="start" fontSize="11" fill="#000000">
                date
              </text>

              <line x1="345" y1="135" x2="455" y2="165" stroke="#000000" strokeWidth="1" />
              <text x="462" y="169" textAnchor="start" fontSize="11" fill="#000000">
                location
              </text>

              <line x1="320" y1="145" x2="415" y2="205" stroke="#000000" strokeWidth="1" />
              <text x="422" y="210" textAnchor="start" fontSize="11" fill="#000000">
                equipment
              </text>

              <line x1="270" y1="149" x2="270" y2="215" stroke="#000000" strokeWidth="1" />
              <text x="270" y="230" textAnchor="middle" fontSize="11" fill="#000000">
                facilities
              </text>

              <line x1="220" y1="145" x2="135" y2="205" stroke="#000000" strokeWidth="1" />
              <text x="125" y="210" textAnchor="end" fontSize="11" fill="#000000">
                papers
              </text>

              <line x1="195" y1="135" x2="85" y2="165" stroke="#000000" strokeWidth="1" />
              <text x="75" y="169" textAnchor="end" fontSize="11" fill="#000000">
                timing
              </text>

              <line x1="188" y1="120" x2="95" y2="85" stroke="#000000" strokeWidth="1" />
              <text x="85" y="88" textAnchor="end" fontSize="11" fill="#000000">
                potential problems
              </text>

              <line x1="210" y1="108" x2="120" y2="45" stroke="#000000" strokeWidth="1" />
              <text x="110" y="48" textAnchor="end" fontSize="11" fill="#000000">
                formal or informal
              </text>
            </svg>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
MeetingsLeftPage.displayName = 'MeetingsLeftPage';

/**
 * PAGE 15: 4. Contributing Effectively (Right Page)
 * DO & DON'T moved up, and empty space filled with an AI-style meeting facilitation illustration.
 */
export const MeetingsRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="15"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B]">
            4. Contributing Effectively
          </h2>
        </div>

        <div className="space-y-3 my-auto flex-1 flex flex-col justify-between py-1">
          {/* Top: DO and DON'T Lists */}
          <div className="grid grid-cols-2 gap-3">
            {/* DO LIST */}
            <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-300 shadow-xs">
              <h3 className="font-playfair text-base font-bold text-emerald-900 border-b border-emerald-300 pb-1 mb-1.5 flex items-center gap-1.5">
                <span>✔</span>
                <span>DO</span>
              </h3>
              <ul className="space-y-1 text-xs text-emerald-950 font-inter">
                <li>• Obey the ground rules</li>
                <li>• Be positive</li>
                <li>• Separate people from problems</li>
                <li>• Keep to the topic being discussed</li>
                <li>• Use clear simple language</li>
                <li>• Allow others to finish</li>
                <li>• Ask for clarification if you don’t understand</li>
              </ul>
            </div>

            {/* DON'T LIST */}
            <div className="p-3 bg-rose-50/80 rounded-lg border border-rose-300 shadow-xs">
              <h3 className="font-playfair text-base font-bold text-rose-900 border-b border-rose-300 pb-1 mb-1.5 flex items-center gap-1.5">
                <span>✖</span>
                <span>DON’T</span>
              </h3>
              <ul className="space-y-1 text-xs text-rose-950 font-inter">
                <li>• Monopolise the discussion</li>
                <li>• Become emotional or too argumentative</li>
                <li>• Make personal criticisms</li>
                <li>• Digress</li>
                <li>• Use long complicated sentences</li>
                <li>• Interrupt too much</li>
                <li>• Pretend that you understand</li>
              </ul>
            </div>
          </div>

          {/* Center of page: Effective Meeting Contributions Image with NO white frame behind */}
          <div className="w-full flex-1 max-h-[220px] flex items-center justify-center overflow-hidden my-auto">
            <img
              src="/images/effective_meeting_contributions.jpg"
              alt="Effective Meeting Contributions"
              className="w-auto h-full max-h-[210px] object-contain rounded drop-shadow-sm"
            />
          </div>

          {/* Bottom: Meeting Dynamics & Active Facilitation Text Box */}
          <div className="p-2.5 bg-white/80 rounded-lg border border-[#C7A77B]/40 shadow-xs flex items-center justify-between gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F0E6D2] border border-[#C7A77B] flex items-center justify-center text-2xl shadow-xs flex-shrink-0">
              🤝
            </div>
            <div className="flex-1 text-xs text-[#5A504B]">
              <h4 className="font-bold text-[#702F3B] text-xs uppercase tracking-wider font-mono mb-0.5">
                Meeting Dynamics & Active Facilitation
              </h4>
              <p className="text-[11px] leading-snug">
                Professional meetings thrive on constructive participation. Effective facilitators maintain psychological safety, keep track of time limits, encourage quiet contributors, and ensure all decisions are clearly recorded in the minutes.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-[10px] font-mono font-bold text-[#702F3B] bg-[#FBF8F1] p-1.5 rounded border border-[#C7A77B]/30 flex-shrink-0">
              <span>⏱ Time Control</span>
              <span>📋 Clear Agenda</span>
              <span>⚖ Fair Airtime</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
MeetingsRightPage.displayName = 'MeetingsRightPage';

/**
 * PAGE 16: 05. EMOTIONAL INTELLIGENCE (Left Page)
 */
export const EmotionalIntelligenceLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="16"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 05
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            05. EMOTIONAL INTELLIGENCE
          </h2>
        </div>

        <div className="space-y-3.5 my-auto flex-1 flex flex-col justify-between py-1 text-sm text-[#2C2523]">
          {/* Introduction & Lecturer Credit */}
          <div className="p-3.5 bg-white/85 rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <div className="flex items-center justify-between border-b border-[#C7A77B]/30 pb-1">
              <h4 className="font-bold text-[#702F3B] text-sm uppercase font-mono tracking-wider">
                Introduction
              </h4>
              <span className="text-xs font-mono font-bold text-[#702F3B] bg-[#F0E6D2] px-2.5 py-0.5 rounded-full border border-[#C7A77B]/50">
                Lecturer: Ms. Hubika Joshi
              </span>
            </div>
            <p className="text-sm text-[#3D3532] leading-relaxed">
              This lecture was conducted by <strong>Ms. Hubika Joshi</strong>. Emotional Intelligence (EI) is the ability to recognize, understand, manage, and express our own emotions while also understanding and respecting the emotions of others. It helps individuals communicate effectively, maintain positive relationships, manage stress, and make better decisions.
            </p>
            <p className="text-sm text-[#3D3532] leading-relaxed">
              Emotional Intelligence plays an essential role in personal and professional life. It helps individuals remain calm under pressure, work productively in teams, resolve conflicts amicably, and respond positively to challenging situations.
            </p>
          </div>

          {/* Key Learnings: 1. Understanding Emotions & Six Basic Emotions */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-2">
            <h4 className="font-bold text-[#702F3B] text-sm">1. Understanding Emotions</h4>
            <p className="text-sm text-[#4A403B] leading-relaxed">
              Emotions are psychological responses that influence our thoughts, feelings, and behaviour. They help us communicate, make decisions, and respond appropriately to different circumstances.
            </p>
            <div className="pt-1">
              <span className="text-xs font-mono font-bold text-[#702F3B] block mb-1.5 uppercase tracking-wide">
                The Six Basic Emotions:
              </span>
              <div className="grid grid-cols-6 gap-1.5 text-center font-mono text-xs">
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Happiness</span>
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Sadness</span>
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Anger</span>
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Fear</span>
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Surprise</span>
                <span className="bg-[#F0E6D2] py-1.5 rounded-md font-bold text-[#702F3B] border border-[#C7A77B]/40">Disgust</span>
              </div>
            </div>
          </div>

          {/* Key Learnings: 2. Main Components of Emotional Intelligence */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <h4 className="font-bold text-[#702F3B] text-sm mb-1.5">
              2. Main Components of Emotional Intelligence
            </h4>
            <div className="space-y-1 text-sm text-[#3D3532] leading-relaxed">
              <div>• <strong className="text-[#702F3B]">Self-Awareness:</strong> Recognizing and understanding our own emotions and behavior patterns.</div>
              <div>• <strong className="text-[#702F3B]">Self-Regulation:</strong> Managing emotions, controlling reactions, and maintaining composure.</div>
              <div>• <strong className="text-[#702F3B]">Motivation:</strong> Staying positive, resilient, and dedicated to achieving meaningful goals.</div>
              <div>• <strong className="text-[#702F3B]">Empathy:</strong> Understanding, valuing, and respecting other people's perspectives and feelings.</div>
              <div>• <strong className="text-[#702F3B]">Social Skills:</strong> Communicating constructively, building rapport, and fostering teamwork.</div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
EmotionalIntelligenceLeftPage.displayName = 'EmotionalIntelligenceLeftPage';

/**
 * PAGE 17: Emotional Intelligence: Practical Application & Personal Reflection (Right Page)
 */
export const EmotionalIntelligenceRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="17"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B]">
            Importance, Application & Reflection
          </h2>
        </div>

        <div className="space-y-3.5 my-auto flex-1 flex flex-col justify-between py-1 text-sm text-[#2C2523]">
          {/* 3. Importance of Emotional Intelligence */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <h4 className="font-bold text-[#702F3B] text-sm mb-1">
              3. Importance of Emotional Intelligence
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-[#3D3532]">
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Manage stress and emotional reactivity.</span></div>
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Improve communication and collaboration.</span></div>
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Build trusting, respectful relationships.</span></div>
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Resolve conflict calmly and objectively.</span></div>
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Make thoughtful, balanced decisions.</span></div>
              <div className="flex items-start gap-1.5"><span className="text-[#702F3B] font-bold">•</span><span>Maintain high morale during challenges.</span></div>
            </div>
          </div>

          {/* Practical Application */}
          <div className="p-3.5 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <h4 className="font-bold text-[#702F3B] text-sm mb-1">
              Practical Application in Daily & Professional Life
            </h4>
            <div className="space-y-1.5 text-sm text-[#3D3532] leading-relaxed">
              <div><strong>1. Communication:</strong> Listening with empathy and expressing thoughts clearly, respectfully, and tactfully.</div>
              <div><strong>2. Teamwork:</strong> Appreciating different viewpoints and supporting group members throughout project deliverables.</div>
              <div><strong>3. Stress Management:</strong> Maintaining inner calm during examinations, tight deadlines, and presentations.</div>
              <div><strong>4. Conflict Resolution:</strong> Focusing on solutions and shared goals rather than reacting defensively.</div>
              <div><strong>5. Decision-Making:</strong> Recognizing emotional biases and choosing considered, constructive courses of action.</div>
            </div>
          </div>

          {/* Personal Reflection & Development */}
          <div className="p-3.5 bg-[#F0E6D2]/80 rounded-lg border-l-4 border-[#702F3B] space-y-1.5">
            <h4 className="font-bold text-[#702F3B] text-sm uppercase tracking-wide font-mono">
              Personal Reflection & Development
            </h4>
            <p className="text-sm text-[#4A1D25] leading-relaxed">
              Through Ms. Hubika Joshi's session, I understood that Emotional Intelligence is not just about keeping emotions in check, but about cultivating active self-awareness, empathy, and patience. In academic group settings and future workplace environments, applying these principles allows me to stay calm under tight deadlines, listen deeply to team members, and navigate complex challenges with maturity and mutual respect.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
EmotionalIntelligenceRightPage.displayName = 'EmotionalIntelligenceRightPage';

/**
 * PAGE 18: 06. ETIQUETTES (Telephone & Dining Etiquette) (Left Page)
 * Font size significantly increased as requested.
 */
export const DiningEtiquetteLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="18"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wider">
            CHAPTER 06
          </span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B] mt-0.5">
            06. ETIQUETTES
          </h2>
          <p className="text-xs md:text-sm text-[#5A504B] mt-0.5 font-jakarta">
            Etiquette refers to polite, considerate, and respectful behaviour in social and professional environments.
          </p>
        </div>

        <div className="space-y-3.5 my-auto text-[#2C2523]">
          {/* 1. Telephone Etiquette */}
          <div className="p-4 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h3 className="font-bold text-[#702F3B] text-base md:text-lg mb-2 flex items-center gap-2">
              <span>📞</span>
              <span>1. Telephone Etiquette</span>
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-[#4A3E39] leading-relaxed">
              <li>• Answer calls promptly within 2–3 rings.</li>
              <li>• Greet the caller politely and speak clearly, calmly, and respectfully.</li>
              <li>• Listen carefully and actively without interrupting the speaker.</li>
              <li>• Avoid eating or chewing gum during calls.</li>
              <li>• Ask permission before placing calls on hold and explain briefly.</li>
              <li>• Take clear notes of important information and follow-up items.</li>
              <li>• Conclude calls politely and sincerely thank the caller.</li>
            </ul>
          </div>

          {/* 2. Dining Etiquette */}
          <div className="p-4 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h3 className="font-bold text-[#702F3B] text-base md:text-lg mb-2 flex items-center gap-2">
              <span>🍽️</span>
              <span>2. Dining Etiquette</span>
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-[#4A3E39] leading-relaxed">
              <li>• Take small bites of food and chew quietly with your mouth closed.</li>
              <li>• Never talk while chewing and avoid gulping your food or beverages.</li>
              <li>• Do not blow on hot food; allow it to cool naturally.</li>
            </ul>
            <div className="mt-2.5 pt-2.5 border-t border-[#C7A77B]/30 text-xs md:text-sm">
              <strong className="text-[#702F3B] block mb-1">Holding Silverware:</strong>
              <div className="flex gap-6 text-[#4A3E39]">
                <span>• <strong>Pencil Method:</strong> Holding like a writing instrument</span>
                <span>• <strong>Scalpel Method:</strong> Index finger along handle</span>
              </div>
            </div>
          </div>

          {/* Practical Table Rule Card */}
          <div className="p-3.5 bg-[#F0E6D2]/80 rounded-lg border border-[#C7A77B]/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍷</span>
              <div className="text-xs md:text-sm text-[#57242E]">
                <strong className="text-sm md:text-base">Table Rule:</strong> "Start from outside in"
                <div className="text-xs text-[#7A6F68]">Utensils progress inwards with courses</div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-[#C7A77B]/50 pl-4">
              <span className="text-3xl">🍞</span>
              <div className="text-xs md:text-sm text-[#57242E]">
                <strong className="text-sm md:text-base">b & d Trick:</strong> Left = Bread, Right = Drink
                <div className="text-xs text-[#7A6F68]">Make 'OK' sign with thumb & index</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
DiningEtiquetteLeftPage.displayName = 'DiningEtiquetteLeftPage';

/**
 * PAGE 19: Social Etiquette & Email Etiquette (Right Page)
 * Font size significantly increased as requested.
 */
export const DiningEtiquetteRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="19"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#702F3B]">
            Social & Email Etiquette
          </h2>
        </div>

        <div className="space-y-4 my-auto text-[#2C2523]">
          {/* 3. Social Etiquette */}
          <div className="p-4 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h3 className="font-bold text-[#702F3B] text-base md:text-lg mb-2 flex items-center gap-2">
              <span>🤝</span>
              <span>3. Social Etiquette</span>
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-[#4A3E39] leading-relaxed">
              <li>• Follow the appropriate professional dress code for the occasion.</li>
              <li>• Maintain high standards of personal grooming and hygiene.</li>
              <li>• Greet colleagues and guests warmly with a firm handshake or respectful nod.</li>
              <li>• Share a genuine, warm smile to foster approachable rapport.</li>
              <li>• Practise active listening without distraction or checking phones.</li>
              <li>• Respect others' boundaries, time, and diverse perspectives.</li>
            </ul>
          </div>

          {/* 4. Email Etiquette */}
          <div className="p-4 bg-white rounded-lg border border-[#C7A77B]/40 shadow-xs">
            <h3 className="font-bold text-[#702F3B] text-base md:text-lg mb-2 flex items-center gap-2">
              <span>✉️</span>
              <span>4. Email Etiquette</span>
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-[#4A3E39] leading-relaxed">
              <li>• Use a clear, concise, and relevant subject line.</li>
              <li>• Begin with a professional greeting (e.g., "Dear Ms. Raviharee,").</li>
              <li>• Use polite, simple, and unambiguous professional language.</li>
              <li>• Keep emails focused, structured, and easy to read.</li>
              <li>• Thoroughly check and avoid spelling or grammatical errors.</li>
              <li>• Use a professional closing (e.g., "Best regards, K.Sriharan").</li>
              <li>• Proofread all recipients and attachments before hitting send.</li>
              <li>• Exercise patience and give appropriate turnaround time for replies.</li>
            </ul>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
DiningEtiquetteRightPage.displayName = 'DiningEtiquetteRightPage';

/**
 * PAGE 20: 07. GROUP PROJECT (Left Page)
 * White frames removed, poster displayed fully big and clear, screenshots made larger.
 */
export const GroupProjectLeftPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="20"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
            CHAPTER 07 • GROUP PROJECT
          </span>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B] mt-0.5">
            Root & Rise by Chlorophyllers
          </h2>
        </div>

        <div className="space-y-2 my-auto flex-1 flex flex-col justify-between py-1">
          {/* Poster Image: Significantly Bigger, Clear, No White Frame */}
          <div
            onClick={() => onPhotoClick && onPhotoClick({
              url: "/images/environmental_day_poster.jpg",
              caption: "Official Project Poster: Environmental Awareness Quiz & Indoor Plant Giveaway at Turret Tower."
            })}
            className="w-full flex-1 max-h-[350px] md:max-h-[380px] flex items-center justify-center cursor-pointer hover:scale-[1.01] transition-transform"
          >
            <img
              src="/images/environmental_day_poster.jpg"
              alt="Project Poster"
              className="w-auto h-full max-h-[340px] md:max-h-[370px] object-contain drop-shadow-md rounded"
            />
          </div>

          {/* 3 Images: Mobile Quiz Screens with IMG_7968 in between as requested */}
          <div className="grid grid-cols-3 gap-2 w-full">
            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "/images/quiz_screen_1.png",
                caption: "Root & Rise Mobile Quiz Website: Question Assessment Screen."
              })}
              className="h-40 md:h-44 flex items-center justify-center cursor-pointer group bg-black/5 rounded p-0.5"
            >
              <img
                src="/images/quiz_screen_1.png"
                alt="Quiz Screen 1"
                className="h-full w-auto object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "/images/img_7968.jpg",
                caption: "IMG_7968: Project Plant Preparation, Packaging & QR Sticker Application."
              })}
              className="h-40 md:h-44 flex items-center justify-center cursor-pointer group bg-black/5 rounded p-0.5"
            >
              <img
                src="/images/img_7968.jpg"
                alt="IMG_7968 - Plant Preparation"
                className="h-full w-auto object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "/images/quiz_screen_2.png",
                caption: "Root & Rise Mobile Quiz Website: Leaderboard & Score Screen."
              })}
              className="h-40 md:h-44 flex items-center justify-center cursor-pointer group bg-black/5 rounded p-0.5"
            >
              <img
                src="/images/quiz_screen_2.png"
                alt="Quiz Screen 2"
                className="h-full w-auto object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project Summary */}
          <div className="p-2.5 bg-white/90 rounded border border-[#C7A77B]/40 shadow-xs text-xs text-[#5A504B] space-y-1">
            <h4 className="font-bold text-[#702F3B] text-xs">Project Summary:</h4>
            <p className="text-[11px] leading-snug">
              In recognition of World Environmental Health Day, our 11-member team conducted the <strong>Root & Rise</strong> project at Turret Tower on 27 September 2026 for Year 1 to Year 3 students and lecturers.
            </p>
            <p className="text-[11px] leading-snug">
              Participants completed an interactive quiz, and winners received potted plants across <strong>5 categories: Dracaena, Money Plants, Lucky bamboo, Cactus, and Sandriyana</strong>.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
GroupProjectLeftPage.displayName = 'GroupProjectLeftPage';

/**
 * PAGE 21: Project Evidence — Big Photos, Zero Blank Gaps, Flying on Air Aesthetic (Right Page)
 */
export const GroupProjectRightPage = React.forwardRef(({ onPhotoClick, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="21"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B]">
            Project Evidence
          </h2>
        </div>

        {/* Big Photos layout filling the page with zero awkward gaps */}
        <div className="my-auto flex-1 flex flex-col justify-between py-1 gap-2">
          {/* Top 2 Main Working Photos: IMG_7926 & IMG_7950 (Big, minimal gap, head completely uncropped with object-contain) */}
          <div className="grid grid-cols-2 gap-2 px-0.5">
            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "/images/project_working_1.jpg",
                caption: "IMG_7926: Project Coordination, Setup and plant packaging at Turret Tower."
              })}
              className="transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-md cursor-pointer flex justify-center bg-white/40 p-0.5 rounded overflow-hidden"
            >
              <img
                src="/images/project_working_1.jpg"
                alt="IMG_7926 - Project Working"
                className="w-full h-44 md:h-52 object-contain rounded shadow-sm"
              />
            </div>

            <div
              onClick={() => onPhotoClick && onPhotoClick({
                url: "/images/project_working_2.jpg",
                caption: "IMG_7950: Project Facilitation, Live quiz coordination and plant giveaway."
              })}
              className="transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 drop-shadow-md cursor-pointer flex justify-center bg-white/40 p-0.5 rounded overflow-hidden"
            >
              <img
                src="/images/project_working_2.jpg"
                alt="IMG_7950 - Project Working"
                className="w-full h-44 md:h-52 object-contain rounded shadow-sm"
              />
            </div>
          </div>

          {/* Middle: Event & Plant Photos (IMG_8094 removed as requested) */}
          <div className="grid grid-cols-4 gap-1.5 px-0.5">
            {[
              { src: "/images/plant_7983_new.jpg", rot: "-rotate-2", cap: "IMG_7983: Potted Plant Giveaway" },
              { src: "/images/event_8058_new.jpg", rot: "rotate-1", cap: "IMG_8058: Live Quiz Participant" },
              { src: "/images/event_8105_new.jpg", rot: "rotate-2", cap: "IMG_8105: Plant Selection & Distribution" },
              { src: "/images/plant_giveaway_present.jpg", rot: "-rotate-1", cap: "Plant Presentation to Winners" },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => onPhotoClick && onPhotoClick({
                  url: item.src,
                  caption: item.cap
                })}
                className={`transform ${item.rot} hover:rotate-0 hover:scale-110 transition-all duration-300 drop-shadow-sm cursor-pointer flex justify-center`}
              >
                <img
                  src={item.src}
                  alt={item.cap}
                  className="w-full h-24 md:h-28 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* Bottom: Replaced with new whiteboard group photo as attached */}
          <div
            onClick={() => onPhotoClick && onPhotoClick({
              url: "/images/new_team_group_whiteboard.jpg",
              caption: "Chlorophyllers 11-Member Project Team Presentation."
            })}
            className="w-full transform -rotate-0.5 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 drop-shadow-lg cursor-pointer flex justify-center"
          >
            <img
              src="/images/new_team_group_whiteboard.jpg"
              alt="Chlorophyllers Team Group Photo"
              className="w-full h-50 md:h-58 object-contain rounded"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
GroupProjectRightPage.displayName = 'GroupProjectRightPage';

/**
 * PAGE 22: Project Description & My Contributions (Left Page)
 * Added above budget as explicitly requested.
 */
export const ProjectOverviewLeftPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="22"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
            CHAPTER 07 • PROJECT REFLECTION
          </span>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B] mt-0.5">
            Root & Rise: Overview & My Contributions
          </h2>
        </div>

        <div className="space-y-3 my-auto flex-1 flex flex-col justify-between py-1 text-xs md:text-sm text-[#2C2523]">
          {/* Section 1: Root & Rise Initiative Overview */}
          <div className="p-3.5 bg-white/90 rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <h3 className="font-playfair text-sm md:text-base font-bold text-[#702F3B] flex items-center gap-2 border-b border-[#C7A77B]/30 pb-1">
              <span>🌱</span>
              <span>The "Root & Rise" Initiative</span>
            </h3>
            <p className="text-xs md:text-[13px] text-[#4A3E39] leading-relaxed">
              "Root & Rise" was an indoor plant giveaway initiative organized as part of the Professional Skills module in support of Environment Day. The main objective was to raise awareness about indoor gardening and encourage students and lecturers to introduce more greenery into their daily environments. Our group visited different student batches and conducted a timed quiz covering indoor plant care, watering requirements, sunlight needs, and the benefits of indoor plants. Participants were evaluated based on the accuracy and speed of their answers, and the top three participants from each batch received free indoor plants as rewards.
            </p>
          </div>

          {/* Section 2: My Contributions */}
          <div className="p-3.5 bg-white/90 rounded-lg border border-[#C7A77B]/40 shadow-xs space-y-1.5">
            <h3 className="font-playfair text-sm md:text-base font-bold text-[#702F3B] flex items-center gap-2 border-b border-[#C7A77B]/30 pb-1">
              <span>🤝</span>
              <span>My Contributions</span>
            </h3>
            <p className="text-xs md:text-[13px] text-[#4A3E39] leading-relaxed">
              I actively contributed to the planning, preparation, and successful execution of the Root & Rise initiative. I worked with my group members to arrange and place orders for the indoor plants. I also physically visited plant shops at Diyatha Foliage, where I gathered valuable information from shop staff about different indoor plants, their care requirements, watering needs, sunlight conditions, and benefits. This visit helped me gain practical knowledge about indoor gardening and select suitable plants for the event. I was also responsible for designing the event poster and coordinating its printing. During the preparation stage, I helped attach QR code stickers to each plant, allowing participants to access plant information. On the event day, I worked closely with my team members to organize and distribute the plants to the winners in a smooth and efficient manner. Through these responsibilities, I developed my teamwork, communication, coordination, time management, and organizational skills.
            </p>
          </div>

          {/* Section 3: Professional Skills Developed Pill Tags */}
          <div className="p-2.5 bg-[#F0E6D2]/80 rounded-lg border-l-4 border-[#702F3B] flex flex-wrap items-center justify-between gap-1.5">
            <span className="text-xs font-mono font-bold text-[#702F3B] uppercase tracking-wide">
              Competencies Developed:
            </span>
            <div className="flex flex-wrap gap-1 text-[11px] font-mono text-[#57242E] font-semibold">
              <span className="bg-white/90 px-2 py-0.5 rounded border border-[#C7A77B]/40">Teamwork</span>
              <span className="bg-white/90 px-2 py-0.5 rounded border border-[#C7A77B]/40">Communication</span>
              <span className="bg-white/90 px-2 py-0.5 rounded border border-[#C7A77B]/40">Vendor Coordination</span>
              <span className="bg-white/90 px-2 py-0.5 rounded border border-[#C7A77B]/40">Time Management</span>
              <span className="bg-white/90 px-2 py-0.5 rounded border border-[#C7A77B]/40">Organization</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
ProjectOverviewLeftPage.displayName = 'ProjectOverviewLeftPage';

/**
 * PAGE 23: Budget, Expense Table & Challenges Faced (Right Page)
 * Moved from Page 22 to Page 23 as requested without changing budget data.
 */
export const ProjectBudgetRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="23"
      isLeft={false}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
            PROJECT EXECUTION
          </span>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#702F3B] mt-0.5">
            Budget, Expenses & Challenges
          </h2>
        </div>

        <div className="space-y-2 my-auto text-xs text-[#2C2523]">
          {/* Budget Collection Summary */}
          <div className="p-2 bg-[#F0E6D2]/70 rounded border border-[#C7A77B]/50 flex items-center justify-between">
            <span className="text-xs text-[#57242E]">
              <strong>Contribution:</strong> Collected Rs. 2,500 from each of our 11 members
            </span>
            <span className="font-mono font-bold text-xs bg-[#702F3B] text-[#F7F1E5] px-2 py-0.5 rounded">
              Total Budget: Rs. 27,500
            </span>
          </div>

          {/* Clean Styled Text Expense Table */}
          <div className="bg-white rounded border border-[#C7A77B]/40 overflow-hidden shadow-xs">
            <table className="w-full text-[10px] text-left border-collapse">
              <thead>
                <tr className="bg-[#702F3B] text-[#F7F1E5] font-mono">
                  <th className="p-1 px-1.5 border border-[#702F3B]">ITEM</th>
                  <th className="p-1 px-1 border border-[#702F3B] text-center">QTY</th>
                  <th className="p-1 px-1 border border-[#702F3B] text-right">UNIT PRICE</th>
                  <th className="p-1 px-1.5 border border-[#702F3B] text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C7A77B]/20 text-[#5A504B]">
                <tr><td className="p-0.5 px-1.5">Dracaena plants</td><td className="text-center">5</td><td className="text-right">Rs. 600</td><td className="text-right font-semibold">Rs. 3000</td></tr>
                <tr className="bg-[#FBF8F1]"><td className="p-0.5 px-1.5">Money Plants</td><td className="text-center">5</td><td className="text-right">Rs. 600</td><td className="text-right font-semibold">Rs. 3000</td></tr>
                <tr><td className="p-0.5 px-1.5">Lucky bamboo plants</td><td className="text-center">5</td><td className="text-right">Rs. 600</td><td className="text-right font-semibold">Rs. 3000</td></tr>
                <tr className="bg-[#FBF8F1]"><td className="p-0.5 px-1.5">Cactus plants</td><td className="text-center">10</td><td className="text-right">Rs. 700</td><td className="text-right font-semibold">Rs. 7000</td></tr>
                <tr><td className="p-0.5 px-1.5">Sandriyana plants</td><td className="text-center">5</td><td className="text-right">Rs. 600</td><td className="text-right font-semibold">Rs. 3000</td></tr>
                <tr className="bg-[#FBF8F1]"><td className="p-0.5 px-1.5">Transport</td><td className="text-center">N/A</td><td className="text-right">N/A</td><td className="text-right font-semibold">Rs. 3500</td></tr>
                <tr><td className="p-0.5 px-1.5">Posters</td><td className="text-center">9</td><td className="text-right">Rs. 50</td><td className="text-right font-semibold">Rs. 450</td></tr>
                <tr className="bg-[#FBF8F1]"><td className="p-0.5 px-1.5">Domain Hosting for Website</td><td className="text-center">N/A</td><td className="text-right">N/A</td><td className="text-right font-semibold">Rs. 400</td></tr>
                <tr><td className="p-0.5 px-1.5">Sticks</td><td className="text-center">50</td><td className="text-right">Rs. 14</td><td className="text-right font-semibold">Rs. 700</td></tr>
                <tr className="bg-[#FBF8F1]"><td className="p-0.5 px-1.5">Bags</td><td className="text-center">40</td><td className="text-right">Rs. 67.5</td><td className="text-right font-semibold">Rs. 2700</td></tr>
                <tr><td className="p-0.5 px-1.5">Stickers</td><td className="text-center">40</td><td className="text-right">Rs. 60</td><td className="text-right font-semibold">Rs. 2400</td></tr>
                <tr className="bg-rose-100 font-bold text-[#702F3B]">
                  <td colSpan="3" className="p-1 px-1.5 text-right uppercase">Total Expense</td>
                  <td className="p-1 px-1.5 text-right font-mono">Rs. 29,150</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Challenges Faced */}
          <div className="p-2 bg-white rounded border border-[#C7A77B]/40 shadow-xs">
            <h4 className="font-bold text-[#702F3B] text-[11px] mb-0.5">Challenges Faced:</h4>
            <p className="text-[10px] text-[#5A504B] leading-snug">
              Coordinating across different batch timetables required careful scheduling and flexibility. Sourcing quality plants within budget while ensuring sufficient quantities for all winners and lecturer giveaways demanded thorough nursery vetting. Transporting delicate plants safely to Turret Tower and managing tight live quiz rounds with tie-breakers tested our crisis management, which we resolved through continuous teamwork.
            </p>
          </div>

          {/* Key Learnings */}
          <div className="p-2 bg-[#F0E6D2]/60 rounded border-l-2 border-[#702F3B]">
            <h4 className="font-bold text-[#702F3B] text-[11px] mb-0.5">Key Learnings:</h4>
            <p className="text-[10px] text-[#57242E] leading-snug">
              We learned how to manage an end-to-end community project, divide tasks efficiently, build a real-time quiz platform, and communicate professionally under pressure with university lecturers and peers.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#C7A77B]/30" />
      </div>
    </Page>
  );
});
ProjectBudgetRightPage.displayName = 'ProjectBudgetRightPage';

// Backwards compatibility alias
export const ConclusionLeftPage = ProjectBudgetRightPage;

/**
 * PAGE 24: Assessment Sign-Off / Thank You (Left Page)
 * Moved from Page 23 to Page 24 as requested.
 * Center of page:
 * "Thank you" is BIG BOLD.
 * "for reviewing my professional skills academic portfolio" is NOT bold, smaller, next line.
 * "Return to cover page" button kept in place.
 */
export const ConclusionThankYouLeftPage = React.forwardRef(({ onReopenBook, onCornerClick, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      pageNumber="24"
      isLeft={true}
      footerNote=""
      onCornerClick={onCornerClick}
      {...props}
    >
      <div className="flex flex-col h-full items-center justify-center text-center p-6">
        <div className="my-auto space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#F0E6D2] border border-[#C7A77B] mx-auto flex items-center justify-center text-2xl shadow-sm">
            🎓
          </div>

          {/* "Thank you" BIG BOLD */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black text-[#702F3B] tracking-tight">
            Thank you
          </h1>

          {/* Next line: smaller, not bold */}
          <p className="font-jakarta text-sm md:text-base font-normal text-[#5A504B]">
            for reviewing my professional skills academic portfolio
          </p>

          <div className="w-20 h-0.5 bg-[#C7A77B] mx-auto pt-1" />

          {/* Return to Cover Page Button */}
          <div className="pt-4">
            <button
              onClick={onReopenBook}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#702F3B] text-[#F7F1E5] rounded-full text-xs md:text-sm font-jakarta font-bold hover:bg-[#8B3A4A] transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <span>↺ Return to Cover Page</span>
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
});
ConclusionThankYouLeftPage.displayName = 'ConclusionThankYouLeftPage';

// Backwards compatibility alias
export const ConclusionRightPage = ConclusionThankYouLeftPage;

/**
 * PAGE 25: Closing Hardcover Back Wing (Right Page)
 * Pure clean blank dark hardcover wing matching CoverLeftPage.
 * All wordings and page numbers removed as requested.
 */
export const BackCoverRightPage = React.forwardRef(({ onCornerClick, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-density="hard"
      className="page relative w-full h-full bg-[#080607] select-none overflow-hidden shadow-2xl border-l-2 border-[#030203]"
      {...props}
    >
      <div className="w-full h-full" />
    </div>
  );
});
BackCoverRightPage.displayName = 'BackCoverRightPage';
