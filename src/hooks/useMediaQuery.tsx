import {useEffect, useState} from "react";

export default function useMediaQuery(query: string) {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
}
