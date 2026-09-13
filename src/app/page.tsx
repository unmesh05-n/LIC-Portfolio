import Navbar from "@/components/Navbar";
import PremiumHero from "@/components/PremiumHero";
import {
  Stats,
  About,
  Experience,
  LicAssociation,
  Services,
  Achievements,
  Gallery,
  Approach,
  PaymentCTA,
} from "@/components/Sections";
import { EnquiryContact, Footer } from "@/components/FormsAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight overflow-x-clip">
      {/* Global navigation */}
      <Navbar />

      {/* 01 — First impression */}
      <PremiumHero />

      {/* 02 — Quick credibility snapshot */}
      <Stats />

      {/* 03 — Personal introduction */}
      <About />

      {/* 04 — Career story */}
      <Experience />

      {/* 05 — LIC association */}
      <LicAssociation />

      {/* 06 — Current expertise & services */}
      <Services />

      {/* 07 — Achievements & professional proof */}
      <Achievements />

      {/* 08 — Professional / career gallery */}
      <Gallery />

      {/* 09 — Professional approach */}
      <Approach />

      {/* 10 — LIC payment utility */}
      <PaymentCTA />

      {/* 11 — Final conversion point */}
      <EnquiryContact />

      {/* 12 — Site footer */}
      <Footer />
    </main>
  );
}