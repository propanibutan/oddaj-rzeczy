import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useState } from 'react';

//styles for this are in sign-bar.scss file
export default function SignedBar() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
      await signOut(auth);
  };

  return (
    <section className='login-bar'>
      <span className='login-hello'>Cześć{' '}{user?.email}!</span>
      <Link to={'/oddaj-rzeczy'} className='login-button'>Oddaj rzeczy</Link>
      <Link to={'/wylogowano'} onClick={logout }className='login-button'>Wyloguj</Link>
    </section>
  )
}
