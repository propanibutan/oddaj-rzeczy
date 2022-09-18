import decoration from '../assets/Decoration.svg';

export default function DecorationLine({text1, text2}) {
  return (
    <>
      <div className='decoration-text'>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <img src={decoration} className="decoration-line" alt='dekoracyjna linia'/>
    </>
  )
}
