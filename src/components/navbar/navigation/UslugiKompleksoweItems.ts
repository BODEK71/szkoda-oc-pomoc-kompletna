
import { cities, generateUslugiKompleksoweItems } from '@/config/cities';

// Kompleksowa obsługa powypadkowa - główne elementy
export const kompleksowaObslugaPowypadkowaItems = [
  {
    name: "Kompleksowa obsługa powypadkowa",
    href: "/kompleksowa-obsluga-powypadkowa"
  },
  {
    name: "Centrum pomocy po wypadku",
    href: "/centrum-pomocy-po-wypadku"
  },
  {
    name: "Centrum napraw powypadkowych",
    href: "/centrum-napraw-powypadkowych"
  },
  {
    name: "Pełna obsługa poszkodowanych",
    href: "/pelna-obsluga-poszkodowanych"
  }
];

// Pakiety usług
export const pakietyUslugItems = [
  {
    name: "Pakiet usług powypadkowych",
    href: "/pakiet-uslug-powypadkowych"
  },
  {
    name: "Wszystko z jednego miejsca",
    href: "/wszystko-z-jednego-miejsca"
  },
  {
    name: "Obsługa od A do Z",
    href: "/obsluga-od-a-do-z"
  }
];

// CENTRA LOKALNE - Generate from cities config
const cityUslugiKompleksoweItemsMap = new Map();
cities.forEach(city => {
  const items = generateUslugiKompleksoweItems(city);
  cityUslugiKompleksoweItemsMap.set(city.slug, items);
});

// Export individual city arrays for backward compatibility
export const centrum_wolsztynItems = cityUslugiKompleksoweItemsMap.get('wolsztyn') || [];
export const centrum_poznanItems = cityUslugiKompleksoweItemsMap.get('poznan') || [];
export const centrum_zielonaGoraItems = cityUslugiKompleksoweItemsMap.get('zielona-gora') || [];
export const centrum_nowyTomyslItems = cityUslugiKompleksoweItemsMap.get('nowy-tomysl') || [];
export const centrum_slawaItems = cityUslugiKompleksoweItemsMap.get('slawa') || [];
export const centrum_lesznoItems = cityUslugiKompleksoweItemsMap.get('leszno') || [];
export const centrum_glogowItems = cityUslugiKompleksoweItemsMap.get('glogow') || [];
export const centrum_koscianItems = cityUslugiKompleksoweItemsMap.get('koscian') || [];
export const centrum_szamotulyItems = cityUslugiKompleksoweItemsMap.get('szamotuly') || [];
export const centrum_miedzyrzeczItems = cityUslugiKompleksoweItemsMap.get('miedzyrzecz') || [];

// Generate all new city items
export const allCityUslugiKompleksoweItems = cityUslugiKompleksoweItemsMap;

// Funkcja pomocnicza do agregacji wszystkich elementów usług kompleksowych
export const getAllUslugiKompleksoweItems = () => {
  return [
    ...kompleksowaObslugaPowypadkowaItems,
    ...pakietyUslugItems,
    ...Array.from(cityUslugiKompleksoweItemsMap.values()).flat()
  ];
};
