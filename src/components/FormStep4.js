import FormStep4Input from "../utils/FormStep4Input";

//styles for this are in form-steps.scss
export default function FormStep4({ formValues, handleChange, errorMessages }) {
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
      type: 'tel',
      value: formValues?.phone,
      errorMessage: errorMessages?.phone,
      onChange: handleChange("phone")
    }
  ]

  const pickupTime = [
    {
      label: 'Data',
      name: 'date',
      type: 'date',
      value: formValues?.date,
      errorMessage: errorMessages?.date,
      onChange: handleChange("date")
    },
    {
      label: 'Godzina',
      name: 'time',
      type: 'time',
      value: formValues?.time,
      errorMessage: errorMessages?.time,
      onChange: handleChange("time")
    }
  ]

  return (
    <section className="form-step_pickup">
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
        {pickupTime.map(({ label, name, type, value, errorMessage, onChange}) => (
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
        <label className='form-step4_input_container textarea'>
          Uwagi <br/>dla kuriera
          <textarea
            id="note"
            className='form-step4_texarea'
            name="note" 
            value={formValues?.note}
            onChange={handleChange("note")}
          />
        </label>
      </div>
    </section>
  )
}
