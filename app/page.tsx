import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [services, teamMembers, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection services={services} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}