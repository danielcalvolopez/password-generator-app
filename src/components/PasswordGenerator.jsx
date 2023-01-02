import { useContext, useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Checkbox from "./UI/Checkbox";
import Slider from "./UI/Slider";
import "./PasswordGenerator.scss";
import { PasswordSettingsContext } from "../context/PasswordSettingsContext";

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

      <Button>Generate</Button>
    </Card>
  );
};

export default PasswordGenerator;
