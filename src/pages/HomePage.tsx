import PageLink from "../components/Links/PageLink";
import ProjectArticles from "../components/Articles/ProjectArticles";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero home-section" aria-labelledby="home-title">
        <div className="home-content">
          <div className="home-header">
            <p className="portfolio-kicker">Webbutvecklare inom .NET</p>
            <h1 id="home-title">Jag bygger webbapplikationer med användaren i fokus.</h1>
          </div>
          <div className="home-intro">
            <p>Hej, jag heter Villiam! Jag är nyexaminerad webbutvecklare från EC Utbildnings <a href="https://ecutbildning.se/nyheter/tycker-du-om-att-knacka-kod-valj-net/" target="_blank" rel="noreferrer">utbildning inom .NET</a>. Under utbildningen arbetade jag med bland annat .NET, Azure, Umbraco, React och agila grupparbeten.</p>
            <p>Innan jag började min resa som utvecklare arbetade jag nästan tio år i restaurangbranschen. Ett sommarjobb som varade lite längre än en sommar.</p>
          </div>
          <div className="home-actions">
            <PageLink to="/portfolio" text="Se mina projekt" className="portfolio-primary-action" />
            <PageLink to="/about" text="Mer om mig" />
          </div>
          <figure className="home-img-portrait">
            <img src="/images/profile.webp" alt="Porträtt av Villiam Fagrelius" />
          </figure>
        </div>
      </section>
      <section className="home-overview home-section" aria-labelledby="overview-title">
        <div className="home-header">
          <p className="portfolio-kicker">Överblick</p>
          <h2 id="overview-title">Kod, erfarenhet och en rimlig mängd envishet</h2>
        </div>
        <div className="home-overview-grid">
          <article>
            <h3>Utveckling</h3>
            <p>Jag arbetar främst med C#, .NET, Entity Framework Core, React och TypeScript. Nya utmaningar är en del av det som gör utveckling roligt.</p>
            <PageLink to="/about" text="Min bakgrund som utvecklare" />
          </article>
          <article>
            <h3>Projekt</h3>
            <p>Efter examen fortsätter jag att bygga, bland annat ett rapportsystem i React och .NET och ett restaurangsystem med microservices i Blazor.</p>
            <PageLink to="/portfolio" text="Utforska projekten" />
          </article>
          <article>
            <h3>Bakgrund</h3>
            <p>Nästan tio år i restaurangbranschen har gett mig en gedigen grund i samarbete, problemlösning, ansvar och kundkontakt, även när tempot är högt.</p>
            <PageLink to="/journey" text="Följ min resa" />
          </article>
        </div>
      </section>
      <section className="home-featured home-section" aria-labelledby="featured-title">
        <div className="home-header">
          <p className="portfolio-kicker">På arbetsbänken</p>
          <h2 id="featured-title">Utvalda projekt</h2>
        </div>
        <ProjectArticles />
      </section>
      <section className="home-contact home-section" aria-labelledby="home-contact-title">
        <div className="section-head">
          <p className="portfolio-kicker">Kontakt</p>
          <h2 id="home-contact-title">En utvecklarroll, ett samarbete eller en kopp kaffe?</h2>
          <p>Jag är öppen för juniora utvecklarroller, samarbeten och samtal om system som kan fungera bättre.</p>
          <a className="portfolio-primary-action" href="mailto:villiam.fagrelius@gmail.com">Hör av dig</a>
        </div>
      </section>
    </main>
  );
}
