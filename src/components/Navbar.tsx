
import { useState, useEffect } from "react";
import NavbarHeader from "./navbar/NavbarHeader";
import MobileMenu from "./navbar/MobileMenu";
import DesktopMenu from "./navbar/DesktopMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top line - Logo, Company Name, Contact */}
        <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2'}`}>
          <NavbarHeader isScrolled={isScrolled} />
        </div>
        
        {/* Mobile menu trigger */}
        <div className="lg:hidden absolute top-4 right-4">
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Bottom line - Navigation Menu */}
        <div className={`transition-all duration-300 ${isScrolled ? 'pb-2' : 'pb-2'}`}>
          <DesktopMenu isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
