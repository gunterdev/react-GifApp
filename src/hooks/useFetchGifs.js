import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/FetchMethods";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
        .then(images => { 
            setTimeout(() => {
                setState({
                    data: images, 
                    loading: false
                })
            }, 5000);
            
        })
    }, [category])
    
    return state;
}