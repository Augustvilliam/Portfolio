import { useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    Eye,
    LockKeyhole,
    MonitorSmartphone,
} from "lucide-react";

type ProjectStatus = "Under utveckling" | "Publicerad" | "Pausad";

type Project = {
    id: string;
    name: string;
    type: string;
    status: ProjectStatus;
    release: string;
    access: string;
    lead: string;
    description: string;
    role: string;
    focus: string;
    technologies: string[];
    highlights: string[];
    images: { src: string; alt: string; caption: string }[];
    liveUrl?: string;
    repositoryUrl?: string;
};

const projects: Project[] = [
    {
        id: "demophoon",
        name: "Demophoon",
        type: "Fullstack · Webbapplikation",
        status: "Under utveckling",
        release: "Ej publicerad",
        access: "Privat repository",
        lead: "En plattform som synliggör ghosting inom rekrytering.",
        description:
            "Demophoon samlar rapporter, företag och steg i rekryteringsprocessen i ett tydligt gränssnitt. Målet är att ge arbetssökande en röst och bidra till större transparens kring hur kandidater behandlas.",
        role: "Koncept, design och fullstackutveckling",
        focus: "Datamodellering, rapportflöden och en trygg användarupplevelse",
        technologies: ["React", "TypeScript", "ASP.NET", "SQL Server"],
        highlights: [
            "Rapportera händelser genom ett strukturerat flöde",
            "Samla företag och rekryteringssteg på samma plats",
            "Göra anonymiserad erfarenhetsdata lätt att förstå",
        ],
        images: [
            {
                src: "/images/demo.webp",
                alt: "Förhandsvisning av rapportöversikten i Demophoon",
                caption: "Rapportöversikt · pågående design",
            },
        ],
    },
    {
        id: "wilhelm-burgers",
        name: "Wilhelm Burgers",
        type: "Fullstack · Restaurangplattform",
        status: "Under utveckling",
        release: "Ej publicerad",
        access: "Privat repository",
        lead: "Ett komplett restaurangflöde byggt med Blazor och microservices.",
        description:
            "Wilhelm Burgers knyter ihop beställning, betalning och köhantering i ett sammanhängande system. Projektet utforskar hur realtidsuppdateringar och separerade tjänster kan skapa ett snabbare arbetsflöde från gäst till kök.",
        role: "Systemdesign och fullstackutveckling",
        focus: "Tjänstegränser, realtidskommunikation och operativa flöden",
        technologies: ["Blazor", "Azure", "SignalR", "SQL Server"],
        highlights: [
            "Beställningsflöde från meny till betalning",
            "Realtidsuppdaterad köhantering för restaurangen",
            "Microservicebaserad arkitektur med tydliga ansvarsområden",
        ],
        images: [
            {
                src: "/images/burgers.png",
                alt: "Förhandsvisning av Wilhelm Burgers restaurangsystem",
                caption: "Beställningsgränssnitt · pågående design",
            },
        ],
    },
];

function ProjectCarousel({ project }: { project: Project }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const pointerStart = useRef<number | null>(null);
    const hasMultipleSlides = project.images.length > 1;

    const showPrevious = () => {
        setActiveSlide((current) =>
            current === 0 ? project.images.length - 1 : current - 1,
        );
    };

    const showNext = () => {
        setActiveSlide((current) => (current + 1) % project.images.length);
    };

    return (
        <div
            className="portfolio-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={`Bilder från ${project.name}`}
            tabIndex={0}
            onKeyDown={(event) => {
                if (!hasMultipleSlides) return;
                if (event.key === "ArrowLeft") showPrevious();
                if (event.key === "ArrowRight") showNext();
            }}
            onPointerDown={(event) => {
                pointerStart.current = event.clientX;
            }}
            onPointerUp={(event) => {
                if (!hasMultipleSlides || pointerStart.current === null) return;
                const distance = event.clientX - pointerStart.current;
                if (Math.abs(distance) > 45) {
                    if (distance > 0) showPrevious();
                    else showNext();
                }
                pointerStart.current = null;
            }}
        >
            <div
                className="portfolio-carousel-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {project.images.map((image, index) => (
                    <figure
                        className="portfolio-carousel-slide"
                        aria-hidden={index !== activeSlide}
                        key={image.src}
                    >
                        <img src={image.src} alt={image.alt} draggable="false" />
                        <figcaption>
                            <span>{image.caption}</span>
                            <span>{index + 1} / {project.images.length}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {hasMultipleSlides && (
                <>
                    <div className="portfolio-carousel-controls">
                        <button type="button" onClick={showPrevious} aria-label="Föregående bild">
                            <ArrowLeft aria-hidden="true" size={18} />
                        </button>
                        <button type="button" onClick={showNext} aria-label="Nästa bild">
                            <ArrowRight aria-hidden="true" size={18} />
                        </button>
                    </div>
                    <div className="portfolio-carousel-pagination" aria-label="Välj bild">
                        {project.images.map((image, index) => (
                            <button
                                type="button"
                                className={activeSlide === index ? "is-active" : ""}
                                aria-label={`Visa bild ${index + 1}`}
                                aria-current={activeSlide === index ? "true" : undefined}
                                onClick={() => setActiveSlide(index)}
                                key={image.src}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function PortfolioPage() {
    return (
        <main className="portfolio-page">
            <section className="portfolio-hero" aria-labelledby="portfolio-title">
                <div className="portfolio-hero-copy">
                    <p className="portfolio-kicker"><span aria-hidden="true" /> Mina projekt</p>
                    <h1 id="portfolio-title">Byggt för verkliga problem, inte bara för ett GitHub-flöde.</h1>
                    <p>
                        Här samlar jag projekt jag bygger, testar och lär mig av. En del är
                        publicerade, andra pågår bakom stängda repositories — men arbetet,
                        besluten och lärdomarna är fortfarande värda att visa.
                    </p>
                    <a className="portfolio-primary-action" href="#projekt">
                        Utforska projekten <ArrowRight aria-hidden="true" size={18} />
                    </a>
                </div>

                <aside className="portfolio-overview" aria-label="Projekt i korthet">
                    <p>Portfolio i korthet</p>
                    <div className="portfolio-overview-grid">
                        <div><strong>{projects.length}</strong><span>aktiva projekt</span></div>
                        <div><strong>2</strong><span>fullstacklösningar</span></div>
                        <div><strong>8</strong><span>tekniker i praktiken</span></div>
                        <div><strong>∞</strong><span>saker kvar att lära</span></div>
                    </div>
                    <p className="portfolio-availability"><span aria-hidden="true" /> Nya idéer byggs just nu</p>
                </aside>
            </section>

            <section className="portfolio-projects" id="projekt" aria-labelledby="projects-title">
                <div className="portfolio-section-heading">
                    <div>
                        <p className="portfolio-kicker">På arbetsbänken</p>
                        <h2 id="projects-title">Aktuella projekt</h2>
                    </div>
                    <p>Från första problemformulering till en lösning som går att använda.</p>
                </div>

                <div className="portfolio-project-list">
                    {projects.map((project, index) => (
                        <article className="portfolio-project" id={project.id} key={project.id}>
                            <div className="portfolio-project-number" aria-hidden="true">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="portfolio-project-main">
                                <div className="portfolio-project-heading">
                                    <div>
                                        <p>{project.type}</p>
                                        <h3>{project.name}</h3>
                                    </div>
                                    <span className="portfolio-status"><span aria-hidden="true" /> {project.status}</span>
                                </div>

                                <ProjectCarousel project={project} />

                                <div className="portfolio-project-copy">
                                    <p className="portfolio-project-lead">{project.lead}</p>
                                    <p>{project.description}</p>
                                </div>

                                <div className="portfolio-detail-grid">
                                    <div>
                                        <h4>Min roll</h4>
                                        <p>{project.role}</p>
                                    </div>
                                    <div>
                                        <h4>Fokus</h4>
                                        <p>{project.focus}</p>
                                    </div>
                                </div>

                                <div className="portfolio-highlights">
                                    <h4>Det här innehåller projektet</h4>
                                    <ul>
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight}><Check aria-hidden="true" size={16} /> {highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <aside className="portfolio-project-sidebar" aria-label={`Fakta om ${project.name}`}>
                                <div className="portfolio-project-fact">
                                    <MonitorSmartphone aria-hidden="true" size={18} />
                                    <div><span>Publicering</span><strong>{project.release}</strong></div>
                                </div>
                                <div className="portfolio-project-fact">
                                    <LockKeyhole aria-hidden="true" size={18} />
                                    <div><span>Källkod</span><strong>{project.access}</strong></div>
                                </div>

                                <div className="portfolio-stack">
                                    <h4><Code2 aria-hidden="true" size={18} /> Tech stack</h4>
                                    <ul>
                                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                                    </ul>
                                </div>

                                {(project.liveUrl || project.repositoryUrl) && (
                                    <div className="portfolio-project-links">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                <Eye aria-hidden="true" size={17} /> Besök projektet
                                            </a>
                                        )}
                                        {project.repositoryUrl && (
                                            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                                                Se källkoden <ArrowUpRight aria-hidden="true" size={16} />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </aside>
                        </article>
                    ))}
                </div>
            </section>

            <section className="portfolio-contact" aria-labelledby="portfolio-contact-title">
                <div className="portfolio-contact-icon" aria-hidden="true"><Code2 size={24} /></div>
                <div>
                    <p className="portfolio-kicker">Vill du veta mer?</p>
                    <h2 id="portfolio-contact-title">Koden är privat. Samtalet behöver inte vara det.</h2>
                    <p>Jag berättar gärna mer om arkitekturen, avvägningarna och vad jag lärde mig på vägen.</p>
                </div>
                <a href="mailto:villiam.fagrelius@gmail.com">
                    Prata projekt <ArrowUpRight aria-hidden="true" size={18} />
                </a>
            </section>
        </main>
    );
}
