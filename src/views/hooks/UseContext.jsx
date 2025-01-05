import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const Store = createContext(null);

const UseContext = () => {
    const [state, setState] = useState("");

    return (
        <Store.Provider value={{ state, setState }}>
            <EmitComponent />
            <CatchComponent />
        </Store.Provider>
    );
};

export default UseContext;

const EmitComponent = () => {
    const { setState } = useContext(Store);
    return (
        <div className="border rounded max-w-fit p-2">
            <div className="font-medium max-w-fit">Component 1</div>
            <input type="text" placeholder="Type here..." onChange={e => setState(e.target.value)} />
        </div>
    );
};

const CatchComponent = () => {
    const { state } = useContext(Store);
    return (
        <div className="border rounded max-w-fit p-2">
            <div className="font-medium max-w-fit">Component 2</div>
            {state || "Type something in the input in component 1"}
        </div>
    );
};