export default function SignInput({
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
      <label className='sign-input_box'>
          {label}
            <input
              id={name}
              className={`sign-input_field ${errorMessage ? "error-border" : ""}`}
              name={name}
              type={type}
              value={value.trim()}
              onChange={handleChange}
            />
            {errorMessage && <span className="error-message">{' '}{errorMessage}</span>}
      </label>
  )
}
