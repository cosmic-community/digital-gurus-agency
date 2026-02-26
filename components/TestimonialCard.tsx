import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-navy-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientName = testimonial.metadata?.client_name || testimonial.title
  const company = testimonial.metadata?.company
  const quote = testimonial.metadata?.quote || ''
  const ratingValue = testimonial.metadata?.rating
    ? parseInt(testimonial.metadata.rating.value, 10)
    : 5

  return (
    <div className="relative bg-navy-800/30 border border-navy-700/40 rounded-2xl p-8 hover:border-electric-400/20 transition-all duration-300 flex flex-col">
      {/* Quote icon */}
      <div className="text-electric-400/20 mb-4">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={ratingValue} />
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 leading-relaxed mb-6 flex-1 text-sm">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Client info */}
      <div className="flex items-center gap-3 pt-4 border-t border-navy-700/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
          {clientName.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{clientName}</p>
          {company && (
            <p className="text-gray-500 text-xs">{company}</p>
          )}
        </div>
      </div>
    </div>
  )
}