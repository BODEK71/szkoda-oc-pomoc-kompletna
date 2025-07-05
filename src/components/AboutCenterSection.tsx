
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Award, Clock } from "lucide-react";

const AboutCenterSection = () => {
  const stats = [
    {
      icon: <Building className="w-8 h-8" />,
      number: "10+",
      label: "Centrów w regionie",
      description: "Sieć nowoczesnych placówek"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Specjalistów",
      description: "Doświadczony zespół ekspertów"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15000+",
      label: "Obsłużonych szkód",
      description: "Zadowolonych klientów rocznie"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Dostępność",
      description: "Pomoc w każdej chwili"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            O naszym <span className="text-autoram-red">Centrum Likwidacji Szkód</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Jesteśmy pierwszym i jedynym w regionie kompleksowym centrum obsługi poszkodowanych w komunikacji. 
            Wszystko czego potrzebujesz po wypadku - znajdziesz u nas pod jednym dachem.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-autoram-red to-autoram-red-dark rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-autoram-red mb-2">
                  {stat.number}
                </CardTitle>
                <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {stat.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-autoram-red/5 to-autoram-gold/5 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Nasza misja
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Centrum Likwidacji Szkód</strong> powstało z myślą o poszkodowanych, którzy po wypadku muszą załatwiać 
              sprawy w kilku różnych miejscach. Połączyliśmy wszystkie niezbędne usługi pod jednym dachem, 
              aby oszczędzić Państwa czas i nerwy w trudnym momencie.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              W naszym Centrum znajdziesz: <span className="font-semibold text-autoram-red">warsztat naprawczy, 
              wypożyczalnię aut zastępczych, biuro likwidacji szkód, pomoc prawną i holowanie</span>. 
              Jeden telefon, jedna wizyta - wszystko załatwione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCenterSection;
