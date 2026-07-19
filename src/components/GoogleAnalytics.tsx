import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'AW-18330829509', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
