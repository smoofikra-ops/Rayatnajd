import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../contexts/SettingsContext";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useSettings();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 p-3 lg:p-4 bg-accent-gold text-white rounded-full shadow-lg shadow-accent-gold/20 hover:bg-accent-light transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent-gold/30"
          aria-label={t("العودة للأعلى", "Back to Top") as string}
        >
          <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6 text-slate-900" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
