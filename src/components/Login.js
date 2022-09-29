import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';
import validate from '../utils/signFormValidation.js';

//SCSS file for this is sign_form.scss
export default function Login() {
  const [values, setValues] = useState({ email:'', password:'' });
  const [errorMessages, setErrorMessages] = useState(null);
  const [generalError, setGeneralError] = useState(null);
  const navigate = useNavigate();

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

    //if ok. try sign user
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('email', user.email);
        localStorage.setItem('id', user.uid);
        navigate('/');
        window.location.reload(false);
    })
    .catch(error => {setGeneralError("Podano niewłaściwe dane.")})
  }

  return (
    <div className='grid-container'>
      <SignBar />
      <NavigationBar />
      <section className='sign-section'>
        <div className='sign-section_title__box'>
          <DecorationLine text1={'Zaloguj się'}/>
        </div>
        <div>
          {generalError && ( <span className='general-error'>{generalError}</span> )}
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
