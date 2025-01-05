import { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
    const [state, setState] = useState(false);
    const numbers = [0, 1, 2, 3, 4, 5];

    const getSmallestNumber = () => {
        // This will run everytime the component remount.
        console.log("COMPUTED getSmallestNumber()");
        return Math.min(...numbers);
    };

    const getLargestNumber = () => {
        // This wont run everytime the component remount.
        console.log("COMPUTED getLargestNumber()");
        return Math.max(...numbers);
    },
        largestNumber = useMemo(() => getLargestNumber(), []);


    return (
        <>
            <button onClick={() => setState(!state)} style={{ backgroundColor: state ? 'red' : 'crimson' }}>Click Me</button>
            <div><b>Largest:</b> {largestNumber}</div>
            <div><b>Smallest:</b> {getSmallestNumber()}</div>
        </>
    );
};

export default UseMemo;