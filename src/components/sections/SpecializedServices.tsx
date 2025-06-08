'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'
import Link from 'next/link'

type SpecializedService = {
  title: string
  description: string
  icon: ReactNode
  bgImage: string
  slug: string
}

const specializedServices: SpecializedService[] = [
  {
    title: 'Pain Management',
    description:
      'Focuses on identifying and treating the root cause of pain rather than just masking the symptoms.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/pain-management.jpg',
    slug: 'pain-management',
  },
  {
    title: 'Post-Surgical & Sports Injury Rehabilitation',
    description:
      'Specialized recovery programs for post-surgery patients and sports-related injuries.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/rehab.jpg',
    slug: 'post-surgical-rehab',
  },
  {
    title: 'Posture Correction & Ergonomic Solutions',
    description:
      'Comprehensive assessment and treatment for posture-related issues and workplace ergonomics.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/posture.jpg',
    slug: 'posture-correction',
  },
  {
    title: 'Dry Needling & Cupping Therapy',
    description: 'Advanced therapeutic techniques for muscle tension and pain relief.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/dry-needling.jpg',
    slug: 'dry-needling',
  },
  {
    title: 'Athletic Performance Enhancement',
    description: 'Targeted programs to improve athletic performance and prevent injuries.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/athletic.jpg',
    slug: 'athletic-performance',
  },
  {
    title: 'Injury Prevention & Recovery',
    description: 'Proactive strategies to prevent injuries and optimize recovery processes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/prevention.jpg',
    slug: 'injury-prevention',
  },
  {
    title: 'Strength & Mobility Training',
    description:
      'Customized training programs to enhance strength, flexibility, and overall mobility.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    ),
    bgImage: '/images/specialized/mobility.jpg',
    slug: 'strength-conditioning',
  },
]

export default function SpecializedServices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)

    // Update active index based on scroll position
    const cardWidth = clientWidth / 2 // Assuming 2 cards are visible
    const newIndex = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(newIndex, specializedServices.length - 1))
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll()
      setShowRightArrow(scrollContainer.scrollWidth > scrollContainer.clientWidth)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = scrollContainerRef.current.clientWidth / 2
    const currentScroll = scrollContainerRef.current.scrollLeft
    const newScroll =
      direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    })
  }

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return

    const cardWidth = scrollContainerRef.current.clientWidth / 2
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 md:py-24 bg-dark-200 overflow-hidden">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Specialized Care
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Advanced Treatment Options
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Discover our range of specialized services designed to address specific conditions and
            enhance your recovery journey.
          </p>
        </div>

        <div className="relative -mx-4 px-4">
          {/* Scroll Buttons - Desktop only */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 scroll-arrow rounded-full items-center justify-center shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 scroll-arrow rounded-full items-center justify-center shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Service Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth px-4 -mx-4"
          >
            {specializedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="flex-none w-[85%] sm:w-[350px]"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 card-gradient" />

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                      {service.icon}
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Indicators - Desktop only */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {specializedServices.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to specialized service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom styles to hide scrollbar */}
      <style jsx>{`
        @media (min-width: 768px) {
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
