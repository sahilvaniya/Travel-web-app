import {
  BadgeInfo,
  CheckCircle2,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";


export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <BadgeInfo className="w-4 h-4" />
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Meet <span className="text-orange-500">Suresh M</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
              With{" "}
              <span className="font-semibold text-gray-900">
                15+ years of experience
              </span>{" "}
              in the travel and cab service industry, Suresh M is dedicated to
              providing safe, comfortable, and reliable journeys across
              Ahmedabad, Kutch, and all over Gujarat. Whether it’s a local
              ride, airport transfer, outstation trip, or sharing taxi service,
              your travel is always in trusted hands.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
              Our main goal is simple — to make every journey smooth, punctual,
              and stress-free for every passenger. We believe in honest
              service, clean vehicles, professional driving, and customer
              satisfaction above everything else.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <Clock3 className="w-6 h-6 text-orange-500 mb-2" />
                <p className="font-bold text-gray-900">15+ Years</p>
                <p className="text-sm text-gray-500">Trusted travel experience</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-orange-500 mb-2" />
                <p className="font-bold text-gray-900">Safe Rides</p>
                <p className="text-sm text-gray-500">Comfortable and secure travel</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6 text-orange-500 mb-2" />
                <p className="font-bold text-gray-900">All Gujarat</p>
                <p className="text-sm text-gray-500">Local & outstation trips</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <PhoneCall className="w-6 h-6 text-orange-500 mb-2" />
                <p className="font-bold text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-500">Always available for booking</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                  SM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Suresh M
                  </h3>
                  <p className="text-orange-600 font-semibold">
                    Founder & Travel Expert
                  </p>
                  <p className="text-sm text-gray-500">15+ Years of Experience</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 border border-orange-100 mb-6">
                <p className="text-gray-700 italic leading-7">
                  “Our service is built on trust, punctuality, and comfort.
                  Every journey should feel safe, affordable, and hassle-free.”
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Professional Service
                    </p>
                    <p className="text-sm text-gray-500">
                      Clean vehicles and polite service every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Transparent Pricing
                    </p>
                    <p className="text-sm text-gray-500">
                      Honest rates with no hidden charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Flexible Travel Options
                    </p>
                    <p className="text-sm text-gray-500">
                      One-way, round-trip, and sharing taxi available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-orange-300/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}