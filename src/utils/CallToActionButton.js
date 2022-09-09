import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToActionButton() {
  return (
    <>
        <Link to={'/logowanie'} className='call-to-action__button'>ODDAJ RZECZY</Link>
    </>
  )
}
