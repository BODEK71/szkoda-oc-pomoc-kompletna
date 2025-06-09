
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
import { Link } from "react-router-dom";
import {
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
} from "../NavigationItems";

interface WynajemMenuProps {
  isActive: boolean;
}

const WynajemMenu = ({ isActive }: WynajemMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${
            isActive
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
  );
};

export default WynajemMenu;
