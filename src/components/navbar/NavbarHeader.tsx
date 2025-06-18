
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarHeaderProps {
  isScrolled?: boolean;
}

const NavbarHeader = ({ isScrolled = false }: NavbarHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-6">
        <div className={`bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
          isScrolled ? 'w-12 h-12' : 'w-14 h-14'
        }`}>
          <span className={`text-white font-bold transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-xl'
          }`}>AR</span>
        </div>
        <div>
          <span className={`font-bold text-white transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>Auto-Ram</span>
          <p className={`text-autoram-gold font-medium transition-all duration-300 ${
            isScrolled ? 'text-xs' : 'text-sm'
          }`}>Grodzisk Wielkopolski - Obsługa szkód z OC</p>
        </div>
      </Link>

      <div className="hidden lg:flex items-center space-x-6">
        <div className={`flex items-center space-x-3 text-autoram-gold-light transition-all duration-300 ${
          isScrolled ? 'text-sm' : 'text-base'
        }`}>
          <Phone className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
          <span className="font-semibold">24/7: 123-456-789</span>
        </div>
        <Button className={`bg-autoram-gold hover:bg-autoram-gold-dark text-black font-semibold transition-all duration-300 ${
          isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
        }`}>
          <Phone className={`mr-2 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
          Zadzwoń teraz
        </Button>
      </div>
    </div>
  );
};

export default NavbarHeader;
