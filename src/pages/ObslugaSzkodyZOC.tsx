import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Calculator, CreditCard, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ObslugaSzkodyZOC = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Likwidacja szkód komunikacyjnych",
      description: "Kompleksowa obsługa procesu likwidacji szkody z OC sprawcy",
      features: [
        "Pełna obsługa dokumentacji",
        "Kontakt z ubezpieczycielem sprawcy",
        "Reprezentacja Twoich interesów",
        "Monitoring postępu sprawy"
      ],
      image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bezpośrednia likwidacja szkód (BLS)",
      description: "Przyspieszona procedura rozliczenia szkody bezpośrednio z ubezpieczycielem",
      features: [
        "Szybsze rozliczenie szkody",
        "Bezpośredni kontakt z ubezpieczycielem",
        "Eliminacja dodatkowych formalności",
        "Przyspieszony proces naprawy"
      ],
      image: "/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Wycena i kosztorysowanie",
      description: "Profesjonalna wycena uszkodzeń przez certyfikowanych rzeczoznawców",
      features: [
        "Szczegółowa ekspertyza techniczna",
        "Wycena części i robocizny",
        "Ocena ukrytych uszkodzeń",
        "Raport fotograficzny"
      ],
      image: "/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Odszkodowania z OC sprawcy",
      description: "Dochodzenie pełnego odszkodowania za wszystkie poniesione straty",
      features: [
        "Odszkodowanie za uszkodzenia pojazdu",
        "Zwrot kosztów auto zastępczego", 
        "Rekompensata za holowanie",
        "Odszkodowanie za utracone korzyści"
      ],
      image: "/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Zgłoszenie szkody",
      description: "Przyjmujemy zgłoszenie i zbieramy wszystkie niezbędne informacje o wypadku",
      time: "0-2h"
    },
    {
      step: "02",
      title: "Wstępna ocena",
      description: "Wstępna ocena szkody i ustalenie dalszego procesu postępowania",
      time: "2-24h"
    },
    {
      step: "03",
      title: "Kontakt z ubezpieczycielem",
      description: "Nawiązanie kontaktu z ubezpieczycielem sprawcy i złożenie dokumentów",
      time: "1-3 dni"
    },
    {
      step: "04",
      title: "Ekspertyza techniczna",
      description: "Szczegółowa wycena uszkodzeń przez certyfikowanego rzeczoznawcę",
      time: "3-7 dni"
    },
    {
      step: "05",
      title: "Negocjacje",
      description: "Negocjacje z ubezpieczycielem w sprawie wysokości odszkodowania",
      time: "7-14 dni"
    },
    {
      step: "06",
      title: "Realizacja naprawy",
      description: "Organizacja naprawy w sprawdzonym warsztacie lub wypłata odszkodowania",
      time: "14-30 dni"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-autoram-light via-autoram-white to-autoram-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-autoram-red text-white font-bold">
                  ⭐ GŁÓWNA SPECJALIZACJA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-autoram-text leading-tight">
                  <span className="text-autoram-red">Obsługa szkody</span>
                  <br />
                  <span className="text-autoram-text">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-autoram-text-muted leading-relaxed">
                  Kompleksowa obsługa szkód komunikacyjnych od momentu wypadku do naprawy pojazdu. 
                  Zajmujemy się wszystkim, abyś mógł spokojnie wrócić na drogę.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezpośrednia likwidacja szkód (BLS)",
                  "Wycena przez certyfikowanych rzeczoznawców",
                  "Pełna obsługa dokumentacji",
                  "Reprezentacja wobec ubezpieczyciela"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-autoram-gold flex-shrink-0" />
                    <span className="text-autoram-text font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-autoram-red hover:bg-autoram-red-dark text-white text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zgłoś szkodę: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-autoram-gold text-autoram-gold-dark hover:bg-autoram-gold hover:text-black">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Obsługa szkód powypadkowych - warsztat samochodowy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-autoram-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-autoram-text mb-4">
              Zakres naszych usług
            </h2>
            <p className="text-xl text-autoram-text-muted max-w-3xl mx-auto">
              Oferujemy kompleksową obsługę szkód z OC sprawcy - od zgłoszenia do naprawy pojazdu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-autoram-white">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-autoram-red rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-autoram-text">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-autoram-text-muted">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-autoram-gold flex-shrink-0" />
                        <span className="text-sm text-autoram-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-autoram-text mb-4">
              Jak przebiega obsługa szkody?
            </h2>
            <p className="text-xl text-autoram-text-muted max-w-3xl mx-auto">
              Transparentny proces w 6 krokach - na każdym etapie informujemy o postępach
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-autoram-red text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-autoram-white rounded-lg shadow-md p-6 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-autoram-text">{step.title}</h3>
                    <Badge variant="outline" className="text-autoram-gold border-autoram-gold">
                      {step.time}
                    </Badge>
                  </div>
                  <p className="text-autoram-text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-autoram-red to-autoram-red-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy na szybką obsługę szkody?
          </h2>
          <p className="text-xl mb-8 text-autoram-light">
            Zadzwoń już teraz lub skorzystaj z formularza online. 
            Rozpoczniemy obsługę Twojej szkody w ciągu 24 godzin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-autoram-white text-autoram-red hover:bg-autoram-gray text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-autoram-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Zgłoś szkodę online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaSzkodyZOC;
