import Navbar from "@/components/Navbar";
import HealthInsurancePage from "@/components/HealthInsurancePage";
import { Footer } from "@/components/FormsAndFooter";

export default function HealthInsurance() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HealthInsurancePage />
            <Footer />
        </main>
    );
}