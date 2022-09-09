import React from 'react';
 
export default function HomeThreeColumns(){
    return (
        <section className='three-columns'>
            <ul className='three-columns_all'>
                <li className='one-column'>
                    <h2 className='one-column_number'>10</h2>
                    <h3 className='one-column_title'>ODDANYCH WORKÓW</h3>
                    <p className='one-column_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p> 
                </li>
                <li className='one-column'>
                    <h2 className='one-column_number'>5</h2>
                    <h3 className='one-column_title'>WSPARTYCH ORGANIZACJI</h3>
                    <p className='one-column_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p> 
                </li>
                <li className='one-column'>
                    <h2 className='one-column_number'>5</h2>
                    <h3 className='one-column_title'>ZORGANIZOWANY ZBIÓREK</h3>
                    <p className='one-column_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p> 
                </li>
            </ul>
        </section>
    );
}