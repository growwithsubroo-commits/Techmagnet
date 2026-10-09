import React, { useState } from 'react';
import { createWhatsAppLink } from '../data/agencyData';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Hi Techmagnet, I want to grow my affiliate enrollments. Please share your plans and strategy.';
  const waUrl = createWhatsAppLink(defaultMessage, whatsappNumber);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Small popover message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B132B] text-slate-200 border border-emerald-500/40 text-xs px-3.5 py-2 rounded-xl shadow-xl shadow-black/40 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-medium">Need enrollments? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss WhatsApp tip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Techmagnet on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-slate-900" />
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
