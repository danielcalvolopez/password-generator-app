import { createContext, useState } from "react";

export const PasswordSettingsContext = createContext(null);

const PasswordSettingsContextProvider = ({ children }) => {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const values = {
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  };

  return (
    <PasswordSettingsContext.Provider value={values}>
      {children}
    </PasswordSettingsContext.Provider>
  );
};

export default PasswordSettingsContextProvider;
