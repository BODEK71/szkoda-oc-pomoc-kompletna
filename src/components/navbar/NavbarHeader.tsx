
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
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
    </div>
  );
};

export default NavbarHeader;
