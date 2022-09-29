import { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import SignInput from '../utils/SignInput';
import validate from '../utils/signFormValidation';

//SCSS file for this is sign_form.scss

export default function Register() {
  const [values, setValues] = useState({ email:'', password:'', password2:'' });
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

    //if ok. can send request for registration
    createUser(values);
  }

  const createUser = async ({ email, password }) => {
    setGeneralError(null);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', user.user.uid), {
          email: values.email,
          password: values.password,
          timeStamp: serverTimestamp(),
      })
    } catch (error) {
      handleFailedLogIn(error.message);
      console.log('signup:', error.message); 
    }
      navigate('/');
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
          <DecorationLine text1={'Załóż konto'}/>
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
              <SignInput 
                label="Powtórz hasło" 
                name="password2" 
                type="password"
                value={values.password2}
                errorMessage={errorMessages?.password2}
                onChange={handleChange}
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
