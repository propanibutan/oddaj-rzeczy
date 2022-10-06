import { helpGroups } from '../data/formTexts';
export default function FormStep3({formValues, handleChange, handleCheckbox, miniError}) {
  const city = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']
  

  return (
    <div className="form-step_3_container">
      <select 
      id="localization" 
      name="localization" 
      className="form-step_select" 
      value={formValues?.localization}
      onChange={handleChange("localization")}
      required={formValues?.localizationSpecific === ''}
      > 
        <option value="">— wybierz —</option>
        {city.map((el, i) => (
        <option key={i} value={el}>{el}</option>
        ))}
      </select>
      <h4 className='form-step_h4'>Komu chcesz pomóc?</h4>
      <div className='form-step_checkbox'>
        {helpGroups.map(({ id, label }, i) => (
        <label key={i} className=" form-step_box">
          <input
          className='form-step_box'
          id={id} 
          name='helpGroups'
          type='checkbox'
          value={id}
          checked={formValues?.helpGroups.includes(id) === true}
          onChange={handleCheckbox}
          required={formValues?.helpGroups.length === 0}
          />
          {label}
        </label> 
      ))}
      </div>
      <h4 className='form-step_h4'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
      <input 
      id="localizationSpecific"
      name="localizationSpecific"
      type='text' 
      value={formValues?.localizationSpecific} 
      className='form-step_text__input'
      onChange={handleChange("localizationSpecific")} 
      />
      {miniError === true ? <span className="miniError">Wybierz komu chcesz pomóc zanim przejdziesz dalej.</span> : ""}
    </div>
  )
}
