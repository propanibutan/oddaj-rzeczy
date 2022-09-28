import React, { useEffect, useState } from 'react'

export default function FormStep3({formValues, setFormValues}) {
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

  const [help, setHelp] = useState("")
  console.log('help', help)

  useEffect(() => {
    
  
    return setFormValues({...formValues, help_groups: help});
  }, [help])
  

  const handleHelpGroups = (e) => {
    const element = e.target.value
    const stable = help
    setHelp(...stable, element)
  }

  return (
    <div>
      <select 
      id="localization" 
      name="localization" 
      className="form-step_select"  
      onChange={(e) => setFormValues({...formValues, place: e.target.value})}
      > 
        <option value="">-wybierz-</option>
        {city.map((city, i) => (
        <option key={i} value={city} defaultValue={formValues?.place}>{city}</option>
        ))}
      </select>
      <h4>Komu chcesz pomóc?</h4>
      <div >
        {helpGroups.map(({ id, label }, i) => (
        <label key={i} className="form-step_label">
          <input
          id={id} 
          // className=""
          name='help_groups'
          type='checkbox'
          value={id}
          // checked={id === help.element}
          // checked={formValues.help_groups === id}
          onChange={handleHelpGroups}
          />
          {label}
        </label> 
      ))}
      </div>
    </div>
  )
}
