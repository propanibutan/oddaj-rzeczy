import DecorationLine from '../utils/DecorationLine';
import CallToActionButton from '../utils/CallToActionButton';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

 
export default function HomeSimpleSteps(){
    const simpleStepsColumns = [
        {
            icon: icon1,
            icon_alt: 'koszula polo',
            title: 'Wybierz rzeczy',
            description: 'ubrania, zabawki, sprzęt i inne'
        },
        {
            icon: icon2,
            icon_alt: 'torba zakupowa',
            title: 'Spakuj je',
            description: 'skorzystaj z worków na śmieci'
        },
        {
            icon: icon3,
            icon_alt: 'lupa',
            title: 'Zdecyduj komu chcesz pomóc',
            description: 'wybierz zaufane miejsce'
        },
        {
            icon: icon4,
            icon_alt: 'znak nieskończoności',
            title: 'Zamów kuriera',
            description: 'kurier przyjedzie w dogodnym terminie'
        },
    ]

    return (
        <section id="simple_steps" className='simple-steps'>
            <div className='simple-steps_title'>
                <DecorationLine text1={'Wystarczą 4 proste kroki'}/>
            </div>
            <ul className='simple-steps_columns'>
            {simpleStepsColumns.map (({ icon, icon_alt, title, description }, i) => (
                <li key={i} className='simple-steps_one_column'>
                    <img src={icon} alt={icon_alt} className='simple-steps_one_column_icon' />
                    <span className='simple-steps_one_column_title'>{title}</span>
                    <hr className='simple-steps_one_column_line'/>
                    <p className='simple-steps_one_column_description'>{description}</p>
                </li>
            ))}
            </ul>
            <div className='simple-steps_button'>
                <CallToActionButton contents="ODDAJ RZECZY" />
            </div>
        </section>
    );
}