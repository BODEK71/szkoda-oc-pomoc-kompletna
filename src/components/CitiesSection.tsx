
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { cities } from "@/config/cities";

const CitiesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            NASZA OBECNOŚĆ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Obsługujemy <span className="text-blue-600">Zachodnią Polskę</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Centrum Likwidacji Szkód działa w 42 miastach województwa wielkopolskiego 
            i lubuskiego. Znajdź najbliższą lokalizację i skorzystaj z naszych usług.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {cities
            .slice() // Create a copy to avoid mutating the original array
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((city) => (
              <Button
                key={city.slug}
                variant="outline"
                className="h-auto p-3 text-sm font-medium text-gray-700 bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
              >
                <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">{city.name}</span>
              </Button>
            ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Nie widzisz swojego miasta? Skontaktuj się z nami - obsługujemy także okoliczne miejscowości!
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            <MapPin className="w-4 h-4 mr-2" />
            Sprawdź dostępność w Twojej okolicy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
