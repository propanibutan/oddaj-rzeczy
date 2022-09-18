import { useState } from 'react';
import HomeWhoWeHelpAll from './HomeWhoWeHelpAll';
import DecorationLine from '../utils/DecorationLine';
import fundData from '../data/fundations.json';
import orgData from '../data/organizations.json';
import localData from '../data/locals.json';
 
export default function HomeWhoWeHelp(){
    const key = ["fundations", "organizations", "local"]

    const [isShown, setIsShown] = useState("fundations");
    const [data, setData] = useState(fundData);
    

    const handleClick = (key) => {
        if (key === "fundations") {
            setIsShown(key)
            setData(fundData)
        } 
        if (key === "organizations"){
            setIsShown(key)
            setData(orgData)
        }
        if (key === "local") {
            setIsShown(key)
            setData(localData)
        }

    }

    const text = {
        fundText: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        orgText: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        localText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }

    return (
        <section id="fundations">
            <div className='who-help_container'>
                <div className='we-help_title'>
                    <DecorationLine text1={'Komu pomagamy?'}/> 
                </div>
                <div className='we-help_buttons'> 
                    <button id="button" type="button" onClick={(e) => handleClick(key[0])} className={`we-help_single_button ${isShown === "fundations" ? "choose-button" : ""}`}>Fundacjom</button>
                    <button id="button" type="button" onClick={(e) => handleClick(key[1])} className={`we-help_single_button ${isShown === "organizations" ? "choose-button" : ""}`}>Organizacjom pozarządowym</button>
                    <button type="button" onClick={(e) => handleClick(key[2])} className="we-help_single_button">Lokalnym zbiórkom</button>
                </div>
                {isShown === "fundations" && (<HomeWhoWeHelpAll data={data} text={text.fundText} />)}
                {isShown === "organizations" && (<HomeWhoWeHelpAll data={data} text={text.orgText} />)}
                {isShown === "local" && (<HomeWhoWeHelpAll data={data} text={text.localText} />)}
            </div>
        </section>
    );
}