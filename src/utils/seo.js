export function setTitle(title) {
  document.title = title ? `${title} — Career Access Group` : 'Career Access Group'
}

export const updateMetaTags = ({ title, description, image, url }) => {
  // Update title
  document.title = `${title} | Career Access Group`
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', description)
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', `${title} | Career Access Group`)
  
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', description)
  
  const ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage && image) ogImage.setAttribute('content', image)
  
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl && url) ogUrl.setAttribute('content', url)
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) twitterTitle.setAttribute('content', `${title} | Career Access Group`)
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]')
  if (twitterDesc) twitterDesc.setAttribute('content', description)
  
  const twitterImage = document.querySelector('meta[name="twitter:image"]')
  if (twitterImage && image) twitterImage.setAttribute('content', image)
}

// Page-specific SEO data
export const pageMetadata = {
  home: {
    title: 'Empowering Africa\'s Next Generation',
    description: 'Bridging the gap between ambition and achievement across Africa. Join our Launch Pad program to revolutionize career education and empower youth.',
    image: 'https://careeraccessgroup.com/0V0A1760.jpg'
  },
  about: {
    title: 'About Us',
    description: 'Learn about Career Access Group\'s mission to empower African youth through innovative career education and professional development programs.',
    image: '/0V0A1486.jpg'
  },
  launchpad: {
    title: 'The Launch Pad Program',
    description: 'Transform your career with our comprehensive Launch Pad program. Gain skills, mentorship, and opportunities to succeed in today\'s job market.',
    image: '/0V0A1604.jpg'
  },
  partnerships: {
    title: 'Partnerships',
    description: 'Partner with Career Access Group to scale your impact and access top talent across Africa. Join 200+ companies in our network.',
    image: '/0V0A1619.jpg'
  },
  gallery: {
    title: 'Gallery',
    description: 'Witness the impact of Career Access Group through our gallery of transformative moments and success stories across Africa.',
    image: '/0V0A1479.jpg'
  },
  careers: {
    title: 'Careers',
    description: 'Join our team and help empower the next generation of African leaders. Explore career opportunities at Career Access Group.',
    image: '/0V0A1640.jpg'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Career Access Group. Let\'s discuss how we can work together to empower Africa\'s youth.',
    image: '/0V0A1658.jpg'
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Career Access Group',
  description: 'Empowering African youth through career education and professional development',
  url: 'https://careeraccessgroup.com',
  logo: 'https://careeraccessgroup.com/logo.svg',
  sameAs: [
    'https://linkedin.com/company/career-access-group',
    'https://twitter.com/careeraccessgrp'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@careeraccessgroup.com'
  }
}

export const addStructuredData = (data = structuredData) => {
  // Ensure only one structured data script is present
  const existing = document.querySelector('script[type="application/ld+json"][data-cag="schema"]')
  if (existing) {
    existing.textContent = JSON.stringify(data)
    return
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-cag', 'schema')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}
