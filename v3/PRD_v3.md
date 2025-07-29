# **PRD v3 – Waitlist Website for the BIM Productivity Platform**

---

## 1. Overview

### Product Name (Tentative)

**BIMSpark** – _"Where BIM meets insight, speed, and fun."_

### Objective

Before launching the platform, this waitlist site aims to attract early adopters and effectively communicate the core value of making BIM work **productive, insightful, and even fun**.

---

## 2. Goals

- Capture early users and collect emails via a waitlist
- Deliver the core message:

  > **“BIM projects are finally fun.”**

- Emphasize key features:

  - Productivity metrics (e.g., command heatmaps)
  - Personalized plugin marketplace
  - Peer comparison and self-insight

- Highlight platform values:

  > **Data-driven**, **personalized**, **community-powered**

---

## 3. Target Users

- Revit-based professionals (architects, engineers, BIM managers)
- Users interested in analyzing and improving their own workflows
- Developers looking to monetize or share Revit plugins
- Companies needing tools compatible with secure corporate environments

---

## 4. Core Features (MVP)

### 1. Landing Page

- Engaging slogan

  > _“BIM used to be boring. Not anymore.”_

- 3 key value propositions (cards or statements)
- Visual teaser (puzzle-style UI, heatmap, or animated dashboard)
- Email input field with a “Join the Waitlist” CTA button

---

### 2. Feature Teaser Section

#### Visualized Concepts:

- Puzzle-style **productivity dashboard**
- Personalized **command heatmap**
- **Plugin recommendations** based on usage pattern

#### Headline Suggestion:

> **“Complete your BIM puzzle.”** > _It’s not about using tools — it’s about tools working for you._

---

### 3. User Story Section

#### Short Cards (Examples):

- **“I didn’t realize I was only using a few tools.”**

  > The empty puzzle pieces helped me discover new workflows.

- **“When I saw my focus zone, I changed my entire morning routine.”**

  > Seeing my workflow helped me control it.

- **“I shared a plugin… and made money from it.”**

  > Turns out my little shortcut was exactly what others needed.

---

### 4. Waitlist Form

- Single input: email
- On submit: API request with success/fail message
- Backend uses Basic Auth for secure transmission

---

## 5. Trust & Privacy

- **No sensitive project data is ever sent or stored**
  → No models, drawings, or file names are transmitted.

- **Full offline analysis supported (except advanced features)**
  → Works in secure company environments

- **No personal information is collected**
  → Only email is used for registration

---

## 6. **Design Style – Bright, Elegant, and Modern**

---

### Overall Tone & Feel

- **Tone**: Light, confident, and professional
- **Mood**: Minimal, clean, and editorial
- **Keywords**: **Bright**, **Sophisticated**, **Modern**, **Sharp Highlights**

---

### Color Palette

| Use Case         | Example Colors       | Notes                                     |
| ---------------- | -------------------- | ----------------------------------------- |
| Background       | `#FFFFFF`, `#FAFAFA` | Clean white and soft gray for airy feel   |
| Primary Text     | `#222222`            | Deep gray—softer than pure black          |
| Secondary Text   | `#888888`            | For subtitles and helper texts            |
| Accent Color     | `#0077FF`, `#00C49A` | Blue or mint for highlights & brand color |
| Highlight Blocks | `#F1F5FF`, `#F3FBF8` | Very pale accent backgrounds for callouts |

---

### Typography

- **Font Choices**:
  `Inter`, `SF Pro`, `Pretendard`, or other clean sans-serif fonts
- **Styles**:

  - Generous line height (`1.6–1.8`)
  - Headings: Semi-bold or Medium
  - Body: Regular or Light for clarity

---

### Layout & Structure

- **Grid**: 8- or 12-column responsive layout (centered content)
- **Spacing**: Large paddings/margins (`4rem` or more between sections)
- **Card Design**:
  Rounded corners, soft shadows, and subtle background tints for emphasis
- **Form Style**:

  - Clean white fields with thin borders
  - On focus: border highlights with accent color
  - Example: `border: 1px solid #DDD` → on focus: `#0077FF`

---

### Interactive Elements

- **Buttons**:

  - Flat style by default, soft shadow on hover
  - Primary: white background + accent text
  - CTA: accent background + white text

- **Animations**:

  - Smooth fade-ins, slide-ups for section entrances
  - Puzzle pieces or heatmaps fill in with bright color pulses
  - Cards slightly lift or glow on hover (subtle elevation)

---

### Imagery & Icons

- **Icons**: Line-based, monochrome or accent-color highlights
- **Illustrations/Graphics**:

  - Clean SVGs or Lottie animations
  - Use light-friendly tones—no dark or heavy outlines

---

## 7. Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend Integration**:

  - `POST` API to
    `https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165`
  - Request body:

    ```json
    {
      "email": "user@email.com"
    }
    ```

  - Auth: Basic Auth (`ideook`, `{passwd}`)

- **Analytics & Email tools**: ❌ Not used

---

## 8. User Input

- Only one field: **Email**
  → On submit, send directly to API
  → Show success or error message only

---

## 9. Sample Slogans

- “You know Revit. But do you know how you use it?”
- “Your BIM productivity is measurable — and improvable.”
- “What if work felt like solving a puzzle?”
- “Revit, now feels like play.”
