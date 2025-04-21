import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);      
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [update, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await axios.get(url)
        setData(json.data); 
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error)
      } finally {
        // setLoading(false)
        setTimeout(() => setLoading(false), 500)
      }
    };

    fetchData();
  }, [url, update]);

  return { data, loading, error, forceUpdate };
};

export default useFetch;
