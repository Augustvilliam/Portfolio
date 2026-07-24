import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(currentTheme =>
            currentTheme === "dark" ? "light" : "dark"
        );
    }

    return {
        theme,
        toggleTheme,
    };
}