'use client'

import { useRef, useState, useEffect } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    image: '/images/testimonials/rajesh.jpg',
    content:
      "After struggling with chronic back pain from long hours at my desk, KineSphere's physiotherapy and ergonomic guidance transformed my work life. Their holistic approach and personalized treatment plan made all the difference.",
    rating: 5,
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Pediatrician',
    image: '/images/testimonials/priya.jpg',
    content:
      'As a doctor who spends long hours standing, I developed severe knee pain. The team at KineSphere not only treated my condition but also taught me preventive exercises. Their expertise is truly commendable.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Professional Cricketer',
    image: '/images/testimonials/amit.jpg',
    content:
      'Post my sports injury, I was worried about getting back to the field. The sports rehabilitation program at KineSphere was exactly what I needed. Their specialized approach helped me recover faster and stronger.',
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    role: 'Yoga Instructor',
    image: '/images/testimonials/meera.jpg',
    content:
      'The physiotherapists at KineSphere understand the importance of mobility and flexibility in yoga. Their treatment helped me overcome a shoulder injury while maintaining my practice routine.',
    rating: 5,
  },
  {
    name: 'Suresh Menon',
    role: 'Senior Executive',
    image: '/images/testimonials/suresh.jpg',
    content:
      'The convenience of their home visit service is unmatched. Despite my busy schedule, I could maintain my treatment routine. Their professional and punctual service made recovery so much easier.',
    rating: 5,
  },
]

export default function Testimonials() {
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
    setActiveIndex(Math.min(newIndex, testimonials.length - 1))
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
    <section className="py-16 md:py-24 bg-dark-100 overflow-hidden">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Real stories from real people who have experienced the KineSphere difference.
          </p>
        </div>

        <div className="relative -mx-4 px-4">
          {/* Scroll Buttons - Desktop only */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 scroll-arrow rounded-full items-center justify-center shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
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

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth px-4 -mx-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]"
              >
                <div className="bg-dark-200 rounded-xl p-6 md:p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex text-primary">{'★'.repeat(testimonial.rating)}</div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base flex-grow">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators - Desktop only */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar on desktop */}
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
