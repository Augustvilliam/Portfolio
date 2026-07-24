import { FaLinkedin, FaGithub } from "react-icons/fa6"
import {PiMicrosoftOutlookLogo} from "react-icons/pi";

export default function Links () {
    return(
        <>
            <a href="https://www.linkedin.com/in/villiam-fagrelius-755716325/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/Augustvilliam" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
            <a href="mailto:willyp@hotmail.se" target="_blank" rel="noopener noreferrer"><PiMicrosoftOutlookLogo />Mail</a>
        </>
    )
}