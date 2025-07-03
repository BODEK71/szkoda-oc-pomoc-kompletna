
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Truck, 
  Clock, 
  Shield, 
  FileText,
  Building2,
  Users,
  Star,
  MapPin,
  Headphones,
  Wrench,
  Car
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WynajemSpecjalistycznyZOCSprawcy = () => {
  const vehicleTypes = [
    {
      type: "Busy do 3,5t",
      description: "Idealne dla firm kurierskich i usługowych",
      icon: <Truck className="w-8 h-8" />,
      category: "B"
    },
    {
      type: "Pojazdy dostawcze 3,5-7,5t",
      description: "Dla większych transportów i logistyki",
      icon: <Truck className="w-8 h-8" />,
      category: "C1"
    },
    {
      type: "Pojazdy chłodnicze",
      description: "Transport żywności i farmaceutyków",
      icon: <Shield className="w-8 h-8" />,
      category: "B/C1"
    },
    {
      type: "Busy osobowe",
      description: "Dla firm przewozowych i turystycznych",
      icon: <Users className="w-8 h-8" />,
      category: "B/D1"
    },
    {
      type: "Pojazdy z windą",
      description: "Dla firm przeprowadzkowych",
      icon: <Building2 className="w-8 h-8" />,
      category: "B/C1"
    },
    {
      type: "Auta z przyczepą",
      description: "Dla zwiększonej ładowności",
      icon: <Car className="w-8 h-8" />,
      category: "B+E"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bezproblemowa obsługa szkód",
      description: "Pełna obsługa ubezpieczeniowa bez dodatkowych kosztów"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dostępność 24/7",
      description: "Pojazdy specjalistyczne dostępne przez całą dobę"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Dopasowanie do branży",
      description: "Pojazdy dostosowane do specyfiki różnych branż"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Kompleksowa obsługa",
      description: "Od podstawienia po zwrot - wszystko w jednym miejscu"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie potrzeby",
      description: "Konsultant dobierze odpowiedni pojazd specjalistyczny",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Szybkie podstawienie",
      description: "Dostawa pojazdu pod wskazany adres",
      icon: <Truck className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Obsługa w trakcie wynajmu",
      description: "Wsparcie techniczne 24/7 i elastyczne rozliczenia",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const industries = [
    {
      name: "Transport i logistyka",
      services: ["Firmy kurierskie", "Logistyka magazynowa", "E-commerce", "Transport międzynarodowy"],
      icon: <Truck className="w-8 h-8" />
    },
    {
      name: "Budownictwo i przemysł",
      services: ["Transport materiałów", "Przewóz narzędzi", "Serwisy techniczne", "Branża instalacyjna"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "Usługi i handel",
      services: ["Catering", "Eventy", "Dostawy do sklepów", "Transport wielkogabarytowy"],
      icon: <Star className="w-8 h-8" />
    }
  ];

  const faqItems = [
    {
      question: "Jakie kategorie prawa jazdy są wymagane do wynajmu pojazdów specjalistycznych?",
      answer: "Wymagane kategorie zależą od typu pojazdu: Kategoria B dla pojazdów do 3,5t, C1 dla pojazdów 3,5-7,5t, C dla pojazdów powyżej 7,5t, D1 dla busów osobowych, oraz B+E dla pojazdów z przyczepą."
    },
    {
      question: "Czy wynajem pojazdów specjalistycznych z OC sprawcy jest bezgotówkowy?",
      answer: "Tak, współpracujemy z wszystkimi towarzystwami ubezpieczeniowymi i zapewniamy całkowicie bezgotówkową obsługę. Wszystkie koszty są pokrywane przez ubezpieczenie OC sprawcy."
    },
    {
      question: "Jak szybko można otrzymać pojazd specjalistyczny po zgłoszeniu szkody?",
      answer: "Standardowo pojazd może być dostarczony w ciągu kilku godzin od zgłoszenia. W przypadkach pilnych oferujemy ekspresową obsługę w ciągu 1-2 godzin."
    },
    {
      question: "Czy pojazdy specjalistyczne mają specjalne wyposażenie?",
      answer: "Tak, w zależności od potrzeb oferujemy pojazdy z różnym wyposażeniem: chłodnictwo, winda, plandeka, systemy mocujące ładunek, GPS, czy klimatyzacja."
    },
    {
      question: "Na jak długo można wynająć pojazd specjalistyczny z OC sprawcy?",
      answer: "Okres wynajmu zależy od czasu naprawy uszkodzonego pojazdu. Standardowo od kilku dni do kilku tygodni, z możliwością przedłużenia za zgodą ubezpieczyciela."
    },
    {
      question: "Co w przypadku awarii pojazdu specjalistycznego podczas wynajmu?",
      answer: "Wszystkie nasze pojazdy objęte są pomocą drogową 24/7. W przypadku awarii natychmiast zapewniamy pomoc techniczną lub pojazd zastępczy."
    },
    {
      question: "Czy Auto-Ram obsługuje transport międzynarodowy?",
      answer: "Tak, oferujemy pojazdy specjalistyczne z pełną dokumentacją do transportu międzynarodowego, w tym zielone karty ubezpieczeniowe."
    },
    {
      question: "Jakie dokumenty są potrzebne do wynajmu pojazdu specjalistycznego?",
      answer: "Potrzebne są: ważne prawo jazdy odpowiedniej kategorii, dokument tożsamości, zgłoszenie szkody do ubezpieczyciela oraz potwierdzenie uprawnień do wynajmu z OC sprawcy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">
                  🚛 POJAZDY SPECJALISTYCZNE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Wynajem pojazdów</span>
                  <br />
                  <span className="text-gray-900">specjalistycznych z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne rozwiązania mobilności dla wymagających zadań. 
                  Szeroki wybór pojazdów dostosowanych do różnych branż i specyficznych wymagań biznesowych.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Busy i pojazdy dostawcze",
                  "Pojazdy chłodnicze",
                  "Obsługa bezgotówkowa",
                  "Dostępność 24/7"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Sprawdź dostępność
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
                alt="Pojazdy specjalistyczne"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flota pojazdów specjalistycznych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pojazdy dostosowane do różnych branż i specyficznych wymagań
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {vehicle.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {vehicle.type}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-2">
                    {vehicle.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Prawo jazdy: {vehicle.category}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Korzyści wynajmu specjalistycznego
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalne rozwiązania dostosowane do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces wynajmu krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty i szybki proces wynajmu pojazdów specjalistycznych
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Branże, które obsługujemy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specjalistyczne rozwiązania dla różnych sektorów gospodarki
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęstsze pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na pytania dotyczące wynajmu pojazdów specjalistycznych
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pojazdu specjalistycznego?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z Auto-Ram już dziś! Zapewniamy ciągłość Twojego biznesu 
            nawet w najtrudniejszych sytuacjach dzięki szerokiej gamie pojazdów specjalistycznych.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Headphones className="w-5 h-5 mr-2" />
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WynajemSpecjalistycznyZOCSprawcy;
