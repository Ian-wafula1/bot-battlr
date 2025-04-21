import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);      
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await axios.get(url)
        setData(json.data); 
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
