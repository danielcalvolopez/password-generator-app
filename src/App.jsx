import "./App.scss";
import Password from "./components/Password";
import PasswordGenerator from "./components/PasswordGenerator";

const App = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">Password Generator</h2>
        <Password />
        <PasswordGenerator />
      </div>
    </>
  );
};

export default App;
