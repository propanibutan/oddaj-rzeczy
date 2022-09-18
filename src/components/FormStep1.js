//styles for this are in form-steps.scss
export default function FormStep1({things, setFormValues}) {
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
    <div>
        {thingsToGive.map(({ id, label }) => (
           <label key={id} className="form-step-one_label">
            <input
            id={id} 
            className="form-step-one_input"
            name='things'
            type='radio'
            value={id}
            checked={things === id}
            onChange={(e) => setFormValues({things: e.target.value})}
            />
            {label}
        </label> 
        ))}
        
    </div>
  )
}
