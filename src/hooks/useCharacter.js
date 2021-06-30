import { useEffect, useState } from "react";

const useCharacter = () => {
  const [characterName, setCharacterName] = useState(null);
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const url = `https://www.breakingbadapi.com/api/characters?name=${characterName}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [characterName, url]);

  const setData = data => {
    if (data.length === 0) {
      setCharacter(null);
    } else {
      setCharacter(data);
    }
  };

  return {
    setCharacterName,
    character,
    isLoading,
    error
  };
};

export { useCharacter };
