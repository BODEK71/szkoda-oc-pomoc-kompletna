
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, FileText, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ZgloszenieSzkodyKomunikacyjnej = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-autoram-red text-white mb-6 font-semibold text-lg px-8 py-4 rounded-full">
              Zgłoszenie szkody komunikacyjnej
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-autoram-text mb-8 leading-tight">
              Zgłoś szkodę komunikacyjną
            </h1>
            <p className="text-xl md:text-2xl text-autoram-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Szybkie i profesjonalne zgłoszenie szkody komunikacyjnej. 
              Zajmiemy się wszystkimi formalnościami za Ciebie.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-8 rounded-2xl">
                <Phone className="w-6 h-6 mr-3" />
                Zadzwoń 24/7
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-xl px-12 py-8 rounded-2xl">
                <FileText className="w-6 h-6 mr-3" />
                Zgłoś online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 bg-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-3xl p-8 md:p-12 text-white text-center mb-16">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ważne! Zgłoś szkodę jak najszybciej
            </h2>
            <p className="text-xl max-w-4xl mx-auto">
              Zgodnie z przepisami, szkodę należy zgłosić niezwłocznie, 
              nie później niż w ciągu 7 dni od zdarzenia.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
              Co potrzebujesz do zgłoszenia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Dokumenty pojazdu",
                description: "Dowód rejestracyjny, polisa ubezpieczeniowa"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Dane o zdarzeniu",
                description: "Data, godzina, miejsce wypadku"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Dane sprawcy",
                description: "Dane osobowe i ubezpieczyciela sprawcy"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Protokół policji",
                description: "Jeśli policja była wzywana na miejsce"
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Zdjęcia uszkodzeń",
                description: "Dokumentacja fotograficzna szkód"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Świadkowie",
                description: "Dane kontaktowe ewentualnych świadków"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-autoram-gray hover:border-autoram-gold">
                <CardHeader>
                  <div className="w-16 h-16 bg-autoram-gold rounded-xl flex items-center justify-center text-black mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-autoram-text">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-autoram-text-muted text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-autoram-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
              Jak wygląda proces zgłoszenia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Kontakt",
                description: "Dzwonisz do nas lub wypełniasz formularz online"
              },
              {
                step: "2",
                title: "Analiza",
                description: "Analizujemy dokumenty i okoliczności zdarzenia"
              },
              {
                step: "3",
                title: "Zgłoszenie",
                description: "Zgłaszamy szkodę do ubezpieczyciela sprawcy"
              },
              {
                step: "4",
                title: "Dalsze kroki",
                description: "Informujemy o dalszych działaniach"
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

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ZgloszenieSzkodyKomunikacyjnej;
