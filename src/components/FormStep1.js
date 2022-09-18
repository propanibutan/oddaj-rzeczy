

export default function FormStep1({ progress, onClick }) {
  return (
    <div className='form-step'>
        <label for='reuse-clothes'>
            <input 
            type='radio' 
            id='reuse-clothes' 
            name='step-1' 
            value='reuse-clothes'
            />
            ubrania, które nadają się do ponownego użycia
        </label>
        <label for='trash-clothes'>
            <input 
            type='radio' 
            id='trash-clothes' 
            name='step-1' 
            value='trash-clothes'
            />
            ubrania, do wyrzucenia
        </label>
        <label for='toys'>
            <input 
            type='radio' 
            id='toys' 
            name='step-1' 
            value='toys'
            /> 
            zabawki
        </label>
        <label for='books'>
            <input 
            type='radio' 
            id='books' 
            name='step-1' 
            value='books'
            />
            książki
        </label>
        <label for='others'>
            <input 
            type='radio' 
            id='others' 
            name='step-1' 
            value='others'
            />
            Inne
        </label> 
    </div>
  )
}
