import React from 'react'
import ProjectCard from './ProjectCard'
import type { ProjectItem } from './ProjectCard'
import { SITE_CONFIG } from '../config/constants'
import turfmateCover from '../assets/jerseyhub-cover.webp'
import identraCover from '../assets/envoy-cover-2.webp'
import mlCover from '../assets/relay-cover.webp'
import docnestCover from '../assets/docnest-cover.webp'
import resumecraftCover from '../assets/resumecraft-cover.webp'
const Projects: React.FC = () => {
  const projectList: ProjectItem[] = [
    {
      title: 'TurfMate — Sports Turf Booking Platform',
      description1: 'A tri-role full-stack platform (Player/Owner/Admin) connecting sports enthusiasts with turf owners. Built a conflict-safe slot reservation engine with real-time availability checks, JWT + bcrypt authentication, and a 5-minute confirmation window with auto-expiry.',
      description2: 'Deployed dual React 18 SPAs on Vercel CDN with 30+ REST endpoints, multi-tenant revenue management with automated commission splitting, and Cloudinary integration for media pipeline. Live on Vercel.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'Vercel', 'Tailwind CSS'],
      githubUrl: SITE_CONFIG.projects.turfmate.github,
      liveUrl: SITE_CONFIG.projects.turfmate.live,
      imageUrl: turfmateCover
    },
    {
      title: 'Identra AI — AI-Powered eBook Creation Platform',
      description1: 'An intelligent platform for generating AI-powered eBooks with drag-and-drop chapter management. Engineered an AI content generation pipeline using Google Gemini API, JWT authentication with bcrypt password hashing, and multi-format export (PDF via PDFKit, DOCX).',
      description2: 'Features per-user private book library with full CRUD operations. Deployed on Render with environment-based CORS and HTTP-only cookie authentication. Real-time content generation with DnD Kit integration.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini AI', 'PDFKit', 'Render', 'DnD Kit'],
      githubUrl: SITE_CONFIG.projects.identra.github,
      liveUrl: SITE_CONFIG.projects.identra.live,
      imageUrl: identraCover
    },
    {
      title: 'App Data Collection Predictor — ML Privacy Analysis',
      description1: 'A machine learning system that predicts privacy data-collection categories across Google Play Store apps. Built a multi-label classification system using Random Forest and Decision Tree with 0.85 weighted F1-score.',
      description2: 'Engineered a leakage-free feature extraction pipeline with 8 behavioral signals. Deployed Flask REST API serving real-time predictions at ~50ms latency. Vanilla JS frontend with Chart.js for model comparison visualization.',
      tags: ['Python', 'Flask', 'scikit-learn', 'Random Forest', 'Decision Tree', 'pandas', 'NumPy', 'Chart.js', 'Machine Learning'],
      githubUrl: SITE_CONFIG.projects.ml_privacy.github,
      liveUrl: SITE_CONFIG.projects.ml_privacy.live,
      imageUrl: mlCover
    },
    {
      title: 'DocNest — Healthcare Appointment Booking System',
      description1: 'A full-stack healthcare platform that connects patients with doctors through seamless appointment scheduling, real-time slot management, secure JWT authentication, and role-based access for patients, doctors, and administrators.',
      description2: 'Built with React, Node.js, Express, and MongoDB, featuring Cloudinary image uploads, Razorpay and Stripe payment integration, doctor management dashboards, appointment tracking, earnings analytics, and responsive user experiences across all devices.',
      tags: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Cloudinary',
        'Razorpay',
        'Stripe',
        'Tailwind CSS',
        'REST API'
      ],
      githubUrl: SITE_CONFIG.projects.docnest.github,
      liveUrl: SITE_CONFIG.projects.docnest.live,
      imageUrl: docnestCover
    },
    {
  title: 'ResumeCraft — AI-Powered Resume Builder',
  description1:
    'A full-stack AI-powered resume builder that enables users to generate professional, customized resumes through Gemini API integration, with real-time preview, secure authentication via Clerk, and shareable resume links.',
  description2:
    'Built with Next.js, Node.js, and MongoDB, featuring Clerk-based user authentication, Gemini AI resume generation, live form-driven preview, editable sections for experience, education, and skills, and a fully responsive UI across all devices.',
  tags: [
    'Next.js',
    'Node.js',
    'MongoDB',
    'Clerk',
    'Gemini API',
    'Tailwind CSS',
    'REST API'
  ],
  githubUrl: SITE_CONFIG.projects.resumecraft.github,
  liveUrl: SITE_CONFIG.projects.resumecraft.live,
  imageUrl: resumecraftCover
}
  ]

  return (
    <section className="animate-fade-in text-left">
      <h1 className="font-heading font-semibold text-4xl md:text-[56px] text-text-heading leading-tight tracking-tight mb-8">
        Projects
      </h1>

      <div className="flex flex-col gap-10">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
