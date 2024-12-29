import { responseMaker } from "../lib/helper";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) return responseMaker({ success: false, response: null })
    const data = await res.json();
    return responseMaker({ success: true, response: data });
};

export const getPost = async id => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return responseMaker({ success: false, response: null })
    const data = await res.json();
    return responseMaker({ success: true, response: data });
};