


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
    }
};
export default options