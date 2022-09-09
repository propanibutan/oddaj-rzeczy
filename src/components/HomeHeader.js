import React from 'react';
import { Link } from 'react-router-dom';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import decoration from '../assets/Decoration.svg';

export default function HomeHeader(){

    return (
        <div className='grid-container'>
            <div className='row header'>
                <div className='col-6 header-image'/>
                <div className='col-6 header-column'>
                    <SignBar />
                    <NavigationBar />
                    <header className='header-box'>
                        <div className='header-text'>
                            <span>Zacznij pomagać!</span>
                            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                        </div>
                        <img src={decoration} className="header-box_image" alt='dekoracyjna linia'/>
                        <div  className='header-box_buttons'>
                            <Link to={'/logowanie'} className='header-box__button'>ODDAJ RZECZY</Link>
                            <Link to={'/logowanie'} className='header-box__button'>ZORGANIZUJ ZBIÓRKĘ</Link> 
                        </div>
                    </header>
                </div>
            </div>
         </div>
    );
}