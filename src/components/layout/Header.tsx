import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <NavLink to="/" className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </NavLink>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        
    )
}