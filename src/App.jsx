import "./App.scss";
import Password from "./components/Password";
import PasswordGenerator from "./components/PasswordGenerator";
import CharacterLengthContextProvider from "./context/CharacterLengthContext";
import PasswordContextProvider from "./context/PasswordContext";
import PasswordSettingsContextProvider from "./context/PasswordSettingsContext";

const App = () => {
  return (
    <PasswordContextProvider>
      <CharacterLengthContextProvider>
        <PasswordSettingsContextProvider>
          <div className="container">
            <h2 className="title">Password Generator</h2>
            <Password />
            <PasswordGenerator />
          </div>
        </PasswordSettingsContextProvider>
      </CharacterLengthContextProvider>
    </PasswordContextProvider>
  );
};

export default App;
