import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';

//SCSS file for this is sign_form.scss

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log("error:", error.message);
    }
  };

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
          <form className='sign-section_form' onSubmit={login}>
            <div className='sign-section_inputs'>
              <SignInput 
                label="Email" 
                name="email" 
                type="text" 
                // errorMessage={errorMessages?.email}
                onChange={(event) => {setLoginEmail(event.target.value);}}
              />
              <SignInput 
                label="Hasło" 
                name="password" 
                type="password"
                // errorMessage={errorMessages?.password}
                onChange={(event) => {setLoginPassword(event.target.value);}}
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
