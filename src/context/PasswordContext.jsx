import { createContext, useState } from "react";

export const PasswordContext = createContext(null);

const PasswordContextProvider = ({ children }) => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [passwordHasChanged, setPasswordHasChanged] = useState(false);

  const values = {
    password,
    setPassword,
    passwordHasChanged,
    setPasswordHasChanged,
  };

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContextProvider;
