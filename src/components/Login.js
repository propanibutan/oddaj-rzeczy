import React, { useState } from 'react';
import { Link, useNavigate as navigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';
import validate from './signFormValidation';

//SCSS file for this is sign_form.scss

export default function Login({ onLoggedIn }) {
  const [values, setValues] = useState({ email:'', password:'', password2:'' });
  const [errorMessages, setErrorMessages] = useState(null);
  const [generalError, setGeneralError] = useState(null);

  // const navigate = useNavigate();

  //move value to state and put in right key
  function handleChange(event) {
    const { name, value } = event.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    //first validation
    
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
    if (errorMessages) { return; }

    //if ok. can send request for login
    loginUser(values.email, values.password);
  }

  const loginUser = async ({ email, password }) => {
    setGeneralError(null);
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        handleSuccessfulLogIn();
        console.log('loggedin:', user);
    } catch (error) {
      handleFailedLogIn(error.message);
      console.log('signin:', error.message); 
  }
    navigate('/');
  }

  function handleSuccessfulLogIn(user) {
    onLoggedIn(user);
  }

  function handleFailedLogIn(errorMessage) {
    setGeneralError(errorMessage);
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
          {generalError && ( <span>{generalError}</span> )}
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
