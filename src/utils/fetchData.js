export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '83199dea9dmsh8ea36af2be09b96p109363jsn9a5bf04dc4c0',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const youtubeOptions = {
    method: 'GET',
    params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
    headers: {
        'X-RapidAPI-Key': '83199dea9dmsh8ea36af2be09b96p109363jsn9a5bf04dc4c0',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}