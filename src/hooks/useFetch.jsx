import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Set initial loading state to true
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching starts
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message); // Set error message to actual error
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
