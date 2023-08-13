import React, { useState, useEffect } from "react";
import options from '../data/apiKey'


export default function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(
        () => {
            if (!url) return;
            fetch(url, options)
                .then(resposne => resposne.json())
                .then(result => setData(result.results))
                .then(() => setIsLoading(false))
                .catch(setError)
        }, [url]
    );

    return [
        data, error, isLoading
    ]
}