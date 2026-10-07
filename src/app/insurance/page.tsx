import Navbar from "@/components/Navbar";
import InsurancePage from "@/components/InsurancePage";
import { EnquiryContact, Footer } from "@/components/FormsAndFooter";

export default function Insurance() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <InsurancePage />
            <EnquiryContact />
            <Footer />
        </main>
    );
}