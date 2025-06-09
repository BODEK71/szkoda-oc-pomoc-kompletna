
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, CheckCircle, FileText, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const LikwidacjaSzkodKomunikacyjnych = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-autoram-red text-white mb-6 font-semibold text-lg px-8 py-4 rounded-full">
              Likwidacja szkód komunikacyjnych
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-autoram-text mb-8 leading-tight">
              Profesjonalna likwidacja szkód komunikacyjnych
            </h1>
            <p className="text-xl md:text-2xl text-autoram-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              Kompleksowa obsługa szkód komunikacyjnych z ubezpieczenia OC sprawcy. 
              Zajmujemy się całym procesem od zgłoszenia do wypłaty odszkodowania.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-8 rounded-2xl">
                <Phone className="w-6 h-6 mr-3" />
                Zadzwoń 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-xl px-12 py-8 rounded-2xl">
                <FileText className="w-6 h-6 mr-3" />
                Zgłoś szkodę online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
              Nasze usługi w zakresie likwidacji szkód
            </h2>
            <p className="text-xl text-autoram-text-muted max-w-4xl mx-auto">
              Oferujemy pełen zakres usług związanych z likwidacją szkód komunikacyjnych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Zgłoszenie szkody",
                description: "Profesjonalne zgłoszenie szkody do ubezpieczyciela"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Wycena uszkodzeń",
                description: "Szczegółowa wycena wszystkich uszkodzeń pojazdu"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Szybka realizacja",
                description: "Proces likwidacji w najkrótszym możliwym czasie"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Bezpieczeństwo prawne",
                description: "Pełna obsługa prawna procesu likwidacji"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Kontakt z ubezpieczycielem",
                description: "Załatwiamy wszystkie formalności z towarzystwem"
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Wypłata odszkodowania",
                description: "Doprowadzamy sprawę do końca - do wypłaty"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-autoram-gray hover:border-autoram-gold">
                <CardHeader>
                  <div className="w-16 h-16 bg-autoram-red rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-autoram-text">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-autoram-text-muted text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-autoram-light to-autoram-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-autoram-text mb-8">
            Potrzebujesz pomocy w likwidacji szkody?
          </h3>
          <p className="text-xl text-autoram-text-muted mb-12">
            Skontaktuj się z nami już dziś. Oferujemy bezpłatną konsultację i wycenę szkody.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-autoram-red hover:bg-autoram-red-dark text-white font-bold text-xl px-12 py-8 rounded-2xl">
              <Phone className="w-6 h-6 mr-3" />
              Zadzwoń teraz
            </Button>
            <Link to="/kontakt">
              <Button variant="outline" size="lg" className="border-2 border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-bold text-xl px-12 py-8 rounded-2xl">
                Napisz do nas
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LikwidacjaSzkodKomunikacyjnych;
