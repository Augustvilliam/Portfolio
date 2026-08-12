import PageLink from "../components/Links/PageLink";

export default function AboutPage() {
    return (
        <section>
            <h1>WOW! Tjena, hej!</h1>
            <p>kul att du vill veta mer om mig, men om du gillar ett tradionellt cv så trycker du på knappen nedanför</p>
            <a href="/cv.pdf" download>Ladda ner CV</a>

            <section className="about-content"> 
                <p>
                    Hejsan hoppsan lillebror!
                </p>


                <section className="about-section">
                    <h2>Vem är jag då?</h2>

                    <p>Jag heter villiam och jag är en nyexaminerad webbutvecklare med inriktning på ASP.NET. Jag bor i den lilla staden Falkenberg tillsammans med min sambo och våra två katter.</p>

                    <div>
                        <img alt="Kattskatt" src="cat-tax.jpg" className=""></img>
                    </div>

                    <p>Innan jag bytte restaurangbranschen till kod-knagglare hade jag nästan 10 år på Max Burgers. Där började jag som en simpel medarbetare, och jobbade mig upp hela vägen till biträdande restaurangchef 2020. Numera spenaderar jag istället massa tid på C# och React och funderar själv på hur saker och ting fungerade ena dagen men inte nästa, och hur en snart 30-åring inte kan stava ordentligt</p>
                    
                    <p>
                        om du vill veta mer om mitt yrkesliv så kan ni klicka nedaför, eller i header, vad som går bra
                    </p>

                    <PageLink to="/journy" text="Se mitt yrkesliv här" />

                </section>

                <section>
                    <h2> NäR dU iNtE sKriVeR Kod dÅ?</h2>

                    <p>
                        När jag inte sittar mig tom i huvudet så gör jag ungefär 10000 andra saker, bland annat att spelar jag brutalt nedstämd gitarr, spelar datorspel, bakar allt som har chocklad i sig, umgås med vänner och familj, åker på på konserter med mamma och förtränger att jag snart fyller 30. 
                        <br/><br/> och ja, jag äter fortfarnade Max, och ja, burgare är antagligen min favoritmax.
                    </p>

                    <p></p>
                </section>

            </section>

            <div>
                <p>Vissa av er som tagit er hit kanske lyfter på ögonbrynen och tänker "Vafan är detta för något?" eller  "Detta känns inte så seriöst?"</p>
                <p>Men det är så jag gillar det. Jag gillar när det är högt i tak, när man får vara sig själv och när man gör en liten hobby portfölj så kanske man inte behöver vara så fyrkantig. Jag skulle säga att jag är en rolig, snäll och kreativ person, och det tror jag de flesta i min närhet eller som har jobbat med mig kan intyga, och detta är ett av sätten man kan visa det</p>
            </div>

        </section>
    )
}