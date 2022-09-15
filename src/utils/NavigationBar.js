import { HashLink } from 'react-router-hash-link';

export default function NavigationBar() {
    const navigation = [
        {
            name: 'home',
            link: '/#home',
            content: 'Start'
        },
        {
            name: 'simple_steps',
            link: '/#simple_steps',
            content: 'O co chodzi?'
        },
        {
            name: 'about_us',
            link: '/#about_us',
            content: 'O nas'
        },
        {
            name: 'fundations',
            link: '/#fundations',
            content: 'Fundacja i organizacje'
        },
        {
            name: 'contact',
            link: '/#contact',
            content: 'Kontakt'
        },
    ]

    
  return (
    <nav>
        <ul className='navigation-bar'>
        {navigation.map(({ name, link, content }) => (
            <li key={name} className='navigation-button'>
                <HashLink to={link} smooth className='navigation-text'>{content}</HashLink> 
            </li>
        ))}
        </ul>              
    </nav>
  )
}
