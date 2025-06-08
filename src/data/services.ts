import { ReactNode } from 'react'
import { PainManagementIcon } from '@/components/icons/ServiceIcons'

export interface Service {
  title: string
  slug: string
  description: string
  image: string
  fullDescription: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  relatedServices: string[]
}

export const services: Service[] = [
  {
    title: 'Pain Management',
    slug: 'pain-management',
    description:
      'Expert treatment for chronic pain conditions using advanced therapeutic techniques.',
    image: '/images/services/pain-management.jpg',
    fullDescription:
      'Our comprehensive pain management program combines evidence-based techniques with personalized care to address chronic pain conditions. We focus on identifying and treating the root cause rather than just masking symptoms.',
    benefits: [
      'Long-term pain relief',
      'Improved mobility and function',
      'Reduced dependency on medication',
      'Better quality of life',
      'Prevention of future pain issues',
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Thorough evaluation of pain patterns, movement analysis, and medical history',
      },
      {
        title: 'Treatment Plan',
        description:
          'Customized program combining manual therapy, exercises, and pain management techniques',
      },
      {
        title: 'Regular Monitoring',
        description: 'Continuous assessment of progress and adjustment of treatment strategies',
      },
    ],
    relatedServices: ['sports-rehabilitation', 'manual-therapy', 'ergonomic-solutions'],
  },
  {
    title: 'Sports Rehabilitation',
    slug: 'sports-rehabilitation',
    description: 'Specialized recovery programs for athletes and sports enthusiasts.',
    image: '/images/services/sports-rehab.jpg',
    fullDescription:
      'Our sports rehabilitation program is designed to help athletes and active individuals recover from injuries and return to their peak performance levels. We combine advanced therapeutic techniques with sport-specific training.',
    benefits: [
      'Faster recovery from sports injuries',
      'Enhanced performance',
      'Injury prevention strategies',
      'Sport-specific conditioning',
      'Biomechanical analysis',
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Comprehensive evaluation of injury and performance goals',
      },
      {
        title: 'Recovery Plan',
        description: 'Tailored rehabilitation program focusing on strength and function',
      },
      {
        title: 'Return to Sport',
        description: 'Gradual progression to sport-specific activities',
      },
    ],
    relatedServices: ['pain-management', 'strength-conditioning', 'movement-therapy'],
  },
  {
    title: 'Manual Therapy',
    slug: 'manual-therapy',
    description: 'Hands-on treatment techniques to improve mobility and reduce pain.',
    image: '/images/services/physio.jpg',
    fullDescription:
      'Our manual therapy services utilize hands-on techniques to manipulate and mobilize your joints and soft tissues. This approach helps reduce pain, improve movement, and accelerate healing.',
    benefits: [
      'Pain relief',
      'Improved joint mobility',
      'Better muscle function',
      'Enhanced circulation',
      'Faster recovery',
    ],
    process: [
      {
        title: 'Evaluation',
        description: 'Detailed assessment of joint and tissue mobility',
      },
      {
        title: 'Treatment',
        description: 'Application of specific manual therapy techniques',
      },
      {
        title: 'Home Program',
        description: 'Self-management strategies and exercises',
      },
    ],
    relatedServices: ['pain-management', 'sports-rehabilitation', 'movement-therapy'],
  },
  {
    title: 'Ergonomic Solutions',
    slug: 'ergonomic-solutions',
    description: 'Workplace assessments and solutions for optimal posture and comfort.',
    image: '/images/services/strength.jpg',
    fullDescription:
      'Our ergonomic solutions help prevent work-related injuries and improve workplace comfort. We provide comprehensive assessments and practical recommendations for optimal workspace setup.',
    benefits: [
      'Reduced workplace injuries',
      'Improved posture',
      'Enhanced productivity',
      'Prevention of repetitive strain',
      'Comfortable work environment',
    ],
    process: [
      {
        title: 'Workplace Assessment',
        description: 'Analysis of workspace and working habits',
      },
      {
        title: 'Recommendations',
        description: 'Customized ergonomic solutions and equipment suggestions',
      },
      {
        title: 'Implementation',
        description: 'Guidance on implementing changes and forming better habits',
      },
    ],
    relatedServices: ['pain-management', 'posture-correction', 'corporate-wellness'],
  },
]
