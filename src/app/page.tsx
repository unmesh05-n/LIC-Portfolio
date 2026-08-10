import Navbar from "@/components/Navbar";
import PremiumHero from "@/components/PremiumHero"; // Update the import
import {
  Stats,
  About,
  Experience,
  Services,
  Achievements,
  Gallery,
  PaymentCTA
} from "@/components/Sections";
import { EnquiryContact, Footer } from "@/components/FormsAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight">
      <Navbar />
      <PremiumHero />
      <Stats />
      <About />
      <Experience />
      <Services />
      <Achievements />
      <Gallery />
      <PaymentCTA />
      <EnquiryContact />
      <Footer />
    </main>
  );
}