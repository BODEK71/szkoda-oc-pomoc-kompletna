
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Obsługa szkody z OC", href: "/obsługa-szkody-z-oc", highlight: true },
    { name: "Naprawy z OC", href: "/naprawy-z-oc" },
    { name: "Auto zastępcze", href: "/auto-zastepcze-z-oc" },
    { name: "Pomoc drogowa", href: "/pomoc-drogowa-z-oc" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="bg-autoram-white shadow-lg border-b-2 border-autoram-red sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">OC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-autoram-text">AutoSzkoda</span>
              <p className="text-xs text-autoram-gold">Obsługa szkód z OC sprawcy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  item.highlight
                    ? "bg-autoram-red text-white hover:bg-autoram-red-dark shadow-lg"
                    : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-autoram-gold-dark">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">24/7: 123-456-789</span>
            </div>
            <Button className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń teraz
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-autoram-text hover:bg-autoram-red hover:text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-autoram-white border-autoram-red">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.highlight
                        ? "bg-autoram-red text-white"
                        : "text-autoram-text hover:text-autoram-red"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-autoram-red">
                  <p className="text-sm font-semibold text-autoram-text">Telefon 24/7</p>
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
