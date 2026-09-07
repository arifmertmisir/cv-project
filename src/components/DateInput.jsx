export default function DateInput({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
}) {
  return (
    <label className="mb-2">
      {label}
      <input
        className="rounded-lg ml-4 px-2 py-1 w-96 border border-solid border-gray-300"
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && (
        <span className="ml-3 text-red-500 text-sm font-bold">{error}</span>
      )}
    </label>
  );
}
