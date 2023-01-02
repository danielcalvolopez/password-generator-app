import { createContext, useState } from "react";

export const CharacterLengthContext = createContext(null);

const CharacterLengthContextProvider = ({ children }) => {
  const [characterLength, setCharacterLength] = useState(10);

  const values = { characterLength, setCharacterLength };

  return (
    <CharacterLengthContext.Provider value={values}>
      {children}
    </CharacterLengthContext.Provider>
  );
};

export default CharacterLengthContextProvider;
