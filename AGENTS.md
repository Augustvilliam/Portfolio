# AGENTS.md — Portfolio website

## Uppdrag

Färdigställ min personliga portfolio genom riktade förbättringar av PortfolioPage, HomePage, AboutPage och Footer. Arbeta i det befintliga React- och TypeScript-projektet. **PortfolioPage är den visuella referensen** för de andra sidorna.

Målet är en sammanhållen, personlig och professionell webbplats, inte en total ombyggnad. Behåll befintligt innehåll, funktioner och sidornas grundidéer där inget annat uttryckligen anges.

## Börja med att undersöka projektet

1. Läs nuvarande komponenter, projektdata, styling, routing och eventuella gemensamma UI-komponenter.
2. Identifiera hur PortfolioPage definierar projekt, taggar och projektkort. Återanvänd befintliga mönster och komponenter i första hand.
3. Identifiera befintliga design tokens, CSS-variabler, färger, typografi och responsiva brytpunkter. Introducera inte ett nytt designsystem om det befintliga räcker.
4. Kontrollera hur Footer används i layouten och vilka tester, lint- och buildkommandon som redan finns.
5. Gör sedan ändringarna nedan. Undvik onödiga beroenden och större refaktoreringar.

## 1. Uppdatera PortfolioPage med GRÅZON och Radical PI

Lägg till två projekt i den befintliga portfoliolistan och ge dem samma visuella behandling och interaktion som övriga projekt.

### GRÅZON

- Namn: **GRÅZON**.
- Typ: Satirisk, fiktiv reklambyrå/webbupplevelse.
- Karaktär: Medvetet överdriven, skrikig och smått absurd reklamestetik, aggressiva popupannonser, satiriska marknadsföringsbudskap och en telefonfunktion/telefonsvarare.
- AI-klassificering: **AI Powered**.

### Radical PI

- Namn: **Radical PI**.
- Typ: Fiktiv privatdetektivwebbplats och blogg i ett Miami Vice-inspirerat 80-talstema, trots att berättelsen utspelar sig i modern tid.
- Huvudfigur: Jonathan "Jonny Phaser" McPhaser, en överdrivet självsäker och tämligen inkompetent privatdetektiv.
- Webbplatsen är **i berättelsens universum skapad av GRÅZON**.
- AI-klassificering: **AI Powered**.

För båda projekten:

- Skriv kort, korrekt svensk projekttext som passar befintliga kort och detaljvyer. Tonen får vara lätt lekfull men ska fungera i en professionell portfolio.
- Återanvänd befintlig struktur för bilder, tekniktaggar, projektlänkar och eventuell GitHub-länk.
- **Hitta inte på** länkar, GitHub-repon, produktionsstatus, tekniska implementationer, screenshots eller funktioner som inte går att verifiera i projektet. Använd endast befintliga riktiga resurser. Saknas en länk eller bild ska komponenten hantera det snyggt utan trasiga element.
- Bevara befintliga projekt och deras innehåll om de inte uttryckligen omfattas av uppdraget.

## 2. Lägg till en diskret legend för AI-taggar

Inför en liten **legend/teckenförklaring på PortfolioPage** som tydliggör hur AI har använts i projekten. Den ska vara lätt att hitta men inte konkurrera med projektkorten. Anpassa till befintlig design och gör den responsiv och tillgänglig.

Använd exakt dessa tre kategorinamn:

| Tagg | Betydelse |
| --- | --- |
| **AI Powered** | Huvudsakligen byggt med AI-agenter och promptstyrd utveckling, det vill säga vibekodat. |
| **AI Assisted** | Utvecklarstyrt arbete där AI har använts som stöd, för att effektivisera och finslipa delar av processen. |
| **Pure Code** | Handskriven kod utifrån egen problemlösning, riktlinjer och dokumentation, utan AI-agenter i implementationen. |

Exempel på klassificering:

- **GRÅZON:** AI Powered.
- **Radical PI:** AI Powered.
- **Wilhelm Burgers:** AI Assisted.
- **Demophoon:** Pure Code.

Klassificera inte övriga projekt på gissning. Om fler projekt redan har korrekta klassificeringar, behåll dem. Om projektmodellen saknar detta fält, utöka den med en tydlig TypeScript-union, exempelvis `"AI Powered" | "AI Assisted" | "Pure Code"`, och rendera etiketter konsekvent. Återanvänd gärna samma komponent för projektkortens tagg och legendens exempel.

Säkerställ att:

- Taggarna har tillräcklig kontrast i både ljust och mörkt tema.
- Betydelsen inte förmedlas enbart genom färg.
- Legendens språk är sakligt och transparent, utan att värdera den ena kategorin som bättre än den andra.
- Legenden inte kräver hover för att förstås, särskilt på mobil.

## 3. Ge HomePage och AboutPage ett facelift

**PortfolioPage är stilmässig förebild** för spacing, typografi, kort/ytor, färger, gränser och visuella detaljer. Förbättra helhetsintrycket på HomePage och AboutPage utan att ändra deras huvudsakliga koncept eller sidornas roller.

### HomePage

- Behåll startsidans funktion som en personlig introduktion med tydliga vägar vidare till relevanta delar av webbplatsen.
- Behåll befintliga centrala CTA:er/länkar och eventuell featured-sektion, men förbättra visuell hierarki, proportioner, textlängd och avstånd.
- Se till att porträtt/bilder inte tar oproportionerligt stor plats i desktoplayout och att layouten fungerar lika bra på mindre skärmar.
- Minska visuellt brus och onödig upprepning. Behåll en personlig och lättsam röst.

### AboutPage

- Behåll konceptet med en personlig presentation, bakgrund och möjlighet att ladda ner CV.
- Strukturera innehållet i lättlästa sektioner med tydliga rubriker och konsekvent spacing.
- Lyft fram relevant utvecklarbakgrund och erfarenhet utan att sidan blir en generisk CV-dump.
- Kontrollera att CV-länken pekar mot en faktisk fil och fungerar. Hitta inte på en ny sökväg om filen saknas.

### Text och tillgänglighet på båda sidorna

- Korrigera stavning, grammatik, versalisering och klumpiga svenska formuleringar i synlig UI-text.
- Behåll avsiktlig humor och personlighet där den passar, men skala bort formuleringar som gör ett oprofessionellt intryck.
- **Använd aldrig em dash (—) i den synliga texten.** Använd punkt, komma, kolon eller omformulera meningen.
- Skriv på naturlig svenska. Behåll etablerade engelska tekniknamn och projektnamn.
- Säkerställ semantiska rubriknivåer, fungerande tangentbordsnavigation, synlig fokusmarkering, beskrivande länknamn och relevant alt-text.
- Respektera befintliga tema- och responsivitetslösningar. Undvik horisontell scroll.

## 4. Uppdatera Footer

Ersätt den nuvarande texten **"Ny exad pajas"** med en mer seriös och tidlös formulering som passar en utvecklarportfolio.

Föreslagen text: **"Webbutvecklare med fokus på .NET och moderna webbapplikationer"**.

Anpassa meningen lätt till befintlig footer om det behövs, men behåll dess syfte, länkar och layout. Ta inte bort befintlig kontaktinformation eller navigation.

## Tekniska riktlinjer

- Följ projektets nuvarande arkitektur, kodstil och mappstruktur.
- Prioritera små, lättgranskade ändringar framför omfattande omstruktureringar.
- Använd typad TypeScript. Undvik `any` när det inte är motiverat.
- Återanvänd gemensamma komponenter; skapa nya bara där det faktiskt minskar duplicering.
- Hårdkoda inte flera kopior av samma AI-taggdefinition på olika ställen.
- Behåll React Router-navigering, temaväxling och nuvarande funktionalitet.
- Lägg inte till externa bibliotek bara för kosmetiska förändringar.
- Undvik att ändra andra sidor eller projekt utan direkt anledning.
- Ändra inte innehåll som kräver personlig faktakontroll, exempelvis anställningar, utbildning och prestationer, utöver rena språkjusteringar.

## Definition of Done

Uppdraget är klart först när:

1. GRÅZON och Radical PI syns på PortfolioPage i samma mönster som övriga projekt.
2. En synlig, tillgänglig legend för AI Powered, AI Assisted och Pure Code finns på PortfolioPage.
3. GRÅZON och Radical PI visas som AI Powered, Wilhelm Burgers som AI Assisted och Demophoon som Pure Code, förutsatt att dessa projekt finns i den nuvarande datamodellen.
4. HomePage och AboutPage harmoniserar visuellt med PortfolioPage och behåller sina respektive grundkoncept.
5. Synlig text är korrekturläst, utan em dashes, och Footer har en seriösare formulering.
6. Layouten fungerar på mobil och desktop samt i både ljust och mörkt tema.
7. Befintlig navigering, tema, projektlänkar och CV-nedladdning har inte brutits.
8. Projektets tillgängliga lint-, typkontroll-, test- och buildkommandon har körts. Redovisa tydligt eventuella fel som inte kunde åtgärdas eller kontroller som saknas.

## Slutrapport

När arbetet är genomfört, ge en kort sammanfattning av:

- Vilka komponenter/filer som ändrades.
- Hur projektens AI-kategorier representeras.
- Vilka layout- och textförbättringar som gjordes.
- Vilka kontroller som kördes och resultatet av dem.
- Eventuella saknade resurser (projektlänkar, bilder, CV) som behöver kompletteras manuellt.
