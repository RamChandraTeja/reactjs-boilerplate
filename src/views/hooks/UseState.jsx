import { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter + 1)} className="bg-black px-2 py-1 rounded text-white text-xs">Increment</button>
            <button onClick={() => setCounter(counter - 1)} className="bg-black px-2 py-1 rounded text-white text-xs">Decrement</button>
            <br />
            {counter}
        </>
    );
};

export default UseState;