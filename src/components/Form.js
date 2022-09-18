import DecorationLine from "../utils/DecorationLine";
import NavigationBar from "../utils/NavigationBar";
import SignedBar from "../utils/SignedBar";
import Contact from "./Contact";
import FormProgressBar from "../utils/FormProgressBar";

//some of style for this are in home-header.scss
export default function Form() {
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
            <div className="progress-bar">
              <FormProgressBar number={'1'} text={'Wybierz rzeczy'}/>
              <FormProgressBar number={'2'} text={'Spakuj je w worki'}/>
              <FormProgressBar number={'3'} text={'Wybierz fundację'}/>
              <FormProgressBar number={'4'} text={'Zamów kuriera'}/>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        info bar zmienia sie z stepem
      </div>

      <form className="row">
        form zmienia sie z stepem
      </form>

      <Contact />

    </div>
  )
}
