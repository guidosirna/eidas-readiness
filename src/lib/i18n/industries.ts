import { DEFAULT_LOCALE, TRANSLATED_LOCALES, type Locale, type TranslatedLocale } from "./config";

/**
 * The sector pages, in the languages they have been translated into.
 *
 * Only two of the six are here. Financial services and healthcare carry 2,747
 * of this site's impressions between them; the other four carry almost none,
 * and translating a page nobody reaches in English is not a way to find out
 * whether translation works. The route only generates the pairs that exist,
 * and hreflang only claims the languages a page actually has.
 *
 * `content` splits on a blank line into paragraphs, the same shape the English
 * data uses, so the rendering code does not care which language it is given.
 *
 * Regulation terminology follows the official language versions of Regulation
 * (EU) 2024/1183 rather than a literal rendering: "relying party" is
 * "vertrauender Beteiligter", "parte facente affidamento", "parte usuaria".
 * Getting these wrong would make the pages read as machine output to exactly
 * the compliance reader they are for.
 */
export interface IndustryTranslation {
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  sections: { heading: string; content: string }[];
  keyRequirements: string[];
  useCases: string[];
}

const de: Record<string, IndustryTranslation> = {
  "financial-services": {
    title: "Finanzdienstleistungen",
    shortDescription:
      "Wie eIDAS 2.0 und die europäische Wallet für die digitale Identität das Kunden-Onboarding, die Authentifizierung und die regulatorische Compliance von Banken, Zahlungsdienstleistern und Fintechs verändern.",
    metaTitle: "eIDAS 2.0 für Banken: EUDI-Wallet-Annahme und KYC-Pflichten",
    metaDescription:
      "Banken, Zahlungsdienstleister und Fintechs werden zu verpflichteten vertrauenden Beteiligten. Was Wallet-Onboarding, starke Kundenauthentifizierung und KYC verlangen, und wann jede Pflicht greift.",
    heroTagline:
      "Kunden-Onboarding und Authentifizierung im Zeitalter der digitalen Identität neu denken",
    sections: [
      {
        heading: "Folgen für Banken und Finanzwesen",
        content:
          "Finanzdienstleistungen sind einer der am unmittelbarsten betroffenen Sektoren. Die Verordnung benennt Finanzinstitute, die Sorgfaltspflichten gegenüber Kunden nach den Geldwäschevorschriften erfüllen, ausdrücklich als verpflichtete vertrauende Beteiligte. Banken, Zahlungsinstitute, E-Geld-Institute und Wertpapierfirmen müssen die europäische Wallet für die digitale Identität deshalb akzeptieren, wenn Kundinnen und Kunden sie zur Identitätsprüfung vorlegen. Das ist keine Option für später, sondern eine rechtlich bindende Pflicht mit festen Umsetzungsfristen.\n\nDie Wirkung geht über Compliance hinaus. Die EUDIW verändert die Ökonomie von Onboarding, Identitätsprüfung und laufender Authentifizierung grundlegend. Abläufe, die Institute heute pro Kunde erhebliche Beträge für manuelle Prüfung und Dokumentenbearbeitung kosten, lassen sich durch sofortige, kryptografisch verifizierte Wallet-Vorlagen ersetzen. Wer sich früh anpasst, gewinnt messbar an Geschwindigkeit bei der Kundengewinnung und an operativer Effizienz.",
      },
      {
        heading: "Veränderungen im Kunden-Onboarding",
        content:
          "Die KYC-Prozesse verändern sich am schnellsten. Heutige Onboarding-Strecken verlangen in der Regel, dass Kunden Ausweisdokumente hochladen, eine Video- oder Selfie-Prüfung absolvieren und auf eine manuelle Freigabe warten. Diese Reibung führt zu hohen Abbruchquoten, besonders mobil. Mit der EUDIW wird das Onboarding eine einzige Wallet-Vorlage: Die Kundin bestätigt eine Anfrage auf ihrem Gerät, und die Bank erhält staatlich verifizierte Personenidentifizierungsdaten (PID) in einem kryptografisch signierten Nachweis.\n\nDie Fernidentifizierung über die Wallet erreicht das für Finanzdienstleistungen erforderliche hohe Sicherheitsniveau und erfüllt damit sowohl eIDAS 2.0 als auch die Geldwäschevorschriften. Die Wallet erlaubt außerdem eine erneute Identitätsprüfung, ohne den vollen KYC-Prozess zu wiederholen: Institute können jederzeit aktualisierte Bescheinigungen anfordern, was die laufenden Sorgfaltspflichten unterstützt. Bei grenzüberschreitenden Kontoeröffnungen entfällt die manuelle Prüfung ausländischer Ausweisdokumente.",
      },
      {
        heading: "Starke Kundenauthentifizierung",
        content:
          "Die EUDIW berührt unmittelbar die Anforderungen der PSD2 an die starke Kundenauthentifizierung (SCA). Die PSD2 verlangt von Zahlungsdienstleistern die Authentifizierung mit mindestens zwei von drei Faktoren: Wissen, Besitz und Inhärenz. Die Wallet als sichere Anwendung auf dem Gerät des Nutzers, mit kryptografischer Schlüsselbindung und biometrischer Entsperrung, deckt Besitz und Inhärenz von sich aus ab. Zusammen mit einer PIN oder einem Passwort ergibt das einen vollständigen SCA-Mechanismus.\n\nDaraus entsteht die Möglichkeit, Identitätsprüfung und Transaktionsauthentifizierung in einem einzigen Instrument zu bündeln. Statt getrennte Systeme für Onboarding (KYC) und laufende Authentifizierung (SCA) zu betreiben, können Institute die Wallet für beides nutzen. Mehrere Large-Scale Pilots, namentlich NOBID und POTENTIAL, testen Wallet-basierte Zahlungsauthentifizierung. Das praktische Ergebnis: weniger Infrastruktur, geringere Betriebskosten und ein Ablauf, der mehrere Authentifizierungs-Apps und SMS-Codes durch eine Wallet-Interaktion ersetzt.",
      },
      {
        heading: "Auswirkungen auf Zahlungsdienste",
        content:
          "Für Zahlungsdienstleister öffnet die Wallet neue Wege bei Zahlungsauslösung und Autorisierung. Die EUDIW kann als verifizierte Identitätsschicht für Zahlungen dienen, sodass Zahlungsauslösedienste sich auf Wallet-Authentifizierung stützen können statt auf Screen Scraping oder Weiterleitungen zur Bank. Das entspricht der Richtung von PSD3 und der vorgeschlagenen Zahlungsdiensteverordnung, die die Anforderungen an sichere Authentifizierung und Identitätsprüfung weiter verschärfen.\n\nOpen-Banking-Schnittstellen lassen sich um Wallet-Identität erweitern: Drittanbieter können die Identität eines Kunden über die Wallet prüfen, bevor sie auf Kontoinformationen zugreifen, was dem Ökosystem eine zusätzliche Vertrauensschicht gibt. Bei grenzüberschreitenden Zahlungen liefert die Wallet einen einheitlichen Prüfmechanismus, der in allen Mitgliedstaaten funktioniert und die Compliance für Anbieter in mehreren Jurisdiktionen vereinfacht. Über die selektive Offenlegung der Wallet wird zudem eine feinere Einwilligungssteuerung möglich, bei der Kunden die Weitergabe einzelner zahlungsbezogener Daten gezielt freigeben.",
      },
      {
        heading: "Geldwäschebekämpfung",
        content:
          "Die Einrichtung der Anti-Money Laundering Authority (AMLA) parallel zu eIDAS 2.0 verstärkt die regulatorische Dynamik für Finanzinstitute. Die AMLA wird beaufsichtigen, wie Finanzunternehmen ihre Sorgfaltspflichten umsetzen, und die Rolle der Wallet als verpflichtend zu akzeptierendes Instrument der Identitätsprüfung wirkt direkt in diese Prozesse hinein. Wallet-basiertes KYC liefert staatlich verifizierte Identitätsdaten auf dem höchsten Sicherheitsniveau, was das Restrisiko bei der Kundenidentifizierung senken und das Risk Scoring vereinfachen kann.\n\nAllerdings müssen Institute ihre AML-Systeme so anpassen, dass sie in der Übergangszeit Wallet-basierte Prüfungen neben den klassischen Verfahren verarbeiten. Die Transaktionsüberwachung sollte Auffälligkeiten in Wallet-Authentifizierungsmustern erkennen. Die Verfahren für Verdachtsmeldungen müssen Wallet-Szenarien abdecken. Zu prüfen ist außerdem, wie qualifizierte elektronische Attributsbescheinigungen (QEAAs) die verstärkten Sorgfaltspflichten stützen können, etwa durch verifizierte Bescheinigungen zur Herkunft der Mittel oder zum Beschäftigungsstatus direkt aus der Wallet.",
      },
      {
        heading: "Wertpapierdienstleistungen und die Schnittstelle zu MiFID II",
        content:
          "Wertpapierfirmen und Vermögensverwaltungsplattformen unter MiFID II unterliegen eigenen Anforderungen an die Identitätsprüfung bei Onboarding, Geeignetheitsprüfung und Transaktionsmeldung. Die EUDIW kann die nach den Know-your-Client-Regeln der MiFID II erforderliche Identifizierung erheblich verkürzen. Verifizierte Bescheinigungen beruflicher Qualifikationen, etwa der Nachweis des Status als professioneller Anleger, könnten als elektronische Attributsbescheinigungen über die Wallet geliefert werden und den Aufwand der Selbstauskunft verringern.\n\nFür die Meldepflichten nach MiFID II und EMIR liefert die Wallet einen Identitätsanker mit hohem Sicherheitsniveau, der die Genauigkeit der Kundenidentifizierung in aufsichtlichen Meldungen verbessert. Grenzüberschreitend tätige Vertriebs- und Anlageplattformen profitieren von einem einheitlichen Prüfmechanismus, der den derzeitigen Flickenteppich nationaler Dokumentenprüfungen ersetzt. Mit der Reife des Ökosystems könnten Bescheinigungen zu finanzieller Geeignetheit, steuerlicher Ansässigkeit und wirtschaftlich Berechtigten die Compliance weiter vereinfachen.",
      },
    ],
    keyRequirements: [
      "Die EUDIW als verpflichteter vertrauender Beteiligter für Sorgfaltspflichten und Identitätsprüfung akzeptieren",
      "OpenID4VC-Protokolle für den Empfang Wallet-basierter Identitätsvorlagen umsetzen",
      "Sowohl SD-JWT als auch mdoc als Nachweisformate für die PID-Prüfung unterstützen",
      "Sich beim nationalen Aufsichtsorgan als vertrauender Beteiligter registrieren und die benötigten Attribute angeben",
      "Wallet-basiertes KYC mit den Pflichten zur Geldwäsche- und Terrorismusfinanzierungsbekämpfung in Einklang bringen",
      "Sicherstellen, dass die starke Kundenauthentifizierung die Wallet-basierte Identitätsprüfung einbindet",
      "Prüfpfade über alle Wallet-basierten Identitätsprüfungen führen",
      "Datenschutz-Folgenabschätzungen auf die Verarbeitung Wallet-basierter personenbezogener Daten erweitern",
    ],
    useCases: [
      "Digitales KYC bei der Kontoeröffnung mit aus der Wallet vorgelegter PID",
      "Wallet-basierte starke Kundenauthentifizierung für Zahlungen",
      "Altersprüfung für altersbeschränkte Finanzprodukte",
      "Grenzüberschreitende Kontoeröffnung mit einheitlicher Identitätsprüfung",
      "Qualifizierte elektronische Signatur für Vertragsabschlüsse über die Wallet",
      "Verstärkte Sorgfaltspflichten mit verifizierten Attributsbescheinigungen aus der Wallet",
    ],
  },
  healthcare: {
    title: "Gesundheitswesen",
    shortDescription:
      "Wie eIDAS 2.0 und die europäische Wallet für die digitale Identität die Patientenidentifizierung, Gesundheitsbescheinigungen, den grenzüberschreitenden Zugang zur Versorgung und die Verwaltung elektronischer Patientenakten verändern.",
    metaTitle: "eIDAS 2.0 im Gesundheitswesen: Patientenidentität und Wallet",
    metaDescription:
      "Wie die EU-Wallet für die digitale Identität die Patientenidentifizierung, Gesundheitsbescheinigungen und die grenzüberschreitende Versorgung verändert, und was Einrichtungen ab 2026 bereitstellen müssen.",
    heroTagline:
      "Patientenidentität sichern und grenzüberschreitende Versorgung möglich machen",
    sections: [
      {
        heading: "Folgen für Einrichtungen des Gesundheitswesens",
        content:
          "eIDAS 2.0 benennt Gesundheitsdienstleister ausdrücklich als Organisationen, die die europäische Wallet für die digitale Identität akzeptieren müssen, wenn europäisches oder nationales Recht eine Identitätsprüfung von Patientinnen und Patienten verlangt. Damit gehört das Gesundheitswesen zu den Sektoren mit Vorrang. Die Verordnung trifft auf einen Sektor, der sich ohnehin stark digitalisiert: Die Verordnung über den europäischen Raum für Gesundheitsdaten (EHDS) schafft parallel einen Rahmen für den grenzüberschreitenden Austausch von Gesundheitsdaten.\n\nFür Einrichtungen löst die Wallet ein altes Problem: die zuverlässige Identifizierung von Patienten. Verwechslungen und Doppelakten sind eine erhebliche Quelle von Behandlungsfehlern und Verwaltungsaufwand. Eine staatlich verifizierte digitale Identität aus der Wallet liefert eine Identifizierung mit hohem Sicherheitsniveau, die über Einrichtungen, Regionen und Landesgrenzen hinweg gleich funktioniert. Der operative Nutzen einer sofortigen, korrekten Identifizierung ist beträchtlich.",
      },
      {
        heading: "Identitätsprüfung von Patienten",
        content:
          "Mit der EUDIW legen Patienten ihre Personenidentifizierungsdaten (PID) über eine einfache Wallet-Interaktion vor, anstatt Ausweis- und Versicherungskarten vorzuzeigen und Daten manuell erfassen zu lassen. Besonders wertvoll ist das in der Notfallversorgung, wo schnelle und korrekte Identifizierung entscheidend ist und Patienten häufig keine Papiere bei sich haben. Eine Vorlage über das Smartphone liefert verifizierte Identitätsdaten in Sekunden.\n\nÜber die reine Identifizierung hinaus kann die Wallet gesundheitsbezogene elektronische Attributsbescheinigungen tragen: Versicherungsschutz, Impfnachweise, Organspendestatus, Allergieinformationen und Verordnungsansprüche. Von zuständigen Gesundheitsbehörden oder QTSPs ausgestellt, sind diese Bescheinigungen überprüfbar und fälschungssicher und lassen sich direkt am Ort der Behandlung prüfen. Die selektive Offenlegung stellt sicher, dass nur die für den konkreten Behandlungsanlass relevanten Informationen geteilt werden, was sowohl die Datenminimierung nach DSGVO als auch die Selbstbestimmung der Patienten über sensible Gesundheitsdaten stützt.",
      },
      {
        heading: "Elektronische Patientenakten und Abstimmung mit dem EHDS",
        content:
          "Die EHDS-Verordnung schafft einen Rahmen für den Austausch elektronischer Gesundheitsdaten in der EU, sowohl für die Primärnutzung (unmittelbare Behandlung) als auch für die Sekundärnutzung (Forschung, Politik, Innovation). Die EUDIW bietet dafür die naheliegende Identitätsschicht: Patienten authentifizieren sich mit der Wallet, um auf ihre Gesundheitsdaten zuzugreifen, und Datenhalter können die Identität mit hohem Sicherheitsniveau prüfen, bevor sie Akten weitergeben.\n\nDas Zusammentreffen von eIDAS 2.0 und EHDS bedeutet, dass Einrichtungen eine integrierte Infrastruktur für digitale Identität und Gesundheitsdaten planen müssen. Wallet-basierte Authentifizierung ermöglicht den sicheren Zugang zu Patientenportalen, Telemedizin-Plattformen und grenzüberschreitenden Austauschdiensten. Datenhaltern gibt die Wallet einen einheitlichen Mechanismus, um die Identität von Betroffenen zu prüfen, die ihre Auskunftsrechte nach DSGVO ausüben. Wer jetzt in die Wallet-Integration investiert, erfüllt die Anforderungen aus beiden Rechtsakten leichter, sobald sie greifen.",
      },
      {
        heading: "Grenzüberschreitender Zugang zur Versorgung",
        content:
          "Die grenzüberschreitende Versorgung in der EU litt bisher daran, wie schwer sich Identität und Versicherungsschutz über verschiedene nationale Systeme hinweg prüfen lassen. Die EUDIW gibt Patienten einen einzigen, einheitlichen Weg, in jedem Mitgliedstaat ihre Identität und verifizierte gesundheitsbezogene Bescheinigungen nachzuweisen. Wer von Deutschland nach Spanien reist, legt dort die Wallet vor, und die Einrichtung erhält staatlich verifizierte Identitätsdaten und gegebenenfalls Bescheinigungen zum Versicherungsschutz, ohne unbekannte ausländische Dokumente bearbeiten zu müssen.\n\nDie Verordnung über das einheitliche digitale Zugangstor verpflichtet die Mitgliedstaaten schon heute, bestimmte öffentliche Dienste grenzüberschreitend zugänglich zu machen. Zusammen mit eIDAS 2.0 ergibt das einen Auftrag zum digitalen Zugang zu Gesundheitsleistungen über Grenzen hinweg. Wallet-basierte Prüfung vereinfacht die Verwaltung rund um die Europäische Krankenversicherungskarte (EHIC) und die Formulare S1 und S2 für die Genehmigung von Behandlungen im Ausland. Einrichtungen in Grenzregionen und solche mit internationalen Patienten sollten die Integration priorisieren.",
      },
      {
        heading: "Versicherungsprüfung und Abrechnung",
        content:
          "Die Prüfung des Krankenversicherungsschutzes ist ein erheblicher Verwaltungsaufwand in der Versorgung. Die EUDIW kann Bescheinigungen von Versicherern tragen, die Versicherungsstatus, Tarifdetails und Anspruch auf bestimmte Behandlungen bestätigen. Legt eine Patientin diese Bescheinigungen in der Einrichtung vor, lässt sich der Schutz sofort prüfen, ohne manuellen Abgleich mit Versicherungsdatenbanken oder papiergebundene Bestätigungen.\n\nFür Krankenversicherer entsteht die Möglichkeit, digitale Versicherungsnachweise als elektronische Attributsbescheinigungen auszustellen, was Kosten für Ausgabe und Ersatz von Karten senkt und eine Prüfung in Echtzeit erlaubt. Die Abrechnung wird einfacher, wenn die Identität über eine Wallet-Vorlage mit hohem Sicherheitsniveau feststeht, was Betrugsrisiken senkt und die Zuordnung von Forderungen zu Personen vereinfacht. Verifizierte Identität und verifizierter Versicherungsschutz in einer einzigen Interaktion verringern den Aufwand auf beiden Seiten.",
      },
      {
        heading: "Datenschutz im Gesundheitskontext",
        content:
          "Gesundheitsdaten sind nach Artikel 9 DSGVO besondere Kategorien personenbezogener Daten und verlangen zusätzliche Schutzmaßnahmen. Die selektive Offenlegung der Wallet ist hier besonders wertvoll, denn der Grundsatz der erforderlichen Mindestinformation ist im Gesundheitswesen sowohl Rechtspflicht als auch gute klinische Praxis. Eine Apotheke, die eine Verordnung prüft, braucht keinen Zugriff auf die vollständige Krankengeschichte. Eine betriebliche Untersuchung muss keine Diagnosen offenlegen.\n\nEinrichtungen müssen vor der Einführung Wallet-basierter Identitäts- und Gesundheitsdatenprüfung sorgfältige Datenschutz-Folgenabschätzungen durchführen. Die Rechtsgrundlage für die Verarbeitung Wallet-basierter Gesundheitsdaten ist genau zu bestimmen, in der Regel Artikel 9 Absatz 2 Buchstabe h DSGVO für die Versorgung oder Buchstabe i für Zwecke der öffentlichen Gesundheit. Aufbewahrungsfristen für Prüfnachweise sind nach DSGVO und nationalen Aufbewahrungsvorschriften festzulegen. Schulungen des Personals sind unverzichtbar, damit nicht mehr sensible Gesundheitsattribute erhoben werden als nötig.",
      },
    ],
    keyRequirements: [
      "Die EUDIW zur Patientenidentifizierung akzeptieren, wenn europäisches oder nationales Recht sie verlangt",
      "Nachweisprüfung umsetzen, die sowohl SD-JWT als auch mdoc für Gesundheitsbescheinigungen unterstützt",
      "Selektive Offenlegung durchsetzen, damit nur klinisch notwendige Gesundheitsdaten geteilt werden",
      "Die Wallet-Integration auf die Anforderungen des europäischen Raums für Gesundheitsdaten abstimmen",
      "Artikel 9 DSGVO für alle Wallet-basierten besonderen Gesundheitsdaten einhalten",
      "Sich beim nationalen Aufsichtsorgan als vertrauender Beteiligter im Gesundheitswesen registrieren",
      "Die Einwilligungsverwaltung auf Wallet-basierte Datenweitergabe erweitern",
      "Prüfpfade für alle Wallet-basierten Identifizierungen und Bescheinigungen führen",
    ],
    useCases: [
      "Identitätsprüfung bei Aufnahme und in der Notaufnahme",
      "Prüfung von Impfnachweisen und Immunstatus über Wallet-Bescheinigungen",
      "Grenzüberschreitende Versorgung mit Wallet-basierter Identitäts- und Versicherungsprüfung",
      "Prüfung und Abgabe von Verordnungen anhand von Ansprüchen aus der Wallet",
      "Authentifizierung in der Telemedizin über die Wallet",
      "Prüfung des Versicherungsschutzes am Ort der Behandlung über Wallet-Bescheinigungen",
    ],
  },
};

const it: Record<string, IndustryTranslation> = {
  "financial-services": {
    title: "Servizi finanziari",
    shortDescription:
      "Come eIDAS 2.0 e il portafoglio europeo di identità digitale trasformano l'onboarding dei clienti, l'autenticazione e la conformità normativa per banche, prestatori di servizi di pagamento e fintech.",
    metaTitle: "eIDAS 2.0 per le banche: accettazione del wallet e KYC",
    metaDescription:
      "Banche, prestatori di servizi di pagamento e fintech diventano parti facenti affidamento obbligate. Cosa richiedono l'onboarding tramite wallet, l'autenticazione forte e il KYC, e quando scatta ogni obbligo.",
    heroTagline:
      "Ripensare onboarding e autenticazione dei clienti nell'era dell'identità digitale",
    sections: [
      {
        heading: "Impatto su banche e finanza",
        content:
          "I servizi finanziari sono tra i settori più direttamente interessati da eIDAS 2.0. Il regolamento designa espressamente gli istituti finanziari che svolgono l'adeguata verifica della clientela ai sensi della normativa antiriciclaggio come parti facenti affidamento obbligate. Banche, istituti di pagamento, istituti di moneta elettronica e imprese di investimento devono quindi accettare il portafoglio europeo di identità digitale quando il cliente sceglie di presentarlo per la verifica dell'identità. Non è una possibilità futura: è un obbligo giuridico vincolante con scadenze definite.\n\nL'impatto va oltre la conformità. L'EUDIW cambia l'economia dell'onboarding, della verifica dell'identità e dell'autenticazione continuativa. Processi che oggi costano agli istituti somme rilevanti per cliente in verifiche manuali e gestione documentale possono essere sostituiti da presentazioni del wallet immediate e verificate crittograficamente. Chi si adatta per primo guadagna un vantaggio misurabile in velocità di acquisizione ed efficienza operativa.",
      },
      {
        heading: "Cambiamenti nell'onboarding dei clienti",
        content:
          "I processi KYC sono l'area di trasformazione più immediata. I flussi attuali richiedono in genere di caricare documenti di identità, completare una verifica video o un riconoscimento del volto e attendere una revisione manuale. Questa frizione genera tassi di abbandono significativi, soprattutto da mobile. Con l'EUDIW l'onboarding diventa una singola presentazione del wallet: il cliente approva una richiesta sul proprio dispositivo e la banca riceve dati di identificazione personale (PID) verificati dallo Stato, in un attestato firmato crittograficamente.\n\nLa verifica dell'identità a distanza tramite wallet raggiunge il livello di garanzia elevato richiesto per i servizi finanziari, soddisfacendo sia eIDAS 2.0 sia la normativa antiriciclaggio. Il wallet consente inoltre di ripetere la verifica dell'identità senza rifare l'intero KYC: gli istituti possono richiedere attestazioni aggiornate in qualsiasi momento, a sostegno dell'adeguata verifica continuativa. Per l'apertura di conti transfrontalieri, il wallet elimina la complessità della verifica manuale di documenti esteri.",
      },
      {
        heading: "Autenticazione forte del cliente",
        content:
          "L'EUDIW interseca direttamente i requisiti di autenticazione forte del cliente (SCA) della PSD2. La PSD2 impone ai prestatori di servizi di pagamento di autenticare i clienti con almeno due fattori su tre: conoscenza, possesso e inerenza. Il wallet, applicazione sicura sul dispositivo dell'utente con associazione crittografica delle chiavi e sblocco biometrico, soddisfa per sua natura possesso e inerenza. Unito a un PIN o a una password, fornisce un meccanismo SCA completo.\n\nQuesta convergenza permette di unificare verifica dell'identità e autenticazione delle operazioni in un unico strumento. Invece di mantenere sistemi separati per l'onboarding (KYC) e per l'autenticazione continuativa (SCA), gli istituti possono usare il wallet per entrambi. Diversi Large-Scale Pilots, in particolare NOBID e POTENTIAL, stanno testando flussi di autenticazione dei pagamenti basati sul wallet. Il risultato pratico è meno infrastruttura, costi operativi più bassi e un'esperienza che sostituisce più app di autenticazione e codici SMS con una sola interazione.",
      },
      {
        heading: "Implicazioni per i servizi di pagamento",
        content:
          "Per i prestatori di servizi di pagamento il wallet apre nuove possibilità nell'avvio e nell'autorizzazione delle operazioni. L'EUDIW può fare da livello di identità verificata per i pagamenti, consentendo ai servizi di disposizione di ordini di pagamento di affidarsi all'autenticazione tramite wallet invece dello screen scraping o del reindirizzamento alla banca. La direzione è la stessa della PSD3 e della proposta di regolamento sui servizi di pagamento, che rafforzano ulteriormente i requisiti di autenticazione sicura e verifica dell'identità.\n\nLe API di open banking possono essere arricchite dall'identità nel wallet: i prestatori terzi possono verificare l'identità del cliente prima di accedere alle informazioni sui conti, aggiungendo un livello di fiducia all'ecosistema. Per i pagamenti transfrontalieri il wallet offre un meccanismo di verifica uniforme che funziona in tutti gli Stati membri e semplifica la conformità per chi opera in più giurisdizioni. La divulgazione selettiva consente inoltre una gestione più granulare del consenso, con il cliente che autorizza la condivisione di singoli dati legati al pagamento.",
      },
      {
        heading: "Aspetti antiriciclaggio",
        content:
          "L'istituzione dell'Autorità antiriciclaggio (AMLA) in parallelo a eIDAS 2.0 crea una dinamica normativa che si rafforza a vicenda. L'AMLA vigilerà su come gli enti finanziari attuano l'adeguata verifica della clientela, e il ruolo del wallet come strumento di accettazione obbligatoria incide direttamente su quei processi. Il KYC tramite wallet fornisce dati di identità verificati dallo Stato al massimo livello di garanzia, riducendo potenzialmente il rischio residuo nell'identificazione del cliente e semplificando il risk scoring.\n\nGli istituti devono però adattare i sistemi antiriciclaggio per gestire, nel periodo di transizione, la verifica tramite wallet insieme ai metodi tradizionali. Il monitoraggio delle operazioni va aggiornato per rilevare anomalie nei modelli di autenticazione tramite wallet. Le procedure di segnalazione di operazioni sospette devono coprire gli scenari basati sul wallet. Va inoltre valutato come le attestazioni elettroniche qualificate di attributi (QEAA) possano sostenere l'adeguata verifica rafforzata, per esempio ricevendo dal wallet attestazioni verificate sull'origine dei fondi o sulla situazione lavorativa.",
      },
      {
        heading: "Servizi di investimento e intersezione con la MiFID II",
        content:
          "Le imprese di investimento e le piattaforme di gestione patrimoniale soggette alla MiFID II hanno requisiti specifici di verifica dell'identità per l'onboarding, la valutazione di adeguatezza e la segnalazione delle operazioni. L'EUDIW può snellire l'identificazione del cliente richiesta dalle regole know-your-client della MiFID II. Attestazioni verificate di qualifiche professionali, come la prova dello status di investitore professionale, potrebbero essere consegnate tramite wallet come attestazioni elettroniche di attributi, riducendo l'onere delle autocertificazioni.\n\nPer gli obblighi di segnalazione previsti da MiFID II ed EMIR, il wallet offre un ancoraggio dell'identità ad alta garanzia che migliora l'accuratezza dell'identificazione del cliente nelle segnalazioni. Le piattaforme di distribuzione di fondi e di investimento che operano oltre frontiera beneficiano di un meccanismo uniforme che sostituisce l'attuale mosaico di verifiche documentali nazionali. Con la maturazione dell'ecosistema, attestazioni su adeguatezza finanziaria, residenza fiscale e titolarità effettiva potrebbero semplificare ulteriormente la conformità.",
      },
    ],
    keyRequirements: [
      "Accettare l'EUDIW come parte facente affidamento obbligata per l'adeguata verifica e l'identificazione",
      "Implementare i protocolli OpenID4VC per ricevere le presentazioni di identità dal wallet",
      "Supportare i formati SD-JWT e mdoc per la verifica del PID",
      "Registrarsi come parte facente affidamento presso l'organismo di vigilanza nazionale, dichiarando gli attributi necessari",
      "Allineare il KYC tramite wallet agli obblighi antiriciclaggio e di contrasto al finanziamento del terrorismo",
      "Garantire che i flussi di autenticazione forte integrino la verifica dell'identità tramite wallet",
      "Conservare le tracce di audit di tutte le verifiche di identità effettuate tramite wallet",
      "Aggiornare le valutazioni d'impatto sulla protezione dei dati per coprire i dati personali provenienti dal wallet",
    ],
    useCases: [
      "KYC digitale per l'apertura del conto con PID presentato dal wallet",
      "Autenticazione forte del cliente tramite wallet per le operazioni di pagamento",
      "Verifica dell'età per prodotti finanziari con limiti di età",
      "Apertura di conti transfrontalieri con verifica dell'identità uniforme",
      "Firma elettronica qualificata per la sottoscrizione di contratti tramite wallet",
      "Adeguata verifica rafforzata con attestazioni di attributi verificate dal wallet",
    ],
  },
  healthcare: {
    title: "Sanità",
    shortDescription:
      "Come eIDAS 2.0 e il portafoglio europeo di identità digitale incidono sull'identificazione dei pazienti, sulle attestazioni sanitarie, sull'accesso transfrontaliero alle cure e sulla gestione del fascicolo sanitario elettronico.",
    metaTitle: "eIDAS 2.0 in sanità: identità del paziente e wallet",
    metaDescription:
      "Come il portafoglio europeo di identità digitale cambia l'identificazione dei pazienti, le attestazioni sanitarie e le cure transfrontaliere, e cosa devono predisporre le strutture dal 2026.",
    heroTagline:
      "Identità del paziente sicura e accesso transfrontaliero alle cure",
    sections: [
      {
        heading: "Impatto sulle organizzazioni sanitarie",
        content:
          "eIDAS 2.0 individua espressamente i prestatori di assistenza sanitaria tra le organizzazioni che devono accettare il portafoglio europeo di identità digitale quando il diritto dell'Unione o nazionale richiede la verifica dell'identità del paziente. La sanità è quindi uno dei settori prioritari. Il regolamento arriva in un momento di forte trasformazione digitale del settore: il regolamento sullo spazio europeo dei dati sanitari (EHDS) crea in parallelo un quadro per la condivisione transfrontaliera dei dati sanitari.\n\nPer le organizzazioni sanitarie il wallet risponde a un problema persistente: l'identificazione affidabile del paziente. Scambi di identità e fascicoli duplicati sono una fonte rilevante di errore clinico e di spreco amministrativo. Un'identità digitale verificata dallo Stato e presentata dal wallet offre un meccanismo di identificazione ad alta garanzia che funziona in modo uniforme tra strutture, regioni e Stati membri. I benefici operativi di un'identificazione immediata e corretta sono considerevoli.",
      },
      {
        heading: "Verifica dell'identità del paziente",
        content:
          "Con l'EUDIW il paziente presenta i propri dati di identificazione personale (PID) con una semplice interazione dal wallet, al posto di tessere sanitarie, documenti cartacei e inserimento manuale dei dati. È particolarmente utile in emergenza, dove l'identificazione rapida e corretta è decisiva e dove il paziente spesso non ha documenti con sé. Una presentazione dallo smartphone fornisce dati verificati in pochi secondi.\n\nOltre all'identificazione di base, il wallet può contenere attestazioni elettroniche di attributi di natura sanitaria: copertura assicurativa, certificazioni vaccinali, consenso alla donazione di organi, informazioni sulle allergie, diritti a prestazioni farmaceutiche. Rilasciate da autorità sanitarie competenti o da QTSP, queste attestazioni sono verificabili e non alterabili e possono essere controllate immediatamente al punto di cura. La divulgazione selettiva garantisce che il paziente condivida solo le informazioni pertinenti a quel contatto clinico, a sostegno sia della minimizzazione dei dati prevista dal GDPR sia dell'autonomia del paziente sui dati sanitari.",
      },
      {
        heading: "Fascicolo sanitario elettronico e allineamento con l'EHDS",
        content:
          "Il regolamento sullo spazio europeo dei dati sanitari (EHDS) istituisce un quadro per la condivisione dei dati sanitari elettronici nell'UE, sia per l'uso primario (cura diretta del paziente) sia per l'uso secondario (ricerca, politiche, innovazione). L'EUDIW ne costituisce il livello di identità naturale: il paziente si autentica con il wallet per accedere ai propri dati sanitari, e i titolari dei dati possono verificarne l'identità con alta garanzia prima di condividere i fascicoli.\n\nLa convergenza tra eIDAS 2.0 ed EHDS impone alle organizzazioni sanitarie di pianificare un'infrastruttura integrata di identità digitale e dati sanitari. L'autenticazione tramite wallet abilita l'accesso sicuro ai portali per i pazienti, alle piattaforme di telemedicina e ai servizi di scambio transfrontaliero. Ai titolari dei dati il wallet offre un meccanismo uniforme per verificare l'identità degli interessati che esercitano i diritti di accesso previsti dal GDPR. Chi investe ora nell'integrazione sarà in posizione migliore per rispettare entrambi i regolamenti quando diventeranno applicabili.",
      },
      {
        heading: "Accesso transfrontaliero alle cure",
        content:
          "L'assistenza sanitaria transfrontaliera nell'UE è stata ostacolata dalla difficoltà di verificare identità e copertura assicurativa tra sistemi nazionali diversi. L'EUDIW offre al paziente un unico meccanismo uniforme per dimostrare la propria identità e presentare attestazioni sanitarie verificate in qualsiasi Stato membro. Chi viaggia dalla Germania alla Spagna presenta il wallet alla struttura spagnola, che riceve dati di identità verificati dallo Stato e, potenzialmente, attestazioni di copertura assicurativa, senza dover trattare documenti esteri che non conosce.\n\nIl regolamento sullo sportello digitale unico impone già agli Stati membri di garantire l'accesso transfrontaliero a determinati servizi pubblici. Unito a eIDAS 2.0, ne deriva un mandato di accesso digitale ai servizi sanitari oltre frontiera. La verifica tramite wallet semplifica i procedimenti amministrativi legati alla tessera europea di assicurazione malattia (TEAM) e ai modelli S1 e S2 per l'autorizzazione delle cure all'estero. Le strutture nelle regioni di confine e quelle che assistono pazienti internazionali dovrebbero dare priorità all'integrazione.",
      },
      {
        heading: "Verifica assicurativa e rimborsi",
        content:
          "La verifica della copertura sanitaria è un processo amministrativo di peso nell'erogazione delle cure. L'EUDIW può contenere attestazioni degli assicuratori che confermano stato di copertura, dettagli di polizza e diritto a trattamenti specifici. Quando il paziente le presenta in struttura, il prestatore verifica la copertura immediatamente, senza controlli manuali sulle banche dati dell'assicuratore né conferme su carta.\n\nPer gli assicuratori sanitari nasce la possibilità di rilasciare attestazioni assicurative digitali come attestazioni elettroniche di attributi, riducendo i costi di emissione e sostituzione delle tessere e consentendo la verifica della copertura in tempo reale. La gestione dei rimborsi si semplifica quando l'identità del paziente è verificata con presentazioni ad alta garanzia, riducendo il rischio di frode e agevolando la riconciliazione delle richieste. Identità verificata e copertura verificata in una sola interazione riducono l'onere amministrativo per entrambe le parti.",
      },
      {
        heading: "Protezione dei dati in ambito sanitario",
        content:
          "I dati sanitari sono categorie particolari di dati ai sensi dell'articolo 9 del GDPR e richiedono garanzie aggiuntive nel trattamento. La divulgazione selettiva del wallet è qui particolarmente preziosa, perché il principio dell'informazione minima necessaria è insieme un obbligo di legge e una buona pratica clinica. Una farmacia che verifica una prescrizione non ha bisogno dell'intera storia clinica. Un accertamento sanitario aziendale non deve rivelare diagnosi specifiche.\n\nLe organizzazioni sanitarie devono svolgere valutazioni d'impatto sulla protezione dei dati approfondite prima di introdurre la verifica dell'identità e dei dati sanitari tramite wallet. La base giuridica del trattamento va stabilita con cura, di norma l'articolo 9, paragrafo 2, lettera h), del GDPR per l'erogazione delle cure o la lettera i) per finalità di sanità pubblica. I tempi di conservazione delle evidenze di verifica vanno definiti secondo il GDPR e le regole nazionali sulla conservazione della documentazione sanitaria. La formazione del personale è essenziale per evitare la raccolta eccessiva di attributi sanitari sensibili.",
      },
    ],
    keyRequirements: [
      "Accettare l'EUDIW per la verifica dell'identità del paziente quando il diritto dell'Unione o nazionale lo richiede",
      "Implementare la verifica degli attestati nei formati SD-JWT e mdoc per le attestazioni sanitarie",
      "Applicare la divulgazione selettiva per limitare la condivisione dei dati sanitari alla necessità clinica",
      "Allineare l'integrazione del wallet ai requisiti dello spazio europeo dei dati sanitari",
      "Garantire la conformità all'articolo 9 del GDPR per tutti i dati sanitari provenienti dal wallet",
      "Registrarsi come parte facente affidamento del settore sanitario presso l'organismo di vigilanza nazionale",
      "Aggiornare la gestione del consenso per la condivisione dei dati tramite wallet",
      "Predisporre tracce di audit per ogni identificazione e attestazione effettuata tramite wallet",
    ],
    useCases: [
      "Verifica dell'identità al ricovero e in pronto soccorso",
      "Verifica di certificazioni vaccinali e stato immunitario tramite attestazioni del wallet",
      "Cure transfrontaliere con verifica di identità e copertura assicurativa dal wallet",
      "Verifica e dispensazione di prescrizioni con i diritti presentati dal wallet",
      "Autenticazione del paziente in telemedicina tramite wallet",
      "Verifica della copertura assicurativa al punto di cura tramite attestazioni del wallet",
    ],
  },
};

const es: Record<string, IndustryTranslation> = {
  "financial-services": {
    title: "Servicios financieros",
    shortDescription:
      "Cómo eIDAS 2.0 y la cartera europea de identidad digital transforman el alta de clientes, la autenticación y el cumplimiento normativo de bancos, proveedores de pago y fintech.",
    metaTitle: "eIDAS 2.0 para bancos: aceptación de la cartera y KYC",
    metaDescription:
      "Bancos, proveedores de pago y fintech pasan a ser partes usuarias obligadas. Qué exigen el alta con cartera, la autenticación reforzada y el KYC, y cuándo entra cada obligación.",
    heroTagline:
      "Replantear el alta de clientes y la autenticación en la era de la identidad digital",
    sections: [
      {
        heading: "Impacto en banca y finanzas",
        content:
          "Los servicios financieros son uno de los sectores más directamente afectados por eIDAS 2.0. El reglamento designa expresamente como partes usuarias obligadas a las entidades financieras que aplican la diligencia debida con respecto al cliente conforme a las normas de prevención del blanqueo de capitales. Bancos, entidades de pago, entidades de dinero electrónico y empresas de servicios de inversión deben aceptar la cartera europea de identidad digital cuando el cliente decida presentarla para verificar su identidad. No es una posibilidad futura: es una obligación jurídica vinculante con plazos definidos.\n\nEl efecto va más allá del cumplimiento. La EUDIW cambia la economía del alta de clientes, la verificación de identidad y la autenticación continuada. Procesos que hoy cuestan a las entidades cantidades importantes por cliente en verificación manual y tratamiento de documentos pueden sustituirse por presentaciones de cartera inmediatas y verificadas criptográficamente. Quien se adapte pronto ganará una ventaja medible en velocidad de captación y en eficiencia operativa.",
      },
      {
        heading: "Cambios en el alta de clientes",
        content:
          "Los procesos de KYC son el área de transformación más inmediata. Los flujos actuales suelen exigir que el cliente suba documentos de identidad, complete una verificación por vídeo o selfi y espere una revisión manual. Esa fricción provoca tasas de abandono altas, sobre todo en móvil. Con la EUDIW el alta se convierte en una sola presentación de cartera: el cliente aprueba una solicitud en su dispositivo y el banco recibe datos de identificación de la persona (PID) verificados por el Estado, en una credencial firmada criptográficamente.\n\nLa verificación remota de identidad mediante la cartera alcanza el nivel de seguridad alto que exigen los servicios financieros, y satisface tanto eIDAS 2.0 como la normativa de prevención del blanqueo. La cartera también permite repetir la verificación sin rehacer todo el KYC: la entidad puede solicitar declaraciones actualizadas en cualquier momento, lo que sostiene la diligencia debida continuada. En la apertura transfronteriza de cuentas, desaparece la complejidad de verificar documentos de identidad extranjeros a mano.",
      },
      {
        heading: "Autenticación reforzada de clientes",
        content:
          "La EUDIW se cruza directamente con los requisitos de autenticación reforzada de clientes (SCA) de la PSD2. La PSD2 obliga a los proveedores de servicios de pago a autenticar al cliente con al menos dos de tres factores: conocimiento, posesión e inherencia. La cartera, como aplicación segura en el dispositivo del usuario, con vinculación criptográfica de claves y desbloqueo biométrico, cubre por sí misma posesión e inherencia. Junto a un PIN o una contraseña, constituye un mecanismo completo de SCA.\n\nEsa convergencia permite unificar la verificación de identidad y la autenticación de operaciones en un solo instrumento. En lugar de mantener sistemas separados para el alta (KYC) y para la autenticación continuada (SCA), la entidad puede usar la cartera para ambos. Varios Large-Scale Pilots, en particular NOBID y POTENTIAL, están probando flujos de autenticación de pagos con cartera. El resultado práctico es menos infraestructura, menores costes operativos y una experiencia que sustituye varias aplicaciones de autenticación y códigos por SMS con una sola interacción.",
      },
      {
        heading: "Implicaciones para los servicios de pago",
        content:
          "Para los proveedores de servicios de pago, la cartera abre posibilidades nuevas en el inicio y la autorización de operaciones. La EUDIW puede actuar como capa de identidad verificada para los pagos, de modo que los servicios de iniciación de pagos se apoyen en la autenticación con cartera en lugar del screen scraping o la redirección al banco. Va en la misma dirección que la PSD3 y la propuesta de reglamento de servicios de pago, que refuerzan los requisitos de autenticación segura y verificación de identidad.\n\nLas API de banca abierta pueden enriquecerse con la identidad de la cartera: un tercero proveedor puede verificar la identidad del cliente antes de acceder a información de cuentas, lo que añade una capa de confianza al ecosistema. En pagos transfronterizos, la cartera aporta un mecanismo de verificación uniforme que funciona en todos los Estados miembros y simplifica el cumplimiento de quien opera en varias jurisdicciones. La divulgación selectiva permite además una gestión del consentimiento más granular, con el cliente autorizando la compartición de datos concretos ligados al pago.",
      },
      {
        heading: "Prevención del blanqueo de capitales",
        content:
          "La creación de la Autoridad de Lucha contra el Blanqueo de Capitales (AMLA) en paralelo a eIDAS 2.0 crea una dinámica normativa que se refuerza a sí misma. La AMLA supervisará cómo aplican las entidades la diligencia debida, y el papel de la cartera como instrumento de aceptación obligatoria incide directamente en esos procesos. El KYC con cartera aporta datos de identidad verificados por el Estado al nivel de seguridad más alto, lo que puede reducir el riesgo residual en la identificación del cliente y simplificar la puntuación de riesgo.\n\nAun así, las entidades deben adaptar sus sistemas para tratar, durante la transición, la verificación con cartera junto a los métodos tradicionales. La monitorización de operaciones debería detectar anomalías en los patrones de autenticación con cartera. Los procedimientos de comunicación de operaciones sospechosas deben contemplar estos escenarios. Conviene además valorar cómo las declaraciones electrónicas cualificadas de atributos (QEAA) pueden sostener la diligencia debida reforzada, por ejemplo recibiendo de la cartera declaraciones verificadas sobre el origen de los fondos o la situación laboral.",
      },
      {
        heading: "Servicios de inversión y su cruce con MiFID II",
        content:
          "Las empresas de servicios de inversión y las plataformas de gestión de patrimonios sujetas a MiFID II tienen requisitos propios de verificación de identidad para el alta, la evaluación de idoneidad y la comunicación de operaciones. La EUDIW puede agilizar la identificación del cliente que exigen las reglas de conocimiento del cliente de MiFID II. Declaraciones verificadas de cualificación profesional, como la prueba de la condición de inversor profesional, podrían entregarse a través de la cartera como declaraciones electrónicas de atributos, reduciendo la carga de las autocertificaciones.\n\nPara las obligaciones de comunicación de MiFID II y EMIR, la cartera ofrece un anclaje de identidad de alta garantía que mejora la exactitud de la identificación del cliente en los informes regulatorios. Las plataformas de distribución de fondos y de inversión que operan en varios países se benefician de un mecanismo uniforme que sustituye el mosaico actual de verificaciones documentales nacionales. A medida que madure el ecosistema, declaraciones sobre idoneidad financiera, residencia fiscal y titularidad real podrían simplificar aún más el cumplimiento.",
      },
    ],
    keyRequirements: [
      "Aceptar la EUDIW como parte usuaria obligada para la diligencia debida y la verificación de identidad",
      "Implantar los protocolos OpenID4VC para recibir presentaciones de identidad desde la cartera",
      "Admitir los formatos SD-JWT y mdoc para la verificación del PID",
      "Registrarse como parte usuaria ante el organismo de supervisión nacional, declarando los atributos necesarios",
      "Alinear el KYC con cartera con las obligaciones de prevención del blanqueo y de la financiación del terrorismo",
      "Asegurar que los flujos de autenticación reforzada integren la verificación de identidad con cartera",
      "Mantener registros de auditoría de todas las verificaciones de identidad hechas con cartera",
      "Actualizar las evaluaciones de impacto en protección de datos para cubrir los datos personales que llegan de la cartera",
    ],
    useCases: [
      "KYC digital para abrir cuenta con el PID presentado desde la cartera",
      "Autenticación reforzada de clientes con cartera para operaciones de pago",
      "Verificación de edad en productos financieros con límite de edad",
      "Apertura transfronteriza de cuentas con verificación de identidad uniforme",
      "Firma electrónica cualificada para formalizar contratos desde la cartera",
      "Diligencia debida reforzada con declaraciones de atributos verificadas de la cartera",
    ],
  },
  healthcare: {
    title: "Sanidad",
    shortDescription:
      "Cómo eIDAS 2.0 y la cartera europea de identidad digital afectan a la identificación del paciente, las declaraciones sanitarias, el acceso transfronterizo a la asistencia y la gestión de la historia clínica electrónica.",
    metaTitle: "eIDAS 2.0 en sanidad: identidad del paciente y cartera",
    metaDescription:
      "Cómo la cartera europea de identidad digital cambia la identificación del paciente, las declaraciones sanitarias y la asistencia transfronteriza, y qué deben desplegar los centros desde 2026.",
    heroTagline:
      "Identidad del paciente segura y acceso transfronterizo a la asistencia",
    sections: [
      {
        heading: "Impacto en las organizaciones sanitarias",
        content:
          "eIDAS 2.0 señala expresamente a los prestadores de asistencia sanitaria entre las organizaciones que deben aceptar la cartera europea de identidad digital cuando el derecho de la Unión o nacional exija verificar la identidad del paciente. Eso convierte a la sanidad en uno de los sectores prioritarios. El reglamento llega en un momento de fuerte transformación digital del sector: el reglamento del espacio europeo de datos sanitarios (EHDS) crea en paralelo un marco para compartir datos de salud entre países.\n\nPara las organizaciones sanitarias, la cartera resuelve un problema persistente: la identificación fiable del paciente. Las confusiones de identidad y las historias duplicadas son una fuente importante de error clínico y de gasto administrativo. Una identidad digital verificada por el Estado y presentada desde la cartera aporta una identificación de alta garantía que funciona igual entre centros, entre regiones y entre Estados miembros. El beneficio operativo de identificar al paciente al instante y sin error es considerable.",
      },
      {
        heading: "Verificación de la identidad del paciente",
        content:
          "Con la EUDIW el paciente presenta sus datos de identificación de la persona (PID) con una interacción sencilla desde la cartera, en lugar de tarjetas sanitarias, documentos físicos y transcripción manual de datos. Es especialmente valioso en urgencias, donde identificar rápido y bien es crítico y donde el paciente a menudo no lleva documentación. Una presentación desde el móvil entrega datos verificados en segundos.\n\nMás allá de la identificación básica, la cartera puede llevar declaraciones electrónicas de atributos de carácter sanitario: cobertura del seguro, registros de vacunación, condición de donante de órganos, información sobre alergias y derechos de prescripción. Emitidas por autoridades sanitarias competentes o por QTSP, son verificables e inalterables y pueden comprobarse al instante en el punto de atención. La divulgación selectiva garantiza que el paciente solo comparta la información pertinente para ese episodio asistencial, lo que sostiene tanto la minimización de datos del RGPD como su autonomía sobre datos sensibles.",
      },
      {
        heading: "Historia clínica electrónica y encaje con el EHDS",
        content:
          "El reglamento del espacio europeo de datos sanitarios (EHDS) crea un marco para compartir datos de salud electrónicos en la UE, tanto para uso primario (tratamiento directo del paciente) como para uso secundario (investigación, políticas, innovación). La EUDIW es su capa de identidad natural: el paciente se autentica con la cartera para acceder a sus datos, y los titulares de datos pueden verificar su identidad con alta garantía antes de compartir historias.\n\nLa convergencia de eIDAS 2.0 y el EHDS obliga a las organizaciones sanitarias a planificar una infraestructura integrada de identidad digital y datos de salud. La autenticación con cartera habilita el acceso seguro a portales del paciente, plataformas de telemedicina y servicios de intercambio transfronterizo. A los titulares de datos, la cartera les da un mecanismo uniforme para verificar la identidad de quien ejerce sus derechos de acceso del RGPD. Quien invierta ahora en la integración estará en mejor posición para cumplir ambos reglamentos cuando resulten aplicables.",
      },
      {
        heading: "Acceso transfronterizo a la asistencia",
        content:
          "La asistencia sanitaria transfronteriza en la UE ha venido lastrada por lo difícil que resulta verificar la identidad y la cobertura entre sistemas nacionales distintos. La EUDIW da al paciente un mecanismo único y uniforme para acreditar su identidad y presentar declaraciones sanitarias verificadas en cualquier Estado miembro. Quien viaja de Alemania a España presenta la cartera al centro español, que recibe datos de identidad verificados por el Estado y, en su caso, declaraciones de cobertura, sin tener que interpretar documentos extranjeros que no conoce.\n\nEl reglamento de la pasarela digital única ya obliga a los Estados miembros a dar acceso transfronterizo a determinados servicios públicos. Junto a eIDAS 2.0, eso configura un mandato de acceso digital a los servicios sanitarios entre países. La verificación con cartera simplifica los trámites en torno a la tarjeta sanitaria europea (TSE) y a los formularios S1 y S2 para autorizar tratamientos en el extranjero. Los centros de zonas fronterizas y los que atienden a pacientes internacionales deberían priorizar la integración.",
      },
      {
        heading: "Verificación del seguro y gestión de reembolsos",
        content:
          "Verificar la cobertura sanitaria es un proceso administrativo de peso en la asistencia. La EUDIW puede llevar declaraciones de las aseguradoras que confirmen el estado de cobertura, los detalles de la póliza y el derecho a tratamientos concretos. Cuando el paciente las presenta en el centro, el prestador verifica la cobertura al instante, sin comprobaciones manuales contra bases de datos de la aseguradora ni confirmaciones en papel.\n\nPara las aseguradoras sanitarias se abre la posibilidad de emitir acreditaciones digitales como declaraciones electrónicas de atributos, lo que reduce el coste de emitir y reponer tarjetas y permite verificar la cobertura en tiempo real. La gestión de reembolsos se simplifica cuando la identidad del paciente está verificada con presentaciones de alta garantía, lo que reduce el riesgo de fraude y facilita conciliar las reclamaciones con las personas. Identidad verificada y cobertura verificada en una sola interacción bajan la carga administrativa de las dos partes.",
      },
      {
        heading: "Protección de datos en el contexto sanitario",
        content:
          "Los datos de salud son categorías especiales de datos conforme al artículo 9 del RGPD y exigen garantías adicionales en su tratamiento. La divulgación selectiva de la cartera es aquí particularmente valiosa, porque el principio de información mínima necesaria es a la vez una obligación legal y una buena práctica clínica. Una farmacia que verifica una receta no necesita acceder al historial completo. Un reconocimiento laboral no debe revelar diagnósticos concretos.\n\nLas organizaciones sanitarias deben realizar evaluaciones de impacto en protección de datos rigurosas antes de implantar la verificación de identidad y de datos de salud con cartera. La base jurídica del tratamiento debe establecerse con cuidado, normalmente el artículo 9, apartado 2, letra h), del RGPD para la prestación asistencial, o la letra i) para fines de salud pública. Los plazos de conservación de las evidencias de verificación deben fijarse conforme al RGPD y a las normas nacionales de conservación de la historia clínica. La formación del personal es imprescindible para evitar recoger más atributos sanitarios sensibles de los necesarios.",
      },
    ],
    keyRequirements: [
      "Aceptar la EUDIW para verificar la identidad del paciente cuando lo exija el derecho de la Unión o nacional",
      "Implantar la verificación de credenciales en formatos SD-JWT y mdoc para las declaraciones sanitarias",
      "Aplicar la divulgación selectiva para limitar la compartición de datos de salud a lo clínicamente necesario",
      "Alinear la integración de la cartera con los requisitos del espacio europeo de datos sanitarios",
      "Cumplir el artículo 9 del RGPD para todos los datos de salud que lleguen de la cartera",
      "Registrarse como parte usuaria del sector sanitario ante el organismo de supervisión nacional",
      "Actualizar la gestión del consentimiento para la compartición de datos desde la cartera",
      "Disponer de registros de auditoría de cada identificación y declaración tramitada con cartera",
    ],
    useCases: [
      "Verificación de identidad en el ingreso hospitalario y en urgencias",
      "Verificación de registros de vacunación y estado inmunitario con declaraciones de la cartera",
      "Asistencia transfronteriza con verificación de identidad y cobertura desde la cartera",
      "Verificación y dispensación de recetas con los derechos presentados desde la cartera",
      "Autenticación del paciente en telemedicina mediante la cartera",
      "Verificación de la cobertura en el punto de atención con declaraciones de la cartera",
    ],
  },
};

export const INDUSTRY_TRANSLATIONS: Record<TranslatedLocale, Record<string, IndustryTranslation>> = {
  de,
  it,
  es,
};

/** The sector slugs that exist in a given language. */
export function translatedIndustrySlugs(locale: TranslatedLocale): string[] {
  return Object.keys(INDUSTRY_TRANSLATIONS[locale]);
}

export function getIndustryTranslation(
  locale: TranslatedLocale,
  slug: string
): IndustryTranslation | undefined {
  return INDUSTRY_TRANSLATIONS[locale][slug];
}

/**
 * Which languages one sector page exists in, English always included.
 * Feeds hreflang, so it must not name a language the route does not generate.
 */
export function industryLocales(slug: string): Locale[] {
  return [
    DEFAULT_LOCALE,
    ...TRANSLATED_LOCALES.filter((l) => slug in INDUSTRY_TRANSLATIONS[l]),
  ];
}
