function InputField({ label, type, placeholder, value, onChange, error, name }) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;