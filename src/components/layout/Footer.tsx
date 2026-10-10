import ContactLinks from "../Links/ContactLinks";

export default function Footer() {

    
    return(
        <footer>
            <p>© Villiam Fagrelius. Webbutvecklare med fokus på .NET och moderna webbapplikationer.</p>

            <div className="footer-links">
                <ContactLinks />
            </div>
        </footer>
    )
}
