import React from "react";
import { useCharacter } from "../../hooks/useCharacter";

const Container = () => {
  const [userActive, setUserActive] = React.useState(false);
  const [localSearch, setLocalSearch] = React.useState("");

  const { error, isLoading, character, setCharacterName } = useCharacter(null);

  const handleSubmit = e => {
    e.preventDefault();
    setUserActive(true);
    setCharacterName(localSearch);
    setLocalSearch("");
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            className="text-input"
            type="text"
            value={localSearch}
            placeholder="Enter a character"
            onChange={e => setLocalSearch(e.target.value)}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>

      {!userActive ? (
        <h4>Search for a BB character</h4>
      ) : (
        <div>
          {character === null ? (
            <h4 style={{ color: "red" }}>Could not find character</h4>
          ) : (
            <div>
              {error && <div>{error.message}</div>}

              {isLoading ? (
                <h4>Loading...</h4>
              ) : (
                character &&
                character.map((result, idx) => {
                  return (
                    <ul key={idx}>
                      <li>{result.name}</li>
                      <img src={result.img} />
                    </ul>
                  );
                })
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Container };
