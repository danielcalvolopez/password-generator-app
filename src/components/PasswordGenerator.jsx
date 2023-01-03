import { useContext } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Checkbox from "./UI/Checkbox";
import Slider from "./UI/Slider";
import "./PasswordGenerator.scss";
import { PasswordSettingsContext } from "../context/PasswordSettingsContext";
import { PasswordContext } from "../context/PasswordContext";
import { CharacterLengthContext } from "../context/CharacterLengthContext";

const PasswordGenerator = () => {
  const {
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  } = useContext(PasswordSettingsContext);

  const { setPassword } = useContext(PasswordContext);

  const { characterLength } = useContext(CharacterLengthContext);

  const handleOnSubmit = () => {
    let length;
    let includeLowercase;
    let includeUppercase;
    let includeNumbers;
    let includeSymbols;
    if (strength === "Too weak!") {
      length = 4;
      includeLowercase = true;
      includeUppercase = true;
      includeNumbers = false;
      includeSymbols = false;
    } else if (strength === "Weak") {
      length = 6;
      includeLowercase = true;
      includeUppercase = true;
      includeNumbers = false;
      includeSymbols = false;
    } else if (strength === "Medium") {
      length = 10;
      includeLowercase = true;
      includeUppercase = true;
      includeNumbers = true;
      includeSymbols = false;
    } else if (strength === "Strong") {
      length = 15;
      includeLowercase = true;
      includeUppercase = true;
      includeNumbers = true;
      includeSymbols = true;
    } else {
      length = 6;
      includeLowercase = true;
      includeUppercase = true;
      includeNumbers = false;
      includeSymbols = false;
    }
    let characters = "abcdefghijklmnopqrstuvwxyz";

    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumbers) {
      characters += "0123456789";
    }

    if (includeSymbols) {
      characters += "|!@·#$%^&*()/=?¿'¡^`+*´ç¨Ç[]}{_-.:,;<>ºª";
    }

    let password = "";

    for (let i = 0; i < characterLength; i++) {
      const randomChar =
        characters[Math.floor(Math.random() * characters.length)];

      password += randomChar;
    }
    setPassword(password);
  };

  return (
    <Card className="card-generator">
      <Slider />
      <div className="checkboxes">
        <Checkbox
          value={includeUppercase}
          onChange={() => {
            setIncludeUppercase(!includeUppercase);
          }}
          label="Include Uppercase Letters"
        />
        <Checkbox
          value={includeLowercase}
          onChange={() => {
            setIncludeLowercase(!includeLowercase);
          }}
          label="Include Lowercase Letters"
        />
        <Checkbox
          value={includeNumbers}
          onChange={() => {
            setIncludeNumbers(!includeNumbers);
          }}
          label="Include Numbers"
        />
        <Checkbox
          value={includeSymbols}
          onChange={() => {
            setIncludeSymbols(!includeSymbols);
          }}
          label="Include Symbols"
        />
      </div>

      <Card className="strength">
        <p>Strength</p>
        <div className="password-strength">
          <h2>Medium</h2>
          <div className="password-strength-level">
            <div className="password-strength-level-icon" />
            <div className="password-strength-level-icon" />
            <div className="password-strength-level-icon" />
            <div className="password-strength-level-icon" />
          </div>
        </div>
      </Card>

      <Button onClick={handleOnSubmit}>Generate</Button>
    </Card>
  );
};

export default PasswordGenerator;
