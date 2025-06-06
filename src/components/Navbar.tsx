
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
    <nav className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">AutoSzkoda</span>
              <p className="text-xs text-gray-600">Obsługa szkód z OC sprawcy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">24/7: 123-456-789</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń teraz
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.highlight
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-900">Telefon 24/7</p>
                  <p className="text-lg font-bold text-blue-600">123-456-789</p>
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
