import { createContext, useMemo, useState } from "react";

export const PasswordContext = createContext();

const PasswordContextProvider = ({ children }) => {
  const [characterLength, setCharacterLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("P4$5W0rD!");

  const values = {
    characterLength,
    setCharacterLength,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    password,
    setPassword,
  };

  const includeValues = useMemo(
    () => (
      {
        includeUppercase,
        setIncludeUppercase,
        includeLowercase,
        setIncludeLowercase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
      },
      [includeUppercase, includeLowercase, includeNumbers, includeSymbols]
    )
  );

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
