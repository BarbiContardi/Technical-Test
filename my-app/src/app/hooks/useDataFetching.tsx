"use client"
import { useState, useEffect } from 'react';

const useDataFetching = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(result);
        setError(null);
      } catch (error) {
        setData(null);
        setError('Error al obtener datos');
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDataFetching;
