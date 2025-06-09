
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const KosztorysNaprawyZOCSprawcy = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-autoram-red text-white mb-6 font-semibold text-lg px-8 py-4 rounded-full">
              Kosztorys naprawy z OC sprawcy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-autoram-text mb-8 leading-tight">
              Kosztorys naprawy z OC sprawcy
            </h1>
            <p className="text-xl md:text-2xl text-autoram-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Szczegółowy kosztorys naprawy pojazdu rozliczany z ubezpieczenia OC sprawcy wypadku. 
              Profesjonalne wyceny zgodne ze standardami branżowymi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-8 rounded-2xl">
                <Phone className="w-6 h-6 mr-3" />
                Zamów kosztorys
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-xl px-12 py-8 rounded-2xl">
                <FileText className="w-6 h-6 mr-3" />
                Więcej informacji
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default KosztorysNaprawyZOCSprawcy;
