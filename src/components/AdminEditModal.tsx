import React, { useState } from 'react';
import { PricingPlan, INITIAL_PLANS } from '../data/agencyData';
import { X, Save, RotateCcw, Sliders, Check } from 'lucide-react';

interface AdminEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: PricingPlan[];
  whatsappNumber: string;
  onSave: (updatedPlans: PricingPlan[], updatedWhatsApp: string) => void;
  onReset: () => void;
}

export const AdminEditModal: React.FC<AdminEditModalProps> = ({
  isOpen,
  onClose,
  plans,
  whatsappNumber,
  onSave,
  onReset,
}) => {
  const [localPlans, setLocalPlans] = useState<PricingPlan[]>(plans);
  const [localWhatsApp, setLocalWhatsApp] = useState<string>(whatsappNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePriceChange = (id: string, newPrice: string) => {
    setLocalPlans((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          // Update the whatsapp message automatically if it contains old price pattern
          const updatedMsg =
            id === 'starter'
              ? `Hi Techmagnet, I am interested in the Starter Plan (${newPrice}). Please share the enrollment details.`
              : id === 'growth'
              ? `Hi Techmagnet, I am interested in the Growth Plan (${newPrice}). Please share the enrollment details.`
              : id === 'premium'
              ? `Hi Techmagnet, I am interested in the Premium Plan (${newPrice}). Please share the enrollment details.`
              : p.whatsappMessage;

          return { ...p, price: newPrice, whatsappMessage: updatedMsg };
        }
        return p;
      })
    );
  };

  const handleSave = () => {
    onSave(localPlans, localWhatsApp);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetToDefault = () => {
    setLocalPlans(INITIAL_PLANS);
    setLocalWhatsApp('919023386997');
    onReset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0B1120] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Website Administrator Settings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          <div className="bg-blue-950/40 border border-blue-800/40 p-3.5 rounded-xl text-blue-200 text-xs leading-relaxed">
            As requested in the project brief, pricing and agency contact details are fully configurable by the site administrator. Changes reflect immediately across all cards and WhatsApp links.
          </div>

          {/* Pricing Editor */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-slate-300">
              Edit Plan Pricing
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localPlans.map((plan) => (
                <div key={plan.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{plan.name}</span>
                    {plan.popular && (
                      <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Display Price:</label>
                    <input
                      type="text"
                      value={plan.price}
                      onChange={(e) => handlePriceChange(plan.id, e.target.value)}
                      className="w-full px-3 py-1.5 text-xs text-white bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Destination Phone */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-slate-300">
              Agency WhatsApp Receiver Number
            </h4>
            <p className="text-xs text-slate-400">
              Enter phone number with country code without plus sign (e.g., 919023386997):
            </p>
            <input
              type="text"
              value={localWhatsApp}
              onChange={(e) => setLocalWhatsApp(e.target.value)}
              className="w-full max-w-sm px-3.5 py-2 text-xs text-white bg-slate-950 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between gap-3">
          <button
            onClick={handleResetToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/30"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
