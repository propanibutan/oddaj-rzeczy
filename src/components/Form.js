import { useState } from "react";
import DecorationLine from "../utils/DecorationLine";
import NavigationBar from "../utils/NavigationBar";
import SignedBar from "../utils/SignedBar";
import Contact from "./Contact";
import FormProgressBar from "../utils/FormProgressBar";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";
import FormThankYou from "./FormThankYou";


//some of style for this are in home-header.scss
export default function Form() {
const [formValues, setFormValues] = useState()

const progressBar = [
  { 
    number: '1',
    text: 'Wybierz rzeczy'
  },
  { 
    number: '2',
    text: 'Spakuj je w worki'
  },
  { 
    number: '3',
    text: 'Wybierz fundację'
  },
  { 
    number: '4',
    text: 'Zamów kuriera'
  },
]

const handleClick = () => {}

  return (
    <div className="grid-container">
      <div className="row header form-header">
        <div className='col-7 form-header_image'/>
        <div className='col-5 header-column'>
          <SignedBar />
          <NavigationBar />
          <div className='form-header_box'>
            <DecorationLine text1={'Oddaj rzeczy, których już nie chcesz'} text2={'POTRZEBUJĄCYM'}/>
            <span className="form-header_steps__title">Wystarczą 4 proste kroki:</span>
            <ul className="progress-bar">
              {progressBar.map(({ number, text }) => (
                <li key={number}>
                  <FormProgressBar number={number} text={text}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row form-info-bar">
        <span className="form-info-bar_warning">Ważne!</span>
        <p className="form-info-bar_description">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
      </div>

      <form className="row form-steps-view">
        <FormStep1 progress={progressBar[0].number} onClick={handleClick}/>
        <FormStep2 />
        <FormStep3 />
        <FormStep4 />
        <FormSummary />
        <FormThankYou />
      </form>

      <Contact />

    </div>
  )
}
