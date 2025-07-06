
export interface City {
  name: string;
  slug: string;
  region?: string;
  isMainCity?: boolean;
}

export const cities: City[] = [
  { name: "Bolesławiec", slug: "boleslawiec", isMainCity: true },
  { name: "Bydgoszcz", slug: "bydgoszcz", isMainCity: true },
  { name: "Dzierżoniów", slug: "dzierzoniow", isMainCity: true },
  { name: "Głogów", slug: "glogow", isMainCity: true },
  { name: "Gorzów Wielkopolski", slug: "gorzow-wielkopolski", isMainCity: true },
  { name: "Jelenia Góra", slug: "jelenia-gora", isMainCity: true },
  { name: "Kalisz", slug: "kalisz", isMainCity: true },
  { name: "Konin", slug: "konin", isMainCity: true },
  { name: "Koszalin", slug: "koszalin", isMainCity: true },
  { name: "Legnica", slug: "legnica", isMainCity: true },
  { name: "Leszno", slug: "leszno", isMainCity: true },
  { name: "Lubin", slug: "lubin", isMainCity: true },
  { name: "Opole", slug: "opole", isMainCity: true },
  { name: "Piła", slug: "pila", isMainCity: true },
  { name: "Poznań", slug: "poznan", isMainCity: true },
  { name: "Słupsk", slug: "slupsk", isMainCity: true },
  { name: "Szczecin", slug: "szczecin", isMainCity: true },
  { name: "Świdnica", slug: "swidnica", isMainCity: true },
  { name: "Wałbrzych", slug: "walbrzych", isMainCity: true },
  { name: "Wrocław", slug: "wroclaw", isMainCity: true },
  { name: "Zielona Góra", slug: "zielona-gora", isMainCity: true },
  { name: "Żary", slug: "zary", isMainCity: true }
];

// Helper functions for generating menu items
export const generateCityItems = (baseHref: string, cityNameInHref = true) => {
  return cities.map(city => ({
    name: `${baseHref.split('/')[1].charAt(0).toUpperCase() + baseHref.split('/')[1].slice(1)} ${city.name}`,
    href: cityNameInHref ? `${baseHref}-${city.slug}` : `${baseHref}/${city.slug}`
  }));
};

export const generateLikwidacjaSzkodItems = (city: City) => [
  {
    name: `Likwidacja szkody ${city.name}`,
    href: `/likwidacja-szkody-${city.slug}`
  },
  {
    name: `Obsługa szkody OC ${city.name}`,
    href: `/obsługa-szkody-oc-${city.slug}`
  },
  {
    name: `Wycena szkody ${city.name}`,
    href: `/wycena-szkody-${city.slug}`
  }
];

export const generateWynajemItems = (city: City) => [
  {
    name: `Auto zastępcze z OC ${city.name}`,
    href: `/auto-zastepcze-z-oc-${city.slug}`
  },
  {
    name: `Wynajem aut z OC ${city.name}`,
    href: `/wynajem-aut-z-oc-${city.slug}`
  },
  {
    name: `Samochód zastępczy ${city.name}`,
    href: `/samochod-zastepcze-${city.slug}`
  }
];

export const generatePomocDrogowaItems = (city: City) => [
  {
    name: `Pomoc drogowa ${city.name}`,
    href: `/pomoc-drogowa-${city.slug}`
  },
  {
    name: `Laweta ${city.name}`,
    href: `/laweta-${city.slug}`
  },
  {
    name: `Holowanie ${city.name}`,
    href: `/holowanie-${city.slug}`
  },
  {
    name: `Pomoc drogowa 24h ${city.name}`,
    href: `/pomoc-drogowa-24h-${city.slug}`
  }
];

export const generateUslugiKompleksoweItems = (city: City) => [
  {
    name: `Kompleksowa obsługa powypadkowa ${city.name}`,
    href: `/kompleksowa-obsluga-powypadkowa-${city.slug}`
  },
  {
    name: `Centrum pomocy po wypadku ${city.name}`,
    href: `/centrum-pomocy-po-wypadku-${city.slug}`
  }
];

// Get cities by type
export const getMainCities = () => cities.filter(city => city.isMainCity);
export const getAllCities = () => cities;
export const getCityBySlug = (slug: string) => cities.find(city => city.slug === slug);
