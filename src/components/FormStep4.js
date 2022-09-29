import { useState } from "react";
import FormStep4Input from "../utils/FormStep4Input";

//styles for this are in form-steps.scss
export default function FormStep4({ formValues, handleChange }) {
   const [errorMessages, setErrorMessages] = useState(null);
  const pickupAdres = [
    {
      label: 'Ulica',
      name: 'street',
      type: 'text',
      value: formValues?.street,
      errorMessage: errorMessages?.street,
      onChange: handleChange("street")
    },
    {
      label: 'Miasto',
      name: 'city',
      type: 'text',
      value: formValues?.city,
      errorMessage: errorMessages?.city,
      onChange: handleChange("city")
    },
    {
      label: 'Kod pocztowy',
      name: 'postCode',
      type: 'text',
      value: formValues?.postCode,
      errorMessage: errorMessages?.postCode,
      onChange: handleChange("postCode")
    },
    {
      label: 'Numer telefonu',
      name: 'phone',
      type: 'number',
      value: formValues?.phone,
      errorMessage: errorMessages?.phone,
      onChange: handleChange("phone")
    },
  ]
 

  return (
    <form className="form-step_pickup">
      <div className="form-step_pickup_column">
        <h4 className='form-step_h4'>Adres odbioru</h4>
        {pickupAdres.map(({ label, name, type, value, errorMessage, onChange}) => (
          <FormStep4Input 
          key={name}
          label={label}
          name={name}
          type={type}
          value={value}
          errorMessage={errorMessage}
          onChange={onChange}
          />
        ))}
      </div>
      <div className="form-step_pickup_column">
        <h4 className='form-step_h4'>Termin odbioru</h4>
        <FormStep4Input 
          label="Data"
          name='date'
          type="date"
          value={formValues?.date}
          errorMessage={errorMessages?.date}
          onChange={handleChange("date")}
        />
         <FormStep4Input 
          label="Godzina"
          name='time'
          type="time"
          value={formValues?.time}
          errorMessage={errorMessages?.time}
          onChange={handleChange("time")}
        />
        <label className='contact-form_field large'>
          Uwagi dla kuriera
          <textarea
            id="note"
            className={` ${errorMessages?.note ? "error-border" : ""}`}
            name="note" 
            value={formValues?.note}
            onChange={handleChange("note")}
          />
          {errorMessages?.note && <span className="error-message">{' '}{errorMessages?.note}</span>}
        </label>
      </div>
    </form>
  )
}
