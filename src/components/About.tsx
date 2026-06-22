import React from 'react'
import TechStack from './TechStack'

const About: React.FC = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-20 max-w-5xl">
      {/* Top Split Row: Story and Experience */}
      <section className="text-left flex flex-col md:flex-row gap-12 w-full">
        {/* Left Column: About copy */}
        <div className="flex-grow md:w-[60%] flex flex-col gap-6">
          <h1 className="font-heading font-semibold text-4xl md:text-[56px] text-text-heading leading-none tracking-tight mb-6 md:mb-2">
            About
          </h1>

          <p className="font-sans font-semibold text-lg md:text-xl text-text-heading leading-relaxed">
            Hey, I'm Sambhav. A full-stack developer passionate about building scalable web applications and AI systems.
          </p>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed">
            I'm a B.Tech Computer Science student at MANIT Bhopal with a strong foundation in MERN Stack development and machine learning. I design systems end-to-end — from database architecture to responsive frontends — and deploy them on production platforms.
          </p>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed">
            My projects span full-stack e-commerce platforms with real-time features, AI-powered content generation systems, and machine learning models for privacy analysis. I focus on building systems that scale, handle edge cases, and provide real value.
          </p>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed">
            I'm deeply interested in backend architecture, API design, and leveraging AI to solve real problems. Currently building production applications with React, Node.js, MongoDB, and cloud deployment platforms.
          </p>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed">
            I've solved 500+ DSA problems, achieved top institute rankings in hackathons, and am always looking for challenging problems that push me to grow as a developer.
          </p>
        </div>

        {/* Right Column: Experience */}
        <div className="w-full md:w-[40%] flex flex-col">
          <h2 className="font-heading font-semibold text-4xl md:text-[56px] text-text-heading leading-none tracking-tight mb-8">
            Education
          </h2>

          {/* Experience Card */}
         <div className="border border-element-black/10 rounded-xl p-5 bg-card-bg flex justify-between items-start hover:shadow-sm transition-all duration-300">
            <div className="flex flex-col text-left">
              <h3 className="font-heading font-bold text-lg text-text-heading leading-tight">
                B.Tech Computer Science
              </h3>
              <span className="font-sans text-sm text-text-subheading mt-1.5">
                MANIT Bhopal • CGPA: 8.18
              </span>
            </div>
           <span className="font-sans text-[13px] text-text-subheading font-medium select-none">
              2023–Present
            </span>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />
    </div>
  )
}

export default About
