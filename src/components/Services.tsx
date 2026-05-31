import {
  BadgeDollarSign,
  BusFront,
  CarFront,
  Clock3,
  Crown,
  House,
  PhoneCall,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable Ride",
    desc: "Clean, well‑maintained cars ensuring a safe and comfortable journey.",
  },
  {
    icon: UserRoundCheck,
    title: "Experienced Drivers",
    desc: "Professional, licensed drivers who make your trip smooth and secure.",
  },
  {
    icon: House,
    title: "Door‑to‑Door Pickup",
    desc: "Pickup and drop service from your doorstep to your destination.",
  },
  {
    icon: Clock3,
    title: "24x7 Service",
    desc: "Day or night — we’re always available whenever you need us.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Rates",
    desc: "Guaranteed transparent and competitive pricing in the market.",
  },
  {
    icon: PhoneCall,
    title: "Easy Booking",
    desc: "Confirm your ride instantly via WhatsApp or a quick phone call.",
  },
];

const vehicles = [
  {
    name: "Sedan",
    model: "Dzire / Etios",
    icon: CarFront,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    passengers: "4 Passengers",
    features: ["AC", "Music System", "Comfortable Seats"],
    rate: "₹12/km",
  },
  {
    name: "SUV - Ertiga",
    model: "Maruti Ertiga",
    icon: CarFront,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    passengers: "6 Passengers",
    features: ["AC", "Spacious", "Luggage Space"],
    rate: "₹14/km",
  },
  {
    name: "Innova",
    model: "Toyota Innova",
    icon: CarFront,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    passengers: "7 Passengers",
    features: ["AC", "Premium Comfort", "Extra Legroom"],
    rate: "₹17/km",
  },
  {
    name: "Innova Crysta",
    model: "Toyota Innova Crysta",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    passengers: "7 Passengers",
    features: ["Premium AC", "Luxury Interior", "Best Comfort"],
    rate: "₹20/km",
    badge: "Premium",
  },
  {
    name: "Tempo Traveller",
    model: "Force Tempo Traveller",
    icon: BusFront,
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    passengers: "12‑17 Passengers",
    features: ["AC", "Group Travel", "Large Luggage Space"],
    rate: "₹35/km",
    badge: "Group",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            <CarFront className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-orange-500">Cab Services</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            From Ahmedabad to any corner of Gujarat and across India — we ensure you
            reach your destination safely and comfortably.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                  {h.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Vehicles */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Our <span className="text-orange-500">Vehicles</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Choose the one that fits your needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className={`relative ${v.bg} border ${v.border} rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                {v.badge && (
                  <span
                    className={`absolute top-4 right-4 bg-gradient-to-r ${v.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {v.badge}
                  </span>
                )}

                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-1">{v.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{v.model}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-500 text-sm">👥 {v.passengers}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {v.features.map((f) => (
                    <span
                      key={f}
                      className="bg-white/70 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div
                  className={`bg-gradient-to-r ${v.color} text-white font-bold text-lg px-4 py-2 rounded-xl inline-block`}
                >
                  {v.rate}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}