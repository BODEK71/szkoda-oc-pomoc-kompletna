
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
} from "../NavigationItems";

interface NaprawyMenuProps {
  isActive: boolean;
}

const NaprawyMenu = ({ isActive }: NaprawyMenuProps) => {
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
  );
};

export default NaprawyMenu;
