import { useRef } from "react";


const UseRef = () => {
    const btnRef = useRef(null);

    return (
        <>
            <button ref={btnRef} onClick={() => {
                btnRef.current.style.backgroundColor = "crimson"
            }}>Click Me</button>
        </>
    );
};

export default UseRef;