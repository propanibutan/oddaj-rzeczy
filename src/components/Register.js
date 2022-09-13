import React from 'react';
import { Link } from 'react-router-dom';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';

//SCSS file for this is sign_form.scss

export default function Register() {
  return (
    <div className='grid-container'>
      <SignBar />
      <NavigationBar />
      <section className='sign-section'>
        <div className='sign-section_title__box'>
          <span className='sign-section_title'>Załóż konto</span>
          <DecorationLine />
        </div>
        <div>
          <form className='sign-section_form'>
            <div className='sign-section_inputs'>
              <SignInput 
                label="Email" 
                name="email" 
                type="text" 
                // errorMessage={errorMessages?.email}
                // onChange={(event) => {setLoginEmail(event.target.value);}}
              />
              <SignInput 
                label="Hasło" 
                name="password" 
                type="password"
                // errorMessage={errorMessages?.password}
                // onChange={(event) => {setLoginPassword(event.target.value);}}
              />
              <SignInput 
                label="Powtórz hasło" 
                name="password" 
                type="password"
                // errorMessage={errorMessages?.password}
                // onChange={(event) => {setLoginPassword(event.target.value);}}
              />
            </div>
            <div className='sign-section_buttons'>
              <Link to={'/logowanie'} className='sign-section_button'>Zaloguj się</Link>
              <input type="submit" value="Załóż konto" className='sign-section_button'/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
