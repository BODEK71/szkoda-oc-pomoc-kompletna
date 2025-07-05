import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Eye, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Obsługa szkody OC - kompletny przewodnik 2024",
      excerpt: "Dowiedz się krok po kroku, jak prawidłowo obsłużyć szkodę komunikacyjną z OC sprawcy. Praktyczny przewodnik z przykładami.",
      author: "Ekspert AutoRam",
      date: "15 grudnia 2024",
      readTime: "8 min",
      views: "2,341",
      category: "Przewodniki",
      image: "/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png",
      href: "/blog/obsługa-szkody-oc-przewodnik"
    },
    {
      id: 2,
      title: "Auto zastępcze z OC - znaj swoje prawa",
      excerpt: "Kiedy przysługuje auto zastępcze? Jak je otrzymać? Wszystko o prawach poszkodowanych w wypadkach komunikacyjnych.",
      author: "Prawnik AutoRam",
      date: "12 grudnia 2024",
      readTime: "6 min",
      views: "1,876",
      category: "Prawo",
      image: "/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png",
      href: "/blog/auto-zastepcze-oc-prawa"
    },
    {
      id: 3,
      title: "Bezpośrednia likwidacja szkód (BLS) - co to znaczy?",
      excerpt: "Wyjaśniamy czym jest BLS, kiedy się stosuje i jakie ma konsekwencje dla poszkodowanych w wypadkach.",
      author: "Specjalista AutoRam",
      date: "10 grudnia 2024",
      readTime: "5 min",
      views: "1,543",
      category: "Ubezpieczenia",
      image: "/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png",
      href: "/blog/bezposrednia-likwidacja-szkod-bls"
    }
  ];

  const categories = [
    { name: "Wszystkie", count: 24, active: true },
    { name: "Przewodniki", count: 8, active: false },
    { name: "Prawo", count: 6, active: false },
    { name: "Ubezpieczenia", count: 5, active: false },
    { name: "Porady", count: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Added pt-32 for better spacing from fixed navbar */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                📚 BLOG
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Blog AutoRam</span>
                <br />
                <span className="text-gray-900">Wiedza ekspercka</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Praktyczne porady, przewodniki i aktualności ze świata ubezpieczeń komunikacyjnych. 
                Dowiedz się więcej o swoich prawach i możliwościach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600 border-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <Link to={post.href}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              Załaduj więcej artykułów
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bądź na bieżąco z nowościami
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Zapisz się do naszego newslettera i otrzymuj najnowsze artykuły 
            oraz porady ekspertów prosto na swoją skrzynkę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Zapisz się
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
