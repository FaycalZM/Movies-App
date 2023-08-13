import React from 'react'
import useFetch from '../hooks/useFetch'

const Fetch = ({
    url,
    renderSuccess,
    loadingFallback = <h1>loading...</h1>,
    renderError = err => <pre>{JSON.stringify(err, null, 2)}</pre>
}) => {
    const {
        data,
        error,
        isLoading
    } = useFetch(url);
    if (isLoading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({data});

}

export default Fetch