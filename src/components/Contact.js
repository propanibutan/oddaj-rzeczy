import { useState } from 'react';
import ContactForm from './ContactForm';
import DecorationLine from '../utils/DecorationLine';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

const INITIAL_VALUES = { name: '', email: '', message: '' };

export default function Contact(){
    const [success, setSuccess] = useState(null);

    const BASE_URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
    
    function sendRequest(data) {
        const url = new URL('contact', BASE_URL);
       
        return fetch(url, {
          method: 'POST',
          body: data && JSON.stringify(data),
          headers: { 'Content-Type': 'application/json', },
          })
          .then(response => response.json())
          .then(response => {
            if (response.status === "error"){
              setSuccess(false)
            }
            return response;
          })
          .then(setSuccess(true))
          .catch(err => (console.log("treść:", err)))
        }

    return (
        <section id="contact" className='contact'>
            <div className='contact-column-wraper'>
                <DecorationLine text1={'Skontaktuj się z nami'}/>
                <div className='contact-form_message'>
                    {success === true && <span className="success-message">Wiadomość została wysłana! Wkrótce się skontaktujemy.</span>}
                    {success === false && <span className="fatal-message">Coś poszło nie tak. Sprawdź czy poprawnie wypełniłeś formularz.</span>}  
                </div>
                <ContactForm contact={INITIAL_VALUES} submitLabel='Wyślij' onSubmit={sendRequest} setSuccess={setSuccess}/>
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