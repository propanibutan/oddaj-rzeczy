import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';
import validate from './signFormValidation';

//SCSS file for this is sign_form.scss

export default function Login({ generalError, onSubmit }) {
  const [values, setValues] = useState({ email:'', password:'', password2:'' });
  const [errorMessages, setErrorMessages] = useState(null);
  
  function handleChange(event) {
    const { name, value } = event.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);

    if (errorMessages) { return; }

    if (typeof onSubmit === 'function') {
        onSubmit(values);
    }
  }

  return (
    <div className='grid-container'>
      <SignBar />
      <NavigationBar />
      <section className='sign-section'>
        <div className='sign-section_title__box'>
          <span className='sign-section_title'>Zaloguj się</span>
          <DecorationLine />
        </div>
        <div>
          <form className='sign-section_form' onSubmit={handleSubmit}>
            <div className='sign-section_inputs'>
              <SignInput
                label="Email" 
                name="email" 
                type="text" 
                value={values.email}
                errorMessage={errorMessages?.email}
                onChange={handleChange}
              />
              <SignInput
                label="Hasło" 
                name="password" 
                type="password"
                value={values.password}
                errorMessage={errorMessages?.password}
                onChange={handleChange}
              />
            </div>
            <div className='sign-section_buttons'>
              <Link to={'/rejestracja'} className='sign-section_button'>Załóż konto</Link>
              <input type="submit" value="Zaloguj się" className='sign-section_button'/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
