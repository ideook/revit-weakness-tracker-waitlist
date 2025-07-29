# 📄 PRD: **"Make BIM Fun Again" – Productivity Plugin & Insights Platform Waitlist Site**

## 1. **Overview**

### Product Name (Tentative):

**BIMSpark** – *"Where BIM meets data, productivity, and fun."*

### Description:

A promotional **waitlist site** for an upcoming platform that reimagines BIM with **personalized productivity insights**, **plugin sharing**, and **community-driven benchmarking**.
No more repetitive clicks — it's time to understand, optimize, and enjoy how you work in Revit.

---

## 2. **Goals**

* Attract early adopters and collect emails for the waitlist.
* Clearly communicate our value:

  > **“BIM is finally fun and insightful.”**
* Highlight key differentiators:

  * **Productivity dashboards** (e.g., command heatmaps, undo sensitivity index)
  * **Plugin marketplace** tailored to actual user behavior
  * **Peer comparison & benchmarking** for continuous growth
* Build trust through transparency:

  * Clear stance on data privacy and offline support

---

## 3. **Target Audience**

* **Revit users** – architects, engineers, BIM managers
* **Productivity nerds** in AEC
* **Plugin developers** & workflow optimizers
* **Small-to-mid-size firms** seeking data-driven performance boosts

---

## 4. **Core Features (MVP)**

### 1. **Landing Page**

* Hero section with slogan:

  > *“BIM used to be boring. Not anymore.”*
* Clean design with:

  * Bold headline
  * Optional Lottie animation or subtle 3D preview
* Key value props:

  1. Visual command heatmaps
  2. Personalized plugin recommendations
  3. Community-powered insights
* Clear **CTA button** → *“Join the Waitlist”*

### 2. **Teaser Feature Highlights**

* Puzzle-style dashboard preview
* Dynamic command usage heatmap
* Plugin discovery suggestions (based on actual usage)
* Headline:

  > *“What if your BIM tools adapted to you?”*

### 3. **Use Case Scenarios (Mini-Stories)**

* “Discover unused commands that can speed up your work.”
* “Get real insights into your most (and least) productive hours.”
* “Find plugins that others use—but you’ve never tried.”
* “Share your plugin. Save someone’s day.”

### 4. **Waitlist Form**

* **Single input field**: Email only

* Submit via POST to:

  ```
  https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165
  ```

  * Method: `POST`
  * Body format: `{ "email": "<user_email>" }`
  * Auth: **Basic Auth**

    * Username: `ideook`
    * Password: `{passwd}`

* No other data collected — **privacy-first** approach

### 5. **Trust & Transparency Section**

* 💡 **We respect your privacy**

  * No sensitive data will ever be collected or transmitted
  * Full **offline analysis** supported (except advanced features)
  * **No personal information** will be stored or analyzed

* 🛠️ “Built by Revit power users for real workflows”

* 🌍 Roadmap preview:

  * Plugin store (tagged by behavior, not just name)
  * Gamified usage improvement journey
  * Team-level analytics & leaderboards (opt-in only)

---

## 5. **Visual Style Guide**

| Category       | Style                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| **Tone**       | Bold, modern, tech-savvy, slightly playful                                                |
| **Palette**    | Dark mode base + neon accent (think dashboards & data viz)                                |
| **Typography** | Geometric sans-serif (e.g., Inter, Space Grotesk, or IBM Plex Sans)                       |
| **Imagery**    | Revit-style mockups, 3D puzzle dashboards, simple Revit ribbon metaphors                  |
| **Animation**  | Subtle Lottie or scroll-based animations (e.g., heatmap pulses, puzzle pieces filling in) |

---

## 6. **Tech Stack Suggestions**

| Area       | Stack                                             |
| ---------- | ------------------------------------------------- |
| Frontend   | React or Next.js                                  |
| Styling    | Tailwind CSS or styled-components                 |
| Forms      | Native HTML + fetch (POST to webhook)             |
| Backend    | **Webhook** via \[n8n POST API]                   |
| Data Store | Firebase / Supabase (if extended beyond waitlist) |
| Analytics  | ❌ Not used (no Google Analytics or tracking)      |
| Email mgmt | Firebase Functions or ConvertKit (optional)       |

---

### 7. **Privacy-Centered Commitments**

> BIMSpark is designed with enterprise-level privacy in mind.

* No sensitive project or personal data is ever transmitted
* Supports offline-only operation
* Email collection is **minimal, transparent**, and **not shared**
* Analytics and tracking scripts are **not used**

---

## 8. **Key Messaging Highlights**

* “You know Revit—but do you know how *you* use Revit?”
* “Measure your productivity. Discover your potential.”
* “Work smarter. Share smarter. Spark your workflow.”
* “It’s not just BIM. It’s your BIM—visualized.”

---
