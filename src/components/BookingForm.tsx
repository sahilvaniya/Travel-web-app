import { useState } from "react";
import {
  CalendarDays,
  CarFront,
  Clock3,
  FileText,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Users,
  ArrowRight,
} from "lucide-react";

interface BookingFormProps {
  openWhatsApp: (message: string) => void;
}

export default function BookingForm({ openWhatsApp }: BookingFormProps) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pickup: "",
    destination: "",
    tripType: "",
    vehicle: "",
    date: "",
    time: "",
    passengers: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!form.pickup.trim()) newErrors.pickup = "Enter pickup location";
    if (!form.destination.trim()) newErrors.destination = "Enter destination";
    if (!form.tripType) newErrors.tripType = "Select trip type";
    if (!form.vehicle) newErrors.vehicle = "Select a vehicle type";
    if (!form.date) newErrors.date = "Select a date";
    if (!form.time) newErrors.time = "Select a time";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const message = `🙏 *JAY MOGAL CAB SERVICE - BOOKING REQUEST*

👤 *Name:* ${form.name}
📱 *Mobile:* ${form.mobile}

📍 *Pickup Location:* ${form.pickup}
🎯 *Destination:* ${form.destination}
🛣️ *Trip Type:* ${form.tripType}

🚗 *Vehicle:* ${form.vehicle}
📅 *Date:* ${form.date}
⏰ *Time:* ${form.time}
👥 *Passengers:* ${form.passengers || "N/A"}

📝 *Notes:* ${form.notes || "No special requests"}

---
_Booking received from Jay Mogal Cab Service website_`;

    openWhatsApp(message);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 hover:border-orange-300"
    }`;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            <CalendarDays className="w-4 h-4" />
            Online Booking
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Book <span className="text-orange-400">Now</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fill out the form and we’ll confirm your booking on WhatsApp. Fast &
            Easy!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-white">
                <CarFront className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Jay Mogal Cab Service</p>
                <p className="text-orange-100 text-sm">
                  24/7 Available • +91 9106178900
                </p>
              </div>
            </div>
            <a
              href="tel:9106178900"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    Your Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.name}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-orange-500" />
                    Mobile Number <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number..."
                  maxLength={10}
                  className={inputClass("mobile")}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.mobile}</p>
                )}
              </div>

              {/* Pickup */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Pickup Location <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup address..."
                  className={inputClass("pickup")}
                />
                {errors.pickup && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.pickup}</p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Destination <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Enter destination..."
                  className={inputClass("destination")}
                />
                {errors.destination && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.destination}
                  </p>
                )}
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    Trip Type <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="tripType"
                  value={form.tripType}
                  onChange={handleChange}
                  className={inputClass("tripType")}
                >
                  <option value="">-- Select Trip Type --</option>
                  <option value="One Way Trip">One Way Trip</option>
                  <option value="Round Trip">Round Trip</option>
                </select>
                {errors.tripType && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.tripType}
                  </p>
                )}
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <CarFront className="w-4 h-4 text-orange-500" />
                    Vehicle Type <span className="text-red-500">*</span>
                  </span>
                </label>

                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className={inputClass("vehicle")}
                >
                  <option value="">-- Select Vehicle --</option>
                  <option disabled className="text-orange-600">
                    One Way: Only Gujarat routes include kilometer charges.
                  </option>
                  <option disabled className="text-orange-600">
                    Outstation: Toll tax and parking charges are extra.
                  </option>
                  <option value="Sedan (Dzire/Etios) - ₹12/km">
                    Sedan (Dzire/Etios) – ₹12/km
                  </option>
                  <option value="SUV Ertiga - ₹14/km">
                    SUV Ertiga – ₹14/km
                  </option>
                  <option value="Innova - ₹17/km">Innova – ₹17/km</option>
                  <option value="Innova Crysta - ₹20/km">
                    Innova Crysta – ₹20/km
                  </option>
                  <option value="Tempo Traveller - ₹35/km">
                    Tempo Traveller – ₹35/km
                  </option>
                </select>
                {errors.vehicle && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.vehicle}
                  </p>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    Number of Passengers
                  </span>
                </label>
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className={inputClass("passengers")}
                >
                  <option value="">-- Select Number --</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
                    (n) => (
                      <option key={n} value={n}>
                        {n} Passenger{n > 1 ? "s" : ""}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-orange-500" />
                    Travel Date <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={minDate}
                  className={inputClass("date")}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.date}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-orange-500" />
                    Pickup Time <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass("time")}
                />
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.time}</p>
                )}
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" />
                    Additional Notes (Optional)
                  </span>
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special request or information..."
                  className={`${inputClass("notes")} resize-none`}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-green-200 transition-all hover:scale-[1.02] hover:shadow-green-300 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Booking via WhatsApp
              </button>

              <a
                href="tel:9106178900"
                className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-4 px-6 rounded-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <p className="text-gray-400 text-xs text-center mt-4">
              🔒 Your information is safe with us. We will contact you only for
              booking confirmation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}