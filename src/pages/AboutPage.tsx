import CvButton from "../components/Links/CvButton";
import PageLink from "../components/Links/PageLink";

export default function AboutPage() {
    return (
        <main className="about-page">
            <section className="about-hero" aria-labelledby="about-title">
                <p className="portfolio-kicker">Om mig</p>
                <h1 id="about-title">Från restauranggolv till webbapplikationer.</h1>
                <p>Kul att du vill veta mer om mig! Här finns människan bakom koden. Föredrar du ett traditionellt CV kan du ladda ner det också.</p>
                <CvButton />
            </section>
            <div className="about-content">
                <section className="about-section about-me" aria-labelledby="about-me-title">
                    <div className="about-section-content">
                        <p className="portfolio-kicker">Bakgrund</p>
                        <h2 id="about-me-title">Hej, jag är Villiam</h2>
                        <p>Jag är nyexaminerad webbutvecklare med inriktning mot ASP.NET. Jag bor i Falkenberg tillsammans med min sambo och våra två katter.</p>
                        <p>Innan jag bytte restaurangbranschen mot kod hade jag nästan tio år på Max Burgers bakom mig. Där började jag som medarbetare och arbetade mig upp till biträdande restaurangchef 2020.</p>
                    </div>
                    <div className="about-section-images">
                        <figure className="about-cat-tax"><img src="/images/cat-tax.jpg" alt="Mina katter hemma i Falkenberg" loading="lazy" /></figure>
                        <figure className="about-cat-tax"><img src="/images/cat-tax2.jpg" alt="En till bild av mina katter" loading="lazy" /></figure>
                    </div>
                    <div className="about-journey-link">
                        <p>Hela historien om mitt yrkesliv och vägen till utveckling finns på sidan om min resa.</p>
                        <PageLink to="/journey" text="Följ min yrkesresa" />
                    </div>
                </section>
                <section className="about-section about-development" aria-labelledby="about-development-title">
                    <p className="portfolio-kicker">Utveckling</p>
                    <h2 id="about-development-title">Nyfikenhet som driver arbetet framåt</h2>
                    <p>Numera lägger jag mycket tid på C# och React. Jag gillar att förstå hur delarna hänger ihop, lösa problem och fundera över varför något fungerade igår men inte idag.</p>
                    <p>Under utbildningen arbetade jag med .NET, Azure, Umbraco, React och agila grupparbeten. I mina egna projekt fortsätter jag att utforska webbapplikationer, från datamodeller till användarupplevelse.</p>
                    <PageLink to="/portfolio" text="Se vad jag bygger" />
                </section>
                <section className="about-section about-interests" aria-labelledby="about-interests-title">
                    <p className="portfolio-kicker">Utanför editorn</p>
                    <h2 id="about-interests-title">Gitarr, choklad och en och annan burgare</h2>
                    <p>När jag inte skriver kod spelar jag gärna nedstämd gitarr, gymmar, spelar datorspel och bakar det mesta som innehåller choklad. Jag umgås också med vänner och familj och åker på konserter med mamma.</p>
                    <p>Och ja, jag äter fortfarande på Max. Burgare är antagligen fortfarande min favoritmat.</p>
                </section>
                <section className="about-section about-note" aria-labelledby="about-note-title">
                    <p className="portfolio-kicker">Personligt på riktigt</p>
                    <h2 id="about-note-title">Plats för både ansvar och humor</h2>
                    <p>Jag trivs när det är högt i tak och man får vara sig själv. En personlig portfolio får gärna visa lite personlighet också.</p>
                    <p>Jag skulle beskriva mig själv som en snäll, kreativ person med nära till skratt. Det är en sida jag gärna tar med mig även i arbetet.</p>
                </section>
            </div>
        </main>
    );
}
