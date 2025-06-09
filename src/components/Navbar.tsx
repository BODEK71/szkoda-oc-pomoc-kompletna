
import { useState } from "react";
import NavbarHeader from "./navbar/NavbarHeader";
import MobileMenu from "./navbar/MobileMenu";
import DesktopMenu from "./navbar/DesktopMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-autoram-white shadow-lg border-b-2 border-autoram-red sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top line - Logo, Company Name, Contact */}
        <NavbarHeader />
        
        {/* Mobile menu trigger */}
        <div className="lg:hidden absolute top-6 right-4">
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Bottom line - Navigation Menu */}
        <DesktopMenu />
      </div>
    </nav>
  );
};

export default Navbar;
