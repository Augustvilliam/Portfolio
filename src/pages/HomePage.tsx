import PageLink from "../components/Links/PageLink";
import ContactLinks from "../components/Links/ContactLinks";
import ProjectArticles from "../components/Articles/ProjectArticles";

export default function HomePage() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="home-content">

          <div className="home-header">
            <p className="home-eyebrow">ASP .NET-Utvecklare</p>

            <h1>Jag bygger webbapplikationer där användarupplevelsen är i fokus!</h1>
          </div>
          

          <p className="home-intro">
            Hej! Kul att du har hittat hit. 
            <br />
            Jag heter Villiam och är en nyexaminerad webbutvecklare från EC utbildnings <a href="https://ecutbildning.se/nyheter/tycker-du-om-att-knacka-kod-valj-net/" target="_blank">"Webbutvecklare inom .NET". </a> Under skolan fick jag arbeta med blandannat .Net, Azure, Umbraco, React och Agila grupparbeten!
            <br /> 
            Innan jag började min resa som utvecklare hade jag 10 år av kneg inom restaurangbranschen, ett sommarjobb som vara något längre än en sommar. 
          </p>

          <div className="home-cta">

            <PageLink to="/portfolio" text="Se mina projekt här" />

            <PageLink to="/about" text="Mer om mig här" />

          </div>

          <div className="home-img-portrait">
            <img 
              src="/images/profile.webp"
              alt="portrait"
            />

          </div>

        </div>

      </section>

      <section className="home-overview">
        <div className="home-header">
          <p>Överblick</p>
          <h2>Kod, erfarenhet och en rimlig mängd envishet</h2>
        </div>

        <div className="home-overview-grid">
          <article>

            <h3>Utveckling</h3>
            <p>Jag arbetar främst med C#, .NET, Entity Framwork Core, React och TypeScript, men är alltid redo för en utmaning!</p>
            <PageLink to="/about" text="Mina kompetenser" />

          </article>

          <article>
            <h3>Projekt</h3>
            <p>Vad håller jag på med efter examen då? Jo jag har hållt mig sysselsatt med att blandannat bygga ett rapportsystem i React och .NET samt ett microservicebaserat restaurangsystem i Blazor!</p>
            <PageLink to="/portfolio" text="Utforska projekten" />

          </article>

          <article>

            <h3>Bakgrund</h3>
            <p>Nästan tio år av erfarenhet från restaurangbranschen har gett mig en gidigen grund i sammarbete, problemlösning, ansvar, stressiga perioder och kundkontakt</p>
            <PageLink to="/journy" text="Följ min resa" />

          </article>

          
        </div>

      </section>

      <section className="home-featured">

        <p>Utvalda projekt</p>

        <ProjectArticles />

      </section>

      <section className="home-contact">
        
        <div className="section-head">
          <p>Kontakt</p>
          <h2>Är du en rekryterare som letar efter en hungrig junior? eller kanske bara någon som vill snacka över en kopp kaffe?</h2>
          <p>Jag är öppen för juniora utvecklarroller, samarbeten och samtal om system som borde fungera bättre än vad de gör idag!</p>
        </div>        
      </section>


    </main>
  )
}