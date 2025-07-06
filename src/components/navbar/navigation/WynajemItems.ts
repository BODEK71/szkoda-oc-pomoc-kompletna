import { cities, generateWynajemItems } from '@/config/cities';

// WYNAJEM POJAZDÓW ZASTĘPCZYCH
export const samochodZastepczyZOCItems = [
  { name: "Samochód zastępczy z OC sprawcy", href: "/samochod-zastepcze-z-oc-sprawcy" },
  { name: "Wynajem pojazdów zastępczych z OC sprawcy", href: "/wynajem-pojazdow-zastepczych-z-oc-sprawcy" },
  { name: "Wynajem auta z OC sprawcy", href: "/wynajem-auta-z-oc-sprawcy" },
  { name: "Auto zastępcze z OC sprawcy", href: "/auto-zastepcze-z-oc-sprawcy" },
  { name: "Wynajem pojazdu z OC sprawcy", href: "/wynajem-pojazdu-z-oc-sprawcy" },
  { name: "Wynajem samochodu zastępczego z OC sprawcy", href: "/wynajem-samochodu-zastepczego-z-oc-sprawcy" },
  { name: "Samochód zastępczy z ubezpieczenia", href: "/samochod-zastepcze-z-ubezpieczenia" },
  { name: "Pojazd zastępczy z OC", href: "/pojazd-zastepcze-z-oc" },
];

export const wynajemBezgotowkowyItems = [
  { name: "Auto zastępcze bezgotówko", href: "/auto-zastepcze-bezgotowko" },
  { name: "Auto zastępcze z OC sprawcy bezgotówkowo", href: "/auto-zastepcze-z-oc-sprawcy-bezgotowkowo" },
  { name: "Wynajęcie pojazdów OC sprawcy", href: "/wynajecie-pojazdow-oc-sprawcy" },
  { name: "Auto zastępcze ze szkody sprawcy", href: "/auto-zastepcze-ze-szkody-sprawcy" },
];

export const rodzajePojazdowZastepczychItems = [
  { name: "Wynajem busa z OC sprawcy", href: "/wynajem-busa-z-oc-sprawcy" },
  { name: "Wynajem pojazdów specjalistycznych z OC sprawcy", href: "/wynajem-pojazdow-specjalistycznych-z-oc-sprawcy" },
  { name: "Pojazd zastępczy z OC sprawcy dla firm", href: "/pojazd-zastepcze-z-oc-sprawcy-dla-firm" },
];

export const pojazdyNaCzasNaprawyItems = [
  { name: "Pojazd zastępczy na czas naprawy", href: "/pojazd-zastepcze-na-czas-naprawy" },
  { name: "Samochód zastępczy na czas naprawy", href: "/samochod-zastepcze-na-czas-naprawy" },
  { name: "Auto na czas szkody z OC", href: "/auto-na-czas-szkody-z-oc" },
  { name: "Samochód na czas likwidacji szkody", href: "/samochod-na-czas-likwidacji-szkody" },
];

export const pojazdyPoWypadkuItems = [
  { name: "Auto zastępcze po wypadku z OC sprawcy", href: "/auto-zastepcze-po-wypadku-z-oc-sprawcy" },
  { name: "Wypożyczalnia współpracująca z ubezpieczalniami", href: "/wypozyczalnia-wspolpracujaca-z-ubezpieczalniami" },
];

export const parametryWynajmuItems = [
  { name: "Wynajem auta z OC sprawcy bez limitu kilometrów", href: "/wynajem-auta-z-oc-sprawcy-bez-limitu-kilometrow" },
  { name: "Czas wynajmu auta z OC sprawcy", href: "/czas-wynajmu-auta-z-oc-sprawcy" },
  { name: "Koszt wynajmu auta z OC sprawcy", href: "/koszt-wynajmu-auta-z-oc-sprawcy" },
];

// WYNAJEM LOKALIZACJA - Generate from cities config
const cityWynajemItemsMap = new Map();
cities.forEach(city => {
  const items = generateWynajemItems(city);
  cityWynajemItemsMap.set(city.slug, items);
});

// Export individual city arrays for all main cities
export const wynajemLokalizacjaBoleslawiccItems = cityWynajemItemsMap.get('boleslawiec') || [];
export const wynajemLokalizacjaBydgoszczItems = cityWynajemItemsMap.get('bydgoszcz') || [];
export const wynajemLokalizacjaDzierzoniowItems = cityWynajemItemsMap.get('dzierzoniow') || [];
export const wynajemLokalizacjaGlogowItems = cityWynajemItemsMap.get('glogow') || [];
export const wynajemLokalizacjaGorzowWielkopolskiItems = cityWynajemItemsMap.get('gorzow-wielkopolski') || [];
export const wynajemLokalizacjaJeleniaGoraItems = cityWynajemItemsMap.get('jelenia-gora') || [];
export const wynajemLokalizacjaKaliszItems = cityWynajemItemsMap.get('kalisz') || [];
export const wynajemLokalizacjaKoninItems = cityWynajemItemsMap.get('konin') || [];
export const wynajemLokalizacjaKoszalinItems = cityWynajemItemsMap.get('koszalin') || [];
export const wynajemLokalizacjaLegnicaItems = cityWynajemItemsMap.get('legnica') || [];
export const wynajemLokalizacjaLesznoItems = cityWynajemItemsMap.get('leszno') || [];
export const wynajemLokalizacjaLubinItems = cityWynajemItemsMap.get('lubin') || [];
export const wynajemLokalizacjaOpoleItems = cityWynajemItemsMap.get('opole') || [];
export const wynajemLokalizacjaPilaItems = cityWynajemItemsMap.get('pila') || [];
export const wynajemLokalizacjaPoznanItems = cityWynajemItemsMap.get('poznan') || [];
export const wynajemLokalizacjaSlupskItems = cityWynajemItemsMap.get('slupsk') || [];
export const wynajemLokalizacjaSzczecinItems = cityWynajemItemsMap.get('szczecin') || [];
export const wynajemLokalizacjaSwidnicaItems = cityWynajemItemsMap.get('swidnica') || [];
export const wynajemLokalizacjaWalbrzychItems = cityWynajemItemsMap.get('walbrzych') || [];
export const wynajemLokalizacjaWroclawItems = cityWynajemItemsMap.get('wroclaw') || [];
export const wynajemLokalizacjaZielonaGoraItems = cityWynajemItemsMap.get('zielona-gora') || [];
export const wynajemLokalizacjaZaryItems = cityWynajemItemsMap.get('zary') || [];

// Generate all new city items
export const allCityWynajemItems = cityWynajemItemsMap;

// LEGACY - STARE ELEMENTY WYNAJMU (zachowane dla kompatybilności)
export const wynajemItems = [
  { name: "Auto zastępcze z OC", href: "/auto-zastepcze-z-oc" },
  { name: "Auto zastępcze Poznań", href: "/auto-zastepcze-z-oc-poznan" },
  { name: "Wynajem aut z OC sprawcy", href: "/auto-zastepcze-z-oc" },
];

export const getAllWynajemItems = () => {
  return [
    ...samochodZastepczyZOCItems,
    ...wynajemBezgotowkowyItems,
    ...rodzajePojazdowZastepczychItems,
    ...pojazdyNaCzasNaprawyItems,
    ...pojazdyPoWypadkuItems,
    ...parametryWynajmuItems,
    ...Array.from(cityWynajemItemsMap.values()).flat()
  ];
};

// For backward compatibility, keep old exports pointing to new cities
export const wynajemLokalizacjaWolsztynItems = wynajemLokalizacjaPoznanItems; // Fallback to Poznań
export const wynajemLokalizacjaNowyTomyslItems = wynajemLokalizacjaPoznanItems; // Fallback to Poznań
export const wynajemLokalizacjaSlawaItems = wynajemLokalizacjaZielonaGoraItems; // Fallback to Zielona Góra
export const wynajemLokalizacjaKoscianItems = wynajemLokalizacjaPoznanItems; // Fallback to Poznań
export const wynajemLokalizacjaSzamotulyItems = wynajemLokalizacjaPoznanItems; // Fallback to Poznań
export const wynajemLokalizacjaMiedzyrzeczItems = wynajemLokalizacjaGorzowWielkopolskiItems; // Fallback to Gorzów Wielkopolski
