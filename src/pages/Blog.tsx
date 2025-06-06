
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      id: "obsługa-szkody-oc-przewodnik",
      title: "Obsługa szkody z OC sprawcy - kompletny przewodnik 2024",
      excerpt: "Dowiedz się krok po kroku jak przebiega obsługa szkody z OC sprawcy, jakie masz prawa i jak uzyskać pełne odszkodowanie.",
      category: "Przewodnik",
      readTime: "8 min",
      date: "2024-01-15",
      featured: true
    },
    {
      id: "auto-zastepcze-oc-prawa",
      title: "Auto zastępcze z OC sprawcy - Twoje prawa i uprawnienia",
      excerpt: "Wszystko co musisz wiedzieć o aucie zastępczym finansowanym z OC sprawcy. Jak długo przysługuje i jakie warunki musisz spełnić.",
      category: "Prawa poszkodowanych",
      readTime: "6 min",
      date: "2024-01-10",
      featured: true
    },
    {
      id: "bezposrednia-likwidacja-szkod-bls",
      title: "Bezpośrednia likwidacja szkód (BLS) - jak działa system",
      excerpt: "Poznaj system BLS i dowiedz się jak przyspieszyć proces likwidacji szkody bez konieczności kontaktu ze sprawcą.",
      category: "System ubezpieczeń",
      readTime: "7 min",
      date: "2024-01-05",
      featured: true
    },
    {
      id: "wycena-szkody-rzeczoznawca",
      title: "Wycena szkody przez rzeczoznawcę - co wpływa na wartość odszkodowania",
      excerpt: "Jak przebiega wycena szkody, jakie czynniki wpływają na wysokość odszkodowania i jak się przygotować do spotkania z rzeczoznawcą.",
      category: "Wycena szkód",
      readTime: "5 min",
      date: "2023-12-28"
    },
    {
      id: "holowanie-oc-sprawcy",
      title: "Holowanie z OC sprawcy - kiedy przysługuje i jak z niego skorzystać",
      excerpt: "Transport uszkodzonego pojazdu z OC sprawcy - procedury, limity i praktyczne wskazówki.",
      category: "Transport",
      readTime: "4 min",
      date: "2023-12-20"
    },
    {
      id: "naprawa-bezgotowkowa",
      title: "Naprawa bezgotówkowa z OC - zalety i procedury",
      excerpt: "Jak działa naprawa bezgotówkowa, jakie są jej zalety i jak wybrać warsztat współpracujący z ubezpieczalniami.",
      category: "Naprawa",
      readTime: "6 min",
      date: "2023-12-15"
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-autoram-white via-autoram-light to-autoram-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-autoram-gold text-black hover:bg-autoram-gold-dark font-bold">
              📚 BLOG PORADNIKOWY
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-autoram-text">
              Poradnik <span className="text-autoram-red">Auto-Ram</span>
            </h1>
            <p className="text-xl text-autoram-text-muted max-w-3xl mx-auto">
              Praktyczne porady, przewodniki i aktualne informacje o obsłudze szkód z OC sprawcy, 
              auto zastępczym, naprawach bezgotówkowych i prawach poszkodowanych w ruchu drogowym.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-autoram-text mb-8">Polecane artykuły</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-shadow border-autoram-red/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-autoram-gold text-autoram-gold-dark">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-autoram-text-muted">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-autoram-text hover:text-autoram-red transition-colors">
                    <Link to={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-autoram-text-muted">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-autoram-text-muted">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('pl-PL')}
                    </div>
                    <Link to={`/blog/${article.id}`}>
                      <Button variant="outline" size="sm" className="border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white">
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 bg-autoram-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-autoram-text mb-8">Wszystkie artykuły</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow border-autoram-red/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-autoram-gold text-autoram-gold-dark">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-autoram-text-muted">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-autoram-text hover:text-autoram-red transition-colors">
                    <Link to={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-autoram-text-muted">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-autoram-text-muted">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('pl-PL')}
                    </div>
                    <Link to={`/blog/${article.id}`}>
                      <Button variant="ghost" size="sm" className="text-autoram-red hover:bg-autoram-red hover:text-white">
                        Czytaj
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
