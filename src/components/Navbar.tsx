
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const obslugaSzkodyItems = [
    { name: "Obsługa szkody z OC", href: "/obsługa-szkody-z-oc" },
    { name: "Obsługa OC Wolsztyn", href: "/obsługa-szkody-z-oc-wolsztyn" },
    { name: "Obsługa OC Poznań", href: "/obsługa-szkody-z-oc-poznan" },
    { name: "Bezpośrednia likwidacja szkód", href: "/blog/bezposrednia-likwidacja-szkod-bls" },
  ];

  const naprawyItems = [
    { name: "Naprawy z OC", href: "/naprawy-z-oc" },
    { name: "Naprawa bezgotówkowa", href: "/naprawy-z-oc" },
    { name: "Blacharstwo lakiernictwo", href: "/naprawy-z-oc" },
  ];

  const autoZastepczeItems = [
    { name: "Auto zastępcze", href: "/auto-zastepcze-z-oc" },
    { name: "Auto zastępcze Poznań", href: "/auto-zastepcze-z-oc-poznan" },
    { name: "Wynajem aut z OC", href: "/auto-zastepcze-z-oc" },
  ];

  const pomocDrogowaItems = [
    { name: "Pomoc drogowa", href: "/pomoc-drogowa-z-oc" },
    { name: "Holowanie Głogów", href: "/holowanie-z-oc-glogów" },
    { name: "Pomoc drogowa 24h", href: "/pomoc-drogowa-z-oc" },
    { name: "Laweta", href: "/pomoc-drogowa-z-oc" },
  ];

  const blogItems = [
    { name: "Blog", href: "/blog" },
    { name: "Przewodnik obsługi szkód", href: "/blog/obsługa-szkody-oc-przewodnik" },
    { name: "Auto zastępcze - prawa", href: "/blog/auto-zastepcze-oc-prawa" },
  ];

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  return (
    <nav className="bg-autoram-white shadow-lg border-b-2 border-autoram-red sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">AR</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl font-bold text-autoram-text">Auto-Ram</span>
              <p className="text-sm text-autoram-gold font-medium mt-1">Grodzisk Wielkopolski - Obsługa szkód z OC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center flex-1 justify-center px-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActiveSection(obslugaSzkodyItems)
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Obsługa szkody z OC
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg p-4">
                    <div className="grid gap-3">
                      {obslugaSzkodyItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActiveSection(naprawyItems)
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Naprawy z OC
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg p-4">
                    <div className="grid gap-3">
                      {naprawyItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActiveSection(autoZastepczeItems)
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Auto zastępcze
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg p-4">
                    <div className="grid gap-3">
                      {autoZastepczeItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActiveSection(pomocDrogowaItems)
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Pomoc drogowa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg p-4">
                    <div className="grid gap-3">
                      {pomocDrogowaItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActiveSection(blogItems)
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg p-4">
                    <div className="grid gap-3">
                      {blogItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/kontakt"
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActivePath("/kontakt")
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                    }`}
                  >
                    Kontakt
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-base text-autoram-gold-dark">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">24/7: 123-456-789</span>
            </div>
            <Button className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-semibold px-6 py-3 text-base">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń teraz
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="xl:hidden text-autoram-text hover:bg-autoram-red hover:text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-autoram-white border-autoram-red">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile menu content */}
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Obsługa szkody z OC</p>
                    {obslugaSzkodyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Naprawy z OC</p>
                    {naprawyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Auto zastępcze</p>
                    {autoZastepczeItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Pomoc drogowa</p>
                    {pomocDrogowaItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Blog</p>
                    {blogItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/kontakt"
                    className="block px-4 py-2 text-sm font-medium text-autoram-text hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    Kontakt
                  </Link>
                </div>
                
                <div className="pt-6 border-t border-autoram-red">
                  <p className="text-sm font-semibold text-autoram-text mb-2">Telefon 24/7</p>
                  <p className="text-lg font-bold text-autoram-gold">123-456-789</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
