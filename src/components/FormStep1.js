//styles for this are in form-steps.scss
export default function FormStep1({formValues, handleChange }) {
    const thingsToGive = [
        {
            id: 'reuse-clothes',
            label: 'ubrania, które nadają się do ponownego użycia'
        },
        {
            id: 'trash-clothes',
            label: 'ubrania, do wyrzucenia'
        },
        {
            id: 'toys',
            label: 'zabawki'
        },
        {
            id: 'books',
            label: 'książki'
        },
        {
            id: 'others',
            label: 'Inne'
        }
    ]

  return (
    <>
        {thingsToGive.map(({ id, label }, i) => (
           <label key={i} className="form-step_label">
            <input
            id={id} 
            className="form-step-one_input"
            name='type'
            type='radio'
            value={id}
            checked={formValues.type === id}
            onChange={handleChange("type")}
            />
            {label}
        </label> 
        ))}
        
    </>
  )
}
