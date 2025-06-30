
// New navigation structure based on user requirements

export const obslugaKompleksowaItems = [
  { name: "Obsługa kompleksowa", href: "/obsluga-kompleksowa" },
  { name: "Centrum pomocy po wypadku", href: "/centrum-pomocy-po-wypadku" },
  { name: "Centrum napraw powypadkowych", href: "/centrum-napraw-powypadkowych" }
];

export const pomocDrogowaItems = [
  { name: "Pomoc drogowa", href: "/pomoc-drogowa" },
  { name: "Holowanie po wypadku, awarii i kolizji", href: "/holowanie-po-wypadku-awarii-kolizji" },
  { name: "Transport pojazdów", href: "/transport-pojazdow" },
  { name: "Bezpłatne holowanie z OC sprawcy", href: "/bezplatne-holowanie-z-oc-sprawcy" },
  { name: "Podstawienie lawety i naprawa na miejscu", href: "/podstawienie-lawety-i-naprawa-na-miejscu" },
  { name: "Pomoc drogowa na autostradzie", href: "/pomoc-drogowa-na-autostradzie" }
];

export const naprawyPowypadkoweItems = [
  { name: "Naprawy powypadkowe", href: "/naprawy-powypadkowe" },
  { name: "Naprawy z OC sprawcy (bezgotówkowe)", href: "/naprawy-z-oc-sprawcy" },
  { name: "Blacharstwo samochodowe", href: "/blacharstwo-samochodowe" },
  { name: "Lakiernictwo samochodowe", href: "/lakiernictwo-samochodowe" },
  { name: "Mechanika samochodowa po wypadku", href: "/mechanika-samochodowa-po-wypadku" },
  { name: "Przeglądy i serwis ogólny", href: "/przeglady-i-serwis-ogolny" }
];

export const autoZastepczeItems = [
  { name: "Auto zastępcze", href: "/auto-zastepcze" },
  { name: "Wynajem aut z OC sprawcy (oferta wypożyczalni)", href: "/wynajem-aut-z-oc-sprawcy" },
  { name: "Samochód zastępczy bezgotówkowo", href: "/samochod-zastepczy-bezgotowkowo" },
  { name: "Auta zastępcze dla firm", href: "/auta-zastepcze-dla-firm" },
  { name: "Wynajem specjalistyczny z OC sprawcy", href: "/wynajem-specjalistyczny-z-oc-sprawcy" },
  { name: "Informacje o wynajmie auta z OC sprawcy", href: "/informacje-o-wynajmie-auta-z-oc-sprawcy" }
];

export const likwidacjaSzkodItems = [
  { name: "Likwidacja szkód", href: "/likwidacja-szkod" },
  { name: "Zgłoszenie szkody ubezpieczeniowej", href: "/zgloszenie-szkody-ubezpieczeniowej" },
  { name: "Wycena i kosztorys naprawy", href: "/wycena-i-kosztorys-naprawy" },
  { name: "Odszkodowanie z OC sprawcy", href: "/odszkodowanie-z-oc-sprawcy" },
  { name: "Likwidator szkód", href: "/likwidator-szkod" }
];

export const poradnikItems = [
  { name: "Poradnik", href: "/blog" }
];

export const kontaktItems = [
  { name: "Kontakt", href: "/kontakt" }
];

// Helper function to get all navigation items in the new order
export const getAllNavigationItems = () => {
  return [
    ...obslugaKompleksowaItems,
    ...pomocDrogowaItems,
    ...naprawyPowypadkoweItems,
    ...autoZastepczeItems,
    ...likwidacjaSzkodItems,
    ...poradnikItems,
    ...kontaktItems
  ];
};
