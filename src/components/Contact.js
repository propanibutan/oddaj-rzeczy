import React from 'react';
import DecorationLine from '../utils/DecorationLine';

export default function Contact(){
    return (
        <section id="contact" className='contact'>
            <div className='contact-column-wraper'>
                <span className='contact-form_title'>Skontaktuj się z nami</span>
                <DecorationLine />
                <form 
                className='contact-form'
                // action={FORM_ENDPOINT}
                // onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                >
                    <label className="contact-form_input">Wpisz swoje imię
                        <input type="text" placeholder="Krzysztof" name="name" class="contact_input" required/>
                    </label>
                    <div class="contact-form_input">
                        <input type="email" placeholder="abc@xyz.pl" name="email" class="contact_input" required/>
                    </div>
                    <div class="contact-form_input">
                        <textarea 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                        name="message" 
                        class="contact_input" 
                        required
                        />
                    </div>
                    <div>
                        <button type="submit" className='contact-form_button'>Wyślij</button>
                    </div>
                </form>
            </div>
            <footer>
                <span>Copyright by Coders Lab</span>
                <div>
                    <img/>
                    <img/>  
                </div>
            </footer>
        </section>
    );
}