import Navbar from "@/components/Navbar";
import PremiumHero from "@/components/PremiumHero";
import { HomeSections } from "@/components/HomeSections";
import {
  FormsSection,
  EnquiryContact,
  Footer,
} from "@/components/FormsAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PremiumHero />

      <HomeSections />

      <FormsSection />

      <EnquiryContact />

      <Footer />
    </main>
  );
}