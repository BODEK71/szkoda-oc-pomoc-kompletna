
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const obslugaSzkodyItems = [
    { name: "Likwidacja szkód komunikacyjnych", href: "/likwidacja-szkod-komunikacyjnych" },
    { name: "Likwidacja szkody z OC", href: "/likwidacja-szkody-z-oc" },
    { name: "Obsługa szkody z OC", href: "/obsługa-szkody-z-oc" },
    { name: "Zgłoszenie szkody komunikacyjnej", href: "/zgloszenie-szkody-komunikacyjnej" },
    { name: "Zgłoszenie szkody ubezpieczeniowej", href: "/zgloszenie-szkody-ubezpieczeniowej" },
    { name: "Wycena szkody powypadkowej", href: "/wycena-szkody-powypadkowej" },
    { name: "Kosztorys naprawy z OC sprawcy", href: "/kosztorys-naprawy-z-oc-sprawcy" },
    { name: "Ocena uszkodzeń pojazdu", href: "/ocena-uszkodzen-pojazdu" },
    { name: "Bezpośrednia likwidacja szkód (BLS)", href: "/blog/bezposrednia-likwidacja-szkod-bls" },
    { name: "Odszkodowanie z OC sprawcy", href: "/odszkodowanie-z-oc-sprawcy" },
    { name: "Likwidator szkód", href: "/likwidator-szkod" },
  ];

  const lokalizacjaItems = [
    { name: "Poznań", href: "/wycena-szkody-poznan" },
    { name: "Wolsztyn", href: "/obsługa-szkody-z-oc-wolsztyn" },
    { name: "Zielona Góra", href: "/obsługa-szkody-zielona-gora" },
    { name: "Nowy Tomyśl", href: "/obsługa-szkody-nowy-tomysl" },
    { name: "Sława", href: "/obsługa-szkody-slawa" },
    { name: "Leszno", href: "/obsługa-szkody-leszno" },
    { name: "Głogów", href: "/holowanie-z-oc-glogów" },
    { name: "Kościan", href: "/obsługa-szkody-koscian" },
    { name: "Szamotuły", href: "/obsługa-szkody-szamotuly" },
    { name: "Międzyrzecz", href: "/obsługa-szkody-miedzyrzecz" },
  ];

  const naprawyItems = [
    { name: "Naprawy powypadkowe", href: "/naprawy-z-oc" },
    { name: "Naprawa bezgotówkowa", href: "/naprawy-z-oc" },
    { name: "Blacharstwo lakiernictwo", href: "/naprawy-z-oc" },
  ];

  const wynajemItems = [
    { name: "Auto zastępcze z OC", href: "/auto-zastepcze-z-oc" },
    { name: "Auto zastępcze Poznań", href: "/auto-zastepcze-z-oc-poznan" },
    { name: "Wynajem aut z OC sprawcy", href: "/auto-zastepcze-z-oc" },
  ];

  const pomocDrogowaItems = [
    { name: "Pomoc drogowa 24h", href: "/pomoc-drogowa-z-oc" },
    { name: "Holowanie", href: "/pomoc-drogowa-z-oc" },
    { name: "Laweta", href: "/pomoc-drogowa-z-oc" },
  ];

  const poradnikItems = [
    { name: "Poradnik", href: "/blog" },
    { name: "Przewodnik obsługi szkód", href: "/blog/obsługa-szkody-oc-przewodnik" },
    { name: "Auto zastępcze - prawa", href: "/blog/auto-zastepcze-oc-prawa" },
  ];

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  const isActiveObslugaSzkody = () => {
    return isActiveSection(obslugaSzkodyItems) || isActiveSection(lokalizacjaItems);
  };

  return (
    <nav className="bg-autoram-white shadow-lg border-b-2 border-autoram-red sticky top-0 z-50">
      {/* Top line - Logo, Company Name, Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 border-b border-autoram-gray">
          <Link to="/" className="flex items-center space-x-6">
            <div className="w-14 h-14 bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AR</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-autoram-text">Auto-Ram</span>
              <p className="text-sm text-autoram-gold font-medium">Grodzisk Wielkopolski - Obsługa szkód z OC</p>
            </div>
          </Link>

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

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden text-autoram-text hover:bg-autoram-red hover:text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-autoram-white border-autoram-red">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Obsługa szkód ubezpieczeniowych</p>
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
                    <p className="font-medium text-autoram-text mt-3 mb-2 px-4">Lokalizacja:</p>
                    {lokalizacjaItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-autoram-text mb-2">Naprawy pojazdów</p>
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
                    <p className="font-semibold text-autoram-text mb-2">Wynajem pojazdów</p>
                    {wynajemItems.map((item) => (
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
                    <p className="font-semibold text-autoram-text mb-2">Poradnik</p>
                    {poradnikItems.map((item) => (
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

        {/* Bottom line - Navigation Menu */}
        <div className="hidden lg:flex items-center justify-center h-16">
          <div className="flex items-center space-x-1">
            {/* Obsługa szkód ubezpieczeniowych */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                    isActiveObslugaSzkody()
                      ? "bg-autoram-red text-white"
                      : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                  }`}
                >
                  Obsługa szkód ubezpieczeniowych
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                {obslugaSzkodyItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                    Lokalizacja
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="min-w-[200px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                    {lokalizacjaItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Naprawy pojazdów */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                    isActiveSection(naprawyItems)
                      ? "bg-autoram-red text-white"
                      : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                  }`}
                >
                  Naprawy pojazdów
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
                {naprawyItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wynajem pojazdów */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                    isActiveSection(wynajemItems)
                      ? "bg-autoram-red text-white"
                      : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                  }`}
                >
                  Wynajem pojazdów
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
                {wynajemItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pomoc drogowa */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                    isActiveSection(pomocDrogowaItems)
                      ? "bg-autoram-red text-white"
                      : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                  }`}
                >
                  Pomoc drogowa
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
                {pomocDrogowaItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Poradnik */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                    isActiveSection(poradnikItems)
                      ? "bg-autoram-red text-white"
                      : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                  }`}
                >
                  Poradnik
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
                {poradnikItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Kontakt */}
            <Link
              to="/kontakt"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActivePath("/kontakt")
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
