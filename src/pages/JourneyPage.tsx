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
        summary: "Kanske världens längst sommarjobb",
        details: "Direkt efter studenten var jag precis som många andra, det vill säga extremt trött på skolbänken, och efter ett välförtjänt sommarlov, en jobbansökan och en intervju senare började jag som medarbetare på Max Burgers i Falkenberg. Jag lärde mig snabbt att kommunikation är A och O, både när det gäller sina kollegor och gästerna. Sen vet jag inte om det var kollegorna, arbetskulturen eller själva arbetet som gjorde att jag stannade kvar mer än en sommar, men något var det ju, inte för att jag visste det då. Tyvärr blev både mitt Årets Rookie och Årets Medarebetare diplom musmat, så jag får nöja med mitt månadens medarbetare istället.",
        highlights: ["Årets Rookie", "Årets medarbetare", "Första Jobbet"],
        skills: ["Kundbemötande", "Samarbete", "Problemlösning", "Kommunikation"],
        image: "/images/employee.webp",
        imageAlt: "Restaurangprojekt med burgare och menyer",
    },
    {
        id: 2,
        period: "2018 — 2020",
        role: "Driftledare",
        company: "MAX Burgers",
        category: "restaurang",
        summary: "Från att lösa en station till att lösa alla station och lite till.",
        details: "I början av vintern 2017 blev jag kallad till möte, ett möte som handlade om att bli driftledare, och med växtvärken jag hade så tackade jag självklart ja. Och då började månader som fokuserat arbete för att lära mig alla runtiner, system och processer som krävdes för att klara av mitt arbete. Jag fick runt jul gå på kurs om FIRO, som är en social relationsteori av Will Schultz. Våren 2018 var det dags för att skriva prov och visa vad jag gick för på en uppkörning. Sagt och gjort klarade jag det, men jag hade ingen aning om hur mycket arbete och uppföljning kommande månader skulle bli. Man kan lugnt säga att skillanden att teoretiskt hålla i ett pass, och faktiskt praktiskt göra det skiljer sig. Men tillslut löste det sig. Sommaren 2018 blev fin trial run, och året 2019 blev ett kanonår. Jag fick lära mig att leda, coacha och utveckla ett litet team, och jobba ständigt feedback ochr rutiner för att förbättra mitt och mina kollegors arbetssätt. Och resultatet blev utmärkelsen Årets Driftledare 2019.",
        highlights: ["Ledde skiftteam", "Ansvar för daglig drift"],
        skills: ["Ledarskap", "Prioritering", "Kvalitet"],
        image: "/images/shift.webp",
        imageAlt: "Porträtt av Villiam",
    },
    {
        id: 3,
        period: "2020 — 2023",
        role: "Biträdande restaurangchef",
        company: "MAX Burgers",
        category: "restaurang",
        summary: "Temp",
        details: "Temp",
        highlights: ["Personalansvar", "Planering och uppföljning"],
        skills: ["Coaching", "Bemanning", "Verksamhetsutveckling"],
        image: "/images/ebba2022.webp",
        imageAlt: "Villiam på resa",
    },
    {
        id: 4,
        period: "2023 — 2025",
        role: "Webbutvecklare inom .NET",
        company: "EC Utbildning",
        category: "utbildning",
        summary: "Temp",
        details: "Temp",
        highlights: ["Agila teamprojekt", "Fullstack-utveckling"],
        skills: ["C#", ".NET", "React", "Azure", "SQL", "Umbraco CMS" ],
        image: "/images/studyresult.jpg",
        imageAlt: "Abstrakta lager som representerar en teknisk lösning",
    },
    {
        id: 5,
        period: "2025 — Nu",
        role: "Junior fullstackutvecklare",
        company: "Nästa kapitel",
        category: "utveckling",
        summary: "Temp",
        details: "Temp",
        highlights: ["Rapportsystem", "Restaurangplattform"],
        skills: ["TypeScript", "ASP.NET", "Entity Framework", "Blazor"],
        image: codeLayers,
        imageAlt: "Porträtt av Villiam",
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
