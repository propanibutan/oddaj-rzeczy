//styles for this are in form-steps.scss
export default function FormStep2({formValues, handleChange}) {
  const bags = ['1', '2', '3', '4', '5']
 
  return (
    <>
      <label className="form-step_label">Liczba 60l worków:
        {/* <div className="form-step_select"> */}
          <select 
          id="bags" 
          name="bags" 
          className="form-step_select" 
          value={formValues?.bags} 
          onChange={handleChange("bags")}
          >
            <option value="">— wybierz —</option>
            {bags.map((el, i) => (
            <option key={i} value={el}>{el}</option>
            ))}
        </select>
        {/* </div> */}
      </label>
    </>
  )
}