import { Link } from 'react-router-dom';

export default function SignBar() {

    return (
        <section className='login-bar'>
            <Link to={'/logowanie'} className='login-button'>Zaloguj</Link>
            <Link to={'/rejestracja'} className='login-button'>Załóż konto</Link>
        </section>
    );
}