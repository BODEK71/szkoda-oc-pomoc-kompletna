
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, AlertTriangle } from "lucide-react";

const DocumentationSection = () => {
  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Protokół policji",
      description: "Oryginał lub kopia protokołu z miejsca zdarzenia",
      required: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Polisa ubezpieczeniowa",
      description: "Aktualna polisa OC i AC (jeśli dotyczy)",
      required: true
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Dowód rejestracyjny",
      description: "Dokumenty pojazdu i prawo jazdy",
      required: true
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Dokumentacja medyczna",
      description: "Zaświadczenia lekarskie (w przypadku obrażeń)",
      required: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wymagane dokumenty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lista dokumentów potrzebnych do zgłoszenia szkody
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {requiredDocuments.map((doc, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${doc.required ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {doc.title}
                      </CardTitle>
                      {doc.required && (
                        <Badge variant="destructive" className="text-xs">
                          Wymagane
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {doc.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
