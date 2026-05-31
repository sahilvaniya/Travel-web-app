import { BadgeDollarSign, ChevronRight, CarFront, MapPin } from "lucide-react";

interface RatesProps {
  openWhatsApp: (message: string) => void;
}

const suvRates = [
  { city: "Bhuj", gujarati: "ભુજ", suv: "₹4,500", sedan: "₹3,500" },
  { city: "Gandhidham", gujarati: "ગાંધીધામ", suv: "₹4,000", sedan: "₹3,000" },
  { city: "Mundra", gujarati: "મુન્દ્રા", suv: "₹5,000", sedan: "₹4,000" },
  { city: "Mandvi", gujarati: "માંડવી", suv: "₹5,500", sedan: "₹4,500" },
  { city: "Bachau", gujarati: "ભચાઉ", suv: "₹3,500", sedan: "₹3,000" },
  { city: "Samkhiyali", gujarati: "સામખ્યાલી", suv: "₹3,000", sedan: "₹2,500" },
  { city: "Rapar", gujarati: "રાપર", suv: "₹4,500", sedan: "₹4,000" },
  { city: "Naliya", gujarati: "નલીયા", suv: "₹8,000", sedan: "₹6,000" },
  { city: "Matano Madh", gujarati: "માતાનામઢ", suv: "₹7,000", sedan: "₹6,500" },
  { city: "Anjar", gujarati: "અંજાર", suv: "₹4,200", sedan: "₹3,300" },
  { city: "White Rann", gujarati: "વ્હાઇટરણ", suv: "₹7,500", sedan: "₹6,500" },
];

export default function Rates({ openWhatsApp }: RatesProps) {
  const handleBook = (
    row: (typeof suvRates)[number],
    vehicleType: "SUV" | "Sedan"
  ) => {
    const rate = vehicleType === "SUV" ? row.suv : row.sedan;
    const model = vehicleType === "SUV" ? "Ertiga / Innova" : "Dzire / Etios";
    const article = vehicleType === "SUV" ? "an" : "a";

    openWhatsApp(
      `Hello! 🙏

I need ${article} ${vehicleType} cab from Ahmedabad to ${row.city}.

📍 From: Ahmedabad
📍 To: ${row.city} (${row.gujarati})
🚗 Vehicle Type: ${vehicleType} (${model})
💰 Rate: ${rate}

Please confirm the booking.

My Name:
Mobile:
Date & Time:`
    );
  };

  return (
    <section id="rates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            <BadgeDollarSign className="w-4 h-4" />
            Rate List
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-orange-500">Rates</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Transparent and affordable fares from Ahmedabad to popular destinations across Gujarat.
            No hidden charges!
          </p>
        </div>

        {/* Fixed Route Rates Table */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-500" />
            Fixed Route Rates from Ahmedabad
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
                    <span className="inline-flex items-center gap-2 justify-center">
                      <CarFront className="w-4 h-4" />
                      SUV (Ertiga/Innova)
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">
                    <span className="inline-flex items-center gap-2 justify-center">
                      <CarFront className="w-4 h-4" />
                      Sedan (Dzire)
                    </span>
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
                      <div className="flex flex-col gap-2 items-center">
                        <button
                          type="button"
                          onClick={() => handleBook(row, "SUV")}
                          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-1.5"
                        >
                          Book SUV <ChevronRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleBook(row, "Sedan")}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-1.5"
                        >
                          Book Sedan <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {suvRates.map((row) => (
              <div
                key={row.city}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{row.city}</h4>
                    <p className="text-gray-400 text-sm">{row.gujarati}</p>
                  </div>
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">SUV Rate</p>
                    <p className="font-extrabold text-orange-600 text-xl">{row.suv}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">Sedan Rate</p>
                    <p className="font-extrabold text-blue-600 text-xl">{row.sedan}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleBook(row, "SUV")}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    SUV <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBook(row, "Sedan")}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    Sedan <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}