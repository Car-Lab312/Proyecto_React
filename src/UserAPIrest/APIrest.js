import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState([]);
    // const imageUrl = `https://digimon.shadowsmith.com/img/.jpg`;

    useEffect(() => {
      fetch("https://digimon-api.vercel.app/api/digimon")
      .then((Response) => Response.json())
      .then((data) => setData(data));
    }, []);
    return { data}
}