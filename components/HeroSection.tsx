export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-400/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-navy-800/60 border border-navy-600/30 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">
            Available for new projects
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">We Craft</span>
          <br />
          <span className="bg-gradient-to-r from-electric-400 via-blue-400 to-electric-500 bg-clip-text text-transparent">
            Digital Experiences
          </span>
          <br />
          <span className="text-white">That Drive Results</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From brand strategy to web development and digital marketing, we help
          businesses transform their online presence and achieve measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-electric-500/25"
          >
            Explore Our Services
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#team"
            className="inline-flex items-center justify-center gap-2 border border-navy-500 hover:border-electric-400/50 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:bg-navy-800/50"
          >
            Meet the Team
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-500 mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}