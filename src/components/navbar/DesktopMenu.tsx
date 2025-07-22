
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Building, Truck, Wrench, Car, Clipboard } from "lucide-react";
import {
  obslugaKompleksowaItems,
  pomocDrogowaItems,
  naprawyPowypadkoweItems,
  autoZastepczeItems,
  likwidacjaSzkodItems,
} from "./navigation/NewNavigationStructure";
import { cities } from "@/config/cities";

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

  const isActiveObslugaKompleksowa = () => {
    // Check regular items
    const hasActiveItem = obslugaKompleksowaItems.some(item => isActivePath(item.href));
    // Check city-specific items
    const hasCityItem = cities.some(city => isActivePath(`/centrum-likwidacji-szkod-${city.slug}`));
    return hasActiveItem || hasCityItem;
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
        {/* Obsługa kompleksowa with submenu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`${menuItemClass(isActiveObslugaKompleksowa())} flex items-center`}
            >
              <Building className="w-4 h-4 mr-2" />
              Obsługa kompleksowa
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[350px] bg-white border border-gray-200 rounded-xl shadow-lg z-50">
            {obslugaKompleksowaItems.map((item, index) => (
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
            
            <DropdownMenuSeparator />
            
            {/* Regionalne centra likwidacji szkód submenu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-gray-700 hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                Regionalne centra likwidacji szkód
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[350px] bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                {cities.map((city) => (
                  <DropdownMenuItem key={city.slug} asChild>
                    <Link
                      to={`/centrum-likwidacji-szkod-${city.slug}`}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-autoram-red hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      Centrum likwidacji szkód {city.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Pomoc drogowa */}
        <MenuDropdown
          title="Pomoc drogowa"
          items={pomocDrogowaItems}
          icon={Truck}
          isActive={isActiveSection(pomocDrogowaItems)}
        />

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

        {/* Likwidacja szkód */}
        <MenuDropdown
          title="Likwidacja szkód"
          items={likwidacjaSzkodItems}
          icon={Clipboard}
          isActive={isActiveSection(likwidacjaSzkodItems)}
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
