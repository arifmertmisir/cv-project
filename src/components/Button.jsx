export default function Button({ label, onClick, disabled }) {
  return (
    <button
      className="hover:bg-lime-800 cursor-pointer rounded-lg px-4 py-2 ml-3 mt-0.5 text-sm font-bold text-sky-50 bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-lime-600"
      name={label}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
