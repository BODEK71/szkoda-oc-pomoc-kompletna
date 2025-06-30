
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Home, Wrench, Car, Truck, Clipboard, Building } from "lucide-react";
import {
  naprawyPowypadkoweItems,
  autoZastepczeItems,
  pomocDrogowaItems,
  likwidacjaSzkodItems,
  obslugaKompleksowaItems,
} from "./navigation/NewNavigationStructure";

interface DesktopMenuProps {
  isScrolled?: boolean;
}

const DesktopMenu = ({ isScrolled = false }: DesktopMenuProps) => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  const menuItemClass = (isActive: boolean) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
    isActive
      ? "bg-autoram-red text-white"
      : "text-autoram-text hover:text-autoram-red hover:bg-gray-100"
  } ${isScrolled ? 'text-sm' : 'text-sm'}`;

  const MenuDropdown = ({ 
    title, 
    items, 
    icon: Icon, 
    isActive 
  }: { 
    title: string; 
    items: any[]; 
    icon: any; 
    isActive: boolean;
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`${menuItemClass(isActive)} flex items-center`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {title}
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[300px] bg-white border border-gray-200 rounded-xl shadow-lg z-50">
        {items.map((item, index) => (
          <div key={item.name}>
            {index === 1 && <DropdownMenuSeparator />}
            <DropdownMenuItem asChild>
              <Link
                to={item.href}
                className="px-4 py-3 text-sm text-gray-700 hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors cursor-pointer w-full"
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="flex items-center space-x-1">
        {/* Strona główna */}
        <Link
          to="/"
          className={`${menuItemClass(isActivePath("/"))} flex items-center`}
        >
          <Home className="w-4 h-4 mr-2" />
          Strona główna
        </Link>

        {/* Naprawy powypadkowe */}
        <MenuDropdown
          title="Naprawy powypadkowe"
          items={naprawyPowypadkoweItems}
          icon={Wrench}
          isActive={isActiveSection(naprawyPowypadkoweItems)}
        />

        {/* Auto zastępcze */}
        <MenuDropdown
          title="Auto zastępcze"
          items={autoZastepczeItems}
          icon={Car}
          isActive={isActiveSection(autoZastepczeItems)}
        />

        {/* Pomoc drogowa */}
        <MenuDropdown
          title="Pomoc drogowa"
          items={pomocDrogowaItems}
          icon={Truck}
          isActive={isActiveSection(pomocDrogowaItems)}
        />

        {/* Likwidacja szkód */}
        <MenuDropdown
          title="Likwidacja szkód"
          items={likwidacjaSzkodItems}
          icon={Clipboard}
          isActive={isActiveSection(likwidacjaSzkodItems)}
        />

        {/* Obsługa kompleksowa */}
        <MenuDropdown
          title="Obsługa kompleksowa"
          items={obslugaKompleksowaItems}
          icon={Building}
          isActive={isActiveSection(obslugaKompleksowaItems)}
        />

        {/* Poradnik */}
        <Link
          to="/blog"
          className={menuItemClass(isActivePath("/blog"))}
        >
          Poradnik
        </Link>

        {/* Kontakt */}
        <Link
          to="/kontakt"
          className={menuItemClass(isActivePath("/kontakt"))}
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
