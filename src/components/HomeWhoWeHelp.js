import React, { useState } from 'react';
import HomeWhoWeHelpFundations from './HomeWhoWeHelpFundations';
import HomeWhoWeHelpOrganizations from './HomeWhoWeHelpOrganizations';
import HomeWhoWeHelpLocal from './HomeWhoWeHelpLocal';
import DecorationLine from '../utils/DecorationLine';
 
export default function HomeWhoWeHelp(){
    const key = ["fundations", "organizations", "local"]

    const [isShown, setIsShown] = useState("fundations");
    
    const handleClickFund = (event) => setIsShown(key[0]);
    const handleClickOrg = (event) => setIsShown(key[1]);
    const handleClickLoc = (event) => setIsShown(key[2]);

    return (
        <section id="fundations" className='who-help'>
            <div className='who-help_container'>
                <div className='we-help_title'>
                    <span>Komu pomagamy?</span>
                    <DecorationLine /> 
                </div>
                <div className='we-help_buttons'> 
                    <button type="button" onClick={handleClickFund} className="we-help_single_button">Fundacjom</button>
                    <button type="button" onClick={handleClickOrg} className="we-help_single_button">Organizacjom pozarządowym</button>
                    <button type="button" onClick={handleClickLoc} className="we-help_single_button">Lokalnym zbiórkom</button>
                </div>
                {isShown === "fundations" && (<HomeWhoWeHelpFundations />)}
                {isShown === "organizations" && (<HomeWhoWeHelpOrganizations />)}
                {isShown === "local" && (<HomeWhoWeHelpLocal />)}
            </div>
        </section>
    );
}