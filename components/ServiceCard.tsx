import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const featuredImage = service.metadata?.featured_image
  const icon = service.metadata?.icon

  return (
    <div className="group relative bg-navy-800/40 border border-navy-700/50 rounded-2xl overflow-hidden hover:border-electric-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-electric-500/5">
      {/* Image */}
      {featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800/90 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <span className="text-3xl">{icon}</span>
          )}
          <h3 className="text-xl font-bold text-white group-hover:text-electric-400 transition-colors">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm">
          {service.metadata?.description || 'No description available.'}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}