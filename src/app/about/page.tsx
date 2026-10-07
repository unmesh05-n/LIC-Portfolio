import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import { EnquiryContact, Footer } from "@/components/FormsAndFooter";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutPage />
            <EnquiryContact />
            <Footer />
        </main>
    );
}