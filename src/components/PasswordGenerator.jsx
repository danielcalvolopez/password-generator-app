import "./PasswordGenerator.scss";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Checkbox from "./UI/Checkbox";
import Slider from "./UI/Slider";

const PasswordGenerator = () => {
  return (
    <Card className="card-generator">
      <div className="character-length-container">
        <div className="character-length">
          <p>Character Length</p>
          <h1>10</h1>
        </div>
        <Slider />
      </div>

      <div className="checkboxes">
        <Checkbox label="Include Uppercase Letters" />
        <Checkbox label="Include Lowercase Letters" />
        <Checkbox label="Include Numbers" />
        <Checkbox label="Include Symbols" />
      </div>

      <Card className="strength">
        <p>STRENGTH</p>
        <div>
          <h2>MEDIUM</h2>
        </div>
      </Card>

      <Button>Generate</Button>
    </Card>
  );
};

export default PasswordGenerator;
