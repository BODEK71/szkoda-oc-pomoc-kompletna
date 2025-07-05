
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Car, FileCheck, Scale, Truck, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CenterDepartmentsSection = () => {
  const departments = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Dział Likwidacji Szkód",
      description: "Kompleksowa obsługa szkód komunikacyjnych z OC sprawcy",
      features: ["Wycena rzeczoznawcy", "Dokumentacja ubezpieczeniowa", "Bezpośrednia likwidacja BLS"],
      link: "/likwidacja-szkod",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Dział Napraw",
      description: "Profesjonalne naprawy blacharsko-lakiernicze i mechaniczne",
      features: ["Naprawy bezgotówkowe", "Blacharstwo i lakiernictwo", "Mechanika samochodowa"],
      link: "/naprawy-powypadkowe",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Dział Aut Zastępczych",
      description: "Wynajem pojazdów zastępczych z ubezpieczenia sprawcy",
      features: ["Bezpłatny wynajem z OC", "Różne kategorie aut", "Bez limitu kilometrów"],
      link: "/auto-zastepcze",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Dział Pomocy Drogowej",
      description: "24/7 holowanie i transport pojazdów uszkodzonych",
      features: ["Holowanie całodobowe", "Transport na lawecie", "Pomoc na autostradzie"],
      link: "/pomoc-drogowa",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Dział Pomocy Prawnej",
      description: "Wsparcie prawne i reprezentacja w sprawach komunikacyjnych",
      features: ["Doradztwo prawne", "Reprezentacja w sądzie", "Negocjacje z ubezpieczycielami"],
      link: "/kontakt",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Dział Serwisu",
      description: "Przeglądy techniczne i serwis ogólny pojazdów",
      features: ["Przeglądy okresowe", "Diagnostyka komputerowa", "Serwis klimatyzacji"],
      link: "/przeglady-i-serwis-ogolny",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Działy naszego <span className="text-autoram-red">Centrum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Każdy dział prowadzony przez specjalistów - wszystko pod jednym dachem dla Twojej wygody
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {dept.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 text-center mb-2">
                  {dept.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-center">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {dept.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-autoram-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={dept.link}>
                  <Button className="w-full group-hover:bg-autoram-red group-hover:border-autoram-red" variant="outline">
                    Więcej o dziale
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-autoram-red/5 to-autoram-gold/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Wszystkie działy w jednym miejscu
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To jest właśnie przewaga naszego Centrum - nie musisz jeździć po całym mieście. 
              Wszystkich specjalistów znajdziesz w jednym budynku, a my skoordynujemy całą obsługę Twojej sprawy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterDepartmentsSection;
