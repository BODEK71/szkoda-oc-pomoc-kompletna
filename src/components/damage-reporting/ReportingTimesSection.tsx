
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertTriangle, CheckCircle } from "lucide-react";

const ReportingTimesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Terminy zgłoszenia szkody
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                Ustawowe terminy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                <strong>Zgłoszenie szkody ubezpieczeniowej</strong> powinno nastąpić:
              </p>
              <div className="space-y-2">
                {[
                  "Niezwłocznie po zdarzeniu (najlepiej w ciągu 24 godzin)",
                  "Nie później niż w terminie określonym w polisie",
                  "Standardowo do 7 dni od zdarzenia",
                  "W przypadku kradzieży - natychmiast po odkryciu"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Konsekwencje opóźnień
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Opóźnione <strong>zgłoszenie szkody komunikacyjnej</strong> może skutkować:
              </p>
              <div className="space-y-2">
                {[
                  "Odmową wypłaty odszkodowania",
                  "Obniżeniem kwoty odszkodowania",
                  "Trudnościami w udowodnieniu okoliczności",
                  "Utratą możliwości zabezpieczenia dowodów",
                  "Problemami z ustaleniem sprawcy"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportingTimesSection;
