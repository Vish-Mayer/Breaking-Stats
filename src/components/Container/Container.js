import React from "react";
import "./Container.css";
import { useCharacter } from "../../hooks/useCharacter";
import { formatCard } from "../../helpers/formatCard";
import Card from "../Card/CardUI";

const Container = () => {
  const [localSearch, setLocalSearch] = React.useState("");

  const { error, isLoading, character, setUserSearch } = useCharacter(null);

  const handleSubmit = e => {
    e.preventDefault();
    setUserSearch(localSearch);
  };

  return (
    <div className="Container">
      <form className="pt-5" onSubmit={handleSubmit}>
        <label className="pr-2">
          <input
            className="text-input form-control form-control-lg pr-5"
            type="text"
            value={localSearch}
            placeholder="Enter a character"
            onChange={e => setLocalSearch(e.target.value)}
          />
        </label>
        <input className="submit btn btn-dark" type="submit" value="Submit" />
      </form>

      <div>
        {isLoading ? (
          <h4 className="loading">Loading...</h4>
        ) : (
          <div>
            {error && <div>{error.message}</div>}

            {character === null ? (
              <h4 style={{ color: "red" }}>Could not find character</h4>
            ) : (
              <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                  {character &&
                    character.map((result, idx) => {
                      return (
                        <div className={formatCard(character.length)} key={idx}>
                          <Card
                            className="card-display"
                            title={result.name}
                            imgsrc={result.img}
                            nickname={`"${result.nickname}"`}
                            status={result.status}
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
    </div>
  );
};

export { Container };
