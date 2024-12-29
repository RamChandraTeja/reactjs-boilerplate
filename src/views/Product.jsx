import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../ApiHandlers/posts";

const Product = () => {
    const [data, setData] = useState(null),
        { id } = useParams(),
        navigate = useNavigate();

    useEffect(() => { getData() }, [id]);
    const getData = async () => {
        const { success, response } = await getPost(id);
        if (!success) navigate("/404", { replace: true })
        setData(response);
    };

    if (!data) return <>Loading...</>;

    return (
        <div className="px-4 py-2">
            <h1 className="font-medium text-base sm:text-lg mb-2">Posts</h1>
            <div className="bg-white shadow p-4 rounded">
                <h2 className="font-medium text-sm sm:text-base line-clamp-2">{data?.title}</h2>
                <p className="line-clamp-3 mt-2">{data?.body}</p>
            </div>
        </div>
    );
};

export default Product;