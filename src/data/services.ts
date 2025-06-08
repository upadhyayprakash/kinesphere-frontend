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
    image: './images/services/pain-management.jpg',
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
    relatedServices: ['sports-rehabilitation', 'physiotherapy', 'dry-needling'],
  },
  {
    title: 'Sports Rehabilitation',
    slug: 'sports-rehabilitation',
    description: 'Specialized recovery programs for athletes and sports enthusiasts.',
    image: './images/services/sports-rehab.jpg',
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
    relatedServices: ['athletic-performance', 'strength-conditioning', 'injury-prevention'],
  },
  {
    title: 'Physiotherapy',
    slug: 'physiotherapy',
    description:
      'Comprehensive physical therapy services for pain management and functional improvement.',
    image: './images/services/physio.jpg',
    fullDescription:
      'Our physiotherapy services combine hands-on manual therapy with evidence-based exercise prescription to help you recover from injuries, manage pain, and improve your overall function.',
    benefits: [
      'Pain relief and management',
      'Improved joint mobility and flexibility',
      'Enhanced muscle strength',
      'Better posture and balance',
      'Faster recovery from injuries',
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Comprehensive assessment of your condition and goals',
      },
      {
        title: 'Treatment',
        description: 'Customized therapy combining manual techniques and exercises',
      },
      {
        title: 'Progress Monitoring',
        description: 'Regular assessment and program adjustment',
      },
    ],
    relatedServices: ['pain-management', 'post-surgical-rehab', 'posture-correction'],
  },
  {
    title: 'Strength & Conditioning',
    slug: 'strength-conditioning',
    description:
      'Personalized training programs to build strength, improve mobility, and enhance overall fitness.',
    image: './images/services/strength.jpg',
    fullDescription:
      'Our strength and conditioning programs are designed to help you achieve your fitness goals while improving functional movement patterns. We focus on building strength, enhancing mobility, and preventing injuries.',
    benefits: [
      'Increased strength and power',
      'Improved mobility and flexibility',
      'Enhanced athletic performance',
      'Better body composition',
      'Injury prevention',
    ],
    process: [
      {
        title: 'Fitness Assessment',
        description: 'Comprehensive evaluation of strength, mobility, and movement patterns',
      },
      {
        title: 'Program Design',
        description: 'Customized training program based on your goals and assessment',
      },
      {
        title: 'Progress Tracking',
        description: 'Regular monitoring and program adjustments',
      },
    ],
    relatedServices: ['athletic-performance', 'injury-prevention', 'sports-rehabilitation'],
  },
  {
    title: 'Post-Surgical Rehabilitation',
    slug: 'post-surgical-rehab',
    description:
      'Specialized recovery programs for post-surgery patients to ensure optimal healing and return to function.',
    image: './images/specialized/rehab.jpg',
    fullDescription:
      'Our post-surgical rehabilitation program is designed to help you recover safely and effectively after surgery. We work closely with your surgeon to ensure the best possible outcomes.',
    benefits: [
      'Optimal healing and recovery',
      'Reduced risk of complications',
      'Restored strength and mobility',
      'Safe return to activities',
      'Prevention of future issues',
    ],
    process: [
      {
        title: 'Early Assessment',
        description: 'Initial evaluation following surgical guidelines',
      },
      {
        title: 'Phased Recovery',
        description: 'Progressive rehabilitation following surgical protocols',
      },
      {
        title: 'Return to Activity',
        description: 'Guided return to daily activities and exercise',
      },
    ],
    relatedServices: ['physiotherapy', 'pain-management', 'strength-conditioning'],
  },
  {
    title: 'Posture Correction',
    slug: 'posture-correction',
    description:
      'Comprehensive assessment and treatment for posture-related issues and workplace ergonomics.',
    image: './images/specialized/posture.jpg',
    fullDescription:
      'Our posture correction program combines ergonomic assessment with targeted exercises and manual therapy to address postural issues and prevent related pain and dysfunction.',
    benefits: [
      'Improved posture awareness',
      'Reduced pain and discomfort',
      'Better workplace ergonomics',
      'Enhanced core strength',
      'Prevention of repetitive strain',
    ],
    process: [
      {
        title: 'Postural Analysis',
        description: 'Detailed assessment of posture and movement patterns',
      },
      {
        title: 'Correction Plan',
        description: 'Customized program of exercises and ergonomic adjustments',
      },
      {
        title: 'Ongoing Support',
        description: 'Regular check-ins and program modifications',
      },
    ],
    relatedServices: ['ergonomic-solutions', 'physiotherapy', 'strength-conditioning'],
  },
  {
    title: 'Dry Needling & Cupping',
    slug: 'dry-needling',
    description: 'Advanced therapeutic techniques for muscle tension and pain relief.',
    image: './images/specialized/dry-needling.jpg',
    fullDescription:
      'Our dry needling and cupping therapy services provide targeted relief for muscle tension, trigger points, and chronic pain conditions using evidence-based techniques.',
    benefits: [
      'Immediate pain relief',
      'Reduced muscle tension',
      'Improved blood flow',
      'Enhanced muscle function',
      'Faster recovery time',
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Identification of trigger points and treatment areas',
      },
      {
        title: 'Treatment',
        description: 'Application of dry needling and/or cupping techniques',
      },
      {
        title: 'Recovery',
        description: 'Post-treatment care and exercise recommendations',
      },
    ],
    relatedServices: ['pain-management', 'sports-rehabilitation', 'physiotherapy'],
  },
  {
    title: 'Athletic Performance',
    slug: 'athletic-performance',
    description: 'Targeted programs to improve athletic performance and prevent injuries.',
    image: './images/specialized/athletic.jpg',
    fullDescription:
      'Our athletic performance program is designed to help athletes of all levels reach their peak potential through targeted training, movement analysis, and injury prevention strategies.',
    benefits: [
      'Enhanced sport-specific performance',
      'Improved power and agility',
      'Better movement efficiency',
      'Reduced injury risk',
      'Competitive edge development',
    ],
    process: [
      {
        title: 'Performance Assessment',
        description: 'Comprehensive analysis of athletic abilities and goals',
      },
      {
        title: 'Program Design',
        description: 'Sport-specific training and performance enhancement',
      },
      {
        title: 'Progress Optimization',
        description: 'Regular monitoring and program adjustments',
      },
    ],
    relatedServices: ['sports-rehabilitation', 'strength-conditioning', 'injury-prevention'],
  },
  {
    title: 'Injury Prevention',
    slug: 'injury-prevention',
    description: 'Proactive strategies to prevent injuries and optimize recovery processes.',
    image: './images/specialized/prevention.jpg',
    fullDescription:
      'Our injury prevention program focuses on identifying and addressing potential risk factors before they lead to injuries, using a combination of assessment, education, and targeted exercises.',
    benefits: [
      'Reduced injury risk',
      'Improved movement patterns',
      'Enhanced body awareness',
      'Better performance',
      'Long-term health promotion',
    ],
    process: [
      {
        title: 'Risk Assessment',
        description: 'Identification of potential injury risk factors',
      },
      {
        title: 'Prevention Strategy',
        description: 'Development of targeted prevention program',
      },
      {
        title: 'Monitoring',
        description: 'Regular assessment and program updates',
      },
    ],
    relatedServices: ['athletic-performance', 'strength-conditioning', 'posture-correction'],
  },
]
