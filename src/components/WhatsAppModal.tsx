import { ClipboardList, ShieldCheck, Smartphone, X } from "lucide-react";

interface WhatsAppModalProps {
  message: string;
  onConfirm: (message: string) => void;
  onClose: () => void;
}

export default function WhatsAppModal({
  message,
  onConfirm,
  onClose,
}: WhatsAppModalProps) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-modal">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              {/* Keep WhatsApp icon as it is */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg">WhatsApp Booking</p>
              <p className="text-green-100 text-sm">Jay Mogal Cab Service</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Info box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-5">
            <div className="flex gap-3">
              <Smartphone className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">
                  You’ll be redirected to WhatsApp
                </p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Once you press <strong>“Confirm”</strong>, you’ll be redirected
                  to WhatsApp to send your booking details to our number{" "}
                  <strong>+91 9106178900</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Message Preview */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 inline-flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Message to be sent:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 max-h-40 overflow-y-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                {message}
              </pre>
            </div>
          </div>

          {/* Trust info */}
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>
              This is a verified business number. Your information is safe with us.
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 px-5 rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            Go Back
          </button>

          <button
            onClick={() => onConfirm(message)}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3.5 px-5 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-green-200 flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-2">
              Yes, Open WhatsApp
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}