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
  etimestamp: {
    term: "Elektronischer Zeitstempel",
    category: "Trust Services",
    metaTitle: "Was ist ein qualifizierter elektronischer Zeitstempel?",
    metaDescription:
      "Wie ein qualifizierter elektronischer Zeitstempel belegt, dass ein Dokument zu einem bestimmten Zeitpunkt vorlag, welche Rechtsvermutung er in jedem Mitgliedstaat trägt und wo er in einen Signaturprozess gehört.",
    shortDefinition:
      "Eine elektronische Bescheinigung, die Daten an einen bestimmten Zeitpunkt bindet und damit belegt, dass die Daten zu diesem Moment in einer bestimmten Form vorlagen.",
    fullDefinition:
      "Ein elektronischer Zeitstempel ist ein Vertrauensdienst, der einen Datensatz an einen bestimmten Zeitpunkt bindet und damit kryptografisch belegt, dass die Daten zu diesem Moment vorlagen und eine bestimmte Form hatten. Unter eIDAS dienen Zeitstempel dazu, Existenz und Unverändertheit von Dokumenten, Transaktionen und anderen digitalen Daten zu einem gegebenen Zeitpunkt nachzuweisen. Im rechtlichen, finanziellen und regulatorischen Umfeld ist das unverzichtbar.\n\nQualifizierte elektronische Zeitstempel, ausgestellt von qualifizierten Vertrauensdiensteanbietern, genießen die Rechtsvermutung, dass Datum und Uhrzeit richtig sind und dass die Daten, an die sie gebunden sind, unverändert vorliegen. Diese Vermutung gilt in allen Mitgliedstaaten der EU. eIDAS 2.0 behält den qualifizierten Zeitstempel als zentralen Vertrauensdienst bei.\n\nZeitstempel werden meist mit elektronischen Signaturen und Siegeln zusammen verwendet: Ein signiertes Dokument wird zusätzlich mit einem Zeitstempel versehen, damit nicht nur belegt ist, wer unterzeichnet hat, sondern auch wann. Entscheidend ist das für die Langzeitvalidierung, bei der eine Signatur überprüfbar bleiben muss, auch nachdem das Signaturzertifikat abgelaufen ist. Der Zeitstempel belegt, dass die Signatur zum Zeitpunkt ihrer Anbringung gültig war.\n\nIm Zusammenhang mit der EUDIW können Zeitstempel in Transaktionsprotokollen der Wallet, in Aufzeichnungen über die Ausstellung von Nachweisen und in Prüfpfaden vorkommen. Eine Rolle spielen sie außerdem in regulatorischen Anwendungen wie der Aufzeichnung von Finanzgeschäften, bei Anmeldungen von Schutzrechten und in Vertragsabläufen. Für Unternehmen ist die Einbindung qualifizierter Zeitstempel in Dokumentenprozesse ein einfacher Weg zu mehr Rechtssicherheit, besonders bei grenzüberschreitenden Geschäften oder in Streitfällen, in denen es auf den Zeitpunkt ankommt.",
  },
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
  etimestamp: {
    term: "Validazione temporale elettronica",
    category: "Trust Services",
    metaTitle: "Che cos'è una validazione temporale elettronica qualificata?",
    metaDescription:
      "Come una validazione temporale elettronica qualificata dimostra che un documento esisteva in un dato momento, quale presunzione legale porta con sé in ogni Stato membro e dove si colloca in un processo di firma.",
    shortDefinition:
      "Un'attestazione elettronica che lega dei dati a un momento preciso nel tempo, dimostrando che quei dati esistevano in quella forma in quell'istante.",
    fullDefinition:
      "La validazione temporale elettronica è un servizio fiduciario che lega un insieme di dati a un momento preciso nel tempo, fornendo la prova crittografica che quei dati esistevano e avevano una forma determinata in quell'istante. Ai sensi di eIDAS serve a dimostrare l'esistenza e l'integrità di documenti, operazioni e altri dati digitali a una data data, una capacità essenziale in ambito giuridico, finanziario e regolamentare.\n\nLe validazioni temporali qualificate, rilasciate da prestatori di servizi fiduciari qualificati, godono della presunzione legale di esattezza della data e dell'ora che indicano e di integrità dei dati a cui data e ora sono legate. Questa presunzione vale in tutti gli Stati membri dell'UE. eIDAS 2.0 mantiene la validazione temporale qualificata tra i servizi fiduciari fondamentali.\n\nLe validazioni temporali si usano di norma insieme a firme e sigilli elettronici: un documento firmato viene anche validato temporalmente, così da provare non solo chi ha firmato ma anche quando. È decisivo per la validazione a lungo termine, quando una firma deve restare verificabile anche dopo la scadenza del certificato di firma: la validazione temporale dimostra che la firma era valida nel momento in cui è stata apposta.\n\nNel contesto dell'EUDIW le validazioni temporali possono comparire nei registri delle operazioni del wallet, nelle registrazioni di rilascio degli attestati e nelle tracce di audit. Hanno un ruolo anche in scenari regolamentari come la registrazione delle operazioni finanziarie, il deposito di titoli di proprietà intellettuale e le tempistiche di esecuzione dei contratti. Per le imprese, integrare validazioni temporali qualificate nei flussi documentali è un modo semplice di aumentare la certezza giuridica, soprattutto nelle operazioni transfrontaliere o nelle controversie in cui il momento dei fatti è rilevante.",
  },
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
  etimestamp: {
    term: "Sello de tiempo electrónico",
    category: "Trust Services",
    metaTitle: "¿Qué es un sello de tiempo electrónico cualificado?",
    metaDescription:
      "Cómo un sello de tiempo electrónico cualificado acredita que un documento existía en un momento dado, qué presunción legal lleva consigo en cada Estado miembro y dónde encaja en un proceso de firma.",
    shortDefinition:
      "Una declaración electrónica que vincula unos datos a un momento concreto en el tiempo y acredita que esos datos existían con esa forma en ese instante.",
    fullDefinition:
      "Un sello de tiempo electrónico es un servicio de confianza que vincula un conjunto de datos a un momento concreto en el tiempo y aporta la prueba criptográfica de que esos datos existían y tenían una forma determinada en ese instante. Conforme a eIDAS sirve para acreditar la existencia y la integridad de documentos, operaciones y otros datos digitales en una fecha dada, algo imprescindible en contextos jurídicos, financieros y regulatorios.\n\nLos sellos de tiempo electrónicos cualificados, expedidos por prestadores cualificados de servicios de confianza, disfrutan de la presunción legal de exactitud de la fecha y la hora que indican y de integridad de los datos a los que esa fecha y hora están vinculadas. Esa presunción es válida en todos los Estados miembros de la UE. eIDAS 2.0 mantiene el sello de tiempo cualificado como servicio de confianza central.\n\nLos sellos de tiempo se usan habitualmente junto con firmas y sellos electrónicos: un documento firmado se sella además con la hora, para acreditar no solo quién firmó sino cuándo. Es decisivo para la validación a largo plazo, cuando una firma debe seguir siendo verificable incluso después de que haya caducado el certificado de firma: el sello de tiempo demuestra que la firma era válida en el momento en que se aplicó.\n\nEn el contexto de la EUDIW, los sellos de tiempo pueden aparecer en los registros de operaciones de la cartera, en los registros de expedición de credenciales y en las pistas de auditoría. También tienen un papel en escenarios regulatorios como el registro de operaciones financieras, las solicitudes de propiedad industrial y los plazos de ejecución de contratos. Para una empresa, integrar sellos de tiempo cualificados en sus flujos documentales es una forma sencilla de ganar seguridad jurídica, sobre todo en operaciones transfronterizas o en disputas donde el momento de los hechos es relevante.",
  },
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
