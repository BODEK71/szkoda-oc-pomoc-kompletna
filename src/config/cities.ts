
export interface City {
  name: string;
  slug: string;
  region?: string;
  isMainCity?: boolean;
}

export const cities: City[] = [
  { name: "Duszniki", slug: "duszniki" },
  { name: "Buk", slug: "buk", isMainCity: true },
  { name: "Stęszew", slug: "steszew" },
  { name: "Boruja Kościelna", slug: "boruja-koscielna" },
  { name: "Pniewy", slug: "pniewy" },
  { name: "Babimost", slug: "babimost" },
  { name: "Lwówek", slug: "lwowek" },
  { name: "Mosina", slug: "mosina" },
  { name: "Luboń", slug: "lubon" },
  { name: "Niepruszewo", slug: "niepruszewo" },
  { name: "Gostyń", slug: "gostyn", isMainCity: true },
  { name: "Bolewice", slug: "bolewice" },
  { name: "Jordanowo", slug: "jordanowo" },
  { name: "Kargowa", slug: "kargowa" },
  { name: "Śmigiel", slug: "smigiel" },
  { name: "Wschowa", slug: "wschowa" },
  { name: "Siedlec", slug: "siedlec" },
  { name: "Trzciel", slug: "trzciel" },
  { name: "Grodzisk Wielkopolski", slug: "grodzisk-wielkopolski", isMainCity: true },
  { name: "Bojanowo", slug: "bojanowo" },
  { name: "Rakoniewice", slug: "rakoniewice" },
  { name: "Czempiń", slug: "czempin" },
  { name: "Głogów", slug: "glogow", isMainCity: true },
  { name: "Jarocin", slug: "jarocin", isMainCity: true },
  { name: "Kościan", slug: "koscian", isMainCity: true },
  { name: "Kórnik", slug: "kornik" },
  { name: "Leszno", slug: "leszno", isMainCity: true },
  { name: "Lubin", slug: "lubin", isMainCity: true },
  { name: "Nowy Tomyśl", slug: "nowy-tomysl", isMainCity: true },
  { name: "Oborniki", slug: "oborniki" },
  { name: "Opalenica", slug: "opalenica" },
  { name: "Poznań", slug: "poznan", isMainCity: true },
  { name: "Rawicz", slug: "rawicz", isMainCity: true },
  { name: "Śrem", slug: "srem" },
  { name: "Środa Wielkopolska", slug: "sroda-wielkopolska" },
  { name: "Wolsztyn", slug: "wolsztyn", isMainCity: true },
  { name: "Września", slug: "wrzesnia" },
  { name: "Zbąszyń", slug: "zbaszynx" },
  { name: "Zbąszynek", slug: "zbaszynek" },
  { name: "Zielona Góra", slug: "zielona-gora", isMainCity: true },
  { name: "Sulechów", slug: "sulechow" },
  { name: "Świebodzin", slug: "swiebodzin" }
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
