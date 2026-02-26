import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const photo = member.metadata?.photo
  const role = member.metadata?.role || 'Team Member'
  const bio = member.metadata?.bio
  const email = member.metadata?.email

  return (
    <div className="group relative bg-navy-800/30 border border-navy-700/40 rounded-2xl p-6 text-center hover:border-electric-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-electric-500/5">
      {/* Photo */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress&crop=faces`}
            alt={member.title}
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover ring-4 ring-navy-700/50 group-hover:ring-electric-400/30 transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-navy-700 flex items-center justify-center ring-4 ring-navy-700/50">
            <span className="text-3xl font-bold text-gray-500">
              {member.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Status dot */}
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-navy-800" />
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-400 transition-colors">
        {member.title}
      </h3>
      <p className="text-electric-400 text-sm font-semibold mb-4">
        {role}
      </p>

      {bio && (
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {bio}
        </p>
      )}

      {/* Email link */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-electric-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {email}
        </a>
      )}
    </div>
  )
}