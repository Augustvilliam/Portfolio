import { NavLink } from "react-router";

export default function HeaderNav() {
    return(
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

                        <NavLink className="header-link" to="/journey">
                            Resa
                        </NavLink>

                    </li>

                </ul>

            </nav>
    )
}
