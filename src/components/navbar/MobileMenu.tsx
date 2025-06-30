
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Wrench, Car, Truck, Clipboard, Building } from "lucide-react";
import { Link } from "react-router-dom";
import {
  naprawyPowypadkoweItems,
  autoZastepczeItems,
  pomocDrogowaItems,
  likwidacjaSzkodItems,
  obslugaKompleksowaItems,
} from "./navigation/NewNavigationStructure";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const MenuSection = ({ 
    title, 
    items, 
    icon: Icon 
  }: { 
    title: string; 
    items: any[]; 
    icon: any;
  }) => (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <Icon className="w-5 h-5 mr-2 text-autoram-red" />
        <p className="font-bold text-autoram-text text-base">{title}</p>
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden text-autoram-text hover:bg-autoram-red hover:text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white border-gray-200">
        <div className="flex flex-col space-y-6 mt-8">
          {/* Strona główna */}
          <div className="mb-4">
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-base font-medium text-autoram-text hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5 mr-2" />
              Strona główna
            </Link>
          </div>

          {/* Naprawy powypadkowe */}
          <MenuSection
            title="Naprawy powypadkowe"
            items={naprawyPowypadkoweItems}
            icon={Wrench}
          />

          {/* Auto zastępcze */}
          <MenuSection
            title="Auto zastępcze"
            items={autoZastepczeItems}
            icon={Car}
          />

          {/* Pomoc drogowa */}
          <MenuSection
            title="Pomoc drogowa"
            items={pomocDrogowaItems}
            icon={Truck}
          />

          {/* Likwidacja szkód */}
          <MenuSection
            title="Likwidacja szkód"
            items={likwidacjaSzkodItems}
            icon={Clipboard}
          />

          {/* Obsługa kompleksowa */}
          <MenuSection
            title="Obsługa kompleksowa"
            items={obslugaKompleksowaItems}
            icon={Building}
          />

          {/* Poradnik */}
          <div className="mb-4">
            <Link
              to="/blog"
              className="block px-4 py-2 text-base font-medium text-autoram-text hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Poradnik
            </Link>
          </div>

          {/* Kontakt */}
          <div className="mb-4">
            <Link
              to="/kontakt"
              className="block px-4 py-2 text-base font-medium text-autoram-text hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm font-semibold text-autoram-text mb-2">Telefon 24/7</p>
            <p className="text-lg font-bold text-autoram-red">123-456-789</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
