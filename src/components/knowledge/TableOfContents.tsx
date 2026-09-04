import React, { useEffect, useState } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { List } from 'lucide-react';
import { ContentSection } from '../../types/knowledge';

interface Props {
  sections: ContentSection[];
}

export default function TableOfContents({ sections }: Props) {
  const { t } = useSettings();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(`section-${section.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="bg-card-background border border-card-border rounded-2xl p-6 sticky top-[140px]">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-text-main">
          {t("جدول المحتويات", "Table of Contents")}
        </h3>
      </div>
      
      <nav className="space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#section-${section.id}`}
            className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
              activeId === `section-${section.id}`
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-text-muted hover:bg-bg-secondary hover:text-text-main'
            }`}
          >
            {t(section.titleAr, section.titleEn)}
          </a>
        ))}
      </nav>
    </div>
  );
}
