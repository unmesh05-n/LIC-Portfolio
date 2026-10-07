import Navbar from "@/components/Navbar";
import LifeInsurancePage from "@/components/LifeInsurancePage";
import { Footer } from "@/components/FormsAndFooter";

export default function LifeInsurance() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <LifeInsurancePage />
            <Footer />
        </main>
    );
}