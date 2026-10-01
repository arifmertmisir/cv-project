import type { JSX } from "react"

type TextInputProps = {
  label:string,
  name:string,
  value:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?:boolean,
  error?:string,
} 

export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
}:TextInputProps):JSX.Element {
  return (
    <label className="mb-2">
      {label}
      <input
        className="rounded-lg ml-4 px-2 py-1 w-96 border border-solid border-gray-300"
        type="text"
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
