import { useState, useEffect } from "react";
import { StarshipsResponse } from "../types/StarshipsResponse";
import { API_BASE_URL } from "../constants";

interface UseStarshipsResult {
    data: StarshipsResponse | null;
    isLoading: boolean;
    error: string | null;
  }

export const useStarships = (page: number): UseStarshipsResult => {
  const [data, setData] = useState<StarshipsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true); 
    setError(null); 

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/starships/?page=${page}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result: StarshipsResponse = await response.json();

        setData(result);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unexpected error occurred.";
        setError(errorMessage);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [page]);

  return { data, isLoading, error };
}
