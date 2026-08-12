import PageLink from "../components/Links/PageLink";

export default function AboutPage() {
    return (
          <main className="about-page">

            <header className="about-hero">
                <h1>WOW! Tjena, hej!</h1>

                <p>
                    Kul att du vill veta mer om mig! Föredrar du däremot ett
                    traditionellt CV så hittar du det här nedanför.
                </p>

                <a
                    className="about-cv-link"
                    href="/cv.pdf"
                    download
                >
                    Ladda ner CV
                </a>
            </header>


            <article className="about-content">

                <p className="about-intro">
                    Hejsan hoppsan lillebror!
                </p>


                <section className="about-section about-me">
                    <div className="about-section-content">

                        <h2>Vem är jag då?</h2>

                        <p>
                            Jag heter Villiam och är en nyexaminerad webbutvecklare
                            med inriktning mot ASP.NET. Jag bor i den lilla staden
                            Falkenberg tillsammans med min sambo och våra två katter.
                        </p>

                        <p>
                            Innan jag bytte restaurangbranschen mot kodknackande hade
                            jag nästan tio år på Max Burgers bakom mig. Där började jag
                            som medarbetare och jobbade mig hela vägen upp till
                            biträdande restaurangchef 2020.
                        </p>

                        <p>
                            Numera spenderar jag istället orimligt mycket tid på C# och
                            React, samtidigt som jag funderar över varför något fungerade
                            igår men inte idag, och hur en snart 30-åring fortfarande
                            lyckas stava fel på ungefär vart tredje ord.
                        </p>

                    </div>

                    <div className="about-section-images">
                        <figure className="about-cat-tax">
                            <img
                                src="images/cat-tax.jpg"
                                alt="Mina två katter"
                            />
                        </figure>

                        <figure className="about-cat-tax">
                            <img
                                src="images/cat-tax2.jpg"
                                alt="Mina två katter"
                            />
                        </figure>
                    </div>

                    <div className="about-journey-link">
                        <p>
                            Vill du veta mer om mitt yrkesliv och hur jag hamnade
                            här så finns hela historien på sidan om min resa.
                        </p>

                        <PageLink
                            to="/journey"
                            text="Se mitt yrkesliv här"
                        />
                    </div>
                </section>


                <section className="about-section about-interests">
                    <h2>NäR dU iNtE sKriVeR Kod dÅ?</h2>

                    <p>
                        När jag inte stirrar mig tom i huvudet framför en editor gör
                        jag ungefär 10 000 andra saker. Bland annat spelar jag brutalt
                        nedstämd gitarr, spelar datorspel, bakar allt som innehåller
                        choklad, umgås med vänner och familj, åker på konserter med
                        mamma och förtränger att jag snart fyller 30.
                    </p>

                    <p>
                        Och ja, jag äter fortfarande på Max. Och ja, burgare är
                        antagligen fortfarande min favoritmat.
                    </p>
                </section>


                <aside className="about-note">
                    <h2>Men är det här verkligen seriöst?</h2>

                    <p>
                        Vissa av er som tagit er hit kanske lyfter på ögonbrynen och
                        tänker: "Vad fan är detta för något?" eller "Det här känns
                        inte särskilt seriöst?"
                    </p>

                    <p>
                        Men det är lite så jag vill ha det. Jag gillar när det är högt
                        i tak, när man får vara sig själv och tycker att en personlig
                        portfolio faktiskt får vara personlig.
                    </p>

                    <p>
                        Jag skulle beskriva mig själv som en rolig, snäll och kreativ
                        person, och det tror jag att de flesta som känner eller har
                        arbetat med mig skulle hålla med om. Det här är helt enkelt
                        ett av sätten jag kan visa den sidan också.
                    </p>
                </aside>

            </article>

        </main>
    )
}