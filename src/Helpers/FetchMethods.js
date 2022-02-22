export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TUYF4okpfyoge96SOBsc8Hs68vcjIH09&q=${category}&limit=25`;
    const response = await fetch( url );
    const {data} = await response.json();
    const gifs = data.map(gif => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized?.url
        }
    ))
    return gifs;
}