import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

//styles for this are in sign-bar.scss file
export default function SignedBar() {
  function clear() {
    localStorage.clear();
  }

  function refresh() {
    window.location.reload(false);
  }

  const logout = async () => {
      await signOut(auth);
      clear();
      refresh();
  };

  return (
    <section className='login-bar'>
      <span className='login-hello'>Cześć{' '}{localStorage?.email}!</span>
      <Link to={'/oddaj-rzeczy'} className='login-button'>Oddaj rzeczy</Link>
      <Link to={'/wylogowano'} onClick={logout }className='login-button'>Wyloguj</Link>
    </section>
  )
}
