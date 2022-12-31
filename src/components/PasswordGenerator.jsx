import { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Checkbox from "./UI/Checkbox";
import Slider from "./UI/Slider";
import "./PasswordGenerator.scss";

const PasswordGenerator = () => {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <Card className="card-generator">
      <Slider />
      <div className="checkboxes">
        <Checkbox
          value={includeUppercase}
          onChange={() => {
            setIncludeUppercase(true);
          }}
          label="Include Uppercase Letters"
        />
        <Checkbox
          value={includeLowercase}
          onChange={() => {
            setIncludeLowercase(true);
          }}
          label="Include Lowercase Letters"
        />
        <Checkbox
          value={includeNumbers}
          onChange={() => {
            setIncludeNumbers(true);
          }}
          label="Include Numbers"
        />
        <Checkbox
          value={includeSymbols}
          onChange={() => {
            setIncludeSymbols(true);
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
