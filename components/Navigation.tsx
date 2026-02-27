'use client'

import { useState, useEffect } from 'react'
import type { SiteSettings } from '@/types'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '/contact' }, // Changed: Link to /contact page instead of #contact
]

// Changed: Accept optional siteSettings prop for CMS-driven site name and logo
interface NavigationProps {
  siteSettings?: SiteSettings | null
}

export default function Navigation({ siteSettings }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Changed: Use CMS site name with fallback
  const siteName = siteSettings?.metadata?.site_name ?? 'Digital Gurus'
  const logoUrl = siteSettings?.metadata?.logo?.imgix_url
    ? `${siteSettings.metadata.logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`
    : null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen // Changed: also apply bg when mobile menu is open
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Changed: Logo uses CMS logo image if available, otherwise shows initials */}
          <a href="#" className="flex items-center gap-3 group">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={siteName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover group-hover:scale-110 transition-transform"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-electric-400 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"> {/* Changed: blue-600 to amber-600 */}
                DG
              </div>
            )}
            <span className="text-xl font-bold text-white">
              {/* Changed: Display site name from CMS */}
              {siteName.includes(' ') ? (
                <>
                  {siteName.split(' ')[0]}
                  <span className="text-electric-400">{siteName.split(' ').slice(1).join(' ')}</span>
                </>
              ) : (
                <span>{siteName}</span>
              )}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-electric-400 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact" // Changed: Link to /contact page instead of #contact
              className="bg-electric-500 hover:bg-electric-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-navy-700/50 mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-electric-400 hover:bg-navy-800/50 rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact" // Changed: Link to /contact page instead of #contact
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 mx-4 text-center bg-electric-500 hover:bg-electric-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}