import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Rates from "./components/Rates";
import BookingForm from "./components/BookingForm";
import WhatsAppModal from "./components/WhatsAppModal";
import Footer from "./components/Footer";
import SharingTaxiForm from "./components/SharingTaxiForm";

export default function App() {
  const [whatsappModal, setWhatsappModal] = useState<{
    open: boolean;
    message: string;
  }>({ open: false, message: "" });

  const openWhatsApp = (message: string = "") => {
    setWhatsappModal({ open: true, message });
  };

  const confirmWhatsApp = (message: string) => {
    const phone = "919106178900";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
    setWhatsappModal({ open: false, message: "" });
  };

  return (
    <div className="font-poppins">
      <Navbar openWhatsApp={openWhatsApp} />
      <Hero openWhatsApp={openWhatsApp} />
      <Services />
      <Rates openWhatsApp={openWhatsApp} />
            <SharingTaxiForm openWhatsApp={openWhatsApp} />
               <div className="mb-[80px] bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-3">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            {/* <p className="font-bold text-yellow-800 mb-1">Note:</p>
            <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
              <li>Different rates apply for return trips.</li>
              <li>Tolls, parking, and state taxes are extra.</li>
              <li>Night charges (10 PM - 6 AM) may be applicable.</li>
            </ul> */}
               <p className="font-bold text-yellow-800 mb-1">Note:</p>
    <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
      <li><strong>Round Trip:</strong> Average 300 km per day.</li>
      <li><strong>Driver Allowance:</strong> ₹300 per day.</li>
      <li>Toll, parking, and tax charges are extra.</li>
      <li><strong>One Way:</strong> Only Gujarat routes include kilometer charges.</li>
      <li><strong>Outstation:</strong> Toll tax and parking charges are extra.</li>
      <li>Night charges (10 PM - 6 AM) may be applicable.</li>
      </ul>
          </div>
        </div>
      <BookingForm openWhatsApp={openWhatsApp} />
      <Footer openWhatsApp={openWhatsApp} />
      {whatsappModal.open && (
        <WhatsAppModal
          message={whatsappModal.message}
          onConfirm={confirmWhatsApp}
          onClose={() => setWhatsappModal({ open: false, message: "" })}
        />
      )}
    </div>
  );
}
