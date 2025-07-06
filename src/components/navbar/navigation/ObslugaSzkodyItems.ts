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

// Export individual city arrays for main cities
export const boleslawiecSzkodyItems = cityItemsMap.get('boleslawiec') || [];
export const bydgoszczSzkodyItems = cityItemsMap.get('bydgoszcz') || [];
export const dzierzoniowSzkodyItems = cityItemsMap.get('dzierzoniow') || [];
export const glogowSzkodyItems = cityItemsMap.get('glogow') || [];
export const gorzowWielkopolskiSzkodyItems = cityItemsMap.get('gorzow-wielkopolski') || [];
export const jeleniaGoraSzkodyItems = cityItemsMap.get('jelenia-gora') || [];
export const kaliszSzkodyItems = cityItemsMap.get('kalisz') || [];
export const koninSzkodyItems = cityItemsMap.get('konin') || [];
export const koszalinSzkodyItems = cityItemsMap.get('koszalin') || [];
export const legnicaSzkodyItems = cityItemsMap.get('legnica') || [];
export const lesznoSzkodyItems = cityItemsMap.get('leszno') || [];
export const lubinSzkodyItems = cityItemsMap.get('lubin') || [];
export const opoleSzkodyItems = cityItemsMap.get('opole') || [];
export const pilaSzkodyItems = cityItemsMap.get('pila') || [];
export const poznanSzkodyItems = cityItemsMap.get('poznan') || [];
export const slupskSzkodyItems = cityItemsMap.get('slupsk') || [];
export const szczecinSzkodyItems = cityItemsMap.get('szczecin') || [];
export const swidnicaSzkodyItems = cityItemsMap.get('swidnica') || [];
export const walbrzychSzkodyItems = cityItemsMap.get('walbrzych') || [];
export const wroclawSzkodyItems = cityItemsMap.get('wroclaw') || [];
export const zielonaGoraSzkodyItems = cityItemsMap.get('zielona-gora') || [];
export const zarySzkodyItems = cityItemsMap.get('zary') || [];

// Generate all city items map for dynamic access
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

// For backward compatibility, keep old exports pointing to new cities
export const wolsztynSzkodyItems = poznanSzkodyItems; // Fallback to Poznań
export const nowyTomyslSzkodyItems = poznanSzkodyItems; // Fallback to Poznań
export const slawaSzkodyItems = zielonaGoraSzkodyItems; // Fallback to Zielona Góra
export const koscianSzkodyItems = poznanSzkodyItems; // Fallback to Poznań
export const szamotulySzkodyItems = poznanSzkodyItems; // Fallback to Poznań
export const miedzyrzeczSzkodyItems = gorzowWielkopolskiSzkodyItems; // Fallback to Gorzów Wielkopolski
