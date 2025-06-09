
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
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  obslugaSzkodyItems,
  lokalizacjaItems,
  naprawyPowypadkoweItems,
  uslugiBlacharsKieItems,
  lakierowaniePowypadkoweItems,
  lakierowanieElementowItems,
  renowacjaLakieruItems,
  mechanikaPowypadkowaItems,
  serwisSilnikaItems,
  ukladySamochodowe,
  diagnostykaItems,
  przegladyItems,
  wynajemItems,
  pomocDrogowaItems,
  poradnikItems,
  getAllNaprawyItems
} from "./NavigationItems";

const DesktopMenu = () => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  const isActiveObslugaSzkody = () => {
    return isActiveSection(obslugaSzkodyItems) || isActiveSection(lokalizacjaItems);
  };

  const isActiveNaprawy = () => {
    return isActiveSection(getAllNaprawyItems());
  };

  return (
    <div className="hidden lg:flex items-center justify-center h-16">
      <div className="flex items-center space-x-1">
        {/* Obsługa szkód ubezpieczeniowych */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveObslugaSzkody()
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Obsługa szkód ubezpieczeniowych
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
            {obslugaSzkodyItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Lokalizacja
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[200px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {lokalizacjaItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Naprawy pojazdów */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveNaprawy()
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Naprawy pojazdów
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[400px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
            {/* 🚗 NAPRAWY POWYPADKOWE */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🚗 Naprawy Powypadkowe
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Naprawy Bezgotówkowe z OC
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg max-h-80 overflow-y-auto">
                {naprawyPowypadkoweItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Usługi Blacharskie
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg max-h-80 overflow-y-auto">
                {uslugiBlacharsKieItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            {/* 🎨 LAKIEROWANIE I MALOWANIE */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🎨 Lakierowanie i Malowanie
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Lakierowanie Powypadkowe
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {lakierowaniePowypadkoweItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Lakierowanie Elementów
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {lakierowanieElementowItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Renowacja i Naprawa Lakieru
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {renowacjaLakieruItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            {/* 🔧 MECHANIKA SAMOCHODOWA */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🔧 Mechanika Samochodowa
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Mechanika Powypadkowa
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {mechanikaPowypadkowaItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Serwis i Naprawa Silnika
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {serwisSilnikaItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Układy Samochodowe
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {ukladySamochodowe.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Diagnostyka i Serwis
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {diagnostykaItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            {/* 📋 PRZEGLĄDY I KONTROLE */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              📋 Przeglądy i Kontrole
            </div>
            {przegladyItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Wynajem pojazdów */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveSection(wynajemItems)
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Wynajem pojazdów
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
            {wynajemItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Pomoc drogowa */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveSection(pomocDrogowaItems)
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Pomoc drogowa
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
            {pomocDrogowaItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Poradnik */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveSection(poradnikItems)
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Poradnik
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50">
            {poradnikItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Kontakt */}
        <Link
          to="/kontakt"
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            isActivePath("/kontakt")
              ? "bg-autoram-red text-white"
              : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
          }`}
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
