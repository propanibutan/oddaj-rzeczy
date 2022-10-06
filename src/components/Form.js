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
import validate from '../utils/step4FormValidation.js';

//some of style for this are in home-header.scss
export default function Form() {
  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState({
    type: '',
    bags: '',
    localization:'',
    helpGroups: [],
    localizationSpecific: '',
    street: '',
    city:'',
    postCode: '',
    phone: '',
    date: '',
    time: '',
    note:''
  });
  const [miniError, setMiniError] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);

  console.log("form:",formValues)

  const stepDisplay = () => {
    if (page === 0) {
      return <FormStep1 
      formValues={formValues} 
      handleChange={handleChange} 
      />;
    } else if (page === 1) {
      return <FormStep2 
      formValues={formValues} 
      handleChange={handleChange} 
      />;
    } else if (page === 2) {
      return <FormStep3 
      formValues={formValues} 
      handleChange={handleChange} 
      handleCheckbox={handleCheckbox} 
      miniError={miniError}
      />;
    } else if (page === 3) {
      return <FormStep4 
      formValues={formValues} 
      errorMessages={errorMessages} 
      handleChange={handleChange} 
      />;
    } else if (page === 4){
      return <FormSummary formValues={formValues} />
    }
  }
  
  const handleChange = (input) => (e) => {
    setFormValues({
      ...formValues,
      [input]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    if(e.target.checked){
      const array = formValues.helpGroups.concat(e.target.value)
      setFormValues({
        ...formValues,
      helpGroups: array,
      });
      setMiniError(false);
    } else {
      const filterArray = formValues.helpGroups.filter((el) => (e.target.value !== el))
      setFormValues({
        ...formValues,
        helpGroups: filterArray
      })
    }
  }

  const handleNextPage = () => {
    if (page === 2) {
      if (formValues.helpGroups.length > 0) {
        setPage((currPage) => currPage + 1);
      } else {
        setMiniError(true);
      }
      
    } else if (page === 3) {
      const errorMessages = validate(formValues);
      setErrorMessages(errorMessages);

      if (errorMessages) { 
        return; 
      } else {
        setPage((currPage) => currPage + 1)
      }

    } else {
      setPage((currPage) => currPage + 1)
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
     {page !== 4
      ? <div className="row form-info-bar">
        <span className="form-info-bar_warning">Ważne!</span>
        <p className="form-info-bar_description">{formVariables[page]?.info_bar}</p>
      </div>
      : ""}
      <form className="row form-steps-view">
        <div className='form-step'>
          {page !== 4 
          ? <span className='form-step_progress'>Krok {progressBar[page]?.number}/4</span> 
          : ""}
          <h2 className='form-step_title'>{formVariables[page]?.form_steps_title}</h2>
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
          onClick={handleNextPage}
          >
            {page !== 4 
            ? "Dalej"
            : "Potwierdzam"}
          </button>
        </div>
      </form>

      <Contact />
    </div>
  )
}
