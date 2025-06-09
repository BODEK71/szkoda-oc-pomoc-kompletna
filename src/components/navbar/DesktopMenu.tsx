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
  poradnikItems,
  getAllNaprawyItems,
  // Elementy wynajmu
  samochodZastepczyZOCItems,
  wynajemBezgotowkowyItems,
  rodzajePojazdowZastepczychItems,
  pojazdyNaCzasNaprawyItems,
  pojazdyPoWypadkuItems,
  parametryWynajmuItems,
  wynajemLokalizacjaWolsztynItems,
  wynajemLokalizacjaPoznanItems,
  wynajemLokalizacjaZielonaGoraItems,
  wynajemLokalizacjaNowyTomyslItems,
  wynajemLokalizacjaSlawaItems,
  wynajemLokalizacjaLesznoItems,
  wynajemLokalizacjaGlogowItems,
  wynajemLokalizacjaKoscianItems,
  wynajemLokalizacjaSzamotulyItems,
  wynajemLokalizacjaMiedzyrzeczItems,
  getAllWynajemItems,
  // Elementy pomocy drogowej - NOWE
  pomocDrogowa24Items,
  holowaniePojazdowItems,
  uslugiLawetaItems,
  transportStandardowyItems,
  transportSpecjalistycznyItems,
  holowaniePoWypadkuItems,
  holowanieZOCItems,
  pomocDrogowaWolsztynItems,
  pomocDrogowaPoznanItems,
  pomocDrogowaZielonaGoraItems,
  pomocDrogowaNowyTomyslItems,
  pomocDrogowaSlawaItems,
  pomocDrogowaLesznoItems,
  pomocDrogowaGlogowItems,
  pomocDrogowaKoscianItems,
  pomocDrogowaSzamotulyItems,
  pomocDrogowaMiedzyrzeczItems,
  getAllPomocDrogowaItems
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

  const isActiveWynajem = () => {
    return isActiveSection(getAllWynajemItems());
  };

  const isActivePomocDrogowa = () => {
    return isActiveSection(getAllPomocDrogowaItems());
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

        {/* Wynajem pojazdów zastępczych */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActiveWynajem()
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Wynajem pojazdów
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[400px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
            {/* 🚙 WYNAJEM POJAZDÓW ZASTĘPCZYCH */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🚙 Wynajem Pojazdów Zastępczych
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Samochody Zastępcze z OC Sprawcy
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg max-h-80 overflow-y-auto">
                {samochodZastepczyZOCItems.map((item) => (
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
                Wynajem Bezgotówkowy
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemBezgotowkowyItems.map((item) => (
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
                Rodzaje Pojazdów Zastępczych
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {rodzajePojazdowZastepczychItems.map((item) => (
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

            {/* ⏰ WYNAJEM NA CZAS NAPRAWY */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              ⏰ Wynajem na Czas Naprawy
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Pojazdy na Czas Naprawy
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pojazdyNaCzasNaprawyItems.map((item) => (
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
                Pojazdy po Wypadku
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pojazdyPoWypadkuItems.map((item) => (
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

            {/* 📋 WARUNKI WYNAJMU */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              📋 Warunki Wynajmu
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Parametry Wynajmu
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {parametryWynajmuItems.map((item) => (
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

            {/* 📍 WYNAJEM LOKALNY */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              📍 Wynajem Lokalny
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Wolsztyn
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaWolsztynItems.map((item) => (
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
                Poznań
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaPoznanItems.map((item) => (
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
                Zielona Góra
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaZielonaGoraItems.map((item) => (
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
                Nowy Tomyśl
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaNowyTomyslItems.map((item) => (
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
                Sława
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaSlawaItems.map((item) => (
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
                Leszno
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaLesznoItems.map((item) => (
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
                Głogów
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaGlogowItems.map((item) => (
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
                Kościan
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaKoscianItems.map((item) => (
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
                Szamotuły
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaSzamotulyItems.map((item) => (
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
                Międzyrzecz
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {wynajemLokalizacjaMiedzyrzeczItems.map((item) => (
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

        {/* Pomoc drogowa - NOWA ROZBUDOWANA STRUKTURA */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
                isActivePomocDrogowa()
                  ? "bg-autoram-red text-white"
                  : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
              }`}
            >
              Pomoc drogowa
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[400px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
            {/* 🚛 POMOC DROGOWA I HOLOWANIE */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🚛 Pomoc Drogowa i Holowanie
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Pomoc Drogowa 24/7
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowa24Items.map((item) => (
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
                Holowanie Pojazdów
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {holowaniePojazdowItems.map((item) => (
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
                Usługi Lawetą
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {uslugiLawetaItems.map((item) => (
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

            {/* 🚗 TRANSPORT POJAZDÓW */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              🚗 Transport Pojazdów
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Transport Standardowy
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {transportStandardowyItems.map((item) => (
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
                Transport Specjalistyczny
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {transportSpecjalistycznyItems.map((item) => (
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

            {/* 💥 HOLOWANIE POWYPADKOWE */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              💥 Holowanie Powypadkowe
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Po Wypadku i Kolizji
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {holowaniePoWypadkuItems.map((item) => (
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
                Holowanie z OC Sprawcy
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {holowanieZOCItems.map((item) => (
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

            {/* 📍 POMOC DROGOWA LOKALNA */}
            <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
              📍 Pomoc Drogowa Lokalna
            </div>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
                Wolsztyn
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaWolsztynItems.map((item) => (
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
                Poznań
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaPoznanItems.map((item) => (
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
                Zielona Góra
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaZielonaGoraItems.map((item) => (
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
                Nowy Tomyśl
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaNowyTomyslItems.map((item) => (
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
                Sława
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaSlawaItems.map((item) => (
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
                Leszno
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaLesznoItems.map((item) => (
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
                Głogów
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaGlogowItems.map((item) => (
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
                Kościan
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaKoscianItems.map((item) => (
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
                Szamotuły
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaSzamotulyItems.map((item) => (
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
                Międzyrzecz
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
                {pomocDrogowaMiedzyrzeczItems.map((item) => (
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
