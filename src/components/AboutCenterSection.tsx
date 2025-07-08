import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { cities } from "@/config/cities";

const AboutCenterSection = () => {
  const stats = [
    {
      icon: MapPin,
      value: "15+",
      label: "Miast w regionie",
      description: "Działamy w całej Wielkopolsce i Dolnym Śląsku"
    },
    {
      icon: Users,
      value: "50+",
      label: "Specjalistów",
      description: "Wykwalifikowany zespół ekspertów"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Dostępność",
      description: "Jesteśmy dostępni przez całą dobę"
    },
    {
      icon: Award,
      value: "10+",
      label: "Lat doświadczenia",
      description: "Gwarancja jakości i profesjonalizmu"
    }
  ];

  // Generate city list with Poznań link
  const cityListElements = cities
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((city, index, array) => (
      <span key={city.name}>
        {city.name === "Poznań" ? (
          <Link 
            to="/centrum-likwidacji-szkod-poznan" 
            className="text-blue-600 hover:text-blue-700 underline font-semibold"
          >
            {city.name}
          </Link>
        ) : (
          <span>{city.name}</span>
        )}
        {index < array.length - 1 ? " | " : ""}
      </span>
    ));

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kompleksowa obsługa powypadkowa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zapewniamy pełne wsparcie na każdym etapie likwidacji szkód.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-500">
                  {stat.description}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">
                🌍 OBSZAR DZIAŁANIA
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Obsługujemy całą Wielkopolskę i Dolny Śląsk
              </h3>
              <p className="text-gray-600 mb-6">
                Nasze centrum likwidacji szkód działa w największych miastach regionu, 
                zapewniając profesjonalną obsługę powypadkową tam, gdzie jesteś.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Miasta obsługiwane przez nasze centrum:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 text-sm">
                  {cities
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((city) => (
                      <div key={city.name} className="text-center">
                        {city.name === "Poznań" ? (
                          <Link 
                            to="/centrum-likwidacji-szkod-poznan" 
                            className="text-blue-600 hover:text-blue-700 underline font-semibold"
                          >
                            {city.name}
                          </Link>
                        ) : (
                          <span className="text-gray-700">{city.name}</span>
                        )}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">
                🤝 ZAUFAJ EKSPERTOM
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Doświadczenie i profesjonalizm
              </h3>
              <p className="text-gray-600 mb-6">
                Nasi specjaliści posiadają wieloletnie doświadczenie w branży likwidacji szkód.
                Znamy procedury ubezpieczeniowe i wiemy, jak skutecznie dochodzić Twoich praw.
              </p>
            </div>

            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">
                🕒 SZYBKA POMOC
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dostępność i wsparcie
              </h3>
              <p className="text-gray-600 mb-6">
                Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu.
                Zapewniamy szybką i skuteczną pomoc w każdej sytuacji powypadkowej.
              </p>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCenterSection;
