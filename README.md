# Portfolio — Sambhav Koshta

Personal developer portfolio built with React 19, TypeScript, Vite, and Tailwind CSS 4. Features full dark/light mode support.

## Live Site

[sambhavkoshta.dev](https://sambhavkoshta.dev) <!-- replace with your actual URL -->

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Vite 8** — Build tool
- **Tailwind CSS 4** — Utility-first CSS with dark mode
- **lucide-react** — Icons
- **@emailjs/browser** — Contact form delivery

## Features

- Dark / light mode toggle
- Project showcase (TurfMate, Identra AI, App Data Collection Predictor)
- GitHub contribution graph
- EmailJS-powered contact form
- Fully responsive layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file in the root:

```env
VITE_EMAIL=your-email@example.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS](https://emailjs.com).

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variables in Vercel project settings

## Project Structure

```
src/
  App.tsx                  — Root component with tab routing
  main.tsx                 — Entry point
  index.css                — Global styles, fonts, Tailwind theme
  config/constants.ts      — Site config (socials, projects, email)
  services/contact.ts      — EmailJS integration
  assets/                  — Images, icons, tech stack logos
  components/
    Home.tsx               — Hero section
    Services.tsx           — Services listing
    ServiceCard.tsx        — Service card
    Projects.tsx           — Projects listing
    ProjectCard.tsx        — Project card
    About.tsx              — About page
    TechStack.tsx          — Tech stack badges
    Contact.tsx            — Contact form
    Navbar.tsx             — Sidebar / bottom nav
    GitHub.tsx             — GitHub contribution graph
```

## About Me

B.Tech CSE student at **MANIT Bhopal** (2023–present). I build full-stack web apps and ML tools. Featured projects include a sports turf booking platform, an AI-powered eBook creator, and a privacy analysis ML tool. Active on [LeetCode](https://leetcode.com) and [Codeforces](https://codeforces.com) with 500+ DSA problems solved.

## Contact

- Email: koshtasambhav18@gmail.com
- LinkedIn: [linkedin.com/in/sambhavkoshta](https://linkedin.com/in/sambhavkoshta10) <!-- update link -->
- GitHub: [github.com/sambhavkoshta](https://github.com/Sambhav10-10) <!-- update link -->
