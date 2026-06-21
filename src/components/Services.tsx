import React from 'react'
import ServiceCard from './ServiceCard'
import type { ServiceItem } from './ServiceCard'

const Services: React.FC = () => {
  const serviceList: ServiceItem[] = [
    {
      title: 'Full-Stack Web Development',
      badge: 'MERN Stack applications',
      description: 'Building scalable web applications with React frontends and Node.js backends. I create production-ready systems with real-time features, authentication, and database optimization.'
    },
    {
      title: 'API Design & Backend',
      badge: 'Robust server architecture',
      description: 'Designing clean REST APIs with Express.js, implementing JWT authentication, database modeling with MongoDB, and deploying on cloud platforms. Built to scale.'
    },
    {
      title: 'Machine Learning Integration',
      badge: 'AI-powered systems',
      description: 'Integrating machine learning models into web applications. From using Gemini AI for content generation to scikit-learn for predictive analysis, I connect AI to real products.'
    }
  ]

  return (
    <section className="animate-fade-in text-left">
      <h1 className="font-heading font-semibold text-4xl md:text-[56px] text-text-heading leading-tight tracking-tight">
        What I Build
      </h1>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mt-8">
        {serviceList.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services

