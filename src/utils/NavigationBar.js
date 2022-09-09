import React from 'react';
import { HashLink } from 'react-router-hash-link';

//NOTES: TU TRZEBA JEDNAK UŻYC SCROLLA ALE TO ZROBIE JAK JUŻ BEDE MIAŁA RESZTE LANDING PAGE. PAMIĘTAJ ŻEBY ODINSTALOWAĆ HASHA

export default function NavigationBar() {
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
    <nav>
        <ul className='navigation-bar'>
        {navigation.map(({ name, link, content }) => (
            <li key={name} className='navigation-button'>
                <HashLink to={link} smooth className='navigation-text'>{content}</HashLink> 
            </li>
        ))}
        </ul>              
    </nav>
  )
}
