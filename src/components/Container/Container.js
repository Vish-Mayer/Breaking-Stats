import React from "react";
import "./Container.css";
import { useCharacter } from "../../hooks/useCharacter";
import { formatCard } from "../../helpers/formatCard";
import Card from "../Card/CardUI";

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
                <div className="container-fluid d-flex justify-content-center">
                  <div className="row">
                    {character &&
                      character.map((result, idx) => {
                        return (
                          <div className={formatCard(character.length)}>
                            <Card
                              title={result.name}
                              imgsrc={result.img}
                              nickname={`"${result.nickname}"`}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Container };
