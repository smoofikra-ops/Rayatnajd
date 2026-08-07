import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Trees, BookOpen, FileText, MessageCircle } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function MobileBottomNav() {
  const { t } = useSettings();
  const location = useLocation();

  const navItems = [
    { name: t("الرئيسية", "Home"), path: "/", icon: Home },
    { name: t("الأشجار", "Trees"), path: "/#nurseries", icon: Trees },
    { name: t("المعرفة", "Knowledge"), path: "/tools", icon: BookOpen },
    { name: t("عرض سعر", "Quote"), action: () => window.dispatchEvent(new CustomEvent('openQuoteModal')), icon: FileText },
    { name: t("واتساب", "WhatsApp"), path: "https://wa.me/966503923506", icon: MessageCircle, external: true }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] pb-safe bg-bg-secondary/85 backdrop-blur-xl border-t border-card-border shadow-[0_-8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-around px-1 py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (location.pathname === '/' && item.path && location.hash === item.path.replace('/', ''));
          
          if (item.action) {
            return (
              <button
                key={index}
                onClick={item.action}
                className={`flex flex-col items-center justify-center w-16 h-12 transition-all active:scale-95 ${isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
              >
                <div className={`p-1.5 rounded-xl mb-1 ${isActive ? 'bg-primary/10 text-primary' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-medium tracking-tight truncate w-full text-center ${isActive ? 'text-primary font-bold' : ''}`}>{item.name}</span>
              </button>
            );
          }
          
          if (item.external) {
             return (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center w-16 h-12 transition-all active:scale-95 ${isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
              >
                <div className={`p-1.5 rounded-xl mb-1 ${isActive ? 'bg-primary/10 text-primary' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-medium tracking-tight truncate w-full text-center ${isActive ? 'text-primary font-bold' : ''}`}>{item.name}</span>
              </a>
            );
          }

          const isHashLink = (item.path as string).includes('#');
          
          if (isHashLink) {
             return (
              <a
                key={index}
                href={item.path}
                className={`flex flex-col items-center justify-center w-16 h-12 transition-all active:scale-95 ${isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
              >
                <div className={`p-1.5 rounded-xl mb-1 ${isActive ? 'bg-primary/10 text-primary' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-medium tracking-tight truncate w-full text-center ${isActive ? 'text-primary font-bold' : ''}`}>{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center justify-center w-16 h-12 transition-all active:scale-95 ${isActive ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
            >
              <div className={`p-1.5 rounded-xl mb-1 ${isActive ? 'bg-primary/10 text-primary' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-medium tracking-tight truncate w-full text-center ${isActive ? 'text-primary font-bold' : ''}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
