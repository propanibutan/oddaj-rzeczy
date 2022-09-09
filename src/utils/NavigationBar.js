import React from 'react';
import { Link as Scroll } from 'react-scroll';

//NOTES: TU TRZEBA JEDNAK UŻYC SCROLLA ALE TO ZROBIE JAK JUŻ BEDE MIAŁA RESZTE LANDING PAGE. PAMIĘTAJ ŻEBY ODINSTALOWAĆ HASHA

export default function NavigationBar() {
    const navigation = [
        {
            name: 'home',
            link: 'home',
            content: 'Start'
        },
        {
            name: 'whats_going_on',
            link: 'whats_going_on',
            content: 'O co chodzi?'
        },
        {
            name: 'about_us',
            link: 'about_us',
            content: 'O nas'
        },
        {
            name: 'fundations',
            link: 'fundations',
            content: 'Fundacja i organizacje'
        },
        {
            name: 'contact',
            link: 'contact',
            content: 'Kontakt'
        },
    ]
    
  return (
    <nav>
        <ul className='navigation-bar'>
        {navigation.map(({ name, link, content }) => (
            <li key={name} className='navigation-button'>
                <Scroll to={link} spy={true} smooth={true} offset={-100} duration={1000} className='navigation-text'>{content}</Scroll> 
            </li>
        ))}
        </ul>              
    </nav>
  )
}
