export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = false,
  error
}) {
  return (
    <label>
      {label}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <span style={{ color: 'red', fontSize: '0.8em' }}>{error}</span>}
    </label>
  );
}
