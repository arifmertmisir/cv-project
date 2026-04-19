export default function DateInput({
  label,
  name,
  value,
  onChange,
  required = false,
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
    </label>
  );
}
