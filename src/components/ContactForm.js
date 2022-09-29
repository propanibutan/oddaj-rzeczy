import { useState } from 'react'
import validate from '../utils/contactFormValidation';


export default function ContactForm({ contact, submitLabel, onSubmit, setSuccess }) {
    const [values, setValues] = useState(contact);
    const [errorMessages, setErrorMessages] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(values => ({ ...values, [name]: value }));
        setSuccess(null);
    }

    //Only when validation is ok u can sent contact message
    function handleSubmit(event) {
        event.preventDefault();
        
        const errorMessages = validate(values);
        setErrorMessages(errorMessages);
        if (errorMessages) return;

        if (typeof onSubmit !== 'function');
        onSubmit(values);
        setValues(contact);
    }

  return (
    <div className='contact-form_container'>
        <form 
        className='contact-form'
        onSubmit={handleSubmit}
        >
            <div className='contact-form_2_fields'>
                <label className='contact-form_field small'>
                    Wpisz swoje imię
                    <input 
                        id="name"
                        className={`contact-form_field__input ${errorMessages?.name ? "error-border" : ""}`}
                        name="name"
                        type="text" 
                        placeholder="Krzysztof"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errorMessages?.name && <span className="error-message">{' '}{errorMessages?.name}</span>}
                    
                </label>
                <label className='contact-form_field small'>
                    Wpisz swój email
                    <input
                        id="email"
                        className={`contact-form_field__input ${errorMessages?.email ? "error-border" : ""}`}
                        name="email"
                        type="text"
                        placeholder="abc@xyz.pl"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errorMessages?.email && <span className="error-message">{' '}{errorMessages?.email}</span>}
                </label>
            </div>
            <label className='contact-form_field large'>
                Wpisz swoją wiadomość
                <textarea
                    id="message"
                    className={`contact-form_field__input ${errorMessages?.message ? "error-border" : ""}`}
                    name="message" 
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    value={values.message}
                    onChange={handleChange}
                />
                {errorMessages?.message && <span className="error-message">{' '}{errorMessages?.message}</span>}
            </label>
            <div className='contant-form_button_container'>
               <input className='contact-form_button' type="submit" value={submitLabel}/> 
            </div>
        </form>
    </div>
  )
}