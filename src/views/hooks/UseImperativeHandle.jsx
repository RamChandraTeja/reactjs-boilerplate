import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const UseImperativeHandle = () => {
    const compRef = useRef();

    return (
        <>
            <button onClick={() => { compRef.current.changeText() }}>Change Text</button>
            <ChildComponent ref={compRef} />
        </>
    );
};

export default UseImperativeHandle;

const ChildComponent = forwardRef((props, ref) => {
    const [state, setState] = useState(true);

    useImperativeHandle(ref, () => ({
        changeText() {
            setState(!state);
        }
    }));

    return (
        <div>{state ? 'Hello' : 'Bye'} World</div>
    );
});