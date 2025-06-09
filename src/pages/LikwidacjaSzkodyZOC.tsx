
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, CheckCircle, FileText, Clock, Shield, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const LikwidacjaSzkodyZOC = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-autoram-red text-white mb-6 font-semibold text-lg px-8 py-4 rounded-full">
              Likwidacja szkody z OC
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-autoram-text mb-8 leading-tight">
              Likwidacja szkody z OC sprawcy
            </h1>
            <p className="text-xl md:text-2xl text-autoram-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Specjalizujemy się w profesjonalnej likwidacji szkód z ubezpieczenia OC sprawcy wypadku. 
              Zapewniamy kompleksową obsługę od A do Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-8 rounded-2xl">
                <Phone className="w-6 h-6 mr-3" />
                Bezpłatna konsultacja
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-xl px-12 py-8 rounded-2xl">
                <CreditCard className="w-6 h-6 mr-3" />
                Zgłoś szkodę z OC
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
              Proces likwidacji szkody z OC
            </h2>
            <p className="text-xl text-autoram-text-muted max-w-4xl mx-auto">
              Prowadzimy Cię przez cały proces krok po kroku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Zgłoszenie",
                description: "Zgłaszamy szkodę do ubezpieczyciela sprawcy"
              },
              {
                step: "2", 
                title: "Dokumentacja",
                description: "Gromadzimy wszystkie niezbędne dokumenty"
              },
              {
                step: "3",
                title: "Wycena",
                description: "Wykonujemy profesjonalną wycenę uszkodzeń"
              },
              {
                step: "4",
                title: "Odszkodowanie",
                description: "Doprowadzamy do wypłaty odszkodowania"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 border-autoram-gray hover:border-autoram-red">
                <CardHeader>
                  <div className="w-16 h-16 bg-autoram-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-autoram-text">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-autoram-text-muted text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-autoram-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
              Dlaczego warto nam zaufać?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
                alt="Likwidacja szkody z OC"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              {[
                "Doświadczenie w branży ubezpieczeniowej",
                "Szybka i profesjonalna obsługa",
                "Maksymalne odszkodowania dla klientów",
                "Bezpłatna konsultacja i wycena",
                "Obsługa w całej Polsce",
                "Współpraca z wszystkimi ubezpieczycielami"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-autoram-red flex-shrink-0" />
                  <span className="text-lg text-autoram-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LikwidacjaSzkodyZOC;
