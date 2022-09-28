// import { useState, useEffect } from "react";

//styles for this are in form-steps.scss
export default function FormStep2({formValues, handleChange}) {
  const bags = ['1', '2', '3', '4', '5']
  //tu się coś za dużo razy renderuje... i mi zabiera pamieć... jak to ogarnac? useEffect?
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   setFormValues(prev => {
  //     return {
  //       ...prev,
  //       ["bags_count"] : data
  //     }
  //   } )
  // }, [data])

  // const handleChange = (e) => {
  //   setFormValues({
  //     ...formValues,
  //     ["bags_count"]: e.target.value,
  //   });
  // };
  return (
    <>
      <label className="form-step_label">Liczba 60l worków:
        {/* <select id="bags" name="bags" onChange={(e) => setData(e.target.value)}>  */}
        {/* <div className="form-step_select"> */}
           <select id="bags" name="bags" className="form-step_select" onChange={handleChange("bags_count")} >
          <option value="">- wybierz -</option>
          {bags.map((el, i) => (
          <option key={i} value={el} selected={formValues.bags_count === el}>{el}</option>
          ))}
        </select>
        {/* </div> */}
      </label>
    </>
  )
}