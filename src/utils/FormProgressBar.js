export default function FormProgressBar({number, text}) {
  return (
    <div className="progress-box">
        <div className="progress-box_inner">
            <span className="progress-number">{number}</span>
            <span className="progress-text ">{text}</span>
        </div>
    </div>
  )
}
