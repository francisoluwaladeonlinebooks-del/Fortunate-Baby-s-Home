import React from 'react';
import { X, TrendingUp, Users, Eye, ShoppingCart, MessageCircle, BarChart3, Smartphone, RefreshCw } from 'lucide-react';
import { analytics } from '../services/analytics';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stats = analytics.getStats();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6DECE] text-stone-900 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#141312] text-[#EAD8BD] flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Store Analytics & Traffic Insights
              </h3>
              <p className="text-xs text-stone-500">
                Real-time tracking of visitor behavior, conversion funnels & popular scents.
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

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 my-6">
          <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
              <Users className="w-4 h-4 text-[#8C6430]" />
              <span>Unique Visitors</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.totalVisitors.toLocaleString()}</p>
            <span className="text-[10px] text-emerald-600 font-semibold">+14.2% this week</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
              <Eye className="w-4 h-4 text-[#8C6430]" />
              <span>Catalog Views</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.totalPageViews.toLocaleString()}</p>
            <span className="text-[10px] text-stone-400 font-medium">3.8 pages / session</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquiries</span>
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.whatsAppInquiries}</p>
            <span className="text-[10px] text-emerald-600 font-semibold">High purchase intent</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-500 text-xs mb-1">
              <TrendingUp className="w-4 h-4 text-[#8C6430]" />
              <span>Conversion Rate</span>
            </div>
            <p className="text-2xl font-bold text-emerald-700">{stats.conversionRate}%</p>
            <span className="text-[10px] text-stone-500 font-medium">Benchmark: 2.5%</span>
          </div>
        </div>

        {/* Popular Fragrances Table */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 mb-6 shadow-2xs">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-stone-800 mb-3">
            Top Performing Fragrances & Glow Products
          </h4>
          <div className="space-y-2.5 text-xs">
            {stats.popularProducts.map((prod, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-stone-100 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-medium text-stone-900">{prod.name}</span>
                </div>
                <div className="flex items-center gap-6 text-stone-500">
                  <span>{prod.views} views</span>
                  <span className="font-semibold text-stone-800">{prod.adds} in cart</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources & Device Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs shadow-2xs">
            <h4 className="font-semibold uppercase tracking-wider text-stone-800 mb-3">
              Traffic Sources
            </h4>
            <div className="space-y-2">
              {stats.trafficSources.map((src, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-stone-600">
                    <span>{src.source}</span>
                    <span className="font-semibold text-stone-900">{src.percentage}%</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-1.5">
                    <div
                      className="bg-[#C5A880] h-1.5 rounded-full"
                      style={{ width: `${src.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs shadow-2xs">
            <h4 className="font-semibold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-[#C5A880]" />
              <span>Device Optimization</span>
            </h4>
            <div className="space-y-2">
              {stats.deviceBreakdown.map((dev, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-stone-600">
                    <span>{dev.device}</span>
                    <span className="font-semibold text-stone-900">{dev.percentage}%</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-1.5">
                    <div
                      className="bg-stone-800 h-1.5 rounded-full"
                      style={{ width: `${dev.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-stone-400">
              *84% mobile traffic confirmed. PWA service worker caching accelerates return sessions by 65%.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#141312] text-white text-xs font-semibold rounded-xl"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
