import { Link } from 'react-router-dom';

export default function CallToActionButton({ contents }) {
  return (
    <>
        <Link to={'/oddaj-rzeczy'} className='call-to-action__button'>{contents}</Link>
    </>
  )
}
