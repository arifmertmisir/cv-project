export default function DateInput({
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
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <span style={{ color: 'red', fontSize: '0.8em' }}>{error}</span>}
    </label>
  );
}
