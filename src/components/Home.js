import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import Contact from './Contact';

export default function Home(){
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <Contact />
        </>
    );
}