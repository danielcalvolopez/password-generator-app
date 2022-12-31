import "./Checkbox.scss";

const Checkbox = ({ label }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input className="checkbox" type="checkbox" />
        <p>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;
