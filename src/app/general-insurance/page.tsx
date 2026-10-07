import Navbar from "@/components/Navbar";
import GeneralInsurancePage from "@/components/GeneralInsurancePage";
import { Footer } from "@/components/FormsAndFooter";

export default function GeneralInsurance() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <GeneralInsurancePage />
            <Footer />
        </main>
    );
}