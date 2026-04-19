export default function EmailInput({
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
        type="email"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
