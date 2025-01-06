import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setDigimons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch("https://digi-api.com/api/v1/digimon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos. ");
        }
        return response.json();
      })
      .then((data) => {
        setDigimons(data.content);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, []);
    return { data }
  }