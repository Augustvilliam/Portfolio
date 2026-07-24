import { NavLink } from "react-router";
import { useTheme } from "../../hooks/useTheme";
import {Sun, Moon} from "lucide-react";

export default function Header() {

    const {theme, toggleTheme} = useTheme();
    const isDarkMode = theme === "dark";


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

            <div className="darkmode">
                <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Byt till ljust tema" : "Byt till mörkt tema"}
                aria-pressed={isDarkMode}
                title={isDarkMode ? "Byt till ljust tema" : "Byt till mörkt tema"}>
                {isDarkMode ? (
                        <Sun
                            aria-hidden="true"
                            size={22}
                            strokeWidth={2}
                        />
                    ) : (
                        <Moon
                            aria-hidden="true"
                            size={22}
                            strokeWidth={2}
                        />
                    )}
                    
                </button>
            </div>
        </header>

        
    )
}