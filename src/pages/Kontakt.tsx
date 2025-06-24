
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Car, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kontakt = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefon 24/7",
      description: "Całodobowa linia pomocy",
      contact: "123-456-789",
      action: "tel:123456789"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Napisz do nas",
      contact: "kontakt@autoram.pl",
      action: "mailto:kontakt@autoram.pl"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Lokalizacja",
      description: "Nasze biuro",
      contact: "ul. Przykładowa 123, 00-000 Poznań",
      action: ""
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Godziny pracy",
      description: "Poniedziałek - Piątek",
      contact: "8:00 - 18:00",
      action: ""
    }
  ];

  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Obsługa szkód z OC",
      description: "Kompleksowa obsługa szkód ubezpieczeniowych"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Pomoc drogowa 24/7",
      description: "Całodobowa pomoc drogowa i holowanie"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Auto zastępcze",
      description: "Bezgotówkowy wynajem pojazdów zastępczych"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                📞 KONTAKT
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Skontaktuj się</span>
                <br />
                <span className="text-gray-900">z nami</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Jesteśmy dostępni 24/7, aby pomóc Ci w każdej sytuacji. 
                Zadzwoń, napisz lub odwiedź nas osobiście.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń teraz: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                <Mail className="w-5 h-5 mr-2" />
                Napisz email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sposoby kontaktu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wybierz najwygodniejszy dla Ciebie sposób kontaktu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {method.action ? (
                    <a 
                      href={method.action}
                      className="text-blue-600 font-semibold hover:text-blue-700 break-all"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">
                      {method.contact}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Napisz do nas
            </h2>
            <p className="text-xl text-gray-600">
              Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Formularz kontaktowy</CardTitle>
              <CardDescription className="text-center">
                Opisz swoją sytuację, a nasi eksperci udzielą Ci pomocy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Imię i nazwisko</label>
                  <Input placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefon</label>
                  <Input placeholder="123-456-789" type="tel" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input placeholder="jan.kowalski@email.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Temat</label>
                <Input placeholder="Zgłoszenie szkody komunikacyjnej" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Opis sytuacji</label>
                <Textarea 
                  placeholder="Opisz szczegółowo swoją sytuację, rodzaj szkody, okoliczności wypadku..."
                  rows={6}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                <Mail className="w-5 h-5 mr-2" />
                Wyślij wiadomość
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Wysyłając formularz akceptujesz naszą politykę prywatności. 
                Skontaktujemy się z Tobą w ciągu 24 godzin.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Quick Access */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Potrzebujesz natychmiastowej pomocy?
            </h2>
            <p className="text-xl text-blue-100">
              Nasze główne usługi dostępne 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń teraz: 123-456-789
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
