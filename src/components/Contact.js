import React from 'react';
import * as API from '../api/contact';
import ContactForm from './ContactForm';
import DecorationLine from '../utils/DecorationLine';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

const INITIAL_VALUES = { name: '', email: '', message: '' };

export default function Contact(){
    // const [contacts, setContacts] = useState(null);

    function addContact(contact) {
        API.sendContact(contact)
        //   .then(contact => setContacts(contacts => [...contacts, contact]));
      }

    return (
        <section id="contact" className='contact'>
            <div className='contact-column-wraper'>
                <span className='contact-form_title'>Skontaktuj się z nami</span>
                <DecorationLine />
                <ContactForm contact={INITIAL_VALUES} submitLabel='Wyślij' onSubmit={addContact}/>
            </div>
            <footer className='contact-footer'>
                <span className='contact-footer_text'>Copyright by Coders Lab</span>
                <div className='contact-footer_socials'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="ikona facebook" className='footer-icon_facebook'/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> 
                        <img src={instagram} alt="ikona instagram"/>
                    </a>
                </div>
            </footer>
        </section>
    );
}