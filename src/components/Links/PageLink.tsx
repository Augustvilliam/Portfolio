import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { NavLink, type To } from "react-router";

type PageLinkProps = {
    to: To;
    text: string;
    icon?: ReactNode;
    className?: string;
};

export default function PageLink ({
    to,
    text,
    icon = <ArrowLeft aria-hidden = "true" />,
    className,
}: PageLinkProps) {
    return(
        <div className="home-cta">

        <NavLink to={to} className={className} >
            <span>{text}</span>
            {icon}
        </NavLink>
        </div>
    )
}