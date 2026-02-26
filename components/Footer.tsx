export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-800/50 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-electric-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DG
              </div>
              <span className="text-lg font-bold text-white">
                Digital<span className="text-electric-400">Gurus</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Crafting digital experiences that drive results.
            </p>
          </div>

          {/* Navigation */}
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
            <a href="#contact" className="text-gray-400 hover:text-electric-400 text-sm transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Digital Gurus.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}