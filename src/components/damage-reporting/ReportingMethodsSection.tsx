
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ReportingMethodsSection = () => {
  const methods = [
    {
      title: "Zgłoszenie telefoniczne",
      description: "Infolinia ubezpieczyciela dostępna 24/7",
      items: ["Natychmiastowe otrzymanie numeru szkody", "Możliwość uzyskania pierwszych instrukcji", "Rejestracja podstawowych danych", "Umówienie oględzin pojazdu"]
    },
    {
      title: "Zgłoszenie online",
      description: "Elektroniczne zgłoszenie szkody komunikacyjnej",
      items: ["Formularz na stronie ubezpieczyciela", "Możliwość załączenia dokumentów", "Śledzenie statusu sprawy online", "Automatyczne potwierdzenie przyjęcia"]
    },
    {
      title: "Zgłoszenie w placówce",
      description: "Osobiste zgłoszenie szkody ubezpieczeniowej",
      items: ["Bezpośredni kontakt z konsultantem", "Możliwość wyjaśnienia wątpliwości", "Kompleksowe wypełnienie dokumentów", "Otrzymanie kopii dokumentów"]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Sposoby zgłoszenia szkody
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {method.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportingMethodsSection;
