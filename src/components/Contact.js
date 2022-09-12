import React, { useState } from 'react';
import * as API from '../api/contact';
import ContactForm from './ContactForm';
import DecorationLine from '../utils/DecorationLine';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

const INITIAL_VALUES = { name: '', email: '', message: '' };

export default function Contact(){
    const [success, setSuccess] = useState(false);
    const [fatal, setFatal] = useState(false);

    function addContact(contact, setError) {
        API.sendContact(contact, setError)
          if (setError !== null) {
            setFatal(true)
          } else { setSuccess(true)}
      }

    return (
        <section id="contact" className='contact'>
            <div className='contact-column-wraper'>
                <span className='contact-form_title'>Skontaktuj się z nami</span>
                <DecorationLine />
                <div className='contact-form_message'>
                    {success === true && <span className="success-message">Wiadomość została wysłana! Wkrótce się skontaktujemy.</span>}
                    {fatal === true && <span className="fatal-message">Ups! Coś poszło źle. Spróbuj jeszcze raz.</span>}  
                </div>
                <ContactForm contact={INITIAL_VALUES} submitLabel='Wyślij' onSubmit={(e) => addContact(e, setFatal)}/>
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