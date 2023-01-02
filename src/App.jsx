import "./App.scss";
import Password from "./components/Password";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordContextProvider from "./context/PasswordContext";

const App = () => {
  return (
    <PasswordContextProvider>
      <div className="container">
        <h2 className="title">Password Generator</h2>
        <Password />
        <PasswordGenerator />
      </div>
    </PasswordContextProvider>
  );
};

export default App;
