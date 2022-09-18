import DecorationLine from '../utils/DecorationLine';
import signature from '../assets/Signature.svg';
 
export default function HomeAboutUs(){
    return (
        <section id='about_us' className='grid-container'>
            <div className='row about-us'>
                <div className='col-6 about-us_column'>
                    <DecorationLine text1={'O nas'}/>
                    <span className='about-us_description'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. <br />Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</span>
                    <img src={signature} className="about-us_signature" alt='podpis prezesa'/>
                </div>
                <div className='col-6 about-us_image'/>
            </div>
        </section>
    )
}