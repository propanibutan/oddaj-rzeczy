//styles for this are in form-steps.scss
export default function FormStep2({formValues, setFormValues}) {
  const number = [1, 2, 3, 4, 5]
  return (
    <div>
      <label>Liczba 60l worków:</label>
      <select name="bags" id="bags"onClick={(e) => setFormValues({...formValues, bags_count: e.target.value})}> 
        <option value="">-wybierz-</option>
        {number.map((number) => (
        <option key={number} value={number} defaultValue={formValues.bags_count === number} >{number}</option>
        ))}
      </select>
    </div>
  )
}
