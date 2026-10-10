import PageLink from "../Links/PageLink";

export default function ProjectArticles() {
    
    return(
        <>
        <article className="home-featured-hero" id="project-article-1">
          <header className="home-header">
            <div>
              <p className="project-eyebrow">Fullstack · Pågående projekt</p>
              <h3>Demophoon</h3>
            </div>

            <span className="project-status">Under utveckling</span>
          </header>

          <div className="home-featured-content">
            <p className="project-lead">
              En plattform som gör det möjligt för arbetssökande att rapportera och
              synliggöra ghosting inom rekrytering.
            </p>

            <p className="project-description">
              Projektet samlar rapporter, företag och rekryteringssteg i ett tydligt
              gränssnitt med målet att skapa större transparens kring hur kandidater
              behandlas under en rekryteringsprocess.
            </p>

            <ul className="technology-list" aria-label="Tekniker">
              <li>React</li>
              <li>TypeScript</li>
              <li>ASP.NET</li>
              <li>SQL Server</li>
            </ul>

            <PageLink
              to="/portfolio#demophoon"
              text="Läs mer om Demophoon"
            />
          </div>

          <figure className="featured-proj-img">
            <img
              src="/images/demo.webp"
              alt="Förhandsvisning av Demophoons rapportöversikt"
            />
          </figure>
        </article>
        
        <article className="home-featured-hero" id="project-article-2">
          <header className="home-header">
            <div>
              <p className="project-eyebrow">Fullstack · Pågående projekt</p>
              <h3>Wilhelm Burgers</h3>
            </div>

            <span className="project-status">Under utveckling</span>
          </header>

          <div className="home-featured-content">
            <p className="project-lead">
              En renodlad Blazor-applikation med microservicearkitektur.
            </p>

            <p className="project-description">
              Projektet är ett fullständigt restaurangsystem med beställning, betalning och köhantering.
            </p>

            <ul className="technology-list" aria-label="Tekniker">
              <li>Blazor</li>
              <li>Azure</li>
              <li>SignalR</li>
              <li>SQL Server</li>
            </ul>

            <PageLink to="/portfolio#wilhelm-burgers" text="Läs mer om Wilhelm Burgers" />
          </div>

          <figure className="featured-proj-img">
            <img src="/images/burgers.png" alt="Förhandsvisning av Wilhelm Burgers restaurangsystem" loading="lazy" />
          </figure>
        </article>
        </>
    )
}
