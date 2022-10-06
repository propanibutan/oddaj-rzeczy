import { useEffect, useState } from 'react';
import icon1 from '../assets/Icon-1.svg';
import icon4 from '../assets/Icon-4.svg';
import { choosenThings, helpGroups } from '../data/formTexts';

export default function FormSummary({ formValues }) {
const  [groups, setGroups] = useState([])
const value = formValues.type;
const support = choosenThings.filter((el) => {
  if (el.id == value)
   return el.label;
})



console.log(groups)

  return (
    <section>
      <div>
        <h4 className='form-step_h4'>Oddajesz:</h4>
        <div className='form-summary_column'>
          <img src={icon1} alt="koszula polo" className='simple-steps_one_column_icon' />
          <p className='simple-steps_one_column_description'>
            {formValues.bags}
            {formValues.bags > 1 ? " worki" : " worek"}, 
            {` ${support[0].label}`},
            {` ${formValues.helpGroups.join(', ')}`}
          </p>
        </div>
        <div className='form-summary_column'>
          <img src={icon4} alt="znak nieskończoności" className='simple-steps_one_column_icon' />
          <p className='simple-steps_one_column_description'>
            dla lokalizacji:
            {` ${formValues.localization || formValues.localizationSpecific}`}
          </p>
        </div>
      </div>
      <div className="form-step_pickup">
        <div>
          <h4 className='form-step_h4'>Adres odbioru:</h4>
        </div>
        <div>
         <h4 className='form-step_h4'>Termin odbioru:</h4>
        </div>
      </div>
    </section>
  )
}
