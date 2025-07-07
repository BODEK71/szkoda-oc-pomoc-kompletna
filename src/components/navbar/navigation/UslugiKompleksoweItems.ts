export const kompleksowaObslugaPowypadkowaItems = [
  { name: "Kompleksowa obsługa powypadkowa", href: "/kompleksowa-obsluga-powypadkowa" },
  { name: "Pełna obsługa poszkodowanych", href: "/pelna-obsluga-poszkodowanych" },
  { name: "Wszystko z jednego miejsca", href: "/wszystko-z-jednego-miejsca" },
  { name: "Obsługa od A do Z", href: "/obsluga-od-a-do-z" },
];

export const pakietyUslugItems = [
  { name: "Pakiet usług powypadkowych", href: "/pakiet-uslug-powypadkowych" },
];

export const centrum_wolsztynItems = [
  { name: "Kompleksowa obsługa powypadkowa Wolsztyn", href: "/kompleksowa-obsluga-powypadkowa-wolsztyn" },
  { name: "Centrum pomocy po wypadku Wolsztyn", href: "/centrum-pomocy-po-wypadku-wolsztyn" },
  { name: "Likwidacja szkody Wolsztyn", href: "/likwidacja-szkody-wolsztyn" },
  { name: "Wycena szkody Wolsztyn", href: "/wycena-szkody-wolsztyn" },
  { name: "Obsługa szkody z OC Wolsztyn", href: "/obsługa-szkody-z-oc-wolsztyn" },
];

export const centrum_poznanItems = [
  { name: "Kompleksowa obsługa powypadkowa Poznań", href: "/kompleksowa-obsluga-powypadkowa-poznan" },
  { name: "Centrum pomocy po wypadku Poznań", href: "/centrum-pomocy-po-wypadku-poznan" },
  { name: "Centrum likwidacji szkód Poznań", href: "/centrum-likwidacji-szkod-poznan" }
];

export const centrum_zielonaGoraItems = [
  { name: "Kompleksowa obsługa powypadkowa Zielona Góra", href: "/kompleksowa-obsluga-powypadkowa-zielona-gora" },
  { name: "Centrum pomocy po wypadku Zielona Góra", href: "/centrum-pomocy-po-wypadku-zielona-gora" },
  { name: "Likwidacja szkody Zielona Góra", href: "/likwidacja-szkody-zielona-gora" },
  { name: "Obsługa szkody Zielona Góra", href: "/obsługa-szkody-zielona-gora" },
];

export const centrum_nowyTomyslItems = [
  { name: "Kompleksowa obsługa powypadkowa Nowy Tomyśl", href: "/kompleksowa-obsluga-powypadkowa-nowy-tomysl" },
  { name: "Centrum pomocy po wypadku Nowy Tomyśl", href: "/centrum-pomocy-po-wypadku-nowy-tomysl" },
  { name: "Obsługa szkody Nowy Tomyśl", href: "/obsługa-szkody-nowy-tomysl" },
];

export const centrum_slawaItems = [
  { name: "Kompleksowa obsługa powypadkowa Sława", href: "/kompleksowa-obsluga-powypadkowa-slawa" },
  { name: "Centrum pomocy po wypadku Sława", href: "/centrum-pomocy-po-wypadku-slawa" },
  { name: "Obsługa szkody Sława", href: "/obsługa-szkody-slawa" },
];

export const centrum_lesznoItems = [
  { name: "Kompleksowa obsługa powypadkowa Leszno", href: "/kompleksowa-obsluga-powypadkowa-leszno" },
  { name: "Centrum pomocy po wypadku Leszno", href: "/centrum-pomocy-po-wypadku-leszno" },
  { name: "Obsługa szkody Leszno", href: "/obsługa-szkody-leszno" },
];

export const centrum_glogowItems = [
  { name: "Kompleksowa obsługa powypadkowa Głogów", href: "/kompleksowa-obsluga-powypadkowa-glogow" },
  { name: "Centrum pomocy po wypadku Głogów", href: "/centrum-pomocy-po-wypadku-glogow" },
  { name: "Holowanie z OC Głogów", href: "/holowanie-z-oc-glogów" },
];

export const centrum_koscianItems = [
  { name: "Kompleksowa obsługa powypadkowa Kościan", href: "/kompleksowa-obsluga-powypadkowa-koscian" },
  { name: "Centrum pomocy po wypadku Kościan", href: "/centrum-pomocy-po-wypadku-koscian" },
  { name: "Obsługa szkody Kościan", href: "/obsługa-szkody-koscian" },
];

export const centrum_szamotulyItems = [
  { name: "Kompleksowa obsługa powypadkowa Szamotuły", href: "/kompleksowa-obsluga-powypadkowa-szamotuly" },
  { name: "Centrum pomocy po wypadku Szamotuły", href: "/centrum-pomocy-po-wypadku-szamotuly" },
  { name: "Obsługa szkody Szamotuły", href: "/obsługa-szkody-szamotuly" },
];

export const centrum_miedzyrzeczItems = [
  { name: "Kompleksowa obsługa powypadkowa Międzyrzecz", href: "/kompleksowa-obsluga-powypadkowa-miedzyrzecz" },
  { name: "Centrum pomocy po wypadku Międzyrzecz", href: "/centrum-pomocy-po-wypadku-miedzyrzecz" },
  { name: "Obsługa szkody Międzyrzecz", href: "/obsługa-szkody-miedzyrzecz" },
];

export const getAllUslugiKompleksoweItems = () => {
  return [
    ...kompleksowaObslugaPowypadkowaItems,
    ...pakietyUslugItems,
    ...centrum_wolsztynItems,
    ...centrum_poznanItems,
    ...centrum_zielonaGoraItems,
    ...centrum_nowyTomyslItems,
    ...centrum_slawaItems,
    ...centrum_lesznoItems,
    ...centrum_glogowItems,
    ...centrum_koscianItems,
    ...centrum_szamotulyItems,
    ...centrum_miedzyrzeczItems,
  ];
};
