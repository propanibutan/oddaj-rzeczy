import React from 'react';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';

//SCSS file for this is sign_form.scss

export default function Register() {
  return (
    <div>
      <SignBar />
      <NavigationBar />
      <section className='register-section'>
        <div>
          <span>Załóż konto</span>
          <DecorationLine />
        </div>
        <div>
          <form>
            <div>
              <SignInput />
              <SignInput />
              <SignInput />
            </div>
            <div>
                <input type="submit" value="Zaloguj sie"/>
                <input type="submit" value="Załóż konto"/>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
