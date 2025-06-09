
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const WycenaSzkodyPowypadkowej = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-autoram-red text-white mb-6 font-semibold text-lg px-8 py-4 rounded-full">
              Wycena szkody powypadkowej
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-autoram-text mb-8 leading-tight">
              Profesjonalna wycena szkody powypadkowej
            </h1>
            <p className="text-xl md:text-2xl text-autoram-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Dokładna wycena wszystkich uszkodzeń powstałych w wyniku wypadku. 
              Zapewniamy rzetelną ocenę dla maksymalnego odszkodowania.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-8 rounded-2xl">
                <Phone className="w-6 h-6 mr-3" />
                Bezpłatna wycena
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-xl px-12 py-8 rounded-2xl">
                <Calculator className="w-6 h-6 mr-3" />
                Umów wycenę
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

export default WycenaSzkodyPowypadkowej;
