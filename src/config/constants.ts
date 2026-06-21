export const SITE_CONFIG = {
  email: import.meta.env.VITE_EMAIL || 'koshtasambhav18@gmail.com',
  calendly: 'https://calendly.com/koshtasambhav18/30min',
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
  },
  socials: {
    github: 'https://github.com/Sambhav10-10',
    linkedin: 'https://www.linkedin.com/in/sambhavkoshta10/',
    discord: '', // Add Discord if available
    x: '' // Add Twitter/X if available
  },
  projects: {
    turfmate: {
      github: 'https://github.com/Sambhav10-10/TurfMate', // Update with actual repo
      live: 'https://turf-mate.vercel.app/'
    },
    identra: {
      github: 'https://github.com/Sambhav10-10/Identra', // Update with actual repo
      live: 'https://identra-alpha.vercel.app/'
    },
    ml_privacy: {
      github: 'https://github.com/Sambhav10-10/AppDataCollectionPredictor', // Update with actual repo
      live: 'https://appdatacollectionpredictor.onrender.com/' // Add live link if available
    }
  }
}

