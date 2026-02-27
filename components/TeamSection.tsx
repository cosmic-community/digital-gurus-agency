import type { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  if (!teamMembers || teamMembers.length === 0) {
    return null
  }

  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-navy-950" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" /> {/* Changed: emerald-600 to amber-600 */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-electric-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our People
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet the Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A talented group of creatives, strategists, and developers dedicated
            to making your vision a reality.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}