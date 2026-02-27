import type { SiteSettings } from '@/types'

// Changed: Accept optional siteSettings prop for CMS-driven footer content
interface FooterProps {
  siteSettings?: SiteSettings | null
}

export default function Footer({ siteSettings }: FooterProps) {
  // Changed: Use CMS site settings with fallbacks
  const siteName = siteSettings?.metadata?.site_name ?? 'Digital Gurus'
  const tagline = siteSettings?.metadata?.tagline ?? 'Crafting digital experiences that drive results.'
  const footerText = siteSettings?.metadata?.footer_text ?? `© ${new Date().getFullYear()} Digital Gurus. All rights reserved.`
  const logoUrl = siteSettings?.metadata?.logo?.imgix_url
    ? `${siteSettings.metadata.logo.imgix_url}?w=72&h=72&fit=crop&auto=format,compress`
    : null

  // Changed: Collect social links from CMS
  const socialLinks = [
    { label: 'Facebook', url: siteSettings?.metadata?.facebook_url, icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    // Changed: Updated Twitter to X with new icon path
    { label: 'X', url: siteSettings?.metadata?.twitter_url, icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { label: 'LinkedIn', url: siteSettings?.metadata?.linkedin_url, icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
    { label: 'Instagram', url: siteSettings?.metadata?.instagram_url, icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
  ].filter((s) => s.url)

  return (
    <footer className="border-t border-navy-800/50 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline - Changed: Uses CMS data */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={siteName}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-lg object-cover"
                />
              ) : (
                <div className="w-9 h-9 bg-gradient-to-br from-electric-400 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm"> {/* Changed: emerald-600 to amber-600 */}
                  DG
                </div>
              )}
              <span className="text-lg font-bold text-white">
                {siteName.includes(' ') ? (
                  <>
                    {siteName.split(' ')[0]}
                    <span className="text-electric-400">{siteName.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  siteName
                )}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {tagline}
            </p>
          </div>

          {/* Navigation and social links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#services" className="text-gray-400 hover:text-electric-400 text-sm transition-colors">
                Services
              </a>
              <a href="#team" className="text-gray-400 hover:text-electric-400 text-sm transition-colors">
                Team
              </a>
              <a href="#testimonials" className="text-gray-400 hover:text-electric-400 text-sm transition-colors">
                Testimonials
              </a>
              <a href="/contact" className="text-gray-400 hover:text-electric-400 text-sm transition-colors"> {/* Changed: Link to /contact page instead of #contact */}
                Contact
              </a>
            </div>
            {/* Changed: Display social media links from CMS */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-electric-400 transition-colors"
                    aria-label={social.label}
                  >
                    {/* Changed: Use fill for X icon, stroke for others */}
                    {social.label === 'X' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Copyright - Changed: Uses footer_text from CMS */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">
              {footerText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}