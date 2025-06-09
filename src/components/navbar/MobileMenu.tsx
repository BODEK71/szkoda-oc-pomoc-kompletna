
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  obslugaSzkodyItems,
  lokalizacjaItems,
  getAllNaprawyItems,
  wynajemItems,
  pomocDrogowaItems,
  poradnikItems
} from "./NavigationItems";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
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
              {getAllNaprawyItems().slice(0, 5).map((item) => (
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
  );
};

export default MobileMenu;
