import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import TeamSection from '@/components/TeamSection'
import { getPageBySlug, getSiteSettings, getTeamMembers } from '@/lib/cosmic'

export const revalidate = 60

export default async function AboutPage() {
  const [aboutPage, siteSettings, teamMembers] = await Promise.all([
    getPageBySlug('about'),
    getSiteSettings(),
    getTeamMembers(),
  ])

  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  // Changed: Parse markdown content into simple HTML-friendly sections
  const heroTitle = aboutPage?.metadata?.hero_title ?? 'About Us'
  const heroSubtitle = aboutPage?.metadata?.hero_subtitle ?? ''
  const heroImageUrl = aboutPage?.metadata?.hero_image?.imgix_url
    ? `${aboutPage.metadata.hero_image.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`
    : null
  const content = aboutPage?.metadata?.content ?? ''

  return (
    <main className="min-h-screen">
      <Navigation siteSettings={siteSettings} />

      {/* About Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        {/* Hero background image from CMS */}
        {heroImageUrl && (
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${heroImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content Section - renders markdown content from CMS */}
      {content && (
        <section className="py-20 bg-navy-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-electric-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-gray-400 prose-ul:space-y-2">
              <AboutContent content={content} />
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />

      <Footer siteSettings={siteSettings} />
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}

// Changed: Simple markdown-to-JSX renderer for about page content
function AboutContent({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let key = 0

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="space-y-2 my-4">
          {currentList.map((item, i) => (
            <li key={i} className="text-gray-400 flex items-start gap-2">
              <span className="text-electric-400 mt-1.5 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      )
      currentList = []
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentList.push(trimmed.slice(2))
      continue
    }

    flushList()

    if (trimmed === '') {
      continue
    }

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${key++}`}
          className="text-xl font-semibold text-white mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(4)) }}
        />
      )
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h2
          key={`h2-${key++}`}
          className="text-3xl font-bold text-white mt-12 mb-6"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(3)) }}
        />
      )
    } else {
      elements.push(
        <p
          key={`p-${key++}`}
          className="text-gray-400 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      )
    }
  }

  flushList()

  return <>{elements}</>
}

// Changed: Format inline markdown (bold, links)
function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-electric-400 hover:underline">$1</a>'
    )
}