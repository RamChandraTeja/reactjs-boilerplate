import { useEffect, useState } from "react";

const UseEffect = () => {
    const [data, setData] = useState(null);

    useEffect(() => { getData() }, []);
    const getData = async () => {
        await fetch("https://dummyjson.com/users").then(async data => {
            setData((await data.json())?.users);
        }).catch(err => {
            console.log(err);
            setData("err");
        });
    };

    if (!data) return <>Loading...</>
    if (data == "err") return <>Error fetching data.</>
    return (
        data.map((i, j) => { return <div key={j}>{i.username}</div> })
    );
};

export default UseEffect;