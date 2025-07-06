
import { cities, generateLikwidacjaSzkodItems } from '@/config/cities';

// LIKWIDACJA SZKÓD - Główna kategoria dla obsługi szkód ubezpieczeniowych
export const likwidacjaSzkodKomunikacyjnychItems = [
  { name: "Likwidacja szkód komunikacyjnych", href: "/likwidacja-szkod-komunikacyjnych" },
  { name: "Likwidacja szkody z OC", href: "/likwidacja-szkody-z-oc" },
  { name: "Obsługa szkody z OC", href: "/obsługa-szkody-z-oc" },
  { name: "Bezpośrednia likwidacja szkód (BLS)", href: "/blog/bezposrednia-likwidacja-szkod-bls" },
  { name: "Likwidator szkód", href: "/likwidator-szkod" },
];

export const zgaszanieSzkodItems = [
  { name: "Zgłoszenie szkody komunikacyjnej", href: "/zgloszenie-szkody-komunikacyjnej" },
  { name: "Zgłoszenie szkody ubezpieczeniowej", href: "/zgloszenie-szkody-ubezpieczeniowej" },
];

export const odszkodowaniaItems = [
  { name: "Odszkodowanie z OC sprawcy", href: "/odszkodowanie-z-oc-sprawcy" },
];

// WYCENA I KOSZTORYSY - Usługi związane z wyceną szkód
export const wycenaSzkodPowypadkowychItems = [
  { name: "Wycena szkody powypadkowej", href: "/wycena-szkody-powypadkowej" },
  { name: "Kosztorys naprawy z OC sprawcy", href: "/kosztorys-naprawy-z-oc-sprawcy" },
  { name: "Ocena uszkodzeń pojazdu", href: "/ocena-uszkodzen-pojazdu" },
];

// OBSŁUGA SZKÓD LOKALNA - Generate from cities config
const cityItemsMap = new Map();
cities.forEach(city => {
  const items = generateLikwidacjaSzkodItems(city);
  cityItemsMap.set(city.slug, items);
});

// Export individual city arrays for backward compatibility
export const wolsztynSzkodyItems = cityItemsMap.get('wolsztyn') || [];
export const poznanSzkodyItems = cityItemsMap.get('poznan') || [];
export const zielonaGoraSzkodyItems = cityItemsMap.get('zielona-gora') || [];
export const nowyTomyslSzkodyItems = cityItemsMap.get('nowy-tomysl') || [];
export const slawaSzkodyItems = cityItemsMap.get('slawa') || [];
export const lesznoSzkodyItems = cityItemsMap.get('leszno') || [];
export const glogowSzkodyItems = cityItemsMap.get('glogow') || [];
export const koscianSzkodyItems = cityItemsMap.get('koscian') || [];
export const szamotulySzkodyItems = cityItemsMap.get('szamotuly') || [];
export const miedzyrzeczSzkodyItems = cityItemsMap.get('miedzyrzecz') || [];

// Generate all new city items
export const allCitySzkodyItems = cityItemsMap;

// LEGACY - zachowane dla kompatybilności z istniejącym kodem
export const obslugaSzkodyItems = [
  { name: "Likwidacja szkód komunikacyjnych", href: "/likwidacja-szkod-komunikacyjnych" },
  { name: "Likwidacja szkody z OC", href: "/likwidacja-szkody-z-oc" },
  { name: "Obsługa szkody z OC", href: "/obsługa-szkody-z-oc" },
  { name: "Zgłoszenie szkody komunikacyjnej", href: "/zgloszenie-szkody-komunikacyjnej" },
  { name: "Zgłoszenie szkody ubezpieczeniowej", href: "/zgloszenie-szkody-ubezpieczeniowej" },
  { name: "Wycena szkody powypadkowej", href: "/wycena-szkody-powypadkowej" },
  { name: "Kosztorys naprawy z OC sprawcy", href: "/kosztorys-naprawy-z-oc-sprawcy" },
  { name: "Ocena uszkodzeń pojazdu", href: "/ocena-uszkodzen-pojazdu" },
  { name: "Bezpośrednia likwidacja szkód (BLS)", href: "/blog/bezposrednia-likwidacja-szkod-bls" },
  { name: "Odszkodowanie z OC sprawcy", href: "/odszkodowanie-z-oc-sprawcy" },
  { name: "Likwidator szkód", href: "/likwidator-szkod" },
];

export const lokalizacjaItems = cities.map(city => ({
  name: city.name,
  href: `/wycena-szkody-${city.slug}`
}));

// Funkcja pomocnicza do pobierania wszystkich elementów obsługi szkód
export const getAllObslugaSzkodyItems = () => {
  return [
    ...likwidacjaSzkodKomunikacyjnychItems,
    ...zgaszanieSzkodItems,
    ...odszkodowaniaItems,
    ...wycenaSzkodPowypadkowychItems,
  ];
};

// Funkcja pomocnicza do pobierania wszystkich lokalnych elementów szkód
export const getAllLokalneSzkodyItems = () => {
  return Array.from(cityItemsMap.values()).flat();
};
