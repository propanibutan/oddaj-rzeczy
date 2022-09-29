import React, { useEffect, useState } from 'react'

export default function FormStep3({formValues, handleChange, handleCheckbox}) {
  const city = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']
  const helpGroups = [
    {
      id: 'children',
      label: 'dzieciom'
    }, 
    {
      id: 'single-mothers',
      label:'samotnym matkom'
    }, 
    {
      id:'homeless',
      label:'bezdomnym'
    }, 
    {
      id: 'disabled-people',
      label:'niepełnosprawnym'
    }, 
    {
      id:'elder-people', 
      label:'osobom starszym'
    }
  ]

  // const [help, setHelp] = useState("")
  // console.log('help', help)

  // useEffect(() => {
    
  
  //   return setFormValues({...formValues, help_groups: help});
  // }, [help])
  

  // const handleHelpGroups = (e) => {
  //   const element = e.target.value
  //   const stable = help
  //   setHelp(...stable, element)
  // }

  return (
    <div>
      <select 
      id="localization" 
      name="localization" 
      className="form-step_select" 
      value={formValues?.localization}
      onChange={handleChange("localization")}
      > 
        <option value="">— wybierz —</option>
        {city.map((el, i) => (
        <option key={i} value={el}>{el}</option>
        ))}
      </select>
      <h4 className='form-step_h4'>Komu chcesz pomóc?</h4>
      <div className='form-step_checkbox'>
        {helpGroups.map(({ id, label }, i) => (
        <label key={i} className="form-step_label form-step_box">
          <input
          id={id} 
          name='helpGroups'
          type='checkbox'
          value={id}
          checked={formValues?.helpGroups === id}
          onChange={handleCheckbox}
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
    </div>
  )
}
