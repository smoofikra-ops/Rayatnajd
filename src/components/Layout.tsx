import { Outlet } from "react-router-dom";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import BackToTop from "./BackToTop";
import QuoteFormModal from "./QuoteFormModal";
import InterestListDrawer from "./home/InterestListDrawer";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <QuoteFormModal />
      <InterestListDrawer />
      <Toaster position="bottom-left" toastOptions={{
        className: 'bg-white border-primary/20 text-text-main shadow-lg rounded-xl font-sans',
      }} />
    </div>
  );
}
