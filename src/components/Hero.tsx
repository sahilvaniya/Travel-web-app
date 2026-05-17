interface HeroProps {
  openWhatsApp: (message: string) => void;
}

export default function Hero({ openWhatsApp }: HeroProps) {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-orange-900/50" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32 md:py-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 backdrop-blur-sm text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          24/7 Service Available • 9106178900
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          <span className="block">Jay Mogal</span>
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Cab Service
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3">
          🙏 Aapka Safar, Hamari Zimmedari!
        </p>

        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Reliable, safe, and comfortable cab service from Ahmedabad across Gujarat and
          throughout India. Sedan, Ertiga, Innova & Innova Crysta available.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { icon: "🚗", label: "4+ Car Types" },
            { icon: "📍", label: "Gujarat Wide" },
            { icon: "⏰", label: "24/7 Available" },
            { icon: "💰", label: "Best Rates" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="group w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50 flex items-center justify-center gap-3"
          >
            <span>📅</span>
            Book Now
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
 <button
      onClick={() => scrollToSection("sharing-taxi")}
      className="group w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-red-500/30 transition-all hover:scale-105 hover:shadow-red-500/50 flex items-center justify-center gap-3"
    >
      <span>🚕</span>
      Sharing Taxi
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
          <button
            onClick={() =>
              openWhatsApp(
                "Hello! 🙏 I’d like to book a cab with Jay Mogal Cab Service. Please share available options.\n\nMy Contact:"
              )
            }
            className="group w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-green-500/30 transition-all hover:scale-105 hover:shadow-green-500/50 flex items-center justify-center gap-3"
          >
           <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            Chat on WhatsApp
          </button>
        </div>

        {/* Phone number */}
        <a
          href="tel:9106178900"
          className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-semibold mt-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
           Call Now: +91 9106178900
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}