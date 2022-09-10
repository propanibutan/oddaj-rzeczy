import React, { useState } from 'react';
import * as API from '../api/contact';
import ContactForm from './ContactForm';
import DecorationLine from '../utils/DecorationLine';

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
            <footer>
                <span>Copyright by Coders Lab</span>
                <div>
                    <a href=""/>
                    <a  href=""/>  
                </div>
            </footer>
        </section>
    );
}