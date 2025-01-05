import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "../ApiHandlers/posts";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useProducts } from "../redux/slices/products";
import { useSelector } from "react-redux";

const Products = () => {
    const [data, setData] = useState(null),
        { setProductsState } = useProducts(),
        cachedProducts = useSelector(state => { return state.products });

    useEffect(() => { getData() }, []);
    const getData = async () => {
        if (cachedProducts) return setData(cachedProducts);
        const { success, response } = await getPosts();
        if (!success) toast.error("Failed to get the data.");
        setData(response);
        setProductsState(response);
    };

    if (!data) return <>Loading</>;
    return (
        <div className="px-4 py-2">
            <h1 className="font-medium text-base sm:text-lg mb-2">Post</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    data.map((i, j) => {
                        return (
                            <Link to={`/dynamic-routing/${i?.id}`} key={j} className="bg-white shadow p-4 rounded">
                                <h2 className="font-medium text-sm sm:text-base line-clamp-2">{i?.title}</h2>
                                <p className="line-clamp-3 mt-2">{i?.body}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;