import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../contexts/SettingsContext";

export default function FloatingHomeButton() {
  const location = useLocation();
  const { t } = useSettings();

  // Hide on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-[100px] left-6 md:bottom-[110px] md:left-10 z-50"
      >
        <Link
          to="/"
          className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center shadow-lg shadow-primary/30 transition-all hover:scale-110 group"
          title={t("الرئيسية", "Home") as string}
        >
          <Home className="w-5 h-5 lg:w-6 lg:h-6" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
