export default function Input( {label, value, onChange, disabled } ) {
    return (
        <label>
            {label}
            <input type={label.includes('Date') ? 'date' : 'text'} value={value} onChange={onChange} disabled={disabled}  />
        </label>
    );

}