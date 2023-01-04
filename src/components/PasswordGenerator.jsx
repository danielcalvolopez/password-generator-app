import { useContext, useEffect, useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Checkbox from "./UI/Checkbox";
import Slider from "./UI/Slider";
import "./PasswordGenerator.scss";
import { PasswordSettingsContext } from "../context/PasswordSettingsContext";
import { PasswordContext } from "../context/PasswordContext";
import { CharacterLengthContext } from "../context/CharacterLengthContext";
import passwordStrengths from "../utils/constants/passwordStrengths";
import passwordGenerator from "../utils/functions/passwordGenerator";
import passwordStrengthSteps from "../utils/functions/passwordStrengthSteps";

const PasswordGenerator = () => {
  const [passwordStrength, setPasswordStrength] = useState(
    passwordStrengths.medium
  );
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

  const { setPassword, setPasswordHasChanged } = useContext(PasswordContext);

  const { characterLength } = useContext(CharacterLengthContext);

  useEffect(() => {
    passwordStrengthSteps(
      characterLength,
      setPasswordStrength,
      passwordStrengths
    );
  }, [characterLength]);

  const handleOnSubmit = () => {
    passwordGenerator(
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
      characterLength,
      setPassword,
      setPasswordHasChanged
    );
  };

  return (
    <Card className="card-generator">
      <Slider />
      <div className="checkboxes">
        <Checkbox
          value={includeLowercase}
          onChange={() => {
            setIncludeLowercase((prev) => !prev);
          }}
          label="Include Lowercase Letters"
        />
        <Checkbox
          value={includeUppercase}
          onChange={() => {
            setIncludeUppercase((prev) => !prev);
          }}
          label="Include Uppercase Letters"
        />
        <Checkbox
          value={includeNumbers}
          onChange={() => {
            setIncludeNumbers((prev) => !prev);
          }}
          label="Include Numbers"
        />
        <Checkbox
          value={includeSymbols}
          onChange={() => {
            setIncludeSymbols((prev) => !prev);
          }}
          label="Include Symbols"
        />
      </div>

      <Card className="strength">
        <p>Strength</p>
        <div className="password-strength">
          <h2>{passwordStrength.name}</h2>
          {passwordStrength === passwordStrengths.tooWeak && (
            <div className="password-strength-level">
              <div className={passwordStrength.className} />
              <div className="password-strength-level-icon" />
              <div className="password-strength-level-icon" />
              <div className="password-strength-level-icon" />
            </div>
          )}
          {passwordStrength === passwordStrengths.weak && (
            <div className="password-strength-level">
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
              <div className="password-strength-level-icon" />
              <div className="password-strength-level-icon" />
            </div>
          )}
          {passwordStrength === passwordStrengths.medium && (
            <div className="password-strength-level">
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
              <div className="password-strength-level-icon" />
            </div>
          )}
          {passwordStrength === passwordStrengths.strong && (
            <div className="password-strength-level">
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
              <div className={passwordStrength.className} />
            </div>
          )}
        </div>
      </Card>

      <Button onClick={handleOnSubmit}>Generate</Button>
    </Card>
  );
};

export default PasswordGenerator;
