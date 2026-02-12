'use client'

import { useState, useEffect } from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Add background when scrolled past 10px
      setIsScrolled(currentScrollY > 10)
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setMobileMenuOpen(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}
      >
        <nav className="max-w-full mx-auto px-6 xs:px-12 xl:px-14 2xl:px-16 py-8 md:py-12 lg:py-3 xl:py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden order-first relative z-50 w-9 h-9 shrink-0"
              aria-label="Toggle menu"
            >
              <Bars2Icon 
                className={`w-9 h-8 scale-x-150 text-icon absolute inset-0 transition-all duration-300
                  ${mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
              />
              <XMarkIcon 
                className={`w-9 h-8 text-icon absolute inset-0 transition-all duration-300
                  ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
              />
            </button>

            {/* Logo */}
            <div className="text-lg lg:text-3xl xl:text-4xl text-right xs:text-left font-medium text-foreground tracking-wide order-last lg:order-first relative z-50">
              Dr. Maya Reynolds
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-10 lg:gap-8 xl:gap-14">
              <a 
                href="#" 
                className="text-foreground hover:opacity-70 transition-opacity text-xl font-normal"
              >
               About
              </a>
              <a 
                href="#" 
                className="text-foreground hover:opacity-70 transition-opacity text-xl font-normal"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-primary transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 xs:gap-8 sm:gap-12">
          <a 
            href="#" 
            className="text-foreground text-xl xs:text-4xl sm:text-5xl font-normal hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
           About
          </a>
          <a 
            href="#" 
            className="text-foreground text-xl xs:text-4xl sm:text-5xl font-normal hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )
}