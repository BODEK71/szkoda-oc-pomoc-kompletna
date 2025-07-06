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

// Export individual city arrays for all main cities
export const centrum_boleslawiccItems = cityUslugiKompleksoweItemsMap.get('boleslawiec') || [];
export const centrum_bydgoszczItems = cityUslugiKompleksoweItemsMap.get('bydgoszcz') || [];
export const centrum_dzierzoniowItems = cityUslugiKompleksoweItemsMap.get('dzierzoniow') || [];
export const centrum_glogowItems = cityUslugiKompleksoweItemsMap.get('glogow') || [];
export const centrum_gorzowWielkopolskiItems = cityUslugiKompleksoweItemsMap.get('gorzow-wielkopolski') || [];
export const centrum_jeleniaGoraItems = cityUslugiKompleksoweItemsMap.get('jelenia-gora') || [];
export const centrum_kaliszItems = cityUslugiKompleksoweItemsMap.get('kalisz') || [];
export const centrum_koninItems = cityUslugiKompleksoweItemsMap.get('konin') || [];
export const centrum_koszalinItems = cityUslugiKompleksoweItemsMap.get('koszalin') || [];
export const centrum_legnicaItems = cityUslugiKompleksoweItemsMap.get('legnica') || [];
export const centrum_lesznoItems = cityUslugiKompleksoweItemsMap.get('leszno') || [];
export const centrum_lubinItems = cityUslugiKompleksoweItemsMap.get('lubin') || [];
export const centrum_opoleItems = cityUslugiKompleksoweItemsMap.get('opole') || [];
export const centrum_pilaItems = cityUslugiKompleksoweItemsMap.get('pila') || [];
export const centrum_poznanItems = cityUslugiKompleksoweItemsMap.get('poznan') || [];
export const centrum_slupskItems = cityUslugiKompleksoweItemsMap.get('slupsk') || [];
export const centrum_szczecinItems = cityUslugiKompleksoweItemsMap.get('szczecin') || [];
export const centrum_swidnicaItems = cityUslugiKompleksoweItemsMap.get('swidnica') || [];
export const centrum_walbrzychItems = cityUslugiKompleksoweItemsMap.get('walbrzych') || [];
export const centrum_wroclawItems = cityUslugiKompleksoweItemsMap.get('wroclaw') || [];
export const centrum_zielonaGoraItems = cityUslugiKompleksoweItemsMap.get('zielona-gora') || [];
export const centrum_zaryItems = cityUslugiKompleksoweItemsMap.get('zary') || [];

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

// For backward compatibility, keep old exports pointing to new cities
export const centrum_wolsztynItems = centrum_poznanItems; // Fallback to Poznań
export const centrum_nowyTomyslItems = centrum_poznanItems; // Fallback to Poznań
export const centrum_slawaItems = centrum_zielonaGoraItems; // Fallback to Zielona Góra
export const centrum_koscianItems = centrum_poznanItems; // Fallback to Poznań
export const centrum_szamotulyItems = centrum_poznanItems; // Fallback to Poznań
export const centrum_miedzyrzeczItems = centrum_gorzowWielkopolskiItems; // Fallback to Gorzów Wielkopolski
