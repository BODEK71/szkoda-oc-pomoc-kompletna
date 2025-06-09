
export const naprawyPowypadkoweItems = [
  { name: "Naprawy Bezgotówkowe z OC", href: "/naprawy-bezgotowkowe-z-oc" },
  { name: "Naprawy powypadkowe", href: "/naprawy-z-oc" },
  { name: "Naprawy z winy sprawcy", href: "/naprawy-z-winy-sprawcy" },
  { name: "Naprawa bezgotówkowa", href: "/naprawa-bezgotowkowa" },
  { name: "Naprawa powypadkowa bezgotówkowa", href: "/naprawa-powypadkowa-bezgotowkowa" },
  { name: "Naprawy z OC", href: "/naprawy-z-oc" },
  { name: "Naprawy ubezpieczeniowe", href: "/naprawy-ubezpieczeniowe" },
  { name: "Naprawa auta po kolizji z OC sprawcy", href: "/naprawa-auta-po-kolizji" },
  { name: "Naprawa auta po wypadku z OC sprawcy", href: "/naprawa-auta-po-wypadku" },
  { name: "Naprawa pojazdu po stłuczce z OC sprawcy", href: "/naprawa-pojazdu-po-stluczce" },
];

export const uslugiBlacharsKieItems = [
  { name: "Blacharstwo powypadkowe", href: "/blacharstwo-powypadkowe" },
  { name: "Blacharz samochodowy", href: "/blacharz-samochodowy" },
  { name: "Naprawy blacharskie", href: "/naprawy-blacharskie" },
  { name: "Naprawy karoserii po stłuczce", href: "/naprawy-karoserii-po-stluczce" },
  { name: "Prostowanie karoserii", href: "/prostowanie-karoserii" },
  { name: "Usuwanie wgnieceń", href: "/usuwanie-wgniecen" },
  { name: "Usuwanie uszkodzeń powypadkowych", href: "/usuwanie-uszkodzen-powypadkowych" },
  { name: "Naprawa po gradobiciu", href: "/naprawa-po-gradobiciu" },
];

export const lakierowaniePowypadkoweItems = [
  { name: "Naprawa blacharsko-lakiernicza z OC sprawcy", href: "/naprawa-blacharsko-lakiernicza" },
  { name: "Lakierowanie z OC sprawcy", href: "/lakierowanie-z-oc-sprawcy" },
  { name: "Lakierowanie powypadkowe", href: "/lakierowanie-powypadkowe" },
  { name: "Lakiernik samochodowy", href: "/lakiernik-samochodowy" },
];

export const lakierowanieElementowItems = [
  { name: "Lakierowanie samochodów", href: "/lakierowanie-samochodow" },
  { name: "Lakierowanie elementów karoserii", href: "/lakierowanie-elementow-karoserii" },
  { name: "Lakierowanie elementów", href: "/lakierowanie-elementow" },
  { name: "Lakierowanie zderzaka", href: "/lakierowanie-zderzaka" },
  { name: "Lakierowanie maski", href: "/lakierowanie-maski" },
  { name: "Lakierowanie felg samochodowych", href: "/lakierowanie-felg" },
];

export const renowacjaLakieruItems = [
  { name: "Malowanie auta", href: "/malowanie-auta" },
  { name: "Renowacja lakieru samochodowego", href: "/renowacja-lakieru" },
  { name: "Polerowanie lakieru samochodowego", href: "/polerowanie-lakieru" },
  { name: "Dobór koloru lakieru samochodowego", href: "/dobor-koloru-lakieru" },
  { name: "Naprawa lakieru", href: "/naprawa-lakieru" },
  { name: "Usuwanie rys z lakieru", href: "/usuwanie-rys-z-lakieru" },
  { name: "Lakierowanie punktowe", href: "/lakierowanie-punktowe" },
];

export const mechanikaPowypadkowaItems = [
  { name: "Serwis mechaniczny powypadkowy", href: "/serwis-mechaniczny-powypadkowy" },
  { name: "Naprawa silnika po kolizji", href: "/naprawa-silnika-po-kolizji" },
  { name: "Wymiana rozrządu po wypadku", href: "/wymiana-rozrzadu-po-wypadku" },
];

export const serwisSilnikaItems = [
  { name: "Mechanik samochodowy", href: "/mechanik-samochodowy" },
  { name: "Naprawa silnika", href: "/naprawa-silnika" },
  { name: "Naprawa samochodów osobowych", href: "/naprawa-samochodow-osobowych" },
  { name: "Naprawa samochodów", href: "/naprawa-samochodow" },
  { name: "Serwis samochodowy", href: "/serwis-samochodowy" },
];

export const ukladySamochodowe = [
  { name: "Naprawa zawieszenia", href: "/naprawa-zawieszenia" },
  { name: "Naprawa hamulców", href: "/naprawa-hamulcow" },
  { name: "Naprawa układu hamulcowego", href: "/naprawa-ukladu-hamulcowego" },
  { name: "Wymiana klocków hamulcowych", href: "/wymiana-klockow-hamulcowych" },
  { name: "Naprawa układu kierowniczego", href: "/naprawa-ukladu-kierowniczego" },
];

export const diagnostykaItems = [
  { name: "Diagnostyka komputerowa auta", href: "/diagnostyka-komputerowa-auta" },
  { name: "Diagnostyka komputerowa", href: "/diagnostyka-komputerowa" },
  { name: "Serwis klimatyzacji samochodowej", href: "/serwis-klimatyzacji" },
  { name: "Wymiana oleju w samochodzie", href: "/wymiana-oleju-w-samochodzie" },
  { name: "Wymiana oleju", href: "/wymiana-oleju" },
];

export const przegladyItems = [
  { name: "Przegląd techniczny auta", href: "/przeglad-techniczny-auta" },
  { name: "Przegląd samochodu", href: "/przeglad-samochodu" },
  { name: "Serwis samochodowy po wypadku", href: "/serwis-samochodowy-po-wypadku" },
];

export const getAllNaprawyItems = () => {
  return [
    ...naprawyPowypadkoweItems,
    ...uslugiBlacharsKieItems,
    ...lakierowaniePowypadkoweItems,
    ...lakierowanieElementowItems,
    ...renowacjaLakieruItems,
    ...mechanikaPowypadkowaItems,
    ...serwisSilnikaItems,
    ...ukladySamochodowe,
    ...diagnostykaItems,
    ...przegladyItems
  ];
};
