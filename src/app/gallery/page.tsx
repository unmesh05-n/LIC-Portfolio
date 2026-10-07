import Navbar from "@/components/Navbar";
import GalleryPage from "@/components/GalleryPage";
import { Footer } from "@/components/FormsAndFooter";

export default function Gallery() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <GalleryPage />
            <Footer />
        </main>
    );
}