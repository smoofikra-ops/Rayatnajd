import Hero from "../components/home/Hero";
import CoreValues from "../components/home/CoreValues";
import GreenRiyadh from "../components/home/GreenRiyadh";
import Vision2030 from "../components/home/Vision2030";
import Services from "../components/home/Services";
import TargetSectors from "../components/home/TargetSectors";
import ProjectsGallery from "../components/home/ProjectsGallery";
import SmartToolsTeaser from "../components/home/SmartToolsTeaser";
import NurseriesCatalog from "../components/home/NurseriesCatalog";
import ImpactSection from "../components/home/ImpactSection";
import ImageGallery from "../components/home/ImageGallery";
import FAQ from "../components/home/FAQ";
import ContactForm from "../components/home/ContactForm";
import LocationsMap from "../components/home/LocationsMap";
import SuccessPartners from "../components/home/SuccessPartners";
import CinematicBackground from "../components/home/CinematicBackground";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSettings } from "../contexts/SettingsContext";
import { Calendar, Sprout } from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  const { t } = useSettings();

  return (
    <>
      <CinematicBackground />
      <div className="flex flex-col relative z-10 divide-y divide-white/10 dark">
        <SEO />
        
        <div data-background-key="hero" className="min-h-[85vh]">
          <Hero />
        </div>
        
        <div data-background-key="about" className="min-h-[70vh]">
          <ScrollReveal><TargetSectors /></ScrollReveal>
        </div>
        
        <div data-background-key="services" className="min-h-[70vh]">
          <ScrollReveal><Services /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/95 backdrop-blur-md">
          <ScrollReveal><SuccessPartners /></ScrollReveal>
        </div>
        
        <div data-background-key="palm-projects" className="min-h-[70vh]">
          <ScrollReveal><ProjectsGallery /></ScrollReveal>
        </div>
        
        <div data-background-key="palms" className="min-h-[70vh]">
          <ScrollReveal><NurseriesCatalog /></ScrollReveal>
        </div>
        
        <div data-background-key="sustainability" className="min-h-[70vh]">
          <ScrollReveal><Vision2030 /></ScrollReveal>
        </div>
        
        <div data-background-key="trees" className="min-h-[70vh]">
          <ScrollReveal><GreenRiyadh /></ScrollReveal>
        </div>
        
        <div data-background-key="projects" className="min-h-[70vh]">
          <ScrollReveal><ImpactSection /></ScrollReveal>
        </div>
        
        <div data-background-key="about" className="min-h-[70vh]">
          <ScrollReveal><CoreValues /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/90 backdrop-blur-md py-6">
          <ScrollReveal><ImageGallery /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/90 backdrop-blur-md py-6">
          <ScrollReveal><SmartToolsTeaser /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/90 backdrop-blur-md py-6">
          <ScrollReveal><FAQ /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/90 backdrop-blur-md py-6">
          <ScrollReveal><ContactForm /></ScrollReveal>
        </div>
        
        <div data-background-key="hero" className="bg-bg-primary/90 backdrop-blur-md py-6">
          <ScrollReveal><LocationsMap /></ScrollReveal>
        </div>
      </div>
    </>
  );
}
