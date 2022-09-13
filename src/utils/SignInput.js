import React from 'react'

export default function SignInput({
  label, 
  name, 
  type,
  errorMessage,
  onChange 
}) {

  // function handleChange(event) {
  //   if (typeof onChange === 'function') {
  //       onChange(event);
  //   }
  // }

  return (
      <label className='sign-input_box'>
          {label}
            <input
              id={name}
              className='sign-input_field'
              name={name}
              type={type}
              // value={value.trim()}
              onChange={onChange}
            />
            {errorMessage && <span className="error-message">{' '}{errorMessage}</span>}
      </label>
  )
}
