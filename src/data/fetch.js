import options from "./apiKey";




const fetchData = async (URL, setData) => {
    const response = await fetch(URL, options);
    const data = await response.json();
    setData(data);
}

const fetchImages = async (URL, setData) => {
    const response = await fetch(URL, options);
    const data = await response.json();
    setData(data.backdrops.slice(0, 12));
}

const fetchList = async (URL, setData) => {
    const response = await fetch(URL, options);
    const data = await response.json();
    setData(data.results);
}

const fetchCast = async (URL, setData) => {
    const response = await fetch(URL, options);
    const data = await response.json();
    setData(data.cast.slice(0,8));
}


export { fetchData, fetchImages, fetchList, fetchCast }