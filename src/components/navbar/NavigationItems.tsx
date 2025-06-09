// Re-export all navigation items from organized modules
export { obslugaSzkodyItems, lokalizacjaItems } from './navigation/ObslugaSzkodyItems';

export { 
  // Nowe zorganizowane kategorie szkód
  likwidacjaSzkodKomunikacyjnychItems,
  zgaszanieSzkodItems,
  odszkodowaniaItems,
  wycenaSzkodPowypadkowychItems,
  // Lokalne kategorie szkód
  wolsztynSzkodyItems,
  poznanSzkodyItems,
  zielonaGoraSzkodyItems,
  nowyTomyslSzkodyItems,
  slawaSzkodyItems,
  lesznoSzkodyItems,
  glogowSzkodyItems,
  koscianSzkodyItems,
  szamotulySzkodyItems,
  miedzyrzeczSzkodyItems,
  // Funkcje pomocnicze
  getAllObslugaSzkodyItems,
  getAllLokalneSzkodyItems
} from './navigation/ObslugaSzkodyItems';

export { 
  naprawyPowypadkoweItems,
  uslugiBlacharsKieItems,
  lakierowaniePowypadkoweItems,
  lakierowanieElementowItems,
  renowacjaLakieruItems,
  mechanikaPowypadkowaItems,
  serwisSilnikaItems,
  ukladySamochodowe,
  diagnostykaItems,
  przegladyItems,
  getAllNaprawyItems
} from './navigation/NaprawyItems';

export {
  samochodZastepczyZOCItems,
  wynajemBezgotowkowyItems,
  rodzajePojazdowZastepczychItems,
  pojazdyNaCzasNaprawyItems,
  pojazdyPoWypadkuItems,
  parametryWynajmuItems,
  wynajemLokalizacjaWolsztynItems,
  wynajemLokalizacjaPoznanItems,
  wynajemLokalizacjaZielonaGoraItems,
  wynajemLokalizacjaNowyTomyslItems,
  wynajemLokalizacjaSlawaItems,
  wynajemLokalizacjaLesznoItems,
  wynajemLokalizacjaGlogowItems,
  wynajemLokalizacjaKoscianItems,
  wynajemLokalizacjaSzamotulyItems,
  wynajemLokalizacjaMiedzyrzeczItems,
  wynajemItems,
  getAllWynajemItems
} from './navigation/WynajemItems';

export {
  pomocDrogowa24Items,
  holowaniePojazdowItems,
  uslugiLawetaItems,
  transportStandardowyItems,
  transportSpecjalistycznyItems,
  holowaniePoWypadkuItems,
  holowanieZOCItems,
  pomocDrogowaWolsztynItems,
  pomocDrogowaPoznanItems,
  pomocDrogowaZielonaGoraItems,
  pomocDrogowaNowyTomyslItems,
  pomocDrogowaSlawaItems,
  pomocDrogowaLesznoItems,
  pomocDrogowaGlogowItems,
  pomocDrogowaKoscianItems,
  pomocDrogowaSzamotulyItems,
  pomocDrogowaMiedzyrzeczItems,
  pomocDrogowaItems,
  getAllPomocDrogowaItems
} from './navigation/PomocDrogowaItems';

export { poradnikItems } from './navigation/PoradnikItems';

export { 
  kompleksowaObslugaPowypadkowaItems,
  pakietyUslugItems,
  centrum_wolsztynItems,
  centrum_poznanItems,
  centrum_zielonaGoraItems,
  centrum_nowyTomyslItems,
  centrum_slawaItems,
  centrum_lesznoItems,
  centrum_glogowItems,
  centrum_koscianItems,
  centrum_szamotulyItems,
  centrum_miedzyrzeczItems,
  getAllUslugiKompleksoweItems
} from './navigation/UslugiKompleksoweItems';
