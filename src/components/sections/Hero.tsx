'use client'

import Image from 'next/image'
import Header from '../Header'
import HeroContent from './HeroContent'

const stats = [
  {
    value: '50+',
    label: 'Team of Physios',
  },
  {
    value: '30+',
    label: 'S&C Coaches',
  },
  {
    value: '4.9',
    label: 'Google Rating',
    stars: true,
  },
  {
    value: '15K+',
    label: 'Happy Clients',
  },
  {
    value: '98%',
    label: 'Success Rate',
  },
  {
    value: '10+',
    label: 'Years Experience',
  },
]

const locations = ['Whitefield', 'Belagere']

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* SEO-optimized metadata */}
      <div className="hidden">
        <h1>KineSphere - Leading Physiotherapy & Wellness Center in Bangalore</h1>
        <p>
          KineSphere is Bangalore's premier physiotherapy and wellness center, offering expert
          rehabilitation, strength conditioning, and movement therapy. With locations in Whitefield
          and Belagere, our team of 50+ physiotherapists and 30+ S&C coaches have helped over 15,000
          clients achieve their fitness and recovery goals with a 98% success rate.
        </p>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(../images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto min-h-[calc(100vh-80px)] flex items-center pt-20 pb-12 md:py-24">
        <HeroContent stats={stats} locations={locations} />
      </div>
    </section>
  )
}
