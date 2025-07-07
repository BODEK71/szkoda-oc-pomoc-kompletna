
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarHeaderProps {
  isScrolled?: boolean;
}

const NavbarHeader = ({ isScrolled = false }: NavbarHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-4">
        <div className={`transition-all duration-300 ${
          isScrolled ? 'w-10 h-10' : 'w-12 h-12'
        }`}>
          <img 
            src="/lovable-uploads/ed8c5a38-cfbd-4a21-b07e-4517801a5206.png" 
            alt="Auto-Ram Logo" 
            className={`transition-all duration-300 object-contain ${
              isScrolled ? 'h-10' : 'h-12'
            }`}
          />
        </div>
        <div>
          <span className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-lg text-autoram-text' : 'text-xl text-autoram-text'
          }`}>Auto-Ram</span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center space-x-6">
        <div className={`flex items-center space-x-3 transition-all duration-300 ${
          isScrolled ? 'text-sm text-autoram-text' : 'text-base text-autoram-text'
        }`}>
          <Phone className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
          <span className="font-semibold">24/7: +48 506 066 525</span>
        </div>
        <Button className={`bg-autoram-gold hover:bg-autoram-gold-dark text-black font-semibold transition-all duration-300 ${
          isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
        }`} asChild>
          <a href="tel:+48506066525">
            <Phone className={`mr-2 transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
            Zadzwoń teraz
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavbarHeader;
