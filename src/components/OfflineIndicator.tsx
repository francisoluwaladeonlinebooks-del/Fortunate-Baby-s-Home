import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-[#1A1918] border border-[#C5A880]/40 px-4 py-2 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-pulse">
      <WifiOff className="w-4 h-4 text-[#C5A880]" />
      <span>Offline Mode — Browsing cached luxury catalog</span>
    </div>
  );
};
