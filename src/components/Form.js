import { useState } from "react";
import DecorationLine from "../utils/DecorationLine";
import NavigationBar from "../utils/NavigationBar";
import SignedBar from "../utils/SignedBar";
import FormProgressBar from "../utils/FormProgressBar";
import Contact from "./Contact";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";
import { progressBar, formVariables } from '../data/formTexts';


//some of style for this are in home-header.scss
export default function Form() {
  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState({
    things: '',
    bags_count: '',
    localization: {
      place:'',
      who_help: '',
      organization: ''
    },
    pickup_adress: {
      street: '',
      city:'',
      postal: '',
      phone: '',
    },
    pickup_date: {
      date: '',
      hour: '',
      notes:''
    }
  });

  console.log("form:",formValues)
  //tu się coś za dużo razy renderuje... i mi zabiera pamieć... jak to ogarnac? useEffect?

  const stepDisplay = () => {
    if (page === 0) {
      return <FormStep1 things={formValues.things} setFormValues={setFormValues} />;
    } else if (page === 1) {
      return <FormStep2 bags_count={formValues.bags_count} setFormValues={setFormValues} />;
    } else if (page === 2) {
      return <FormStep3 />;
    } else if (page === 3) {
      return <FormStep4 />;
    } else {
      return <FormSummary />
    }
  }
  

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
              {progressBar.map(({ number, text }, i) => (
                <li key={number} className={`${i === page ? "progress-text_bold" : ""}`}>
                  <FormProgressBar number={number} text={text}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row form-info-bar">
        <span className="form-info-bar_warning">Ważne!</span>
        <p className="form-info-bar_description">{formVariables[page].info_bar}</p>
      </div>

      <form className="row form-steps-view">
        <div className='form-step'>
          <span className='form-step_progress'>Krok {progressBar[page].number}/4</span>
          <h2 className='form-step_title'>{formVariables[page].form_steps_title}</h2>
          {stepDisplay()}
        </div>
        <div className="form-steps_buttons">
          {page > 0 && <button 
          type="button" 
          className="form-step_button" 
          onClick={() => {setPage((currPage) => currPage - 1);}}
          >
            Wstecz
          </button>}
          <button 
          type="button" 
          className="form-step_button" 
          onClick={() => {setPage((currPage) => currPage + 1);}}
          >
            Dalej
          </button>
        </div>
      </form>

      <Contact />
    </div>
  )
}
