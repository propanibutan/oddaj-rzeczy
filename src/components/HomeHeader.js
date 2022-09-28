import { useState } from 'react';
import SignBar from '../utils/SignBar';
import SignedBar from '../utils/SignedBar';
import NavigationBar from '../utils/NavigationBar';
import DecorationLine from '../utils/DecorationLine';
import CallToActionButton from '../utils/CallToActionButton';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function HomeHeader(){
    const [signedIn, setSignedIn] = useState(null)

    onAuthStateChanged(auth, (currentUser) => {
    setSignedIn(currentUser);
    });
    
    return (
        <div id='home' className='grid-container'>
            <div className='row header'>
                <div className='col-6 header-image'/>
                <div className='col-6 header-column'>
                    {signedIn ? <SignedBar/> : <SignBar />}
                    <NavigationBar />
                    <header className='header-box'>
                        <DecorationLine text1={'Zacznij pomagać!'} text2={'Oddaj niechciane rzeczy w zaufane ręce'} />
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