import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type == "INC") { return { counter: state.counter + 1 } }
    else if (action.type == "DEC") { return { counter: state.counter - 1 } };
    return state;
};

const UseReducer = () => {
    const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <>
            <button onClick={() => dispatch({ type: "INC" })} className="bg-black px-2 py-1 rounded text-white text-xs">Increment</button>
            <button onClick={() => dispatch({ type: "DEC" })} className="bg-black px-2 py-1 rounded text-white text-xs">Decrement</button>
            <br />
            {counter}
        </>
    );
};

export default UseReducer;