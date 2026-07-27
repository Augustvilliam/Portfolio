import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

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

            <NavLink to="/portfolio">
              Se mina projekt här
              <ArrowLeft aria-hidden="true" />
            </NavLink>

            <NavLink to="/about" >
              Mer om mig här
              <ArrowLeft  aria-hidden="true"/>
            </NavLink>
          </div>

          <div className="home-img-portrait">
            <img 
              src="/images/profile.webp"
              alt="portrait"
            />

          </div>

        </div>

      </section>
    </main>
  )
}