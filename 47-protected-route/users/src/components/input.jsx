const Input = ({ name, value, label, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="email">{label}:</label>
      <input
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        className="form-control"
        type="text"
      />
    </div>
  );
};

export default Input;
