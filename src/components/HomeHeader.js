import React from 'react';
import SignBar from '../utils/SignBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import CallToActionButton from '../utils/CallToActionButton';

export default function HomeHeader(){

    return (
        <div id='home' className='grid-container'>
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
                        <DecorationLine />
                        <div  className='header-box_buttons'>
                            <CallToActionButton contents="ODDAJ RZECZY" />
                            <CallToActionButton contents="ZORGANIZUJ ZBIÓRKĘ"/>
                        </div>
                    </header>
                </div>
            </div>
         </div>
    );
}