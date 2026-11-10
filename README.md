# My Professional Skills Journey — Academic Portfolio Scrapbook

A physical-book-inspired, interactive **Professional Skills** academic portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **page-flip**. 

Styled after a vintage travel journal and railway expedition, featuring cream paper backgrounds, burgundy accents, antique gold decorative details, tactile page turns, interactive station timeline, and scrapbooked photographic artifacts.

---

## 📖 Live Book Features

- **Realistic Open-Book Layout**: Dual-page spread on desktop with authentic spine depth shadows, leather hardcover trim, and page curve effects; automatically transitions to a single-page book on mobile screens.
- **Smooth Page-Turn Physics**: Realistic 3D page flip animation powered by `page-flip`.
- **Palette**:
  - **Cream Paper Backgrounds**: `#F7F1E5` (with subtle pulp texture and paper grain)
  - **Burgundy Headings & Accents**: `#702F3B`
  - **Antique Gold Details**: `#C7A77B`
  - **Vintage Ink**: `#2C2523`
- **Curated Typography**:
  - **Titles**: *Playfair Display*
  - **Headings & Badges**: *Plus Jakarta Sans*
  - **Body Text**: *Inter*
  - **Handwritten Scrapbook Notes**: *Caveat*
- **Vintage Railway & Travel Elements**:
  - Interactive **Railway Journey Map** connecting Week 01 (*Port Self-Discovery*) to Week 12 (*Horizon Terminus*).
  - Vintage train tickets with ticket numbers and date stamps.
  - Serrated postage stamps with postal cancellation marks.
  - Wax seals, brass corner filigrees, washi tape strips, and photo corner mounts.
- **Interactive Controls**:
  - **Previous & Next buttons** on a floating vintage brass control bar.
  - **Clickable page corners** (dog-ears) to flip pages back and forward.
  - **Table of Contents Drawer & Modal** for instant chapter access.
  - **Direct Station Navigation**: Click any station on the Journey Map or select from the dropdown.
  - **Realistic Page-Turn Audio FX**: Synthesized on-the-fly via Web Audio API (crisp paper flutter swoosh with zero external audio assets; muted by default).
  - **Full-Screen Reading Mode**: One-click immersive reading.
  - **Keyboard Navigation**: `←` / `→` arrow keys, `Space` / `PageDown` to flip forward, `Home` for cover, `End` for back cover.
  - **Photograph Lightbox**: Click any polaroid photo frame to inspect high-resolution evidence with full academic context.
  - **Reduced-Motion Accessibility**: Respects OS preferences with an instant transition toggle.

---

## 🗺️ Book Structure (37 Pages / 18 Spreads)

1. **Page 00: Front Cover** — *My Professional Skills Journey* (Hardcover leather texture, gold foil title, crest).
2. **Page 01–02: Introduction Spread**
   - *Left*: Formal Welcome Letter to assessors, quote, signature block, and wax seal.
   - *Right*: Interactive Table of Contents & timetable directory.
3. **Page 03–04: My Journey Map Spread**
   - *Left*: Westbound Line (Stations 01–06) with clickable station stops.
   - *Right*: Eastbound Line (Stations 07–12) with train illustration and schedule.
4. **Page 05–28: Weekly Chapters (Weeks 01–12)**
   - *Left Page*: Week number, Station code, topic title, chapter introduction, 3 key learnings, and thematic vintage illustration.
   - *Right Page*: Classroom workshops, scrapbook polaroids with washi tape, skill tags, and personal reflection (Gibbs' Reflective Cycle).
5. **Page 29–30: Capstone Group Project Showcase**
   - *Left*: Problem formulation, scope, role, timeline, and quantified metrics.
   - *Right*: Formal academic deliverables, individual contributions, and sprint photos.
6. **Page 31–32: Reflection & Skills Audit**
   - *Left*: Comparative skills competency audit bars (Week 1 baseline vs Week 12 achievement).
   - *Right*: Personal SWOT matrix (Strengths, Weaknesses, Opportunities, Threats).
7. **Page 33–34: Conclusion & Forward Horizon**
   - *Left*: End of journey synthesis and milestone celebration confetti button.
   - *Right*: 3-Year Continuous Professional Development (CPD) roadmap & signed declaration of authenticity.
8. **Page 35–36: Inside Back Cover & Back Hardcover**
   - *Left*: Vintage library checkout circulation slip (stamped weeks) and assessor rubric checklist.
   - *Right*: Back hardcover with publisher's colophon, barcode (`ISBN 978-0-2026-PS-4012`), and thank you message.

---

## ✏️ How to Edit Content

All weekly chapters, reflections, student details, and activities are stored in a single editable file:

```bash
src/data/portfolioData.js
```

1. **Student Profile**: Update name, student ID, course, institution, and signature in `portfolioConfig`.
2. **Weekly Chapters**: Edit `weeklyChapters` array. Clear prompts are provided (e.g. `[Prompt: Describe your group activity...]`) so you can insert your actual coursework.
3. **Photos**: Replace image URLs in `photos` with your own project screenshots or photos.
4. **Project Showcase**: Update `projectShowcase` with your group project specifics.
5. **Skills Audit**: Adjust initial and final ratings in `skillsAuditData`.
6. **CPD Plan**: Edit Year 1, 2, and 3 goals in `conclusionData`.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd ps-book-portfolio

# Install dependencies (already installed)
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` to browse the interactive portfolio.

---

## 🌐 Deploying to Vercel

This project is configured and pre-tested for 1-click deployment on Vercel:

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Via GitHub / GitLab
1. Push this folder to a Git repository.
2. In the [Vercel Dashboard](https://vercel.com/new), click **Import Project**.
3. Select your repository. Vercel will automatically detect `Vite` as the framework preset and use `dist` as the build output directory.
4. Click **Deploy**.
