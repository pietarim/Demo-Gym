import Link from 'next/link'

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/membership', label: 'Membership' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/pt-services', label: 'PT Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  Contact: [
    { href: '#', label: '123 Fitness Street' },
    { href: '#', label: 'Helsinki, Finland' },
    { href: 'tel:+358401234567', label: '+358 40 123 4567' },
    { href: 'mailto:info@mitroxgym.fi', label: 'info@mitroxgym.fi' },
  ],
  Hours: [
    { href: '#', label: 'Mon–Fri: 6:00–22:00' },
    { href: '#', label: 'Saturday: 8:00–20:00' },
    { href: '#', label: 'Sunday: 9:00–18:00' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-bold text-xl text-white">
                Mitrox Gym Oy
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fitness Gym. Transform your body, elevate your mind, and join a
              community that pushes you to be your best.
            </p>
            <div className="flex gap-3 mt-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs capitalize text-white">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Mitrox Gym Oy. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
