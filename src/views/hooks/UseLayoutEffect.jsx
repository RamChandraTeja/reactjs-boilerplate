import { useEffect, useLayoutEffect, useRef } from "react"

const UseLayoutEffect = () => {
    const devRef = useRef(null);

    useEffect(() => {
        devRef.current.innerHTML = "MODIFIED";
    }, []);

    useLayoutEffect(() => {
        console.log(devRef.current.innerHTML)
    }, []);

    return (
        <div ref={devRef}>INITIAL</div>
    );
};

export default UseLayoutEffect;