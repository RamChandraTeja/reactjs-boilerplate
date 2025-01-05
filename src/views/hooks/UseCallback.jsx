import { useState, useCallback, useEffect } from "react";

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);

    // This callback is memoized and doesn't rerender component on call
    const incrementCount = useCallback(() => { setCount(prevCount => prevCount + 1) }, []);

    // This one isn't memoized and gets recreated on every render.
    const decrementCount = () => { setCount(prevCount => prevCount - 1) };

    useEffect(() => { console.log("COMPUTED incrementCount()") }, [incrementCount])
    useEffect(() => { console.log("COMPUTED decrementCount()") }, [decrementCount])

    return (
        <>
            <button className="block" onClick={() => incrementCount()}>INC</button>
            <button className="block" onClick={() => decrementCount()}>DEC</button>
            {count}
        </>
    );
};

export default UseCallbackExample;