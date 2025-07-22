import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cities } from "@/config/cities";

const ServiceAreaSection = () => {
  // Arrange cities in 6 rows (approximately 8-9 cities per row)
  const citiesPerRow = Math.ceil(cities.length / 6);
  const rows = [];
  
  for (let i = 0; i < cities.length; i += citiesPerRow) {
    rows.push(cities.slice(i, i + citiesPerRow));
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">
            🌍 OBSZAR DZIAŁANIA
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Obsługujemy zachodnią Polskę
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nasze centrum likwidacji szkód działa w największych miastach regionu, 
            zapewniając profesjonalną obsługę powypadkową tam, gdzie jesteś.
          </p>
        </div>

        {/* Cities Grid - 6 rows */}
        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
              {row.map((city) => (
                <div key={city.name}>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-blue-50 border-blue-200 text-blue-700 hover:text-blue-800 hover:scale-105 font-medium px-4 py-2 h-auto transition-all duration-200"
                    asChild
                  >
                    <Link to={`/centrum-likwidacji-szkod-${city.slug}`}>
                      {city.name}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Nie widzisz swojego miasta? Zadzwoń do nas - obsługujemy również inne lokalizacje w regionie.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl">
            <a href="tel:+48506066525">
              Sprawdź dostępność w Twojej okolicy
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;