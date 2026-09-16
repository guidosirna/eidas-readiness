import { DEFAULT_LOCALE, TRANSLATED_LOCALES, type Locale, type TranslatedLocale } from "./config";

/**
 * The glossary terms that have been translated.
 *
 * One of thirty-six. Person Identification Data drew 1,155 impressions in
 * ninety days; the rest of the glossary is the long tail that exists to be
 * linked to, not to be found, and translating all thirty-six would be roughly
 * the cost of every other page on this list put together for no measurable
 * return. When another term starts drawing volume it gets added here and the
 * route picks it up.
 *
 * `term` stays as it is where the term is an English name of a thing defined
 * by the regulation. "Person Identification Data (PID)" is what the
 * implementing acts call it in every language version's technical annex, and a
 * reader searching in German searches for the abbreviation.
 */
export interface GlossaryTranslation {
  term: string;
  shortDefinition: string;
  metaTitle?: string;
  metaDescription?: string;
  fullDefinition: string;
  category: string;
}

const de: Record<string, GlossaryTranslation> = {
  pid: {
    term: "Personenidentifizierungsdaten (PID)",
    category: "Digital Identity",
    metaTitle: "Personenidentifizierungsdaten (PID) in der EUDI-Wallet",
    metaDescription:
      "Was die PID in der europäischen Wallet für die digitale Identität enthält, wer sie ausstellt, welches Sicherheitsniveau gilt und in welchen Formaten sie vertrauenden Beteiligten vorgelegt wird.",
    shortDefinition:
      "Der Kernsatz an Identitätsattributen, etwa Name, Geburtsdatum und eine eindeutige Kennung, von einem Mitgliedstaat ausgestellt und in der EUDIW gespeichert. Er bildet die Grundlage der digitalen Identität des Wallet-Inhabers.",
    fullDefinition:
      "Personenidentifizierungsdaten (PID) sind der grundlegende Identitätsdatensatz in der europäischen Wallet für die digitale Identität. Sie umfassen die Mindestmenge an Attributen, die zur eindeutigen Identifizierung einer natürlichen Person nötig ist, ausgestellt von einem Mitgliedstaat oder in seinem Auftrag. Zur PID gehören in der Regel Familienname, Vorname, Geburtsdatum und eine eindeutige, dauerhafte Kennung, die der ausstellende Mitgliedstaat zuweist. Je nach nationaler Umsetzung können weitere Attribute wie Staatsangehörigkeit, Geburtsort oder Adresse hinzukommen.\n\nDie PID ist der Vertrauensanker des Wallet-Ökosystems: Sie ist der einzige Nachweis in der Wallet, der unmittelbar von einer staatlichen Stelle oder deren Beauftragten ausgestellt wird, und sie ist die Grundlage dafür, weitere elektronische Attributsbescheinigungen mit einer verifizierten Identität zu verknüpfen. Fragt ein vertrauender Beteiligter eine Identitätsprüfung über die Wallet an, ist die PID der zuerst vorgelegte Nachweis.\n\nDie Ausstellung der PID muss das hohe Sicherheitsniveau nach den Durchführungsrechtsakten erreichen. Das Verfahren zur Identitätsfeststellung, ob in Person oder aus der Ferne, muss also mit hoher Zuverlässigkeit belegen, dass die behauptete Identität echt ist. Die PID wird in den standardisierten Nachweisformaten SD-JWT und mdoc ausgestellt, wie der Architecture Reference Framework sie festlegt, damit sie in allen Wallets der EU funktioniert.\n\nFür Organisationen, die sich an die EUDIW anbinden, ist die PID der Nachweis, dem sie am häufigsten begegnen werden. Ihren Aufbau, das Vertrauensmodell dahinter und den Prüfprozess zu verstehen, ist die Voraussetzung dafür, Dienste als vertrauender Beteiligter rechtskonform und sicher umzusetzen.",
  },
};

const it: Record<string, GlossaryTranslation> = {
  pid: {
    term: "Dati di identificazione personale (PID)",
    category: "Digital Identity",
    metaTitle: "Dati di identificazione personale (PID) nel wallet EUDI",
    metaDescription:
      "Cosa contiene il PID nel portafoglio europeo di identità digitale, chi lo rilascia, quale livello di garanzia richiede e in quali formati viene presentato alle parti facenti affidamento.",
    shortDefinition:
      "L'insieme essenziale di attributi di identità, come nome, data di nascita e un identificativo univoco, rilasciato da uno Stato membro e conservato nell'EUDIW. Costituisce il fondamento dell'identità digitale del titolare del wallet.",
    fullDefinition:
      "I dati di identificazione personale (PID) sono il nucleo dei dati di identità all'interno del portafoglio europeo di identità digitale. Rappresentano l'insieme minimo di attributi necessari a identificare in modo univoco una persona fisica, rilasciati da uno Stato membro o per suo conto. Il PID comprende di norma cognome, nome, data di nascita e un identificativo univoco e persistente attribuito dallo Stato membro che lo rilascia. A seconda dell'attuazione nazionale possono aggiungersi altri attributi, come cittadinanza, luogo di nascita o indirizzo.\n\nIl PID è l'ancoraggio di fiducia dell'ecosistema del wallet: è l'unico attestato contenuto nel wallet a essere rilasciato direttamente da un'autorità pubblica, o da un suo delegato, e costituisce la base per collegare le altre attestazioni elettroniche di attributi a un'identità verificata. Quando una parte facente affidamento richiede la verifica dell'identità tramite wallet, il PID è l'attestato presentato per primo.\n\nIl rilascio del PID deve raggiungere il livello di garanzia elevato definito dagli atti di esecuzione: il procedimento di accertamento dell'identità, in presenza o a distanza, deve quindi offrire un grado elevato di certezza che l'identità dichiarata sia autentica. Il PID viene rilasciato nei formati standardizzati SD-JWT e mdoc, come previsto dall'Architecture Reference Framework, così da funzionare in tutti i wallet dell'Unione.\n\nPer le organizzazioni che si integrano con l'EUDIW, il PID è l'attestato che incontreranno più spesso. Comprenderne la struttura, il modello di fiducia che lo sostiene e il processo di verifica è indispensabile per realizzare servizi conformi e sicuri come parte facente affidamento.",
  },
};

const es: Record<string, GlossaryTranslation> = {
  pid: {
    term: "Datos de identificación de la persona (PID)",
    category: "Digital Identity",
    metaTitle: "Datos de identificación de la persona (PID) en la cartera EUDI",
    metaDescription:
      "Qué contiene el PID en la cartera europea de identidad digital, quién lo expide, qué nivel de seguridad exige y en qué formatos se presenta a las partes usuarias.",
    shortDefinition:
      "El conjunto esencial de atributos de identidad, como el nombre, la fecha de nacimiento y un identificador único, expedido por un Estado miembro y almacenado en la EUDIW. Es el fundamento de la identidad digital del titular de la cartera.",
    fullDefinition:
      "Los datos de identificación de la persona (PID) son el conjunto de datos de identidad fundamental dentro de la cartera europea de identidad digital. Representan el mínimo de atributos necesarios para identificar de forma unívoca a una persona física, expedidos por un Estado miembro o en su nombre. El PID incluye normalmente los apellidos, el nombre, la fecha de nacimiento y un identificador único y persistente que asigna el Estado miembro emisor. Según la implantación nacional pueden añadirse otros atributos, como la nacionalidad, el lugar de nacimiento o el domicilio.\n\nEl PID es el ancla de confianza del ecosistema de la cartera: es la única credencial de la cartera expedida directamente por una autoridad pública, o por su delegado, y sirve de base para vincular las demás declaraciones electrónicas de atributos a una identidad verificada. Cuando una parte usuaria solicita la verificación de identidad a través de la cartera, el PID es la credencial que se presenta primero.\n\nLa expedición del PID debe alcanzar el nivel de seguridad alto que definen los actos de ejecución, de modo que el proceso de comprobación de identidad, presencial o remoto, ofrezca un grado alto de certeza de que la identidad declarada es auténtica. El PID se expide en los formatos normalizados SD-JWT y mdoc que especifica el Architecture Reference Framework, para que funcione en todas las carteras de la UE.\n\nPara las organizaciones que se integran con la EUDIW, el PID es la credencial con la que se encontrarán más a menudo. Entender su estructura, el modelo de confianza que la respalda y el proceso de verificación es imprescindible para levantar servicios de parte usuaria conformes y seguros.",
  },
};

export const GLOSSARY_TRANSLATIONS: Record<TranslatedLocale, Record<string, GlossaryTranslation>> = {
  de,
  it,
  es,
};

export function translatedTermSlugs(locale: TranslatedLocale): string[] {
  return Object.keys(GLOSSARY_TRANSLATIONS[locale]);
}

export function getTermTranslation(
  locale: TranslatedLocale,
  slug: string
): GlossaryTranslation | undefined {
  return GLOSSARY_TRANSLATIONS[locale][slug];
}

/** Which languages one term exists in. Feeds hreflang, so it must be exact. */
export function termLocales(slug: string): Locale[] {
  return [
    DEFAULT_LOCALE,
    ...TRANSLATED_LOCALES.filter((l) => slug in GLOSSARY_TRANSLATIONS[l]),
  ];
}
