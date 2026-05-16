interface FooterProps {
  openWhatsApp: (message: string) => void;
}

export default function Footer({ openWhatsApp }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            🚖 Need a Ride? Call Us Now!
          </h3>
          <p className="text-orange-100 mb-6">
            24/7 Available • Best Rates • Safe Journey Guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9106178900"
              className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-orange-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
               +91 9106178900
            </a>

            <button
              onClick={() =>
                openWhatsApp(
                  "Hello! 🙏\nI’d like to book a cab with Jay Mogal Cab Service.\n\nPlease share the available options and rates.\n\nMy Name:\nFrom:\nTo:\nDate:"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                🚖
              </div>
              <div>
                <p className="font-extrabold text-white text-lg leading-tight">Jay Mogal</p>
                <p className="text-orange-400 text-sm font-medium">Cab Service</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ahmedabad’s #1 trusted cab service. Experience safe, comfortable, and affordable travel across Gujarat.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✅</span>
                <span>24/7 Service Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✅</span>
                <span>Experienced Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✅</span>
                <span>Best Rates Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { id: "home", label: "🏠 Home" },
                { id: "services", label: "🚗 Our Services" },
                { id: "rates", label: "💰 Rate List" },
                { id: "booking", label: "📅 Book a Cab" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-base mt-7 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
              Popular Routes
            </h4>
            <ul className="space-y-2">
              {[
                "Ahmedabad → Bhuj",
                "Ahmedabad → Gandhidham",
                "Ahmedabad → Mundra",
                "Ahmedabad → Mandvi",
                "Ahmedabad → Naliya",
              ].map((route) => (
                <li key={route}>
                  <button
                    onClick={() => scrollTo("rates")}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    📍 {route}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                  <a href="tel:9106178900" className="text-white font-semibold hover:text-orange-400 transition-colors">
                    +91 9106178900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                  <button
                    onClick={() =>
                      openWhatsApp("Hello! 🙏 I’d like to make a cab booking with Jay Mogal Cab Service.")
                    }
                    className="text-white font-semibold hover:text-green-400 transition-colors"
                  >
                    +91 9106178900
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-white font-semibold">Ahmedabad, Gujarat</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Service Hours</p>
                  <p className="text-white font-semibold">24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Jay Mogal Cab Service. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for Gujarat travelers | Ahmedabad, Gujarat
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() =>
          openWhatsApp(
            "Hello! 🙏 I’d like to book a cab with Jay Mogal Cab Service.\n\nMy Name:\nFrom:\nTo:\nDate:"
          )
        }
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 group"
        title="Chat on WhatsApp"
      >
         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
        {/* Ping animation */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </footer>
  );
}