import React from 'react';
import { Link } from 'react-router-dom';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';

//SCSS file for this is sign_form.scss

export default function Login() {
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
          <form className='sign-section_form'>
            <div className='sign-section_inputs'>
              <SignInput />
              <SignInput />
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
