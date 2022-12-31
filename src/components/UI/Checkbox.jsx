import "./Checkbox.scss";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          value={value}
          onChange={onChange}
          className="checkbox"
          type="checkbox"
        />
        <p>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;
