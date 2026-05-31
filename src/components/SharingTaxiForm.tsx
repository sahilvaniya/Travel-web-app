import { useState } from "react";
import {
  ArrowLeftRight,
  BadgeInfo,
  CalendarDays,
  CarFront,
  Clock3,
  FileText,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Users,
} from "lucide-react";

interface SharingTaxiProps {
  openWhatsApp: (message: string) => void;
}

const ahmedabadPickupPoints = [
  "Ahmedabad Terminal 1",
  "Ahmedabad Terminal 2",
  "Kalupur Railway Station",
  "Geeta Mandir Bus Station",
  "Sarkhej Chokdi",
];

const ahmedabadDropPoints = [
  "Ahmedabad Terminal 1",
  "Ahmedabad Terminal 2",
  "Kalupur Railway Station",
  "Geeta Mandir Bus Station",
  "Sarkhej Chokdi",
];

const kutchPickupPoints: Record<string, string[]> = {
  Bhuj: ["Jubilee Circle", "RTO Circle", "Madhapar Bus Station"],
  Gandhidham: ["Oslo Circle", "Adipur / Mundra Circle", "Main Bus Stand"],
  Bhachau: ["Bus Station", "Highway"],
  Samkhiyali: ["Highway Chokdi"],
  Anjar: ["Chitrakut Circle"],
  Mundra: ["Mundra 0 Point"],
};

const kutchCities = [
  { city: "Bhuj", gujarati: "ભુજ", fare: "₹1,200" },
  { city: "Gandhidham", gujarati: "ગાંધીધામ", fare: "₹1,000" },
  { city: "Bhachau", gujarati: "ભચાઉ", fare: "₹800" },
  { city: "Samkhiyali", gujarati: "સામખિયાલી", fare: "₹700" },
  { city: "Anjar", gujarati: "અંજાર", fare: "₹1,050" },
  { city: "Mundra", gujarati: "મુન્દ્રા", fare: "₹1,200" },
];

const ahmedabadTimes = ["7:00 AM", "11:00 AM", "3:00 PM", "10:00 PM"];

const timingMap: Record<string, string[]> = {
  "Jubilee Circle": ["7:00 AM", "11:00 AM", "3:00 PM", "10:00 PM"],
  "RTO Circle": ["7:00 AM", "11:00 AM", "3:00 PM", "8:00 PM"],
  "Madhapar Bus Station": ["7:00 AM", "11:00 AM", "3:00 PM", "8:00 PM"],

  "Mundra 0 Point": ["7:00 AM"],

  "Chitrakut Circle": ["8:00 AM", "11:59 AM", "4:00 PM", "9:00 PM"],
  "Adipur / Mundra Circle": ["8:15 AM", "12:15 PM", "4:15 PM", "9:15 PM"],
  "Oslo Circle": ["8:30 AM", "12:30 PM", "4:30 PM", "9:30 PM"],
  "Main Bus Stand": ["8:30 AM", "12:30 PM", "4:30 PM", "9:30 PM"],
  "Bus Station": ["9:00 AM", "1:00 PM", "5:00 PM", "10:00 PM"],
  Highway: ["9:00 AM", "1:00 PM", "5:00 PM", "10:00 PM"],
  "Highway Chokdi": ["9:30 AM", "1:30 PM", "5:30 PM", "10:30 PM"],

  "Ahmedabad Terminal 1": ahmedabadTimes,
  "Ahmedabad Terminal 2": ahmedabadTimes,
  "Kalupur Railway Station": ["7:30 AM", "11:30 AM", "3:30 PM", "8:30 PM"],
  "Geeta Mandir Bus Station": ["8:00 AM", "11:59 AM", "4:00 PM", "9:00 PM"],
  "Sarkhej Chokdi": ["9:00 AM", "1:00 PM", "5:00 PM", "10:00 PM"],
};

export default function SharingTaxiForm({ openWhatsApp }: SharingTaxiProps) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    route: "",
    city: "",
    pickupPoint: "",
    dropPoint: "",
    date: "",
    time: "",
    passengers: "",
    notes: "",
  });

  const availableTimes =
    form.city === "Mundra"
      ? form.route === "Ahmedabad to Kutch"
        ? ["8:00 PM"]
        : form.route === "Kutch to Ahmedabad"
        ? ["7:00 AM"]
        : []
      : form.pickupPoint
      ? timingMap[form.pickupPoint] || []
      : [];

  const [errors, setErrors] = useState<Record<string, string>>({});

  const minDate = new Date().toLocaleDateString("en-CA");

  const selectedCity = kutchCities.find((c) => c.city === form.city);
  const farePerPerson = selectedCity?.fare || "";
  const fareValue = Number(farePerPerson.replace(/[^\d]/g, ""));
  const passengerCount = Number(form.passengers || 0);
  const estimatedTotal =
    fareValue && passengerCount ? `₹${fareValue * passengerCount}` : "";

  const pickupOptions =
    form.route === "Ahmedabad to Kutch"
      ? ahmedabadPickupPoints
      : form.city
      ? kutchPickupPoints[form.city] || []
      : [];

  const dropOptions =
    form.route === "Ahmedabad to Kutch"
      ? form.city
        ? kutchPickupPoints[form.city] || []
        : []
      : ahmedabadDropPoints;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!form.route) newErrors.route = "Select travel route";
    if (!form.city) newErrors.city = "Select city";
    if (!form.pickupPoint) newErrors.pickupPoint = "Select pickup point";
    if (!form.dropPoint) newErrors.dropPoint = "Select drop point";
    if (!form.date) newErrors.date = "Select travel date";
    if (!form.time) newErrors.time = "Select travel time";
    if (!form.passengers) newErrors.passengers = "Select number of persons";

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

    const message = `🚕 *KUTCH ⇄ AHMEDABAD SHARING TAXI BOOKING*

👤 *Name:* ${form.name}
📱 *Mobile:* ${form.mobile}

🛣️ *Route:* ${form.route}
🏙️ *City:* ${form.city}
📍 *Pickup Point:* ${form.pickupPoint}
📍 *Drop Point:* ${form.dropPoint}

📅 *Date:* ${form.date}
⏰ *Time:* ${form.time}
👥 *Persons:* ${form.passengers}

💰 *Fare per Person:* ${farePerPerson || "N/A"}
💵 *Estimated Total:* ${estimatedTotal || "N/A"}

📝 *Notes:* ${form.notes || "No additional notes"}

---
_Sharing taxi service is available only for Ahmedabad ⇄ Kutch routes._`;

    openWhatsApp(message);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "route") {
        updated.pickupPoint = "";
        updated.dropPoint = "";
        updated.time = "";
      }

      if (name === "city") {
        updated.pickupPoint = "";
        updated.dropPoint = "";
        updated.time = "";
      }

      if (name === "pickupPoint") {
        updated.time = "";
      }

      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 hover:border-orange-300"
    }`;

  return (
    <section
      id="sharing-taxi"
      className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            <BadgeInfo className="w-4 h-4" />
            Sharing Taxi Service
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Kutch <span className="text-orange-500">⇄</span> Ahmedabad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Daily sharing taxi service available only between Ahmedabad and Kutch.
            Fare is per person and same for both directions.
          </p>
        </div>

        {/* Fare Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {kutchCities.map((item) => (
            <div
              key={item.city}
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-center"
            >
              <p className="font-bold text-gray-900">{item.city}</p>
              <p className="text-gray-400 text-sm">{item.gujarati}</p>
              <div className="mt-3 bg-orange-500 text-white font-extrabold text-sm px-3 py-2 rounded-xl">
                {item.fare}
                <span className="text-sm font-medium">/person</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pickup Timings */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Clock3 className="w-6 h-6 text-orange-500" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Daily Pickup Timings
              </h3>
              <p className="text-sm text-gray-500">
                Fixed departure slots for sharing taxi service
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Kutch to Ahmedabad */}
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    Route 1
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4 text-orange-500" />
                    Kutch → Ahmedabad
                  </h4>
                </div>
                <CarFront className="w-8 h-8 text-orange-500" />
              </div>

              <div className="space-y-3">
                {[
                  {
                    city: "Bhuj",
                    points: "Jubilee Circle • RTO Circle • Madhapar Bus Station",
                    times: ["7:00 AM", "11:00 AM", "3:00 PM", "10:00 PM"],
                  },
                  {
                    city: "Mundra",
                    points: "Mundra 0 Point",
                    times: ["7:00 AM"],
                  },
                  {
                    city: "Anjar",
                    points: "Chitrakut Circle",
                    times: timingMap["Chitrakut Circle"],
                  },
                  {
                    city: "Adipur / Mundra Circle",
                    points: "Adipur / Mundra Circle",
                    times: timingMap["Adipur / Mundra Circle"],
                  },
                  {
                    city: "Gandhidham (Oslo Circle)",
                    points: "Oslo Circle • Main Bus Stand",
                    times: timingMap["Oslo Circle"],
                  },
                  {
                    city: "Bhachau",
                    points: "Bus Station • Highway",
                    times: timingMap["Bus Station"],
                  },
                  {
                    city: "Samkhiyali",
                    points: "Highway Chokdi",
                    times: timingMap["Highway Chokdi"],
                  },
                ].map((item) => (
                  <div
                    key={item.city}
                    className="rounded-2xl bg-orange-50 border border-orange-100 p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <p className="font-bold text-gray-900">{item.city}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.points}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.times.map((time) => (
                          <span
                            key={time}
                            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 border border-orange-200"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ahmedabad to Kutch */}
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Route 2
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4 text-blue-500" />
                    Ahmedabad → Kutch
                  </h4>
                </div>
                <CarFront className="w-8 h-8 text-blue-500" />
              </div>

              <div className="space-y-3">
                {[
                  {
                    point: "Ahmedabad Terminal 1 / Terminal 2",
                    note: "Airport pickup",
                    times: ahmedabadTimes,
                  },
                  {
                    point: "Kalupur Railway Station",
                    note: "Pickup point",
                    times: timingMap["Kalupur Railway Station"],
                  },
                  {
                    point: "Geeta Mandir Bus Station",
                    note: "Pickup point",
                    times: timingMap["Geeta Mandir Bus Station"],
                  },
                  {
                    point: "Sarkhej Chokdi",
                    note: "Pickup point",
                    times: timingMap["Sarkhej Chokdi"],
                  },
                  {
                    point: "Mundra Trip",
                    note: "8:00 PM",
                    times: ["8:00 PM"],
                  },
                ]?.map((item) => (
                  <div
                    key={item.point}
                    className="rounded-2xl bg-blue-50 border border-blue-100 p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <p className="font-bold text-gray-900">{item.point}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.times.map((time) => (
                          <span
                            key={time}
                            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-200"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <p className="text-white font-bold text-lg flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              Booking Details / મુસાફરી બુકિંગ ફોર્મ
            </p>
            <p className="text-orange-100 text-sm">
              Available for Ahmedabad ⇄ Bhuj / Gandhidham / Bhachau / Samkhiyali
              / Anjar / Mundra
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
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
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className={inputClass("mobile")}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.mobile}</p>
                )}
              </div>

              {/* Route */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4 text-orange-500" />
                    Route <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="route"
                  value={form.route}
                  onChange={handleChange}
                  className={inputClass("route")}
                >
                  <option value="">-- Select Route --</option>
                  <option value="Ahmedabad to Kutch">Ahmedabad to Kutch</option>
                  <option value="Kutch to Ahmedabad">Kutch to Ahmedabad</option>
                </select>
                {errors.route && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.route}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    City <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass("city")}
                >
                  <option value="">-- Select City --</option>
                  {kutchCities.map((item) => (
                    <option key={item.city} value={item.city}>
                      {item.city}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.city}</p>
                )}
              </div>

              {/* Pickup Point */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Pickup Point <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="pickupPoint"
                  value={form.pickupPoint}
                  onChange={handleChange}
                  className={inputClass("pickupPoint")}
                >
                  <option value="">-- Select Pickup Point --</option>
                  {pickupOptions.map((point) => (
                    <option key={point} value={point}>
                      {point}
                    </option>
                  ))}
                </select>
                {errors.pickupPoint && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.pickupPoint}
                  </p>
                )}
              </div>

              {/* Drop Point */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Drop Point <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="dropPoint"
                  value={form.dropPoint}
                  onChange={handleChange}
                  className={inputClass("dropPoint")}
                >
                  <option value="">-- Select Drop Point --</option>
                  {dropOptions.map((point) => (
                    <option key={point} value={point}>
                      {point}
                    </option>
                  ))}
                </select>
                {errors.dropPoint && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.dropPoint}
                  </p>
                )}
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
                    Travel Time <span className="text-red-500">*</span>
                  </span>
                </label>

                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass("time")}
                  disabled={!availableTimes.length}
                >
                  <option value="">
                    {availableTimes.length
                      ? "-- Select Pickup Time --"
                      : "-- Select pickup point first --"}
                  </option>

                  {availableTimes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <p className="text-xs text-gray-500 mt-1">
                  Choose from the fixed pickup timings shown above.
                </p>

                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">⚠️ {errors.time}</p>
                )}
              </div>

              {/* Persons */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    Number of Persons <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className={inputClass("passengers")}
                >
                  <option value="">-- Select Persons --</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                    <option key={n} value={n}>
                      {n} Passenger{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
                {errors.passengers && (
                  <p className="text-red-500 text-xs mt-1">
                    ⚠️ {errors.passengers}
                  </p>
                )}
              </div>

              {/* Fare Summary */}
              <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                <p className="text-sm text-gray-500 mb-1">Fare Summary</p>
                <p className="font-bold text-gray-900">
                  Fare per person: {farePerPerson || "Select city"}
                </p>
                <p className="text-orange-600 font-semibold mt-1">
                  Estimated total: {estimatedTotal || "Select persons"}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Sharing taxi fare is per person. Same rate applies for both
                  directions.
                </p>
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
                  placeholder="Any special request..."
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
                {/* Keep WhatsApp icon as it is */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Sharing Booking via WhatsApp
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
              Note: This shared taxi service is only available for Ahmedabad ⇄
              Kutch routes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}