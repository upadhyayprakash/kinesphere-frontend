'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold z-50">
              <span
                className={`bg-gradient-to-r from-[#8B5CF6] to-primary bg-clip-text text-transparent ${isMenuOpen ? 'relative z-50' : ''}`}
              >
                KineSphere
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-primary transition-colors">
                Contact
              </Link>
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book
              </button>
            </nav>

            {/* Mobile Book Now Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 w-10 h-10 focus:outline-none"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}
                  />
                  <span
                    className={`absolute top-1/2 left-0 w-full h-0.5 bg-white transform transition-all duration-200 -translate-y-1/2 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 right-0 h-full bg-dark-200 z-40 md:hidden"
            >
              <nav className="flex flex-col p-8 pt-28">
                <Link
                  href="/about"
                  className="text-2xl text-white py-6 text-center hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-2xl text-white py-6 text-center hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
