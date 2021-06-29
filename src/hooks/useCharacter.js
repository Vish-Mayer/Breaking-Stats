import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useCharacter = characterName => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  const url = `https://www.breakingbadapi.com/api/characters?name=${characterName}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        const data = await response.json();
        setCharacter(data);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    character,
    isLoading,
    error
  };
};

export { useCharacter };
