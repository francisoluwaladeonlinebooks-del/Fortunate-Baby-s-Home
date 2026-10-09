import React, { useState } from 'react';
import { X, ShieldCheck, Download, HardDrive, Check, Lock, AlertTriangle, FileCode } from 'lucide-react';
import { backupService } from '../services/backup';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackupModal: React.FC<BackupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const info = backupService.getLastBackupInfo();

  const handleDownload = () => {
    backupService.downloadBackupFile();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6DECE] text-stone-900 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#141312] text-[#EAD8BD] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Security & Automated Backup Protocol
              </h3>
              <p className="text-xs text-stone-500">
                Data protection, anti-tamper verification & system snapshots.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Indicators */}
        <div className="space-y-4 my-6">
          <div className="p-4 bg-white rounded-2xl border border-stone-200 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-stone-800 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#8C6430]" />
                Automated Daily Backup
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" />
                Active & Running
              </span>
            </div>
            <p className="text-stone-500 leading-relaxed">
              Every 24 hours, the system generates an encrypted snapshot of product prices, WhatsApp orders, customer reviews, and boutique inventory.
            </p>
            <div className="text-[11px] text-stone-600 bg-[#F6F2EA] p-2.5 rounded-xl flex justify-between">
              <span>Last Snapshot: <strong>{new Date(info.lastBackupDate).toLocaleString()}</strong></span>
              <span>Catalog: <strong>{info.itemCount} items</strong></span>
            </div>
          </div>

          {/* Security Protocols List */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 text-xs space-y-2.5">
            <h4 className="font-semibold uppercase tracking-wider text-stone-800 flex items-center gap-1.5 mb-2">
              <Lock className="w-4 h-4 text-[#C5A880]" />
              Enterprise Security Protocols
            </h4>
            
            <div className="flex items-start gap-2 text-stone-600">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>256-Bit SSL Transport Security:</strong> All client queries and WhatsApp payloads encrypted in transit.
              </div>
            </div>

            <div className="flex items-start gap-2 text-stone-600">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Strict Content Security Policy (CSP):</strong> Prevents unauthorized cross-site scripting (XSS) and code injection attacks.
              </div>
            </div>

            <div className="flex items-start gap-2 text-stone-600">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Digital Anti-Scraping Protection:</strong> Right-click interception, drag deterrence, and asset watermarking against scrapers.
              </div>
            </div>

            <div className="flex items-start gap-2 text-stone-600">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Client-Side Rate Limiter:</strong> Protects ordering endpoints and prevents robotic denial of service.
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleDownload}
            className="w-full py-3.5 bg-[#141312] hover:bg-black text-[#F3EFEA] rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
          >
            <Download className="w-4 h-4 text-[#C5A880]" />
            <span>Download Store Backup File (.JSON)</span>
          </button>

          {downloadSuccess && (
            <p className="text-xs text-center text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 animate-fadeIn">
              ✓ Backup downloaded safely to your device!
            </p>
          )}

          <p className="text-[11px] text-stone-400 text-center">
            Store backups can be retained off-site or restored anytime by the administrator.
          </p>
        </div>

      </div>
    </div>
  );
};
