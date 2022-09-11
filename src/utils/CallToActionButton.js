import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToActionButton({ contents }) {
  return (
    <>
        <Link to={'/logowanie'} className='call-to-action__button'>{contents}</Link>
    </>
  )
}
