import {useState, useEffect, useRef} from "react";

function useHover () {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);
    

    function handleMouseEnter () {
        setHover(true);
    }

    function handleMouseLeave () {
        setHover(false);
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", handleMouseEnter);
        ref.current.addEventListener("mouseleave", handleMouseLeave);
    }, []);

    return [hover, ref];
}

export default useHover;