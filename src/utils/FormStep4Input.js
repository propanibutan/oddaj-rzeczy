export default function FormStep4Input( {
    label,
    name,
    type,
    value,
    errorMessage,
    onChange
}) {

  function handleChange(event) {
    if (typeof onChange === 'function') {
        onChange(event);
    }
  }

  return (
    <label className='form-step4_input_container'>
        {label}
        <input 
            id={name}
            className={`form-step4_input ${errorMessage ? "error-border" : ""}`}
            name={name}
            type={type} 
            value={value}
            onChange={handleChange}
        />
        {errorMessage && <span className="error-message">{' '}{errorMessage}</span>}
    </label>
  )
}
