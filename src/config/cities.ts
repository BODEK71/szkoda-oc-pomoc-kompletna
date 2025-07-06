
export interface City {
  name: string;
  slug: string;
  region?: string;
  isMainCity?: boolean;
}

export const cities: City[] = [
  { name: "Bojanowo", slug: "bojanowo", isMainCity: true },
  { name: "Brodnica", slug: "brodnica", isMainCity: true },
  { name: "Chodzież", slug: "chodziez", isMainCity: true },
  { name: "Czarnków", slug: "czarnkow", isMainCity: true },
  { name: "Gniezno", slug: "gniezno", isMainCity: true },
  { name: "Gostyń", slug: "gostyn", isMainCity: true },
  { name: "Grodzisk Wielkopolski", slug: "grodzisk-wielkopolski", isMainCity: true },
  { name: "Głogów", slug: "glogow", isMainCity: true },
  { name: "Jarocin", slug: "jarocin", isMainCity: true },
  { name: "Jastrowie", slug: "jastrowie", isMainCity: true },
  { name: "Kalisz", slug: "kalisz", isMainCity: true },
  { name: "Koło", slug: "kolo", isMainCity: true },
  { name: "Konin", slug: "konin", isMainCity: true },
  { name: "Kościan", slug: "koscian", isMainCity: true },
  { name: "Krobia", slug: "krobia", isMainCity: true },
  { name: "Krotoszyn", slug: "krotoszyn", isMainCity: true },
  { name: "Leszno", slug: "leszno", isMainCity: true },
  { name: "Lubin", slug: "lubin", isMainCity: true },
  { name: "Międzychód", slug: "miedzychod", isMainCity: true },
  { name: "Międzyrzecz", slug: "miedzyrzecz", isMainCity: true },
  { name: "Nowy Tomyśl", slug: "nowy-tomysl", isMainCity: true },
  { name: "Oborniki", slug: "oborniki", isMainCity: true },
  { name: "Opalenica", slug: "opalenica", isMainCity: true },
  { name: "Ostrów Wielkopolski", slug: "ostrow-wielkopolski", isMainCity: true },
  { name: "Piła", slug: "pila", isMainCity: true },
  { name: "Pleszew", slug: "pleszew", isMainCity: true },
  { name: "Poznań", slug: "poznan", isMainCity: true },
  { name: "Rawicz", slug: "rawicz", isMainCity: true },
  { name: "Słupca", slug: "slupca", isMainCity: true },
  { name: "Szamotuły", slug: "szamotuly", isMainCity: true },
  { name: "Śrem", slug: "srem", isMainCity: true },
  { name: "Środa Wielkopolska", slug: "sroda-wielkopolska", isMainCity: true },
  { name: "Turek", slug: "turek", isMainCity: true },
  { name: "Wągrowiec", slug: "wagrowiec", isMainCity: true },
  { name: "Wolsztyn", slug: "wolsztyn", isMainCity: true },
  { name: "Wronki", slug: "wronki", isMainCity: true },
  { name: "Września", slug: "wrzesnia", isMainCity: true },
  { name: "Wyrzysk", slug: "wyrzysk", isMainCity: true },
  { name: "Zbąszyń", slug: "zbasyn", isMainCity: true },
  { name: "Zbąszynek", slug: "zbaszynek", isMainCity: true },
  { name: "Zielona Góra", slug: "zielona-gora", isMainCity: true },
  { name: "Złotów", slug: "zlotow", isMainCity: true }
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
