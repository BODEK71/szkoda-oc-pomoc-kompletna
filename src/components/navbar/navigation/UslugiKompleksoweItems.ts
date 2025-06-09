
// Kompleksowa obsługa powypadkowa - główne elementy
export const kompleksowaObslugaPowypadkowaItems = [
  {
    name: "Kompleksowa obsługa powypadkowa",
    href: "/kompleksowa-obsluga-powypadkowa"
  },
  {
    name: "Centrum pomocy po wypadku",
    href: "/centrum-pomocy-po-wypadku"
  },
  {
    name: "Centrum napraw powypadkowych",
    href: "/centrum-napraw-powypadkowych"
  },
  {
    name: "Pełna obsługa poszkodowanych",
    href: "/pelna-obsluga-poszkodowanych"
  }
];

// Pakiety usług
export const pakietyUslugItems = [
  {
    name: "Pakiet usług powypadkowych",
    href: "/pakiet-uslug-powypadkowych"
  },
  {
    name: "Wszystko z jednego miejsca",
    href: "/wszystko-z-jednego-miejsca"
  },
  {
    name: "Obsługa od A do Z",
    href: "/obsluga-od-a-do-z"
  }
];

// Centra lokalne - Wolsztyn
export const centrum_wolsztynItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Wolsztyn",
    href: "/kompleksowa-obsluga-powypadkowa-wolsztyn"
  },
  {
    name: "Centrum pomocy po wypadku Wolsztyn",
    href: "/centrum-pomocy-po-wypadku-wolsztyn"
  }
];

// Centra lokalne - Poznań
export const centrum_poznanItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Poznań",
    href: "/kompleksowa-obsluga-powypadkowa-poznan"
  },
  {
    name: "Centrum pomocy po wypadku Poznań",
    href: "/centrum-pomocy-po-wypadku-poznan"
  }
];

// Centra lokalne - Zielona Góra
export const centrum_zielonaGoraItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Zielona Góra",
    href: "/kompleksowa-obsluga-powypadkowa-zielona-gora"
  },
  {
    name: "Centrum pomocy po wypadku Zielona Góra",
    href: "/centrum-pomocy-po-wypadku-zielona-gora"
  }
];

// Centra lokalne - Nowy Tomyśl
export const centrum_nowyTomyslItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Nowy Tomyśl",
    href: "/kompleksowa-obsluga-powypadkowa-nowy-tomysl"
  },
  {
    name: "Centrum pomocy po wypadku Nowy Tomyśl",
    href: "/centrum-pomocy-po-wypadku-nowy-tomysl"
  }
];

// Centra lokalne - Sława
export const centrum_slawaItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Sława",
    href: "/kompleksowa-obsluga-powypadkowa-slawa"
  },
  {
    name: "Centrum pomocy po wypadku Sława",
    href: "/centrum-pomocy-po-wypadku-slawa"
  }
];

// Centra lokalne - Leszno
export const centrum_lesznoItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Leszno",
    href: "/kompleksowa-obsluga-powypadkowa-leszno"
  },
  {
    name: "Centrum pomocy po wypadku Leszno",
    href: "/centrum-pomocy-po-wypadku-leszno"
  }
];

// Centra lokalne - Głogów
export const centrum_glogowItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Głogów",
    href: "/kompleksowa-obsluga-powypadkowa-glogow"
  },
  {
    name: "Centrum pomocy po wypadku Głogów",
    href: "/centrum-pomocy-po-wypadku-glogow"
  }
];

// Centra lokalne - Kościan
export const centrum_koscianItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Kościan",
    href: "/kompleksowa-obsluga-powypadkowa-koscian"
  },
  {
    name: "Centrum pomocy po wypadku Kościan",
    href: "/centrum-pomocy-po-wypadku-koscian"
  }
];

// Centra lokalne - Szamotuły
export const centrum_szamotulyItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Szamotuły",
    href: "/kompleksowa-obsluga-powypadkowa-szamotuly"
  },
  {
    name: "Centrum pomocy po wypadku Szamotuły",
    href: "/centrum-pomocy-po-wypadku-szamotuly"
  }
];

// Centra lokalne - Międzyrzecz
export const centrum_miedzyrzeczItems = [
  {
    name: "Kompleksowa obsługa powypadkowa Międzyrzecz",
    href: "/kompleksowa-obsluga-powypadkowa-miedzyrzecz"
  },
  {
    name: "Centrum pomocy po wypadku Międzyrzecz",
    href: "/centrum-pomocy-po-wypadku-miedzyrzecz"
  }
];

// Funkcja pomocnicza do agregacji wszystkich elementów usług kompleksowych
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
    ...centrum_miedzyrzeczItems
  ];
};
