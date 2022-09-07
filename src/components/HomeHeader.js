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
        <div className='grid-container'>
            <div className='row header'>
                <div className='col-7 header-image'/>
                <div className='col-5 header-column'>
                    <section className='login-bar'>
                        <Link to={'/logowanie'} className='login-button'>Zaloguj</Link>
                        <Link to={'/rejestracja'} className='login-button'>Załóż konto</Link>
                    </section>
                    <nav>
                        <ul className='navigation-bar'>
                        {navigation.map(({ name, link, content }) => (
                            <li key={name} className='navigation-button'>
                                <HashLink to={link} smooth className='navigation-text'>{content}</HashLink> 
                            </li>
                        ))}
                        </ul>              
                    </nav>
                    <header className='header-box'>
                        <div className='header-text'>
                            <span>Zacznij pomagać!</span>
                            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                        </div>
                        <img src={decoration} className="header-box_image" alt='dekoracyjna linia'/>
                        <div  className='header-box_buttons'>
                            <Link to={'/logowanie'} className='header-box__button' >ODDAJ RZECZY</Link>
                            <Link to={'/logowanie'} className='header-box__button'>ZORGANIZUJ ZBIÓRKĘ</Link> 
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}