import { Link } from 'react-router-dom';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';

export default function Logout() {
  return (
    <div className='grid-container'>
      <SignBar />
      <NavigationBar />
      <section className='sign-section'>
        <span className='logout-section_title'>Wylogowanie nastąpiło pomyślnie!</span>
        <DecorationLine />
        <Link to={'/'} className='logout-section_button'>Strona główna</Link>
      </section>
    </div>
  )
}
