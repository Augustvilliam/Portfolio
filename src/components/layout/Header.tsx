import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <NavLink className="header-logo" to="/">
                <img src="/images/logo.webp" alt="Logo" />
            </NavLink>

            <nav className="header-nav">

                <ul className="header-links">

                    <li className="header-link-item">

                        <NavLink className="header-link" to="/" end>
                            Hem
                        </NavLink>

                    </li>

                    <li className="header-link-item">

                        <NavLink className="header-link" to="/about">
                            Om mig
                        </NavLink>

                    </li>

                    <li className="header-link-item">

                        <NavLink className="header-link" to="/portfolio">
                            Portfolio
                        </NavLink>

                    </li>

                    <li className="header-link-item">

                        <NavLink className="header-link" to="/journy">
                            Resa
                        </NavLink>

                    </li>

                    <li className="header-link-item">

                        <NavLink className="header-link" to="/friends">
                            Mina Vänner
                        </NavLink>

                    </li>


                </ul>

            </nav>


        </header>

        
    )
}