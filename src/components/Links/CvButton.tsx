import { ArrowUpRight } from "lucide-react";

export default function CvButton() {
    return (
        <a className="journey-text-action" href="/cv/cv.pdf" download>
            Ladda ner CV <ArrowUpRight aria-hidden="true" size={17} />
        </a>
    )
}