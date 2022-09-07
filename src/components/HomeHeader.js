import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import image from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';

export default function HomeHeader(){
    const navigation = [
        {
            name: 'home',
            link: '/',
            content: 'Start'
        },
        {
            name: 'whats_going_on',
            link: '/whats_going_on',
            content: 'O co chodzi?'
        },
        {
            name: 'about_us',
            link: '/about_us',
            content: 'O nas'
        },
        {
            name: 'fundations',
            link: '/fundations',
            content: 'Fundacja i organizacje'
        },
        {
            name: 'contact',
            link: '/contact',
            content: 'Kontakt'
        },
    ]

    return (
        <div className='grid-container'>
            <div className='row'>
                <div className='col-5'>
                    <img src={image} alt='stare rzeczy w kartonie'/>
                </div>
                <div className='col-6'>
                    <section>
                        <Link to={'/logowanie'}>Zaloguj</Link>
                        <Link to={'/rejestracja'}>Załóż konto</Link>
                    </section>
                    <section>
                        <nav>
                            <input class="menu-btn" type="checkbox" id="menu-btn" />
                            <label class= "menu-icon" for="menu-btn"><span class="navicon"></span></label>
                            <ul class="menu">
                            {navigation.map(({ name, link, content }) => (
                                <li key={name}>
                                    <Scroll to={link} spy={true} smooth={true} duration={800}>{content}</Scroll> 
                                </li>
                            ))}
                            </ul>              
                        </nav> 
                    </section>
                    <section>
                        <header>
                            <span>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</span>
                            <img src={decoration} alt='dekoracyjna linia'/>
                            <div>
                              <button><Link to={'/logowanie'}>ODDAJ RZECZY</Link></button>
                              <button><Link to={'/logowanie'}>ZORGANIZUJ ZBIÓRKĘ</Link></button>  
                            </div>
                        </header>    
                    </section>
                </div>
            </div>
        </div>
    );
}