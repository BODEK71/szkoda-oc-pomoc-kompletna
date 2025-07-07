
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Car } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600 text-white mb-4">
            Kontakt 24/7
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Potrzebujesz pomocy?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pomoc drogowa dostępna 24/7. Warsztat otwarty od poniedziałku do soboty. 
            Skontaktuj się z nami już teraz i otrzymaj profesjonalną pomoc po wypadku.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contact */}
          <Card className="bg-red-600 border-0 text-white col-span-full lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">Zgłoś szkodę natychmiast</CardTitle>
              <CardDescription className="text-red-100">
                Linia awaryjna - dostępna 24/7
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">+48 506 066 525</div>
              <Button className="bg-white text-red-600 hover:bg-gray-100 w-full" asChild>
                <a href="tel:+48506066525">
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń teraz
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Main Contact Info */}
          <Card className="bg-white/10 border-white/20 text-white col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Dane kontaktowe</CardTitle>
              <CardDescription className="text-gray-300">
                Skontaktuj się z nami w dogodny dla Ciebie sposób
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-gray-300">+48 506 066 525</p>
                    <p className="text-sm text-gray-400">Assistance dostępne 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">office24@autoram.eu</p>
                    <p className="text-sm text-gray-400">Odpowiedź w ciągu 2h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adres</h4>
                    <p className="text-gray-300">ul. Zdrojowa 17</p>
                    <p className="text-gray-300">62-065 Grodzisk Wielkopolski</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Godziny pracy</h4>
                    <p className="text-gray-300">Warsztat: Pn-Pt 7:30-17:30, Sb 7:30-15:00</p>
                    <p className="text-sm text-gray-400">Assistance: 24/7</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 h-16 text-lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Czat online
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 h-16 text-lg">
            <Car className="w-5 h-5 mr-2" />
            Zamów auto zastępcze
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 h-16 text-lg" asChild>
            <a href="tel:+48506066525">
              <Phone className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 h-16 text-lg" asChild>
            <a href="https://maps.google.com/maps?q=ul.+Zdrojowa+17,+62-065+Grodzisk+Wielkopolski" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Znajdź nas
            </a>
          </Button>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">
            ⚠️ Miałeś wypadek? Zachowaj spokój!
          </h3>
          <p className="text-yellow-100 mb-4">
            Zadzwoń natychmiast na numer +48 506 066 525. Poprowadzimy Cię przez cały proces 
            obsługi szkody i zapewnimy natychmiastową pomoc.
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold" asChild>
            <a href="tel:+48506066525">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń na linię awaryjną
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
