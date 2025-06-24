
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, ArrowRight, FileText, AlertTriangle, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ZgloszenieSzkodyKomunikacyjnej = () => {
  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Protokół policji",
      description: "Oryginał lub kopia protokołu z miejsca wypadku"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Dowód osobisty",
      description: "Dokument tożsamości właściciela pojazdu"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Dokumenty pojazdu",
      description: "Dowód rejestracyjny i polisa ubezpieczeniowa"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Oświadczenie świadka",
      description: "Jeśli byli świadkowie zdarzenia (opcjonalnie)"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Wypełnij formularz",
      description: "Podaj szczegóły zdarzenia i dane kontaktowe"
    },
    {
      number: 2,
      title: "Wyślij dokumenty",
      description: "Załącz wymagane dokumenty w formie elektronicznej"
    },
    {
      number: 3,
      title: "Otrzymaj potwierdzenie",
      description: "Dostaniesz SMS/email z numerem sprawy"
    },
    {
      number: 4,
      title: "Obsługa sprawy",
      description: "Nasz ekspert skontaktuje się w ciągu 24h"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800">
                📋 ZGŁOSZENIE SZKODY
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-orange-600">Zgłoszenie szkody</span>
                <br />
                <span className="text-gray-900">komunikacyjnej</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Szybkie i profesjonalne zgłoszenie szkody komunikacyjnej. 
                Wypełnij formularz online lub skontaktuj się telefonicznie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Clock className="w-6 h-6" />, text: "Obsługa 24/7" },
                { icon: <Phone className="w-6 h-6" />, text: "Kontakt w 1h" },
                { icon: <CheckCircle className="w-6 h-6" />, text: "Bezpłatna pomoc" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-200 text-orange-600 hover:bg-orange-50">
                Wypełnij formularz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak zgłosić szkodę?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty proces zgłoszenia szkody w 4 krokach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wymagane dokumenty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Przygotuj te dokumenty przed zgłoszeniem szkody
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requiredDocuments.map((doc, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {doc.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {doc.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Formularz zgłoszenia szkody
            </h2>
            <p className="text-xl text-gray-600">
              Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Szczegóły zdarzenia</CardTitle>
              <CardDescription className="text-center">
                Podaj jak najwięcej informacji o wypadku
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Data wypadku</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Miejsce wypadku</label>
                  <Input placeholder="Ulica, miasto" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Opis zdarzenia</label>
                <Textarea 
                  placeholder="Opisz szczegółowo przebieg wypadku, okoliczności, sprawcę..."
                  rows={6}
                />
              </div>
              
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                <FileText className="w-5 h-5 mr-2" />
                Wyślij zgłoszenie
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Wysyłając formularz akceptujesz naszą politykę prywatności. 
                Skontaktujemy się z Tobą w ciągu 24 godzin.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz natychmiastowej pomocy?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Zadzwoń na naszą całodobową linię pomocy. Jesteśmy dostępni 24/7.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Zadzwoń teraz: 123-456-789
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZgloszenieSzkodyKomunikacyjnej;
