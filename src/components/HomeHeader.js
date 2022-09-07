import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import image from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';

export default function HomeHeader(){

    const navigation = [
        {
            name: 'home',
            link: '/#',
            content: 'Start'
        },
        {
            name: 'whats_going_on',
            link: '/#whats_going_on',
            content: 'O co chodzi?'
        },
        {
            name: 'about_us',
            link: '/#about_us',
            content: 'O nas'
        },
        {
            name: 'fundations',
            link: '/#fundations',
            content: 'Fundacja i organizacje'
        },
        {
            name: 'contact',
            link: '/#contact',
            content: 'Kontakt'
        },
    ]

    return (
        <div className='grid-container header'>
            <div className='row header'>
                <div className='col-7 header-image'/>
                <div className='col-5'>
                    <section className='login-bar'>
                        <Link to={'/logowanie'} className='login-button'>Zaloguj</Link>
                        <Link to={'/rejestracja'} className='login-button'>Załóż konto</Link>
                    </section>
                    <nav className='navigation-bar'>
                        <ul>
                        {navigation.map(({ name, link, content }) => (
                            <li key={name}>
                                <HashLink to={link} smooth>{content}</HashLink> 
                            </li>
                        ))}
                        </ul>              
                    </nav>
                    <header>
                        <span>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</span>
                        <img src={decoration} alt='dekoracyjna linia'/>
                        <div>
                            <button><Link to={'/logowanie'}>ODDAJ RZECZY</Link></button>
                            <button><Link to={'/logowanie'}>ZORGANIZUJ ZBIÓRKĘ</Link></button>  
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}