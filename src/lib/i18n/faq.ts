import { DEFAULT_LOCALE, TRANSLATED_LOCALES, type Locale, type TranslatedLocale } from "./config";

/**
 * The FAQ, per language, keyed by the id in src/lib/faq-data.ts.
 *
 * Keyed rather than ordered so a new English question does not silently shift
 * every translation by one. A question with no translation in a language falls
 * back to the English text, which is visibly a gap rather than a wrong answer.
 *
 * The homepage shows the first four of these and the FAQ page shows all 28, so
 * both pages are served from here.
 */
export interface FaqTranslation {
  question: string;
  answer: string;
}

const de: Record<string, FaqTranslation> = {
  "general-1": {
    question: "Was ist eIDAS 2.0 und wie unterscheidet es sich von der ursprünglichen eIDAS-Verordnung?",
    answer:
      "eIDAS 2.0 (Verordnung (EU) 2024/1183) ist die umfassende Überarbeitung des EU-Rahmens von 2014 für elektronische Identifizierung und Vertrauensdienste. Anders als das ursprüngliche eIDAS, das auf der freiwilligen gegenseitigen Anerkennung nationaler eID-Systeme beruhte, verpflichtet eIDAS 2.0 jeden Mitgliedstaat, allen Bürgern und Einwohnern eine europäische Wallet für die digitale Identität (EUDIW) bereitzustellen. Zugleich erweitert es die qualifizierten Vertrauensdienste um elektronische Attributsbescheinigungen, elektronische Archivierung und elektronische Register und begründet neue Annahmepflichten für vertrauende Beteiligte im öffentlichen wie im privaten Sektor.",
  },
  "general-2": {
    question: "Ab wann gilt eIDAS 2.0 und welche Fristen sind entscheidend?",
    answer:
      "eIDAS 2.0 wurde am 30. April 2024 im Amtsblatt der EU veröffentlicht und trat am 20. Mai 2024 in Kraft. Die Mitgliedstaaten müssen bis zum 24. Dezember 2026 mindestens eine europäische Wallet für die digitale Identität anbieten. Dieses Datum ist kein Zeitraum: Artikel 5a Absatz 1 gibt ihnen 24 Monate ab dem Inkrafttreten der ersten Durchführungsrechtsakte, und die Durchführungsverordnungen (EU) 2024/2977 bis 2024/2982 sind am 24. Dezember 2024 in Kraft getreten. Die Annahmepflicht für vertrauende Beteiligte in regulierten Branchen folgt zwischen 2026 und 2027.",
  },
  "general-3": {
    question: "Wer ist von eIDAS 2.0 betroffen?",
    answer:
      "eIDAS 2.0 betrifft ein breites Spektrum von Beteiligten in der EU. Die Mitgliedstaaten müssen zertifizierte Wallets bereitstellen und ihre nationale eID-Infrastruktur anpassen. Für sehr große Online-Plattformen, Finanzinstitute, Gesundheitsdienstleister und Verwaltungen gilt die Annahmepflicht für die EUDIW. Vertrauensdiensteanbieter müssen sich auf erweiterte Kategorien qualifizierter Dienste einstellen, und jede Organisation, die Identität oder Attribute von Kunden prüft, von Banken bis zu Arbeitgebern, wird sich auf Wallet-basierte Prüfabläufe vorbereiten müssen.",
  },
  "general-4": {
    question: "Welche Vorteile bringt eIDAS 2.0 den Bürgerinnen und Bürgern der EU?",
    answer:
      "Bürgerinnen und Bürger der EU erhalten eine kostenlose, staatlich getragene Wallet für die digitale Identität, mit der sie ihre Identität nachweisen, Dokumente unterzeichnen und verifizierte Attribute wie Alter, Qualifikationen oder Führerscheindaten grenzüberschreitend mit voller Rechtswirkung weitergeben können. Über die selektive Offenlegung behalten sie die Kontrolle über ihre Daten und teilen nur die nötigen Mindestangaben. Das macht das Mitführen mehrerer physischer Dokumente überflüssig und vereinfacht den Umgang mit Behörden und Unternehmen.",
  },
  "general-5": {
    question: "Welche Rechtswirkung haben qualifizierte Vertrauensdienste unter eIDAS 2.0?",
    answer:
      "Qualifizierte Vertrauensdienste unter eIDAS 2.0, darunter qualifizierte elektronische Signaturen, qualifizierte elektronische Siegel, qualifizierte elektronische Zeitstempel und qualifizierte elektronische Attributsbescheinigungen, haben in allen Mitgliedstaaten automatisch grenzüberschreitende Rechtswirkung. Eine qualifizierte elektronische Signatur ist einer handschriftlichen Unterschrift rechtlich gleichgestellt, und für qualifizierte elektronische Attributsbescheinigungen gilt die Rechtsvermutung der Richtigkeit. Zusätzliche bilaterale Vereinbarungen oder nationale Anerkennungsverfahren sind für die grenzüberschreitende Gültigkeit nicht nötig.",
  },
  "general-6": {
    question: "In welchem Verhältnis steht eIDAS 2.0 zum Gesetz über digitale Dienste und zu anderen Digitalvorschriften?",
    answer:
      "eIDAS 2.0 ist Teil der umfassenderen digitalpolitischen Agenda der EU und greift unmittelbar in mehrere andere Rechtsakte hinein. Sehr große Online-Plattformen im Sinne des Gesetzes über digitale Dienste (DSA) müssen die EUDIW zur Authentifizierung von Nutzern akzeptieren. Die Geldwäscheverordnung ist über die Annahmepflicht bei den Sorgfaltspflichten gegenüber Kunden mit eIDAS 2.0 verbunden. PSD2 und die kommende PSD3 knüpfen über die starke Kundenauthentifizierung an. Zusammen bilden diese Vorschriften einen zusammenhängenden Rahmen für den digitalen Wandel in Europa.",
  },
  "general-7": {
    question: "Welche Rolle spielen die Large-Scale Pilots bei der Einführung von eIDAS 2.0?",
    answer:
      "Die Europäische Kommission finanziert vier Large-Scale Pilots (LSPs), nämlich EWC, POTENTIAL, NOBID und DC4EU, um die EUDIW vor dem vollen Rollout in echten grenzüberschreitenden Szenarien zu testen. Diese Pilotprojekte prüfen die technischen Spezifikationen des Architecture Reference Framework, sammeln Rückmeldungen zur Nutzererfahrung, benennen rechtliche und organisatorische Hürden und binden vertrauende Beteiligte und Attributanbieter in die praktische Integration ein. Ihre Ergebnisse fließen direkt in die Verfeinerung der Durchführungsrechtsakte, der Zertifizierungsanforderungen und der endgültigen Wallet-Spezifikationen ein.",
  },
  "general-8": {
    question: "Betrifft eIDAS 2.0 auch Organisationen außerhalb der Europäischen Union?",
    answer:
      "Ja. Jede Organisation, die Dienste für EU-Bürger anbietet oder deren Identitätsdaten verarbeitet, kann von eIDAS 2.0 betroffen sein. Organisationen aus Drittstaaten, die auf dem EU-Markt tätig sind, insbesondere sehr große Online-Plattformen, Finanzdienstleister und Unternehmen des Gesundheitswesens, müssen die EUDIW möglicherweise als gültiges Mittel der Identitätsprüfung akzeptieren. Die Verordnung sieht außerdem Abkommen über gegenseitige Anerkennung mit Drittstaaten vor, wodurch die Annahme der Wallet über die EU hinaus reichen kann. Organisationen weltweit sollten die Entwicklung von eIDAS 2.0 als Teil ihrer internationalen Compliance-Strategie verfolgen.",
  },
  "eudiw-1": {
    question: "Was ist die europäische Wallet für die digitale Identität (EUDIW) und wie funktioniert sie?",
    answer:
      "Die EUDIW ist eine mobile Anwendung, die jeder Mitgliedstaat seinen Bürgern und Einwohnern bereitstellen muss, für natürliche Personen kostenlos. Sie speichert Personenidentifizierungsdaten (PID) und elektronische Attributsbescheinigungen (EAAs) als kryptografisch signierte digitale Nachweise. Nutzer können diese Nachweise vertrauenden Beteiligten online und offline vorlegen, um ihre Identität oder einzelne Attribute nachzuweisen. Die Wallet nutzt standardisierte Protokolle (OpenID4VC) und Nachweisformate (SD-JWT und mdoc), damit sie über alle nationalen Umsetzungen hinweg grenzüberschreitend funktioniert.",
  },
  "eudiw-2": {
    question: "Welche Organisationen sind rechtlich verpflichtet, die EUDIW zu akzeptieren?",
    answer:
      "eIDAS 2.0 begründet Annahmepflichten für mehrere Gruppen von Organisationen. Sehr große Online-Plattformen im Sinne des Gesetzes über digitale Dienste müssen die Wallet zur Authentifizierung von Nutzern akzeptieren. Finanzinstitute, die den Sorgfaltspflichten nach den Geldwäschevorschriften unterliegen, müssen sie zur Identitätsprüfung akzeptieren. Verwaltungen müssen sie für den Zugang zu digitalen Verwaltungsleistungen akzeptieren. Gesundheitsdienstleister müssen sie akzeptieren, wenn europäisches oder nationales Recht eine Identitätsprüfung von Patienten verlangt. Weitere Branchen können in Durchführungsrechtsakten benannt werden.",
  },
  "eudiw-3": {
    question: "Welche Nachweise lassen sich in der EUDIW speichern?",
    answer:
      "Die EUDIW kann Personenidentifizierungsdaten (PID), also die staatlich ausgestellte Kernidentität, sowie eine breite Palette elektronischer Attributsbescheinigungen (EAAs) speichern. Dazu gehören mobile Führerscheine, Bildungsabschlüsse und berufliche Qualifikationen, Gesundheitsnachweise wie Impfzertifikate, Handelsregisterdaten und Vertretungsbefugnisse, Altersnachweise, Reisedokumente und Bestätigungen der Kontoinhaberschaft. In der Wallet können qualifizierte (QEAA) und nicht qualifizierte Bescheinigungen liegen, wobei für qualifizierte Bescheinigungen stärkere Rechtsvermutungen gelten.",
  },
  "eudiw-4": {
    question: "Wie schützt die EUDIW die Privatsphäre der Nutzer?",
    answer:
      "Die EUDIW enthält mehrere von eIDAS 2.0 vorgeschriebene Merkmale des Datenschutzes durch Technikgestaltung. Die selektive Offenlegung erlaubt es, nur die Attribute zu teilen, die ein vertrauender Beteiligter wirklich braucht, etwa den Nachweis, über 18 zu sein, ohne das Geburtsdatum zu offenbaren. Vertrauende Beteiligte müssen sich registrieren und angeben, welche Attribute sie zu welchem Zweck anfragen. Die Wallet zeigt dem Nutzer einen klaren Einwilligungsdialog, aus dem hervorgeht, welche Daten wer anfragt. Die Architektur enthält außerdem Maßnahmen gegen ein Zusammenwirken vertrauender Beteiligter und gegen dienstübergreifendes Tracking der Wallet-Nutzer.",
  },
  "eudiw-5": {
    question: "Lässt sich die EUDIW zum elektronischen Signieren nutzen?",
    answer:
      "Ja. eIDAS 2.0 verlangt, dass die EUDIW ihren Nutzern die Erstellung qualifizierter elektronischer Signaturen (QES) ermöglicht, die in allen Mitgliedstaaten einer handschriftlichen Unterschrift rechtlich gleichstehen. Das geschieht über die Anbindung an Fernsignaturdienste qualifizierter Vertrauensdiensteanbieter (QTSPs): Die Wallet liefert die Identitätssicherheit und die Freigabe des Nutzers, während die Cloud-Infrastruktur des QTSP die kryptografische Signatur erzeugt. Mindestens ein QES-Dienst muss den Wallet-Inhabern für nicht berufliche Zwecke kostenlos zur Verfügung stehen.",
  },
  "eudiw-6": {
    question: "Funktioniert die EUDIW offline und im persönlichen Kontakt?",
    answer:
      "Ja. Die EUDIW ist für Prüfungen online (aus der Ferne) und offline (in der Nähe) ausgelegt. Im persönlichen Kontakt kann die Wallet Nachweise über NFC oder Bluetooth im Format mdoc (ISO 18013-5) vorlegen, das für Umgebungen mit eingeschränkter Verbindung gedacht ist. Damit sind Anwendungen möglich wie das Vorzeigen eines digitalen Führerscheins bei einer Verkehrskontrolle, die Altersprüfung an der Kasse oder die Identitätskontrolle an der Grenze, jeweils ohne Internetverbindung im Moment der Vorlage.",
  },
  "eudiw-7": {
    question: "Wie wird die EUDIW über die Mitgliedstaaten hinweg zusammenarbeiten?",
    answer:
      "Die Interoperabilität sichert das Architecture Reference Framework (ARF), das gemeinsame Nachweisformate (SD-JWT und mdoc), standardisierte Vorlageprotokolle (OpenID4VC), gemeinsame Vertrauensmechanismen (Vertrauenslisten und Wallet-Attestierungen) und einheitliche Anforderungen an die Sicherheitszertifizierung vorschreibt. Alle nationalen Wallet-Umsetzungen müssen diesen Spezifikationen entsprechen und die Konformitätsbewertung durchlaufen. Die Large-Scale Pilots testen gezielt grenzüberschreitende Szenarien, und die Durchführungsrechtsakte werden die genauen technischen Anforderungen festschreiben, die jede Wallet erfüllen muss.",
  },
  "compliance-1": {
    question: "Welche Schritte sollten Unternehmen jetzt für die eIDAS-2.0-Compliance gehen?",
    answer:
      "Zuerst sollten Unternehmen prüfen, ob sie in eine Kategorie mit Annahmepflicht fallen: sehr große Online-Plattformen, Finanzinstitute, Gesundheitsdienstleister oder Anbieter öffentlicher Dienste. Anschließend gilt es, die heutigen Abläufe zur Identitätsprüfung und zum Signieren von Dokumenten zu erfassen und die Stellen zu bestimmen, an denen die EUDIW relevant wird. Technische Teams sollten sich mit dem Architecture Reference Framework, den OpenID4VC-Protokollen und den Formaten SD-JWT und mdoc vertraut machen. Die Zusammenarbeit mit einem Large-Scale Pilot oder einem QTSP für frühe Integrationstests ist ausdrücklich zu empfehlen, weil sie die Vorbereitung deutlich beschleunigt.",
  },
  "compliance-2": {
    question: "Welche Sanktionen drohen bei Verstößen gegen eIDAS 2.0?",
    answer:
      "eIDAS 2.0 überträgt die Durchsetzung den nationalen Aufsichtsorganen, die nach nationalem Recht Sanktionen verhängen können. Die Verordnung legt anders als die DSGVO keine harmonisierten Bußgeldrahmen fest, verpflichtet die Mitgliedstaaten aber zu wirksamen, angemessenen und abschreckenden Sanktionen. Organisationen, die die EUDIW trotz rechtlicher Pflicht nicht akzeptieren oder ihre Pflichten als Vertrauensdiensteanbieter nicht erfüllen, müssen mit Maßnahmen rechnen, die von Geldbußen über die Aussetzung des Dienstes bis zum Entzug des qualifizierten Status reichen. Auch das Reputationsrisiko ist einzubeziehen.",
  },
  "compliance-3": {
    question: "Was kostet die Anbindung an die EUDIW als vertrauender Beteiligter?",
    answer:
      "Die Kosten hängen von der bestehenden Infrastruktur und der Komplexität der Anwendungsfälle ab. Organisationen mit modernen Identitätssystemen auf Basis von OpenID Connect finden den Übergang zu OpenID4VC relativ leicht und brauchen eher Wochen als Monate Entwicklungszeit. Wesentliche Kostenblöcke sind: Anpassung der Authentifizierungsabläufe an Wallet-Vorlagen, Einbindung von Prüfbibliotheken für SD-JWT und mdoc, Umsetzung der Registrierung als vertrauender Beteiligter und Anpassung der Oberflächen für die Einwilligungsdialoge. Die Open-Source-Referenzimplementierungen der LSPs senken den Entwicklungsaufwand erheblich.",
  },
  "compliance-4": {
    question: "Müssen sich Unternehmen unter eIDAS 2.0 als vertrauende Beteiligte registrieren?",
    answer:
      "Ja. Nach eIDAS 2.0 müssen sich vertrauende Beteiligte, die auf Wallet-Daten zugreifen wollen, beim Aufsichtsorgan des Mitgliedstaats registrieren, in dem sie niedergelassen sind. Bei der Registrierung ist anzugeben, welche Attribute die Organisation zu welchem Zweck anfragen will. Diese Pflicht ist eine zentrale Datenschutzgarantie: Sie erlaubt der Aufsicht, Zugriffsmuster zu beobachten, und verhindert unbefugtes Datensammeln. Das genaue Verfahren und die Einzelheiten werden in den Durchführungsrechtsakten festgelegt, deren Entwicklung Organisationen verfolgen sollten, um rechtzeitig vorbereitet zu sein.",
  },
  "compliance-5": {
    question: "Kann die EUDIW bestehende KYC- und Prüfprozesse ersetzen?",
    answer:
      "Die EUDIW ist darauf angelegt, heutige KYC- und Prüfprozesse deutlich zu verkürzen und in vielen Fällen zu ersetzen. Für Finanzinstitute liefert der direkte Empfang staatlich verifizierter Personenidentifizierungsdaten aus der Wallet ein höheres Sicherheitsniveau als viele bestehende dokument- oder videobasierte Verfahren. Allerdings müssen Organisationen ihre AML-Rahmenwerke an die Wallet-basierte Prüfung anpassen und weiterhin angemessene Aufzeichnungen führen. In der Übergangszeit werden die meisten Organisationen sowohl klassische als auch Wallet-basierte Prüfwege unterstützen müssen.",
  },
  "compliance-6": {
    question: "Wie wirkt eIDAS 2.0 auf Organisationen, die Nachweise oder Zertifikate ausstellen?",
    answer:
      "Organisationen, die Nachweise ausstellen, etwa Hochschulen, Berufskammern, Behörden und Zertifizierungsstellen, sollten prüfen, ob sie unter eIDAS 2.0 Attributanbieter werden. Stellen des öffentlichen Sektors sind ausdrücklich verpflichtet, Attribute aus ihren authentischen Quellen für elektronische Bescheinigungen verfügbar zu machen. Das heißt, die Fähigkeit aufzubauen, EAAs oder QEAAs in standardisierten Formaten (SD-JWT, mdoc) auszustellen, die zur EUDIW passen. Organisationen können Nachweise selbst ausstellen oder einen QTSP beauftragen, qualifizierte elektronische Attributsbescheinigungen in ihrem Namen auszustellen.",
  },
  "compliance-7": {
    question: "Welche Pflichten zur Datenminimierung gelten für vertrauende Beteiligte?",
    answer:
      "eIDAS 2.0 stellt strenge Anforderungen an die Datenminimierung. Organisationen dürfen nur die Attribute anfragen, die für den angebotenen Dienst unbedingt erforderlich sind, und müssen bei der Registrierung den Zweck jeder Attributsanfrage angeben. Die Wallet zeigt dem Nutzer klar, welche Attribute von wem angefragt werden, was eine informierte Einwilligung erst möglich macht. Wer zu viele Daten anfragt, muss mit Prüfungen durch die Aufsicht und mit Maßnahmen rechnen. Diese Pflichten ergänzen und verstärken die bestehenden Grundsätze der Datenminimierung aus der DSGVO.",
  },
  "technical-1": {
    question: "Welche Nachweisformate schreibt das Architecture Reference Framework der EUDIW vor?",
    answer:
      "Der ARF schreibt die Unterstützung zweier Nachweisformate vor: SD-JWT (Selective Disclosure JSON Web Token) und mdoc (ISO 18013-5). SD-JWT erweitert gewöhnliche JWTs über gesalzene Hashwerte um selektive Offenlegung und eignet sich damit für web- und API-getriebene Abläufe. mdoc nutzt die CBOR-Kodierung für eine kompakte binäre Darstellung und ist damit für Offline- und Nähe-Szenarien über NFC oder Bluetooth effizient. Beide Formate unterstützen selektive Offenlegung und sind Formatoptionen innerhalb der OpenID4VC-Protokollfamilie.",
  },
  "technical-2": {
    question: "Welche Protokolle dienen in der EUDIW der Ausstellung und Vorlage von Nachweisen?",
    answer:
      "Die EUDIW nutzt die Protokollfamilie OpenID for Verifiable Credentials (OpenID4VC). OpenID4VCI (Verifiable Credential Issuance) legt fest, wie Wallets Nachweise von Ausstellern erhalten, OpenID4VP (Verifiable Presentations) legt fest, wie Wallets Nachweise gegenüber Prüfern vorlegen. SIOPv2 (Self-Issued OpenID Provider v2) erlaubt der Wallet, selbst als Identitätsanbieter aufzutreten. Diese Protokolle setzen auf dem weit verbreiteten OpenID-Connect-Rahmen auf, was die Einstiegshürde für Organisationen mit vorhandener OIDC-Infrastruktur senkt.",
  },
  "technical-3": {
    question: "Wie funktioniert die Wallet-Attestierung und warum ist sie wichtig?",
    answer:
      "Die Wallet-Attestierung ist ein kryptografischer Mechanismus, mit dem vertrauende Beteiligte und Aussteller prüfen können, ob eine Wallet-Anwendung echt und zertifiziert ist und in einer sicheren Umgebung läuft. Der Wallet-Anbieter, in der Regel der Mitgliedstaat, stellt eine signierte Attestierung aus, die an die kryptografischen Schlüssel der Wallet und die Sicherheitsmerkmale des Geräts gebunden ist. Beim Prüfen einer Vorlage kontrolliert der vertrauende Beteiligte diese Attestierung, um sicherzugehen, dass die Wallet nicht manipuliert wurde. Das verhindert, dass geklonte oder veränderte Wallets gefälschte Nachweise vorlegen, und schafft einen Widerrufsweg, wenn Sicherheitslücken gefunden werden.",
  },
  "technical-4": {
    question: "Welche Sicherheitsanforderungen müssen EUDIW-Umsetzungen erfüllen?",
    answer:
      "EUDIW-Umsetzungen müssen das hohe Sicherheitsniveau erreichen und eine Konformitätsbewertung und Zertifizierung nach Common Criteria oder einem gleichwertigen Schema durchlaufen. Zu den wesentlichen Anforderungen gehören: Speicherung kryptografischer Schlüssel in einem sicheren Element oder einer vertrauenswürdigen Ausführungsumgebung, Schutz gegen Gerätekompromittierung und Klonen der Wallet, gesicherte Kommunikationswege für den Austausch von Nachweisen, Maßnahmen gegen Tracking durch vertrauende Beteiligte und gegen die Verknüpfung von Transaktionen sowie belastbare Verfahren zur Authentifizierung beim Zugriff auf die Wallet. Die Wallet muss außerdem Sicherung und Wiederherstellung so umsetzen, dass die Integrität der Nachweise gewahrt bleibt.",
  },
  "technical-5": {
    question: "Wie sollten vertrauende Beteiligte Nachweise aus der EUDIW prüfen?",
    answer:
      "Vertrauende Beteiligte sollten mehrstufig prüfen: erstens die Wallet-Attestierung, um die Echtheit der Anwendung zu bestätigen; zweitens die kryptografische Signatur der vorgelegten Nachweise gegen den öffentlichen Schlüssel des Ausstellers; drittens den qualifizierten Status des Ausstellers über die Vertrauenslisten; viertens, ob der Nachweis noch gültig und nicht widerrufen ist; fünftens über die Schlüsselbindung, dass der Nachweis der vorlegenden Wallet zugeordnet ist. Den Vorlageablauf übernimmt das Protokoll OpenID4VP, und Bibliotheken zur Prüfung von SD-JWT und mdoc gibt es in mehreren Programmiersprachen.",
  },
  "technical-6": {
    question: "Lässt sich vorhandene OpenID-Connect-Infrastruktur für eIDAS 2.0 weiterverwenden?",
    answer:
      "Ja, in erheblichem Umfang. Die Protokollfamilie OpenID4VC ist als Erweiterung von OpenID Connect angelegt, sodass Organisationen mit vorhandener OIDC-Infrastruktur einen Vorsprung haben. Bestehende Konfigurationen von Identitätsanbietern, Client-Bibliotheken und Sicherheitspraktiken bilden die Grundlage für Wallet-basierte Abläufe. Nötig sind allerdings Ergänzungen: Unterstützung für Anfrage und Antwort bei überprüfbaren Vorlagen (OpenID4VP), Auswertung und Prüfung der Nachweisformate (SD-JWT und mdoc), Anbindung der Vertrauenslisten zur Prüfung der Aussteller und Prüfung der Wallet-Attestierung. Viele OIDC-Bibliotheken werden derzeit um diese Fähigkeiten erweitert.",
  },
};

const it: Record<string, FaqTranslation> = {
  "general-1": {
    question: "Che cos'è eIDAS 2.0 e in cosa si differenzia dal regolamento eIDAS originario?",
    answer:
      "eIDAS 2.0 (regolamento (UE) 2024/1183) è la revisione complessiva del quadro europeo del 2014 in materia di identificazione elettronica e servizi fiduciari. A differenza dell'eIDAS originario, che si basava sul riconoscimento reciproco volontario dei regimi nazionali di identificazione elettronica, eIDAS 2.0 impone a ogni Stato membro di fornire a tutti i cittadini e residenti un portafoglio europeo di identità digitale (EUDIW). Amplia inoltre i servizi fiduciari qualificati con l'attestazione elettronica di attributi, l'archiviazione elettronica e i registri elettronici, e introduce nuovi obblighi di accettazione per le parti facenti affidamento pubbliche e private.",
  },
  "general-2": {
    question: "Da quando si applica eIDAS 2.0 e quali sono le scadenze principali?",
    answer:
      "eIDAS 2.0 è stato pubblicato nella Gazzetta ufficiale dell'UE il 30 aprile 2024 ed è entrato in vigore il 20 maggio 2024. Gli Stati membri devono offrire almeno un portafoglio europeo di identità digitale entro il 24 dicembre 2026. Quella data non è un intervallo: l'articolo 5 bis, paragrafo 1, concede loro 24 mesi dall'entrata in vigore dei primi atti di esecuzione, e i regolamenti di esecuzione (UE) dal 2024/2977 al 2024/2982 sono entrati in vigore il 24 dicembre 2024. L'obbligo di accettazione per le parti facenti affidamento nei settori regolamentati segue tra il 2026 e il 2027.",
  },
  "general-3": {
    question: "Chi è interessato da eIDAS 2.0?",
    answer:
      "eIDAS 2.0 riguarda una platea ampia di soggetti nell'UE. Gli Stati membri devono mettere in campo wallet certificati e aggiornare la propria infrastruttura nazionale di identificazione elettronica. Piattaforme online di dimensioni molto grandi, istituti finanziari, prestatori di assistenza sanitaria e pubbliche amministrazioni sono soggetti all'obbligo di accettare l'EUDIW. I prestatori di servizi fiduciari devono adeguarsi alle categorie ampliate di servizi qualificati, e qualsiasi organizzazione che verifichi l'identità o gli attributi dei propri clienti, dalle banche ai datori di lavoro, dovrà prepararsi ai flussi di verifica tramite wallet.",
  },
  "general-4": {
    question: "Quali sono i principali vantaggi di eIDAS 2.0 per i cittadini dell'UE?",
    answer:
      "I cittadini dell'UE riceveranno un portafoglio di identità digitale gratuito e garantito dallo Stato, con cui potranno dimostrare la propria identità, firmare documenti e condividere attributi verificati (come l'età, le qualifiche o i dati della patente) oltre frontiera con pieno valore legale. Il wallet dà agli utenti il controllo dei propri dati grazie alla divulgazione selettiva, cioè alla possibilità di condividere solo le informazioni minime necessarie. Questo elimina la necessità di portare con sé più documenti fisici e semplifica i rapporti sia con i servizi pubblici sia con le imprese.",
  },
  "general-5": {
    question: "Qual è l'efficacia giuridica dei servizi fiduciari qualificati secondo eIDAS 2.0?",
    answer:
      "I servizi fiduciari qualificati previsti da eIDAS 2.0, tra cui le firme elettroniche qualificate, i sigilli elettronici qualificati, le validazioni temporali elettroniche qualificate e le attestazioni elettroniche qualificate di attributi, hanno automaticamente efficacia giuridica transfrontaliera in tutti gli Stati membri. Una firma elettronica qualificata equivale giuridicamente a una firma autografa, mentre le attestazioni elettroniche qualificate di attributi godono di una presunzione legale di esattezza. Non servono quindi accordi bilaterali ulteriori né procedure nazionali di riconoscimento per la validità transfrontaliera.",
  },
  "general-6": {
    question: "Come si collega eIDAS 2.0 al regolamento sui servizi digitali e alle altre norme digitali?",
    answer:
      "eIDAS 2.0 fa parte dell'agenda digitale più ampia dell'UE e si interseca direttamente con diversi altri regolamenti. Le piattaforme online di dimensioni molto grandi definite dal regolamento sui servizi digitali (DSA) devono accettare l'EUDIW per autenticare gli utenti. Il regolamento antiriciclaggio si collega a eIDAS 2.0 attraverso l'obbligo di accettare il wallet nell'adeguata verifica della clientela. PSD2 e la futura PSD3 si collegano tramite l'autenticazione forte del cliente. Insieme, queste norme formano un quadro interconnesso per la trasformazione digitale europea.",
  },
  "general-7": {
    question: "Che ruolo hanno i Large-Scale Pilots nell'introduzione di eIDAS 2.0?",
    answer:
      "La Commissione europea finanzia quattro Large-Scale Pilots (LSP), cioè EWC, POTENTIAL, NOBID e DC4EU, per provare l'EUDIW in scenari transfrontalieri reali prima del pieno dispiegamento. Questi progetti pilota validano le specifiche tecniche dell'Architecture Reference Framework, raccolgono riscontri sull'esperienza d'uso, individuano ostacoli giuridici e organizzativi e coinvolgono parti facenti affidamento e fornitori di attributi nell'integrazione pratica. I loro risultati alimentano direttamente l'affinamento degli atti di esecuzione, dei requisiti di certificazione e delle specifiche finali del wallet.",
  },
  "general-8": {
    question: "eIDAS 2.0 riguarda anche le organizzazioni al di fuori dell'Unione europea?",
    answer:
      "Sì. Qualsiasi organizzazione che offra servizi a cittadini dell'UE o tratti i loro dati di identità può essere interessata da eIDAS 2.0. Le organizzazioni di paesi terzi che operano sul mercato dell'Unione, in particolare piattaforme online di dimensioni molto grandi, prestatori di servizi finanziari e imprese sanitarie, potrebbero dover accettare l'EUDIW come strumento valido di verifica dell'identità. Il regolamento prevede inoltre accordi di riconoscimento reciproco con paesi terzi, con la possibile estensione dell'accettazione del wallet oltre i confini dell'UE. Le organizzazioni di tutto il mondo dovrebbero seguire l'evoluzione di eIDAS 2.0 come parte della propria strategia di conformità internazionale.",
  },
  "eudiw-1": {
    question: "Che cos'è il portafoglio europeo di identità digitale (EUDIW) e come funziona?",
    answer:
      "L'EUDIW è un'applicazione mobile che ogni Stato membro deve fornire ai propri cittadini e residenti, gratuitamente per le persone fisiche. Conserva i dati di identificazione personale (PID) e le attestazioni elettroniche di attributi (EAA) come attestati digitali firmati crittograficamente. L'utente può presentarli alle parti facenti affidamento, online e offline, per dimostrare la propria identità o singoli attributi. Il wallet usa protocolli standardizzati (OpenID4VC) e formati di attestato (SD-JWT e mdoc) per garantire l'interoperabilità transfrontaliera tra tutte le implementazioni nazionali.",
  },
  "eudiw-2": {
    question: "Quali organizzazioni sono obbligate per legge ad accettare l'EUDIW?",
    answer:
      "eIDAS 2.0 stabilisce obblighi di accettazione per diverse categorie di organizzazioni. Le piattaforme online di dimensioni molto grandi, come definite dal regolamento sui servizi digitali, devono accettare il wallet per autenticare gli utenti. Gli istituti finanziari soggetti all'adeguata verifica della clientela in base alla normativa antiriciclaggio devono accettarlo per la verifica dell'identità. Le pubbliche amministrazioni devono accettarlo per l'accesso ai servizi pubblici digitali. I prestatori di assistenza sanitaria devono accettarlo quando il diritto dell'Unione o nazionale richiede la verifica dell'identità del paziente. Altri settori possono essere individuati negli atti di esecuzione.",
  },
  "eudiw-3": {
    question: "Quali attestati si possono conservare nell'EUDIW?",
    answer:
      "L'EUDIW può conservare i dati di identificazione personale (PID), cioè l'identità di base rilasciata dallo Stato, e un'ampia gamma di attestazioni elettroniche di attributi (EAA). Tra queste: patenti di guida digitali, diplomi e qualifiche professionali, credenziali sanitarie come i certificati di vaccinazione, dati di iscrizione societaria e poteri di rappresentanza, prove dell'età, documenti di viaggio e conferme di titolarità di un conto bancario. Il wallet può contenere attestazioni qualificate (QEAA) e non qualificate, con presunzioni legali più forti per quelle qualificate.",
  },
  "eudiw-4": {
    question: "Come protegge la privacy degli utenti l'EUDIW?",
    answer:
      "L'EUDIW integra diversi accorgimenti di privacy by design imposti da eIDAS 2.0. La divulgazione selettiva permette di condividere solo gli attributi di cui la parte facente affidamento ha effettivo bisogno: per esempio dimostrare di avere più di 18 anni senza rivelare la data di nascita. Le parti facenti affidamento devono registrarsi e dichiarare quali attributi richiederanno e per quale finalità. Il wallet mostra all'utente una schermata di consenso chiara, con l'indicazione esatta dei dati richiesti e di chi li richiede. L'architettura prevede anche misure contro la collusione tra parti facenti affidamento e contro il tracciamento degli utenti tra servizi diversi.",
  },
  "eudiw-5": {
    question: "L'EUDIW si può usare per firmare elettronicamente?",
    answer:
      "Sì. eIDAS 2.0 impone che l'EUDIW consenta all'utente di creare firme elettroniche qualificate (QES), che equivalgono giuridicamente a una firma autografa in tutti gli Stati membri. Ciò avviene tramite l'integrazione con servizi di firma a distanza gestiti da prestatori di servizi fiduciari qualificati (QTSP): il wallet fornisce la garanzia di identità e l'autorizzazione dell'utente, mentre l'infrastruttura cloud del QTSP esegue la firma crittografica. Almeno un servizio di QES deve essere disponibile gratuitamente ai titolari del wallet per usi non professionali.",
  },
  "eudiw-6": {
    question: "L'EUDIW funziona offline e di persona?",
    answer:
      "Sì. L'EUDIW è progettato per gestire verifiche sia online (a distanza) sia offline (di prossimità). Di persona il wallet può presentare attestati via NFC o Bluetooth nel formato mdoc (ISO 18013-5), pensato per contesti con connettività limitata. Rende quindi possibili casi d'uso come mostrare una patente digitale durante un controllo stradale, verificare l'età a una cassa fisica o effettuare controlli di identità alla frontiera, in tutti i casi senza bisogno di una connessione a internet nel momento della presentazione.",
  },
  "eudiw-7": {
    question: "Come sarà garantita l'interoperabilità dell'EUDIW tra gli Stati membri?",
    answer:
      "L'interoperabilità è garantita dall'Architecture Reference Framework (ARF), che impone formati di attestato comuni (SD-JWT e mdoc), protocolli di presentazione standardizzati (OpenID4VC), meccanismi di fiducia condivisi (liste di fiducia e attestazioni del wallet) e requisiti coerenti di certificazione della sicurezza. Tutte le implementazioni nazionali devono rispettare queste specifiche e superare la valutazione di conformità. I Large-Scale Pilots stanno provando in modo specifico scenari transfrontalieri, e gli atti di esecuzione formalizzeranno i requisiti tecnici esatti che ogni wallet dovrà soddisfare.",
  },
  "compliance-1": {
    question: "Quali passi dovrebbero compiere ora le imprese per prepararsi a eIDAS 2.0?",
    answer:
      "Le imprese dovrebbero anzitutto valutare se ricadono in una categoria soggetta all'obbligo di accettazione: piattaforme online di dimensioni molto grandi, istituti finanziari, prestatori di assistenza sanitaria o erogatori di servizi pubblici. Poi dovrebbero mappare i processi attuali di verifica dell'identità e di firma dei documenti per individuare dove l'EUDIW diventa rilevante. I team tecnici dovrebbero prendere familiarità con l'Architecture Reference Framework, con i protocolli OpenID4VC e con i formati SD-JWT e mdoc. È vivamente consigliato collaborare con un Large-Scale Pilot o con un QTSP per test di integrazione precoci, perché accelera in modo sensibile la preparazione.",
  },
  "compliance-2": {
    question: "Quali sanzioni sono previste per il mancato rispetto di eIDAS 2.0?",
    answer:
      "eIDAS 2.0 affida l'applicazione agli organismi di vigilanza nazionali, che possono imporre sanzioni secondo il diritto interno. Il regolamento non fissa importi armonizzati, a differenza del GDPR, ma impone agli Stati membri di prevedere sanzioni effettive, proporzionate e dissuasive. Le organizzazioni che rifiutano di accettare l'EUDIW quando la legge lo impone, o che non adempiono ai propri obblighi come prestatori di servizi fiduciari, rischiano provvedimenti che possono comprendere sanzioni pecuniarie, la sospensione del servizio o la revoca dello status qualificato. Va considerato anche il rischio reputazionale.",
  },
  "compliance-3": {
    question: "Quanto costa integrarsi con l'EUDIW come parte facente affidamento?",
    answer:
      "I costi dipendono dall'infrastruttura esistente e dalla complessità dei casi d'uso. Le organizzazioni con sistemi di identità moderni basati su OpenID Connect troveranno il passaggio a OpenID4VC relativamente lineare, con tempi di sviluppo nell'ordine di settimane più che di mesi. Le voci di costo principali sono: adeguamento dei flussi di autenticazione alle presentazioni dal wallet, integrazione delle librerie di verifica per SD-JWT e mdoc, attuazione della registrazione come parte facente affidamento e aggiornamento delle interfacce per i flussi di consenso. Le implementazioni di riferimento open source degli LSP riducono in modo sensibile i costi di sviluppo.",
  },
  "compliance-4": {
    question: "Le imprese devono registrarsi come parti facenti affidamento?",
    answer:
      "Sì. Secondo eIDAS 2.0 le parti facenti affidamento che intendono accedere ai dati del wallet devono registrarsi presso l'organismo di vigilanza dello Stato membro in cui sono stabilite. La registrazione richiede di dichiarare quali attributi l'organizzazione intende richiedere e per quale finalità. Questo obbligo è una garanzia di riservatezza centrale: consente la vigilanza sugli schemi di accesso ai dati e previene la raccolta non autorizzata. Il procedimento e i requisiti esatti saranno precisati negli atti di esecuzione, la cui evoluzione le organizzazioni dovrebbero seguire per essere pronte in tempo.",
  },
  "compliance-5": {
    question: "L'EUDIW può sostituire gli attuali processi di KYC e verifica dell'identità?",
    answer:
      "L'EUDIW è pensato per snellire e, in molti casi, sostituire in misura significativa gli attuali processi di KYC e di verifica dell'identità. Per gli istituti finanziari, ricevere direttamente dal wallet dati di identificazione personale verificati dallo Stato offre un livello di garanzia più alto di molte procedure basate su documenti o su video identificazione. Le organizzazioni devono però aggiornare i propri presidi antiriciclaggio per accogliere la verifica tramite wallet e continuare a conservare le registrazioni adeguate. Nel periodo di transizione la maggior parte dovrà sostenere sia i canali tradizionali sia quelli basati sul wallet.",
  },
  "compliance-6": {
    question: "Come incide eIDAS 2.0 sulle organizzazioni che rilasciano attestati o certificati?",
    answer:
      "Le organizzazioni che rilasciano attestati, come università, ordini professionali, enti pubblici e autorità di certificazione, dovrebbero valutare di diventare fornitori di attributi ai sensi di eIDAS 2.0. Gli enti pubblici sono espressamente tenuti a rendere disponibili gli attributi delle proprie fonti autentiche per l'attestazione elettronica. Ciò significa sviluppare la capacità di rilasciare EAA o QEAA in formati standardizzati (SD-JWT, mdoc) compatibili con l'EUDIW. Le organizzazioni possono rilasciare gli attestati direttamente o avvalersi di un QTSP che emetta per loro conto attestazioni elettroniche qualificate di attributi.",
  },
  "compliance-7": {
    question: "Quali obblighi di minimizzazione dei dati valgono per le parti facenti affidamento?",
    answer:
      "eIDAS 2.0 impone requisiti rigorosi di minimizzazione dei dati. Le organizzazioni possono richiedere solo gli attributi strettamente necessari al servizio che erogano e devono dichiarare la finalità di ciascuna richiesta in fase di registrazione. L'interfaccia del wallet mostra all'utente un quadro chiaro di quali attributi vengono richiesti e da chi, rendendo possibile un consenso informato. Chi richiede dati eccessivi è esposto all'attenzione degli organismi di vigilanza e a possibili provvedimenti. Questi obblighi integrano e rafforzano i principi di minimizzazione già previsti dal GDPR.",
  },
  "technical-1": {
    question: "Quali formati di attestato impone l'Architecture Reference Framework dell'EUDIW?",
    answer:
      "L'ARF impone il supporto di due formati: SD-JWT (Selective Disclosure JSON Web Token) e mdoc (ISO 18013-5). SD-JWT estende i normali JWT con la divulgazione selettiva basata su hash con sale, il che lo rende adatto alle interazioni via web e via API. mdoc usa la codifica CBOR per una rappresentazione binaria compatta, efficiente negli scenari offline e di prossimità via NFC o Bluetooth. Entrambi supportano la divulgazione selettiva e sono opzioni di formato all'interno della famiglia di protocolli OpenID4VC.",
  },
  "technical-2": {
    question: "Quali protocolli si usano per rilasciare e presentare attestati nell'EUDIW?",
    answer:
      "L'EUDIW usa la famiglia di protocolli OpenID for Verifiable Credentials (OpenID4VC). OpenID4VCI (Verifiable Credential Issuance) definisce come il wallet riceve gli attestati dagli emittenti, mentre OpenID4VP (Verifiable Presentations) definisce come il wallet li presenta ai verificatori. SIOPv2 (Self-Issued OpenID Provider v2) consente al wallet di agire come fornitore di identità. Questi protocolli si appoggiano al diffuso quadro OpenID Connect, il che abbassa la soglia di ingresso per le organizzazioni che hanno già un'infrastruttura OIDC.",
  },
  "technical-3": {
    question: "Come funziona l'attestazione del wallet e perché è importante?",
    answer:
      "L'attestazione del wallet è un meccanismo crittografico che permette a parti facenti affidamento ed emittenti di verificare che l'applicazione sia autentica, certificata e in esecuzione in un ambiente sicuro. Il fornitore del wallet, di norma lo Stato membro, rilascia un'attestazione firmata e legata alle chiavi crittografiche del wallet e alle caratteristiche di sicurezza del dispositivo. Nel verificare una presentazione, la parte facente affidamento controlla questa attestazione per accertarsi che il wallet non sia stato manomesso. Questo impedisce che wallet clonati o modificati presentino attestati fraudolenti e fornisce un meccanismo di revoca se emergono vulnerabilità.",
  },
  "technical-4": {
    question: "Quali requisiti di sicurezza devono soddisfare le implementazioni dell'EUDIW?",
    answer:
      "Le implementazioni dell'EUDIW devono raggiungere il livello di garanzia elevato e superare valutazione di conformità e certificazione secondo il quadro Common Criteria o uno schema equivalente. I requisiti principali comprendono: conservazione delle chiavi crittografiche in un elemento sicuro o in un ambiente di esecuzione affidabile; protezione contro la compromissione del dispositivo e la clonazione del wallet; canali di comunicazione sicuri per lo scambio di attestati; misure contro il tracciamento da parte delle parti facenti affidamento e contro la correlazione delle transazioni; meccanismi robusti di autenticazione per l'accesso al wallet. Il wallet deve inoltre prevedere procedure di backup e ripristino che non compromettano l'integrità degli attestati.",
  },
  "technical-5": {
    question: "Come dovrebbero verificare gli attestati presentati dall'EUDIW le parti facenti affidamento?",
    answer:
      "Le parti facenti affidamento dovrebbero seguire una verifica in più passaggi: primo, controllare l'attestazione del wallet per confermare che l'applicazione sia autentica; secondo, verificare la firma crittografica degli attestati presentati con la chiave pubblica dell'emittente; terzo, controllare lo status qualificato dell'emittente nelle liste di fiducia; quarto, accertare che l'attestato non sia scaduto né revocato; quinto, confermare tramite il key binding che l'attestato sia legato al wallet che lo presenta. Il flusso di presentazione è gestito dal protocollo OpenID4VP, e librerie di verifica per SD-JWT e mdoc sono disponibili in diversi linguaggi di programmazione.",
  },
  "technical-6": {
    question: "Si può riutilizzare l'infrastruttura OpenID Connect esistente per eIDAS 2.0?",
    answer:
      "Sì, in misura significativa. La famiglia di protocolli OpenID4VC è concepita come estensione di OpenID Connect, quindi chi ha già un'infrastruttura OIDC parte in vantaggio. Configurazioni esistenti dei fornitori di identità, librerie client e prassi di sicurezza costituiscono una base per i flussi basati sul wallet. Servono però alcune aggiunte: gestione delle richieste e risposte di presentazione verificabile (OpenID4VP), lettura e verifica dei formati di attestato (SD-JWT e mdoc), integrazione delle liste di fiducia per validare gli emittenti e verifica dell'attestazione del wallet. Molte librerie OIDC vengono estese proprio per supportare queste funzioni.",
  },
};

const es: Record<string, FaqTranslation> = {
  "general-1": {
    question: "¿Qué es eIDAS 2.0 y en qué se diferencia del reglamento eIDAS original?",
    answer:
      "eIDAS 2.0 (Reglamento (UE) 2024/1183) es la revisión completa del marco europeo de 2014 sobre identificación electrónica y servicios de confianza. A diferencia del eIDAS original, que se apoyaba en el reconocimiento mutuo voluntario de los sistemas nacionales de identificación electrónica, eIDAS 2.0 obliga a cada Estado miembro a facilitar a todos sus ciudadanos y residentes una cartera europea de identidad digital (EUDIW). Además amplía los servicios de confianza cualificados con la declaración electrónica de atributos, el archivo electrónico y los registros electrónicos, e impone nuevas obligaciones de aceptación a las partes usuarias públicas y privadas.",
  },
  "general-2": {
    question: "¿Cuándo se aplica eIDAS 2.0 y cuáles son los plazos clave?",
    answer:
      "eIDAS 2.0 se publicó en el Diario Oficial de la UE el 30 de abril de 2024 y entró en vigor el 20 de mayo de 2024. Los Estados miembros deben ofrecer al menos una cartera europea de identidad digital antes del 24 de diciembre de 2026. Esa fecha no es un intervalo: el artículo 5 bis, apartado 1, les concede 24 meses desde la entrada en vigor de los primeros actos de ejecución, y los Reglamentos de Ejecución (UE) 2024/2977 a 2024/2982 entraron en vigor el 24 de diciembre de 2024. La aceptación obligatoria por las partes usuarias de sectores regulados llega después, entre 2026 y 2027.",
  },
  "general-3": {
    question: "¿A quién afecta eIDAS 2.0?",
    answer:
      "eIDAS 2.0 afecta a un abanico amplio de actores en la UE. Los Estados miembros deben desplegar carteras certificadas y actualizar su infraestructura nacional de identificación electrónica. Las plataformas en línea de muy gran tamaño, las entidades financieras, los prestadores sanitarios y las administraciones públicas tienen la obligación de aceptar la EUDIW. Los prestadores de servicios de confianza deben adaptarse a las categorías ampliadas de servicios cualificados, y cualquier organización que verifique la identidad o los atributos de sus clientes, desde bancos hasta empleadores, tendrá que prepararse para los flujos de verificación con cartera.",
  },
  "general-4": {
    question: "¿Qué beneficios trae eIDAS 2.0 a la ciudadanía de la UE?",
    answer:
      "La ciudadanía de la UE recibirá una cartera de identidad digital gratuita y respaldada por el Estado, con la que podrá acreditar su identidad, firmar documentos y compartir atributos verificados (como la edad, titulaciones o los datos del permiso de conducción) en otros países con plena eficacia jurídica. La cartera da a las personas el control de sus datos mediante la divulgación selectiva, es decir, la posibilidad de compartir solo la información mínima necesaria. Eso elimina la necesidad de llevar varios documentos físicos y simplifica la relación con los servicios públicos y con las empresas.",
  },
  "general-5": {
    question: "¿Qué eficacia jurídica tienen los servicios de confianza cualificados en eIDAS 2.0?",
    answer:
      "Los servicios de confianza cualificados de eIDAS 2.0, entre ellos las firmas electrónicas cualificadas, los sellos electrónicos cualificados, los sellos de tiempo electrónicos cualificados y las declaraciones electrónicas cualificadas de atributos, tienen automáticamente eficacia jurídica transfronteriza en todos los Estados miembros. Una firma electrónica cualificada equivale jurídicamente a una firma manuscrita, y las declaraciones electrónicas cualificadas de atributos gozan de presunción legal de exactitud. No hacen falta acuerdos bilaterales adicionales ni procedimientos nacionales de reconocimiento para su validez transfronteriza.",
  },
  "general-6": {
    question: "¿Cómo se relaciona eIDAS 2.0 con el Reglamento de Servicios Digitales y otras normas digitales?",
    answer:
      "eIDAS 2.0 forma parte de la agenda digital más amplia de la UE y se cruza directamente con varios otros reglamentos. Las plataformas en línea de muy gran tamaño que define el Reglamento de Servicios Digitales (DSA) deben aceptar la EUDIW para autenticar a los usuarios. El reglamento de prevención del blanqueo se conecta con eIDAS 2.0 a través de la obligación de aceptar la cartera en la diligencia debida. La PSD2 y la futura PSD3 enlazan mediante la autenticación reforzada de clientes. Juntas, estas normas forman un marco interconectado para la transformación digital europea.",
  },
  "general-7": {
    question: "¿Qué papel juegan los Large-Scale Pilots en el despliegue de eIDAS 2.0?",
    answer:
      "La Comisión Europea financia cuatro Large-Scale Pilots (LSP), que son EWC, POTENTIAL, NOBID y DC4EU, para probar la EUDIW en escenarios transfronterizos reales antes del despliegue completo. Estos pilotos validan las especificaciones técnicas del Architecture Reference Framework, recogen información sobre la experiencia de uso, detectan obstáculos jurídicos y organizativos e incorporan a partes usuarias y proveedores de atributos a la integración práctica. Sus conclusiones alimentan directamente el afinado de los actos de ejecución, de los requisitos de certificación y de las especificaciones finales de la cartera.",
  },
  "general-8": {
    question: "¿Afecta eIDAS 2.0 a organizaciones de fuera de la Unión Europea?",
    answer:
      "Sí. Cualquier organización que preste servicios a ciudadanos de la UE o trate sus datos de identidad puede verse afectada por eIDAS 2.0. Las organizaciones de terceros países que operan en el mercado de la Unión, en especial plataformas en línea de muy gran tamaño, prestadores de servicios financieros y empresas sanitarias, pueden tener que aceptar la EUDIW como mecanismo válido de verificación de identidad. El reglamento contempla además acuerdos de reconocimiento mutuo con terceros países, con lo que la aceptación de la cartera podría extenderse más allá de las fronteras de la UE. Las organizaciones de cualquier parte del mundo deberían seguir la evolución de eIDAS 2.0 como parte de su estrategia de cumplimiento internacional.",
  },
  "eudiw-1": {
    question: "¿Qué es la cartera europea de identidad digital (EUDIW) y cómo funciona?",
    answer:
      "La EUDIW es una aplicación móvil que cada Estado miembro debe facilitar a sus ciudadanos y residentes, gratuita para las personas físicas. Guarda los datos de identificación de la persona (PID) y las declaraciones electrónicas de atributos (EAA) como credenciales digitales firmadas criptográficamente. La persona puede presentarlas a las partes usuarias, en línea y fuera de línea, para acreditar su identidad o atributos concretos. La cartera usa protocolos normalizados (OpenID4VC) y formatos de credencial (SD-JWT y mdoc) para garantizar la interoperabilidad transfronteriza entre todas las implementaciones nacionales.",
  },
  "eudiw-2": {
    question: "¿Qué organizaciones están obligadas por ley a aceptar la EUDIW?",
    answer:
      "eIDAS 2.0 establece obligaciones de aceptación para varias categorías de organizaciones. Las plataformas en línea de muy gran tamaño, según las define el Reglamento de Servicios Digitales, deben aceptar la cartera para autenticar a los usuarios. Las entidades financieras sujetas a la diligencia debida por la normativa de prevención del blanqueo deben aceptarla para verificar la identidad. Las administraciones públicas deben aceptarla para el acceso a los servicios públicos digitales. Los prestadores sanitarios deben aceptarla cuando el derecho de la Unión o nacional exija verificar la identidad del paciente. Los actos de ejecución podrán designar sectores adicionales.",
  },
  "eudiw-3": {
    question: "¿Qué credenciales se pueden guardar en la EUDIW?",
    answer:
      "La EUDIW puede guardar los datos de identificación de la persona (PID), es decir, la identidad básica que expide el Estado, y un abanico amplio de declaraciones electrónicas de atributos (EAA). Entre ellas: permisos de conducción digitales, títulos académicos y cualificaciones profesionales, credenciales sanitarias como los certificados de vacunación, datos de inscripción societaria y poderes de representación, pruebas de edad, documentos de viaje y confirmaciones de titularidad de una cuenta bancaria. La cartera puede contener declaraciones cualificadas (QEAA) y no cualificadas, con presunciones legales más fuertes para las cualificadas.",
  },
  "eudiw-4": {
    question: "¿Cómo protege la EUDIW la privacidad de las personas?",
    answer:
      "La EUDIW incorpora varias medidas de privacidad desde el diseño que exige eIDAS 2.0. La divulgación selectiva permite compartir solo los atributos que la parte usuaria realmente necesita: por ejemplo, acreditar ser mayor de 18 años sin revelar la fecha de nacimiento. Las partes usuarias deben registrarse y declarar qué atributos van a solicitar y con qué finalidad. La cartera muestra a la persona una pantalla de consentimiento clara, con el detalle exacto de qué datos se piden y quién los pide. La arquitectura incluye además medidas contra la colusión entre partes usuarias y contra el seguimiento de los usuarios entre servicios distintos.",
  },
  "eudiw-5": {
    question: "¿Se puede usar la EUDIW para firmar electrónicamente?",
    answer:
      "Sí. eIDAS 2.0 exige que la EUDIW permita crear firmas electrónicas cualificadas (QES), que equivalen jurídicamente a una firma manuscrita en todos los Estados miembros. Se logra mediante la integración con servicios de firma a distancia que operan prestadores cualificados de servicios de confianza (QTSP): la cartera aporta la garantía de identidad y la autorización de la persona, mientras la infraestructura en la nube del QTSP ejecuta la firma criptográfica. Al menos un servicio de QES debe estar disponible de forma gratuita para los titulares de cartera en usos no profesionales.",
  },
  "eudiw-6": {
    question: "¿Funciona la EUDIW sin conexión y en persona?",
    answer:
      "Sí. La EUDIW está diseñada para admitir verificaciones tanto en línea (a distancia) como fuera de línea (por proximidad). En persona, la cartera puede presentar credenciales por NFC o Bluetooth en el formato mdoc (ISO 18013-5), pensado para entornos con conectividad limitada. Eso habilita casos como mostrar un permiso de conducción digital en un control de tráfico, verificar la edad en una caja física o hacer controles de identidad en frontera, en todos los casos sin necesidad de conexión a internet en el momento de la presentación.",
  },
  "eudiw-7": {
    question: "¿Cómo se garantizará la interoperabilidad de la EUDIW entre Estados miembros?",
    answer:
      "La interoperabilidad la garantiza el Architecture Reference Framework (ARF), que impone formatos de credencial comunes (SD-JWT y mdoc), protocolos de presentación normalizados (OpenID4VC), mecanismos de confianza compartidos (listas de confianza y declaraciones de la cartera) y requisitos coherentes de certificación de seguridad. Todas las implementaciones nacionales deben ajustarse a esas especificaciones y superar la evaluación de conformidad. Los Large-Scale Pilots están probando específicamente escenarios transfronterizos, y los actos de ejecución formalizarán los requisitos técnicos exactos que deberá cumplir cada cartera.",
  },
  "compliance-1": {
    question: "¿Qué pasos deberían dar ya las empresas para cumplir con eIDAS 2.0?",
    answer:
      "Las empresas deberían empezar por valorar si entran en alguna categoría con obligación de aceptación: plataformas en línea de muy gran tamaño, entidades financieras, prestadores sanitarios o prestadores de servicios públicos. Después conviene mapear los procesos actuales de verificación de identidad y de firma de documentos para localizar dónde será relevante la EUDIW. Los equipos técnicos deberían familiarizarse con el Architecture Reference Framework, con los protocolos OpenID4VC y con los formatos SD-JWT y mdoc. Es muy recomendable colaborar con un Large-Scale Pilot o con un QTSP para hacer pruebas de integración tempranas, porque acelera mucho la preparación.",
  },
  "compliance-2": {
    question: "¿Qué sanciones hay por incumplir eIDAS 2.0?",
    answer:
      "eIDAS 2.0 deja la ejecución en manos de los organismos de supervisión nacionales, que pueden imponer sanciones conforme al derecho interno. El reglamento no fija importes armonizados, a diferencia del RGPD, pero obliga a los Estados miembros a establecer sanciones efectivas, proporcionadas y disuasorias. Las organizaciones que se nieguen a aceptar la EUDIW cuando la ley lo exija, o que no cumplan sus obligaciones como prestadores de servicios de confianza, se exponen a medidas que pueden incluir multas, la suspensión del servicio o la retirada del estatus de cualificado. Conviene tener en cuenta también el riesgo reputacional.",
  },
  "compliance-3": {
    question: "¿Cuánto cuesta integrarse con la EUDIW como parte usuaria?",
    answer:
      "El coste depende de la infraestructura existente y de la complejidad de los casos de uso. Las organizaciones con sistemas de identidad modernos basados en OpenID Connect encontrarán el paso a OpenID4VC bastante llevadero, con plazos de desarrollo de semanas más que de meses. Las partidas principales son: adaptar los flujos de autenticación a las presentaciones desde la cartera, integrar las bibliotecas de verificación de SD-JWT y mdoc, implantar el registro como parte usuaria y actualizar las interfaces para los flujos de consentimiento. Las implementaciones de referencia de código abierto de los LSP reducen mucho el coste de desarrollo.",
  },
  "compliance-4": {
    question: "¿Tienen que registrarse las empresas como partes usuarias?",
    answer:
      "Sí. Conforme a eIDAS 2.0, las partes usuarias que quieran acceder a datos de la cartera deben registrarse ante el organismo de supervisión del Estado miembro en que estén establecidas. El registro exige declarar qué atributos pretende solicitar la organización y con qué finalidad. Esa obligación es una garantía de privacidad central: permite a la supervisión observar los patrones de acceso a datos y evita la recogida no autorizada. El procedimiento y los requisitos exactos se detallarán en los actos de ejecución, cuya evolución conviene seguir para estar listos a tiempo.",
  },
  "compliance-5": {
    question: "¿Puede la EUDIW sustituir los procesos actuales de KYC y verificación de identidad?",
    answer:
      "La EUDIW está pensada para agilizar y, en muchos casos, sustituir de forma notable los procesos actuales de KYC y verificación de identidad. Para las entidades financieras, recibir directamente de la cartera datos de identificación verificados por el Estado ofrece un nivel de seguridad más alto que muchos procedimientos actuales basados en documentos o en verificación por vídeo. Aun así, las organizaciones deben actualizar sus marcos de prevención del blanqueo para acoger la verificación con cartera y seguir conservando los registros adecuados. Durante la transición, la mayoría tendrá que sostener a la vez los canales tradicionales y los basados en la cartera.",
  },
  "compliance-6": {
    question: "¿Cómo afecta eIDAS 2.0 a las organizaciones que expiden credenciales o certificados?",
    answer:
      "Las organizaciones que expiden credenciales, como universidades, colegios profesionales, organismos públicos y autoridades de certificación, deberían valorar convertirse en proveedores de atributos conforme a eIDAS 2.0. Los organismos del sector público están expresamente obligados a poner los atributos de sus fuentes auténticas a disposición para la declaración electrónica. Eso significa desarrollar la capacidad de expedir EAA o QEAA en formatos normalizados (SD-JWT, mdoc) compatibles con la EUDIW. Se puede expedir directamente o trabajar con un QTSP que emita declaraciones electrónicas cualificadas de atributos en su nombre.",
  },
  "compliance-7": {
    question: "¿Qué obligaciones de minimización de datos tienen las partes usuarias?",
    answer:
      "eIDAS 2.0 impone requisitos estrictos de minimización de datos. Las organizaciones solo pueden solicitar los atributos estrictamente necesarios para el servicio que prestan, y deben declarar la finalidad de cada solicitud al registrarse. La interfaz de la cartera muestra a la persona un panorama claro de qué atributos se piden y quién los pide, lo que hace posible un consentimiento informado. Quien solicite datos excesivos se expone al escrutinio de los organismos de supervisión y a posibles medidas. Estas obligaciones complementan y refuerzan los principios de minimización que ya establece el RGPD.",
  },
  "technical-1": {
    question: "¿Qué formatos de credencial impone el Architecture Reference Framework de la EUDIW?",
    answer:
      "El ARF obliga a admitir dos formatos: SD-JWT (Selective Disclosure JSON Web Token) y mdoc (ISO 18013-5). SD-JWT amplía los JWT habituales con divulgación selectiva mediante hashes con sal, lo que lo hace idóneo para interacciones por web y por API. mdoc usa codificación CBOR para una representación binaria compacta, eficiente en escenarios fuera de línea y de proximidad por NFC o Bluetooth. Ambos admiten divulgación selectiva y son opciones de formato dentro de la familia de protocolos OpenID4VC.",
  },
  "technical-2": {
    question: "¿Qué protocolos se usan para expedir y presentar credenciales en la EUDIW?",
    answer:
      "La EUDIW usa la familia de protocolos OpenID for Verifiable Credentials (OpenID4VC). OpenID4VCI (Verifiable Credential Issuance) define cómo la cartera recibe credenciales de los emisores, y OpenID4VP (Verifiable Presentations) define cómo la cartera las presenta a los verificadores. SIOPv2 (Self-Issued OpenID Provider v2) permite que la cartera actúe como proveedor de identidad. Estos protocolos se apoyan en el marco OpenID Connect, muy extendido, lo que baja la barrera de entrada para quien ya tiene infraestructura OIDC.",
  },
  "technical-3": {
    question: "¿Cómo funciona la declaración de la cartera y por qué importa?",
    answer:
      "La declaración de la cartera es un mecanismo criptográfico que permite a partes usuarias y emisores comprobar que una aplicación de cartera es auténtica, está certificada y se ejecuta en un entorno seguro. El proveedor de la cartera, normalmente el Estado miembro, expide una declaración firmada y vinculada a las claves criptográficas de la cartera y a las características de seguridad del dispositivo. Al verificar una presentación, la parte usuaria comprueba esa declaración para confirmar que la cartera no ha sido manipulada. Eso evita que carteras clonadas o modificadas presenten credenciales fraudulentas y ofrece una vía de revocación si se descubren vulnerabilidades.",
  },
  "technical-4": {
    question: "¿Qué requisitos de seguridad deben cumplir las implementaciones de la EUDIW?",
    answer:
      "Las implementaciones de la EUDIW deben alcanzar el nivel de seguridad alto y superar la evaluación de conformidad y la certificación conforme al marco Common Criteria o a un esquema equivalente. Entre los requisitos principales están: almacenar las claves criptográficas en un elemento seguro o en un entorno de ejecución de confianza; protegerse frente al compromiso del dispositivo y la clonación de la cartera; canales de comunicación seguros para el intercambio de credenciales; medidas contra el seguimiento por parte de las partes usuarias y contra la correlación de transacciones; y mecanismos robustos de autenticación para acceder a la cartera. La cartera debe además implantar copias de seguridad y recuperación que no comprometan la integridad de las credenciales.",
  },
  "technical-5": {
    question: "¿Cómo deberían verificar las partes usuarias las credenciales presentadas desde la EUDIW?",
    answer:
      "Las partes usuarias deberían aplicar una verificación en varios pasos: primero, comprobar la declaración de la cartera para confirmar que la aplicación es auténtica; segundo, verificar la firma criptográfica de las credenciales presentadas con la clave pública del emisor; tercero, comprobar el estatus de cualificado del emisor en las listas de confianza; cuarto, verificar que la credencial no ha caducado ni ha sido revocada; quinto, confirmar mediante la vinculación de claves que la credencial está asociada a la cartera que la presenta. El flujo de presentación lo gestiona el protocolo OpenID4VP, y hay bibliotecas de verificación de SD-JWT y mdoc en varios lenguajes de programación.",
  },
  "technical-6": {
    question: "¿Se puede reutilizar la infraestructura OpenID Connect existente para eIDAS 2.0?",
    answer:
      "Sí, en buena medida. La familia de protocolos OpenID4VC está concebida como una extensión de OpenID Connect, así que quien ya tiene infraestructura OIDC parte con ventaja. Las configuraciones existentes de proveedores de identidad, las bibliotecas de cliente y las prácticas de seguridad sirven de base para los flujos con cartera. Hacen falta, eso sí, algunas adiciones: gestión de la solicitud y la respuesta de presentación verificable (OpenID4VP), lectura y verificación de los formatos de credencial (SD-JWT y mdoc), integración de las listas de confianza para validar emisores, y verificación de la declaración de la cartera. Muchas bibliotecas OIDC se están ampliando precisamente para eso.",
  },
};

export const FAQ_TRANSLATIONS: Record<TranslatedLocale, Record<string, FaqTranslation>> = {
  de,
  it,
  es,
};

/**
 * One FAQ entry in one language, falling back to the English text.
 *
 * A gap here shows up as an English answer on a German page, which is visibly
 * a missing translation. The alternative, hiding the question, would quietly
 * shorten the FAQ and change what the page ranks for.
 */
export function translateFaq(
  locale: Locale,
  item: { id: string; question: string; answer: string }
): FaqTranslation {
  if (locale === DEFAULT_LOCALE) return { question: item.question, answer: item.answer };
  return (
    FAQ_TRANSLATIONS[locale][item.id] ?? { question: item.question, answer: item.answer }
  );
}

/** Whether a language has every question, which is what hreflang depends on. */
export function faqIsComplete(locale: TranslatedLocale, ids: string[]): boolean {
  return ids.every((id) => id in FAQ_TRANSLATIONS[locale]);
}

export function faqLocales(ids: string[]): Locale[] {
  return [
    DEFAULT_LOCALE,
    ...TRANSLATED_LOCALES.filter((l) => faqIsComplete(l, ids)),
  ];
}
