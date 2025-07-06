import { cities, generatePomocDrogowaItems } from '@/config/cities';

// POMOC DROGOWA I HOLOWANIE
export const pomocDrogowa24Items = [
  { name: "Pomoc drogowa", href: "/pomoc-drogowa" },
  { name: "Pomoc drogowa 24h", href: "/pomoc-drogowa-24h" },
  { name: "Pomoc drogowa 24/7", href: "/pomoc-drogowa-24-7" },
  { name: "Laweta 24h", href: "/laweta-24h" },
  { name: "Naprawa na miejscu zdarzenia", href: "/naprawa-na-miejscu-zdarzenia" },
];

export const holowaniePojazdowItems = [
  { name: "Holowanie samochodu", href: "/holowanie-samochodu" },
  { name: "Holowanie", href: "/holowanie" },
  { name: "Holowanie samochodu osobowego", href: "/holowanie-samochodu-osobowego" },
  { name: "Holowanie busów i pojazdów specjalistycznych", href: "/holowanie-busow-i-pojazdow-specjalistycznych" },
  { name: "Ściąganie samochodu z drogi", href: "/sciaganie-samochodu-z-drogi" },
];

export const uslugiLawetaItems = [
  { name: "Laweta", href: "/laweta" },
  { name: "Auto laweta", href: "/auto-laweta" },
  { name: "Usługi lawetą", href: "/uslugi-laweta" },
  { name: "Podstawienie lawety", href: "/podstawienie-lawety" },
];

export const transportStandardowyItems = [
  { name: "Transport pojazdów", href: "/transport-pojazdow" },
  { name: "Transport samochodu", href: "/transport-samochodu" },
  { name: "Przewóz uszkodzonego pojazdu", href: "/przewoz-uszkodzonego-pojazdu" },
];

export const transportSpecjalistycznyItems = [
  { name: "Pomoc drogowa na autostradzie", href: "/pomoc-drogowa-na-autostradzie" },
  { name: "Transport aut powypadkowych", href: "/transport-aut-powypadkowych" },
];

export const holowaniePoWypadkuItems = [
  { name: "Holowanie auta po wypadku", href: "/holowanie-auta-po-wypadku" },
  { name: "Holowanie po kolizji", href: "/holowanie-po-kolizji" },
  { name: "Holowanie po awarii", href: "/holowanie-po-awarii" },
  { name: "Usuwanie aut z miejsca kolizji", href: "/usuwanie-aut-z-miejsca-kolizji" },
  { name: "Usunięcie pojazdu z miejsca wypadku", href: "/usuniecie-pojazdu-z-miejsca-wypadku" },
];

export const holowanieZOCItems = [
  { name: "Holowanie z OC sprawcy", href: "/holowanie-z-oc-sprawcy" },
  { name: "Transport pojazdu z OC sprawcy", href: "/transport-pojazdu-z-oc-sprawcy" },
  { name: "Bezpłatne holowanie", href: "/bezplatne-holowanie" },
];

// POMOC DROGOWA LOKALNA - Generate from cities config
const cityPomocDrogowaItemsMap = new Map();
cities.forEach(city => {
  const items = generatePomocDrogowaItems(city);
  cityPomocDrogowaItemsMap.set(city.slug, items);
});

// Export individual city arrays for all main cities
export const pomocDrogowaBoleslawiccItems = cityPomocDrogowaItemsMap.get('boleslawiec') || [];
export const pomocDrogowaBydgoszczItems = cityPomocDrogowaItemsMap.get('bydgoszcz') || [];
export const pomocDrogowaDzierzoniowItems = cityPomocDrogowaItemsMap.get('dzierzoniow') || [];
export const pomocDrogowaGlogowItems = cityPomocDrogowaItemsMap.get('glogow') || [];
export const pomocDrogowaGorzowWielkopolskiItems = cityPomocDrogowaItemsMap.get('gorzow-wielkopolski') || [];
export const pomocDrogowaJeleniaGoraItems = cityPomocDrogowaItemsMap.get('jelenia-gora') || [];
export const pomocDrogowaKaliszItems = cityPomocDrogowaItemsMap.get('kalisz') || [];
export const pomocDrogowaKoninItems = cityPomocDrogowaItemsMap.get('konin') || [];
export const pomocDrogowaKoszalinItems = cityPomocDrogowaItemsMap.get('koszalin') || [];
export const pomocDrogowaLegnicaItems = cityPomocDrogowaItemsMap.get('legnica') || [];
export const pomocDrogowaLesznoItems = cityPomocDrogowaItemsMap.get('leszno') || [];
export const pomocDrogowaLubinItems = cityPomocDrogowaItemsMap.get('lubin') || [];
export const pomocDrogowaOpoleItems = cityPomocDrogowaItemsMap.get('opole') || [];
export const pomocDrogowaPilaItems = cityPomocDrogowaItemsMap.get('pila') || [];
export const pomocDrogowaPoznanItems = cityPomocDrogowaItemsMap.get('poznan') || [];
export const pomocDrogowaSlupskItems = cityPomocDrogowaItemsMap.get('slupsk') || [];
export const pomocDrogowaSzczecinItems = cityPomocDrogowaItemsMap.get('szczecin') || [];
export const pomocDrogowaSwidnicaItems = cityPomocDrogowaItemsMap.get('swidnica') || [];
export const pomocDrogowaWalbrzychItems = cityPomocDrogowaItemsMap.get('walbrzych') || [];
export const pomocDrogowaWroclawItems = cityPomocDrogowaItemsMap.get('wroclaw') || [];
export const pomocDrogowaZielonaGoraItems = cityPomocDrogowaItemsMap.get('zielona-gora') || [];
export const pomocDrogowaZaryItems = cityPomocDrogowaItemsMap.get('zary') || [];

// Generate all new city items
export const allCityPomocDrogowaItems = cityPomocDrogowaItemsMap;

// LEGACY - STARE ELEMENTY POMOCY DROGOWEJ (zachowane dla kompatybilności)
export const pomocDrogowaItems = [
  { name: "Pomoc drogowa 24h", href: "/pomoc-drogowa-z-oc" },
  { name: "Holowanie", href: "/pomoc-drogowa-z-oc" },
  { name: "Laweta", href: "/pomoc-drogowa-z-oc" },
];

export const getAllPomocDrogowaItems = () => {
  return [
    ...pomocDrogowa24Items,
    ...holowaniePojazdowItems,
    ...uslugiLawetaItems,
    ...transportStandardowyItems,
    ...transportSpecjalistycznyItems,
    ...holowaniePoWypadkuItems,
    ...holowanieZOCItems,
    ...Array.from(cityPomocDrogowaItemsMap.values()).flat()
  ];
};

// For backward compatibility, keep old exports pointing to new cities
export const pomocDrogowaWolsztynItems = pomocDrogowaPoznanItems; // Fallback to Poznań
export const pomocDrogowaNowyTomyslItems = pomocDrogowaPoznanItems; // Fallback to Poznań
export const pomocDrogowaSlawaItems = pomocDrogowaZielonaGoraItems; // Fallback to Zielona Góra
export const pomocDrogowaKoscianItems = pomocDrogowaPoznanItems; // Fallback to Poznań
export const pomocDrogowaSzamotulyItems = pomocDrogowaPoznanItems; // Fallback to Poznań
export const pomocDrogowaMiedzyrzeczItems = pomocDrogowaGorzowWielkopolskiItems; // Fallback to Gorzów Wielkopolski
