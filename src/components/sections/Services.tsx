'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

type Service = {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  bgImage: string
}

const services: Service[] = [
  {
    title: 'Sports Rehabilitation',
    description:
      'Expert care for athletes and sports enthusiasts, focusing on injury recovery and performance enhancement.',
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
    features: [
      'Injury Assessment & Treatment',
      'Sport-Specific Training',
      'Return to Play Programs',
      'Performance Enhancement',
    ],
    bgImage: '/images/services/sports-rehab.jpg',
  },
  {
    title: 'Physiotherapy',
    description:
      'Comprehensive physical therapy services for pain management and functional improvement.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    features: [
      'Manual Therapy',
      'Exercise Prescription',
      'Pain Management',
      'Rehabilitation Programs',
    ],
    bgImage: '/images/services/physio.jpg',
  },
  {
    title: 'Strength & Conditioning',
    description:
      'Personalized training programs to build strength, improve mobility, and enhance overall fitness.',
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
    features: [
      'Functional Training',
      'Movement Assessment',
      'Corrective Exercise',
      'Performance Training',
    ],
    bgImage: '/images/services/strength.jpg',
  },
  {
    title: 'Pain Management',
    description:
      'Focused treatment that addresses the root cause of pain rather than just masking symptoms.',
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
    features: [
      'Root Cause Analysis',
      'Targeted Treatment',
      'Pain Relief Techniques',
      'Long-term Solutions',
    ],
    bgImage: '/images/services/pain-management.jpg',
  },
]

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px threshold
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      // Check initial scroll buttons visibility
      handleScroll()
      // Check if content is scrollable
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

    const scrollAmount = 400 // Scroll by roughly one card width + gap
    const currentScroll = scrollContainerRef.current.scrollLeft
    const newScroll =
      direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 md:py-24 bg-dark-100 overflow-hidden">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Comprehensive Care for Every Movement
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            From injury recovery to performance enhancement, our expert team provides personalized
            care tailored to your unique needs and goals.
          </p>
        </div>

        <div className="relative -mx-4 px-4">
          {/* Scroll Buttons - Visible only on desktop */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark/80 hover:bg-dark backdrop-blur-sm rounded-full items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
              aria-label="Scroll left"
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
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark/80 hover:bg-dark backdrop-blur-sm rounded-full items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
              aria-label="Scroll right"
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

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scroll-smooth md:scroll-px-4 md:[scrollbar-width:none]"
          >
            {services.map((service, index) => (
              <div key={index} className="flex-none w-[300px] sm:w-[350px]">
                <div className="relative h-[500px] rounded-xl overflow-hidden group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm md:text-base text-gray-400"
                        >
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index ===
                  Math.floor(
                    (scrollContainerRef.current?.scrollLeft || 0) /
                      (scrollContainerRef.current?.clientWidth || 1)
                  )
                    ? 'bg-primary'
                    : 'bg-gray-600'
                }`}
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
