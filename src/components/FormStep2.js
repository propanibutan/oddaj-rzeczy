//styles for this are in form-steps.scss
export default function FormStep2({bags_count, setFormValues}) {
  const number = [1, 2, 3, 4, 5]
  return (
    <div>
      <label>Liczba 60l worków:</label>
      <select name="bags" id="bags"onClick={(e) => setFormValues({bags_count: e.target.value})}> 
        <option value="">-wybierz-</option>
        {number.map((number) => (
        <option key={number} value={number} defaultValue={bags_count === number} >{number}</option>
        ))}
      </select>
    </div>
  )
}
