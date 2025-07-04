
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 px-3 py-1">
            <FileText className="w-4 h-4 mr-2" />
            ZGŁOSZENIE SZKODY
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Zgłoszenie szkody ubezpieczeniowej
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Przewodnik krok po kroku - profesjonalne wsparcie w zgłaszaniu szkód ubezpieczeniowych. 
            Zajmiemy się całą procedurą od dokumentacji po wypłatę odszkodowania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zgłoś szkodę: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-200 text-orange-600 hover:bg-orange-50">
              Bezpłatna konsultacja
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
