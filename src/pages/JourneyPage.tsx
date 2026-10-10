import { useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    BriefcaseBusiness,
    Check,
    ChevronDown,
    Code2,
    GraduationCap,
    Utensils,
} from "lucide-react";
import codeLayers from "../assets/hero.png";
import CvButton from "../components/Links/CvButton";

type JourneyCategory = "restaurang" | "utveckling" | "utbildning";
type JourneyFilter = "alla" | JourneyCategory;

type JourneyEntry = {
    id: number;
    period: string;
    role: string;
    company: string;
    category: JourneyCategory;
    summary: string;
    details: string;
    highlights: string[];
    skills: string[];
    image: string;
    imageAlt: string;
};

const journeyEntries: JourneyEntry[] = [
    {
        id: 1,
        period: "2016 — 2018",
        role: "Medarbetare",
        company: "MAX Burgers",
        category: "restaurang",
        summary: "Kanske världens längsta sommarjobb.",
        details: "Direkt efter studenten var jag, precis som många andra, rejält trött på skolbänken. Efter ett välförtjänt sommarlov, en jobbansökan och en intervju började jag som medarbetare på MAX Burgers i Falkenberg. Jag lärde mig snabbt att kommunikation är A och O, både med kollegor och gäster. Om det var människorna, arbetskulturen eller själva jobbet som fick mig att stanna längre än en sommar vet jag fortfarande inte, men något var det. Tyvärr blev diplomen för Årets Rookie och Årets medarbetare musmat, så jag får nöja mig med att visa upp diplomet för Månadens medarbetare i stället.",
        highlights: ["Årets Rookie", "Årets medarbetare", "Första jobbet"],
        skills: ["Kundbemötande", "Samarbete", "Problemlösning", "Kommunikation"],
        image: "/images/employee.webp",
        imageAlt: "Diplom för Månadens medarbetare på MAX Burgers",
    },
    {
        id: 2,
        period: "2018 — 2020",
        role: "Driftledare",
        company: "MAX Burgers",
        category: "restaurang",
        summary: "Från att bemanna en station till att få alla stationer, och lite till, att fungera tillsammans.",
        details: "I början av vintern 2017 blev jag kallad till ett möte och fick frågan om jag ville bli driftledare. Med den växtvärk jag hade tackade jag självklart ja. Därefter följde månader av fokuserat arbete för att lära mig alla rutiner, system och processer som rollen krävde. Runt jul gick jag en kurs i FIRO, en teori om gruppers och relationers utveckling framtagen av Will Schutz. Våren 2018 var det dags för både prov och uppkörning. Jag klarade dem, men hade ännu ingen aning om hur mycket arbete och uppföljning som väntade. Det är trots allt stor skillnad mellan att leda ett arbetspass i teorin och att göra det i praktiken. Sommaren blev en värdefull testperiod och 2019 ett riktigt kanonår. Jag fick lära mig att leda, coacha och utveckla ett team samt att arbeta kontinuerligt med feedback och rutiner. Resultatet blev utmärkelsen Årets driftledare 2019.",
        highlights: ["Ledde skiftteam", "Ansvar för daglig drift"],
        skills: ["Ledarskap", "Prioritering", "Kvalitet"],
        image: "/images/shift.webp",
        imageAlt: "Inramat diplom för Årets driftledare 2019",
    },
    {
        id: 3,
        period: "2020 — 2024",
        role: "Biträdande restaurangchef",
        company: "MAX Burgers",
        category: "restaurang",
        summary: "Från skiftansvar till ett delat ansvar för hela restaurangen.",
        details: "Året var 2020 och vi befann oss mitt i en pandemi. De ständigt förändrade rutinerna och restriktionerna blev en av de största utmaningarna jag dittills hade mött. Samtidigt fick jag frågan om jag ville gå över till restaurangen i Varberg som biträdande restaurangchef. Det var inte första gången jag blev tillfrågad. Tidigare hade jag tackat nej eftersom jag inte känt mig redo och trivts bra med rollen, kollegorna och den korta resvägen i Falkenberg. Till slut, efter lite pepp från min sambo, tackade jag ja. Omställningen blev enorm. Från att leda ett mindre team under ett arbetspass fick jag nu dela ansvaret för en hel restaurang. Rollen omfattade allt från resultatuppföljning och rutiner till rekrytering, bokslut, budgetarbete, schemaläggning och hundra andra saker. Det gick bra, faktiskt väldigt bra. Jag och min restaurangchef tilldelades utmärkelsen Årets engagemangslyft, vilket satte tonen för resten av min tid som biträdande restaurangchef.",
        highlights: ["Personalansvar", "Planering och uppföljning"],
        skills: ["Coaching", "Bemanning", "Verksamhetsutveckling"],
        image: "/images/ebba2022.webp",
        imageAlt: "Diplom för Årets engagemangslyft 2020",
    },
    {
        id: 4,
        period: "2024 — 2026",
        role: "Webbutvecklare inom .NET",
        company: "EC Utbildning",
        category: "utbildning",
        summary: "Ett karriärbyte som kändes mer som att återupptäcka en gammal vän.",
        details: "Vintern 2023 hände något. Jag vaknade en dag och kände mig rätt matt, sliten och allmänt energilös. Det visade sig att åtta år med full fart i restaurangbranschen kunde leda till utbrändhet, vem hade kunnat ana det? Jag insåg att det var dags att göra något annat, men visste ännu inte vad. När jag funderade över vad jag faktiskt tycker om återkom tre saker: att skapa, vara kreativ och lösa problem. Dessutom hade restaurangens IT-system länge väckt frågor. Varför behövde vi så många olika system, byggda för helt andra ändamål, som ändå förväntades fungera tillsammans? Min lillebror hade läst till och arbetade som .NET-utvecklare, och själv hade jag faktiskt programmerat i C# och JavaScript på gymnasiet. Därför sökte jag samma utbildning som han hade gått, och wow, jag valde helt rätt. Det kändes som att återse en gammal vän som jag inte haft tid för. De följande två åren fylldes av kod, kurser, oheliga mängder kaffe, sena kvällar och problem som ofta bottnade i ett stavfel eller ett missat semikolon. Studierna började med HTML och CSS och fortsatte med JavaScript, C#, databaser, ASP.NET, Azure, grupprojekt och Umbraco CMS. Till sist gjorde jag min LIA på Consid AB i Varberg och skrev examensarbetet. Resultatet blev VG i samtliga kurser och utmärkelsen 'Bästa studieresultat'.",
        highlights: ["Agila teamprojekt", "Fullstack-utveckling"],
        skills: ["C#", ".NET", "React", "Azure", "SQL", "Umbraco CMS" ],
        image: "/images/studyresult.jpg",
        imageAlt: "Diplom för bästa studieresultat på utbildningen Webbutveckling inom .NET",
    },
    {
        id: 5,
        period: "2026 — Nu",
        role: "Junior fullstackutvecklare",
        company: "Nästa kapitel",
        category: "utveckling",
        summary: "Examen i handen, egna projekt i gång och blicken riktad mot nästa team.",
        details: "Nu är vi framme i nutid. Jag tog examen i maj 2026 och skickar jobbansökningar i ungefär samma tempo som jag en gång skickade ut burgare. Det är en tuff marknad: AI förändrar branschen, lågkonjunkturen märks och företagen är förståeligt försiktiga. Men jag är inte orolig. Jag vet att jag kommer att hitta rätt plats, och när jag gör det tänker jag ge allt för att bidra med min kunskap, erfarenhet och arbetsmoral. Jag vill bli en del av ett team där jag får bygga, utvecklas och fortsätta växa. Under tiden arbetar jag med att montera byggställningar. Tiden som blir över använder jag till att fördjupa mina programmeringskunskaper, driva hobbyprojekt och bygga min portfolio, bland annat den här sidan. Fler projekt finns på projektsidan för den som är nyfiken. Så just nu söker jag jobb, knackar kod och stör min sambo och mina vänner. Kanske är det just du som läser detta som har en plats för mig i ditt team, eller bara tid för en kaffe. Det fungerar också.",
        highlights: ["Rapportsystem", "Restaurangplattform"],
        skills: ["TypeScript", "ASP.NET", "Entity Framework", "Blazor"],
        image: codeLayers,
        imageAlt: "Abstrakta lager som representerar en teknisk lösning",
    },
];

const filters: { value: JourneyFilter; label: string }[] = [
    { value: "alla", label: "Hela resan" },
    { value: "restaurang", label: "Restaurang" },
    { value: "utbildning", label: "Utbildning" },
    { value: "utveckling", label: "Utveckling" },
];

const categoryLabels: Record<JourneyCategory, string> = {
    restaurang: "Restaurang",
    utbildning: "Utbildning",
    utveckling: "Utveckling",
};

function CategoryIcon({ category }: { category: JourneyCategory }) {
    if (category === "utbildning") return <GraduationCap aria-hidden="true" size={20} />;
    if (category === "utveckling") return <Code2 aria-hidden="true" size={20} />;
    return <Utensils aria-hidden="true" size={20} />;
}

export default function JourneyPage() {
    const [activeFilter, setActiveFilter] = useState<JourneyFilter>("alla");

    const visibleEntries = journeyEntries.filter(
        (entry) => activeFilter === "alla" || entry.category === activeFilter,
    );

    return (
        <main className="journey-page">
            <section className="journey-hero" aria-labelledby="journey-title">
                <div className="journey-hero-copy">
                    <p className="journey-kicker">
                        <span aria-hidden="true" /> Min arbetsresa
                    </p>
                    <h1 id="journey-title">Från burgare till backend.</h1>
                    <p className="journey-lead">
                        Nästan ett decennium i restaurang lärde mig att leda, lyssna och lösa
                        problem i högt tempo. Nu tar jag med mig allt det in i utvecklarrollen.
                    </p>
                    <div className="journey-actions">
                        <a className="journey-primary-action" href="#tidslinje">
                            Börja resan <ChevronDown aria-hidden="true" size={18} />
                        </a>
                       <CvButton />
                    </div>
                </div>

                <aside className="journey-snapshot" aria-label="Arbetsliv i korthet">
                    <p className="journey-snapshot-label">Arbetsliv i korthet</p>
                    <div className="journey-stat-grid">
                        <div><strong>10</strong><span>år i arbetslivet</span></div>
                        <div><strong>3</strong><span>ledarskapsår</span></div>
                        <div><strong>2</strong><span>år .NET-studier</span></div>
                        <div><strong>∞</strong><span>nyfikenhet</span></div>
                    </div>
                    <p className="journey-availability">
                        <span aria-hidden="true" /> Öppen för juniora utvecklarroller
                    </p>
                </aside>
            </section>

            <section className="journey-story" id="tidslinje" aria-labelledby="timeline-title">
                <div className="journey-story-intro">
                    <div className="journey-section-heading">
                        <div>
                            <p className="journey-kicker">Kapitel för kapitel</p>
                            <h2 id="timeline-title">Det här har format mig</h2>
                        </div>
                        <p>Scrolla vidare genom min arbetsresa.</p>
                    </div>

                    <div className="journey-filters" aria-label="Filtrera tidslinjen">
                        {filters.map((filter) => (
                            <button
                                className={activeFilter === filter.value ? "is-active" : ""}
                                type="button"
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                aria-pressed={activeFilter === filter.value}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <ol className="journey-chapter-list">
                    {visibleEntries.map((entry, index) => (
                        <li className={`journey-chapter-item journey-chapter-item--${entry.category}`} key={entry.id}>
                            <article className="journey-chapter">
                                <div className="journey-chapter-copy">
                                    <div className="journey-chapter-meta">
                                        <span className="journey-category">
                                            <CategoryIcon category={entry.category} />
                                            {categoryLabels[entry.category]}
                                        </span>
                                    </div>

                                    <p className="journey-entry-period">{entry.period}</p>
                                    <h3>{entry.role}</h3>
                                    <p className="journey-company">{entry.company}</p>
                                    <p className="journey-entry-summary">{entry.summary}</p>
                                    <p className="journey-entry-details">{entry.details}</p>

                                    <div className="journey-detail-columns">
                                        <div>
                                            <h4>Höjdpunkter</h4>
                                            <ul>
                                                {entry.highlights.map((highlight) => (
                                                    <li key={highlight}>
                                                        <Check aria-hidden="true" size={15} /> {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>Jag tog med mig</h4>
                                            <ul className="journey-skill-list">
                                                {entry.skills.map((skill) => <li key={skill}>{skill}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <figure className="journey-chapter-visual">
                                    <img src={entry.image} alt={entry.imageAlt} />
                                    <figcaption>
                                        <span>{entry.period}</span>
                                        <span>{entry.company}</span>
                                    </figcaption>
                                </figure>
                            </article>

                            {index < visibleEntries.length - 1 && (
                                <div className="journey-arrow" aria-hidden="true">
                                    <span />
                                    <ArrowDown size={28} strokeWidth={1.5} />
                                    <span />
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </section>

            <section className="journey-next" aria-labelledby="journey-next-title">
                <span className="journey-next-icon" aria-hidden="true"><BriefcaseBusiness size={25} /></span>
                <div>
                    <p className="journey-kicker">Nästa hållplats</p>
                    <h2 id="journey-next-title">Ett team där jag får bygga och fortsätta växa.</h2>
                    <p>Har ni plats för en junior med senior arbetsmoral? Då vill jag gärna höra mer.</p>
                </div>
                <a href="mailto:villiam.fagrelius@gmail.com">
                    Säg hej <ArrowUpRight aria-hidden="true" size={18} />
                </a>
            </section>
        </main>
    );
}
