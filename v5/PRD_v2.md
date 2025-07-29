# **PRD v2 – Waitlist Website for the BIM Productivity Platform**

---
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

## 6. **Design Style – Dark, Tech-Driven, and Playful**

---

### Overall Tone & Feel

- **Tone**: Bold, high-contrast, data-focused
- **Mood**: Futuristic, immersive, slightly playful
- **Keywords**: **Dark**, **Dynamic**, **Data-Driven**, **Gamified**

---

### Color Palette

| Use Case                | Example Colors                  | Notes                                              |
| ----------------------- | ------------------------------- | -------------------------------------------------- |
| Background              | `#0D0D0D`, `#1A1A1A`            | Deep black and graphite tones for immersion        |
| Primary Text            | `#FFFFFF`                       | White or soft gray for strong readability          |
| Secondary Text          | `#AAAAAA`, `#CCCCCC`            | Subtle gray for subtitles and labels               |
| Accent Color            | `#00C49A`, `#00B4FF`, `#FF4081` | Neon tones for interactivity and visual highlights |
| Puzzle Blocks / Heatmap | Gradient: `#FFDD00` → `#FF5722` | For command frequency or interaction zones         |

---

### Typography

- **Font Choices**:
  `Space Grotesk`, `Orbitron`, `Inter`, or other geometric sans-serif fonts
- **Styles**:

  - Tight, controlled letter spacing for a futuristic feel
  - Headings: Bold (700+) with uppercase or stylized contrast
  - Body: Regular or Medium, clean line height (`1.5–1.6`)

---

### Layout & Structure

- **Grid**: 12-column or asymmetric layout (left-anchored for dashboard feel)
- **Spacing**: Moderate paddings (`2–3rem`) with tighter blocks for intensity
- **Section Blocks**:
  Dark containers with glowing edges or gradients
  Use high contrast between card and background
- **Form Style**:

  - Transparent or dark input fields with glowing borders on focus
  - Example: `border: 1px solid #444` → on focus: `#00C49A`

---

### Interactive Elements

- **Buttons**:

  - Default: Dark backgrounds + neon text
  - Hover: Background lightens or glows softly
  - CTA: Full neon fill (e.g., `#00C49A`) + white text

- **Animations**:

  - Heatmaps gradually pulse based on frequency
  - Puzzle tiles light up or slide into place
  - Section fade-ins and subtle glowing edge transitions

---

### Imagery & Icons

- **Icons**: Thin line icons with neon outline or inner glow
- **Illustrations/Graphics**:

  - 3D-style UI mockups or glowing overlays on Revit-style elements
  - Motion graphics or animated charts for data visualization
  - Dark SVGs with selective accent coloring (neon strokes or fills)

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
