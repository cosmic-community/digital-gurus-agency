import type { SiteSettings } from '@/types'

// Changed: Accept optional siteSettings prop for CMS-driven email and phone
interface ContactSectionProps {
  siteSettings?: SiteSettings | null
}

export default function ContactSection({ siteSettings }: ContactSectionProps) {
  // Changed: Use email and phone from CMS site settings with fallbacks
  const email = siteSettings?.metadata?.email ?? 'hello@digitalgurus.com'
  const phone = siteSettings?.metadata?.phone ?? '(555) 123-4567'

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-navy-950" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-electric-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Let&apos;s Talk
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Start Your
          <br />
          <span className="bg-gradient-to-r from-electric-400 to-blue-400 bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a brand-new website, a comprehensive marketing
          strategy, or a complete digital transformation, we&apos;re here to help.
          Let&apos;s create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Changed: Email link uses CMS email address */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-electric-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get in Touch
          </a>
          {/* Changed: Phone link uses CMS phone number */}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^+\d]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 border border-navy-500 hover:border-electric-400/50 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:bg-navy-800/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}