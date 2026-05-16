interface RatesProps {
  openWhatsApp: (message: string) => void;
}

const suvRates = [
  { city: "Bhuj", gujarati: "ભુજ", suv: "₹4,500", sedan: "₹3,500",  },
  { city: "Gandhidham", gujarati: "ગાંધીધામ", suv: "₹4,000", sedan: "₹3,000", },
  { city: "Mundra", gujarati: "મુન્દ્રા", suv: "₹5,000", sedan: "₹4,000",  },
  { city: "Mandvi", gujarati: "માંડવી", suv: "₹5,500", sedan: "₹4,500",  },
  { city: "Bachau", gujarati: "ભચાઉ", suv: "₹3,500", sedan: "₹3,000",  },
  { city: "Samkhiyali", gujarati: "સામખ્યાલી", suv: "₹3,000", sedan: "₹2,500",  },
  { city: "Rapar", gujarati: "રાપર", suv: "₹4,500", sedan: "₹4,000", },
  { city: "Naliya", gujarati: "નલીયા", suv: "₹8,000", sedan: "₹6,000",  },
  { city: "Matano Madh", gujarati: "માતાનામઢ", suv: "₹7,000", sedan: "₹6,500", },
  { city: "Anjar", gujarati: "અંજાર", suv: "₹4,200", sedan: "₹3,300", },
  { city: "White Rann", gujarati: "વ્હાઇટરણ", suv: "₹7,500", sedan: "₹6,500", },
];

const perKmRates = [
  { vehicle: "Sedan", model: "Dzire/Etios", rate: "₹12", icon: "🚗", color: "bg-blue-500" },
  { vehicle: "Ertiga (SUV)", model: "Maruti Ertiga", rate: "₹14", icon: "🚙", color: "bg-orange-500" },
  { vehicle: "Innova", model: "Toyota Innova", rate: "₹17", icon: "🚐", color: "bg-purple-500" },
  { vehicle: "Innova Crysta", model: "Premium SUV", rate: "₹20", icon: "👑", color: "bg-yellow-500" },
  { vehicle: "Tempo Traveller", model: "Force Traveller", rate: "₹35", icon: "🚌", color: "bg-green-500" },
];

export default function Rates({ openWhatsApp }: RatesProps) {
  return (
    <section id="rates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            💰 Rate List
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-orange-500">Rates</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Transparent and affordable fares from Ahmedabad to popular destinations across Gujarat.  
            No hidden charges!
          </p>
        </div>

        {/* Per KM Rates */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Per Kilometer Rates
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {perKmRates.map((r) => (
              <div
                key={r.vehicle}
                className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{r.icon}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{r.vehicle}</p>
                <p className="text-gray-400 text-xs mb-3">{r.model}</p>
                <div className={`${r.color} text-white font-extrabold text-xl px-3 py-1.5 rounded-xl`}>
                  {r.rate}
                  <span className="text-sm font-medium">/km</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Route Rates Table */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🗺️</span> Fixed Route Rates from Ahmedabad
          </h3>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider">
                    City (From Ahmedabad)
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                    🚙 SUV (Ertiga/Innova)
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                    🚗 Sedan (Dzire)
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {suvRates.map((row, i) => (
                  <tr
                    key={row.city}
                    className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{row.city}</div>
                      <div className="text-gray-400 text-sm">{row.gujarati}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-extrabold text-orange-600 text-lg">{row.suv}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-extrabold text-blue-600 text-lg">{row.sedan}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() =>
                          openWhatsApp(
                            `Hello! 🙏\n\nI need a cab from Ahmedabad to ${row.city}.\n\n📍 From: Ahmedabad\n📍 To: ${row.city} (${row.gujarati})\n💰 Rate: SUV ${row.suv} / Sedan ${row.sedan}\n\nPlease confirm the booking.\n\nMy Name:\nMobile:\nDate & Time:`
                          )
                        }
                        className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-1.5 mx-auto"
                      >
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {suvRates.map((row) => (
              <div key={row.city} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{row.city}</h4>
                    <p className="text-gray-400 text-sm">
                      {row.gujarati} 
                    </p>
                  </div>
                  <span className="text-2xl">📍</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">🚙 SUV Rate</p>
                    <p className="font-extrabold text-orange-600 text-xl">{row.suv}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">🚗 Sedan Rate</p>
                    <p className="font-extrabold text-blue-600 text-xl">{row.sedan}</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello! 🙏\n\nI need a cab from Ahmedabad to ${row.city}.\n\n📍 From: Ahmedabad\n📍 To: ${row.city} (${row.gujarati})\n💰 Rate: SUV ${row.suv} / Sedan ${row.sedan}\n\nPlease confirm the booking.\n\nMy Name:\nMobile:\nDate & Time:`
                    )
                  }
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                  Book via WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        {/* <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-3">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            <p className="font-bold text-yellow-800 mb-1">Note:</p>
            <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
              <li>The rates mentioned above are for one-way trips.</li>
              <li>Different rates apply for return trips.</li>
              <li>Tolls, parking, and state taxes are extra.</li>
              <li>Night charges (10 PM - 6 AM) may be applicable.</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}