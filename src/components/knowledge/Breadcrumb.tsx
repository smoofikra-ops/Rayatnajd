import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

interface BreadcrumbItem {
  nameAr: string;
  nameEn: string;
  path?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function KnowledgeBreadcrumb({ items }: Props) {
  const { t, language } = useSettings();
  const Chevron = language === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <nav className="flex items-center text-sm text-text-muted overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      <Link to="/" className="flex items-center hover:text-primary transition-colors shrink-0">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Chevron className="w-4 h-4 mx-2 shrink-0 opacity-50" />
          {item.path ? (
            <Link 
              to={item.path}
              className="hover:text-primary transition-colors shrink-0"
            >
              {t(item.nameAr, item.nameEn)}
            </Link>
          ) : (
            <span className="text-text-main font-medium shrink-0">
              {t(item.nameAr, item.nameEn)}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
