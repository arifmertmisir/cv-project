export default function TextInput({
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
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
