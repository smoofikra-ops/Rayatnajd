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
import SuccessPartners from "../components/home/SuccessPartners";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSettings } from "../contexts/SettingsContext";
import { Calendar, Sprout } from "lucide-react";

export default function Home() {
  const { t } = useSettings();

  return (
    <div className="flex flex-col divide-y divide-text-main/10">
      <Hero />
      <ScrollReveal><SuccessPartners /></ScrollReveal>
      <ScrollReveal><TargetSectors /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><ProjectsGallery /></ScrollReveal>
      <ScrollReveal><NurseriesCatalog /></ScrollReveal>
      <ScrollReveal><Vision2030 /></ScrollReveal>
      <ScrollReveal><GreenRiyadh /></ScrollReveal>
      <ScrollReveal><ImpactSection /></ScrollReveal>
      <ScrollReveal><CoreValues /></ScrollReveal>
      <ScrollReveal><ImageGallery /></ScrollReveal>
      <ScrollReveal><SmartToolsTeaser /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><ContactForm /></ScrollReveal>
    </div>
  );
}
