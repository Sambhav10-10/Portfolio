import React from 'react'
import { ExternalLink } from 'lucide-react'
import githubIcon from '../assets/square-github-brands-solid-full.svg'

export interface ProjectItem {
  title: string
  description1: string
  description2: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl: string
}

interface ProjectCardProps {
  project: ProjectItem
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card-bg px-5 py-5 md:p-8 rounded-[20px] border border-element-black/10 flex flex-col md:flex-row gap-8 items-stretch max-w-[1215px] mx-auto hover:shadow-md transition-all duration-300">
      {/* Left Column: Portrait Image */}
      <div className="w-full md:w-[42%] min-h-[320px] md:min-h-[440px] rounded-xl overflow-hidden relative select-none bg-card-bg flex items-center justify-center">
        <img
          src={project.imageUrl}
          className="w-full h-full object-contain"
          alt={`${project.title} screenshot`}
          loading="lazy"
        />
      </div>

      {/* Right Column: Text Content */}
      <div className="flex-grow flex flex-col justify-between py-2 md:w-[58%] text-left">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-heading mb-4 leading-tight">
            {project.title}
          </h2>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed mb-4">
            {project.description1}
          </p>

          <p className="font-sans text-sm md:text-base text-text-subheading leading-relaxed mb-6">
            {project.description2}
          </p>
        </div>

        <div>
          {/* Tech Badges (White BG, Gray borders, Pill shape) */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-card-bg border border-element-black/10 text-text-heading rounded-full text-[11.5px] font-medium transition-all hover:border-element-black/20 select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Visit Github Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-element-black hover:opacity-90 text-primary-bg rounded-full font-sans text-xs font-semibold transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <img
                src={githubIcon}
                className="w-[24px] h-[24px] invert"
                alt="GitHub repository"
              />
              Visit GitHub
            </a>

            {/* Live Site Button (if exists) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card-bg border border-element-black/10 hover:border-element-black/20 text-text-heading rounded-full font-sans text-xs font-semibold transition-all shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <ExternalLink size={16} strokeWidth={2.2} />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
