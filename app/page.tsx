import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { getServices, getTeamMembers, getTestimonials, getPageBySlug, getSiteSettings } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  // Changed: Also fetch home page content and site settings from Cosmic
  const [services, teamMembers, testimonials, homePage, siteSettings] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getPageBySlug('home'),
    getSiteSettings(),
  ])

  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <main className="min-h-screen">
      {/* Changed: Pass siteSettings to Navigation */}
      <Navigation siteSettings={siteSettings} />
      {/* Changed: Pass homePage data to HeroSection */}
      <HeroSection page={homePage} />
      <ServicesSection services={services} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      {/* Changed: Pass siteSettings to ContactSection */}
      <ContactSection siteSettings={siteSettings} />
      {/* Changed: Pass siteSettings to Footer */}
      <Footer siteSettings={siteSettings} />
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}