import React from "react";

import { useCallback, useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import axios from "axios";

const Container = () => {
  const { isLoading, character } = useCharacter("Walter+White");

  return (
    <div className="Container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        character && (
          <ul>
            <li>{character.name}</li>
            <li>
              <img src={character.img} alt="new" />
            </li>
          </ul>
        )
      )}
    </div>
  );
};

export { Container };
