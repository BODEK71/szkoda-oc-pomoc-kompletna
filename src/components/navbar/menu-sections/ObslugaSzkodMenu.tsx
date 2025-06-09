
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
  likwidacjaSzkodKomunikacyjnychItems,
  zgaszanieSzkodItems,
  odszkodowaniaItems,
  wycenaSzkodPowypadkowychItems,
  wolsztynSzkodyItems,
  poznanSzkodyItems,
  zielonaGoraSzkodyItems,
  nowyTomyslSzkodyItems,
  slawaSzkodyItems,
  lesznoSzkodyItems,
  glogowSzkodyItems,
  koscianSzkodyItems,
  szamotulySzkodyItems,
  miedzyrzeczSzkodyItems,
} from "../NavigationItems";

interface ObslugaSzkodMenuProps {
  isActive: boolean;
}

const ObslugaSzkodMenu = ({ isActive }: ObslugaSzkodMenuProps) => {
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
          Obsługa szkód ubezpieczeniowych
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[400px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
        {/* 📋 LIKWIDACJA SZKÓD */}
        <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
          📋 Likwidacja Szkód
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
            Likwidacja Szkód Komunikacyjnych
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg max-h-80 overflow-y-auto">
            {likwidacjaSzkodKomunikacyjnychItems.map((item) => (
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
            Zgłaszanie Szkód
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
            {zgaszanieSzkodItems.map((item) => (
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
            Odszkodowania
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[300px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
            {odszkodowaniaItems.map((item) => (
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

        {/* 💰 WYCENA I KOSZTORYSY */}
        <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
          💰 Wycena i Kosztorysy
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
            Wycena Szkód Powypadkowych
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[350px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
            {wycenaSzkodPowypadkowychItems.map((item) => (
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

        {/* 📍 OBSŁUGA SZKÓD LOKALNA */}
        <div className="px-4 py-2 text-xs font-semibold text-autoram-gold uppercase tracking-wide">
          📍 Obsługa Szkód Lokalna
        </div>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="px-4 py-3 text-sm text-autoram-text hover:text-autoram-red hover:bg-autoram-gray rounded-lg transition-colors cursor-pointer">
            Wolsztyn
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-[250px] bg-autoram-white border border-autoram-red rounded-xl shadow-lg">
            {wolsztynSzkodyItems.map((item) => (
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
            {poznanSzkodyItems.map((item) => (
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
            {zielonaGoraSzkodyItems.map((item) => (
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
            {nowyTomyslSzkodyItems.map((item) => (
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
            {slawaSzkodyItems.map((item) => (
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
            {lesznoSzkodyItems.map((item) => (
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
            {glogowSzkodyItems.map((item) => (
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
            {koscianSzkodyItems.map((item) => (
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
            {szamotulySzkodyItems.map((item) => (
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
            {miedzyrzeczSzkodyItems.map((item) => (
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

export default ObslugaSzkodMenu;
