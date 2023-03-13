import React from 'react';
import Img5 from '../image/9.png';
import Img6 from '../image/10.png';
import Img7 from '../image/11.png';

function Team() {
    const headStyle = "text-yellow-400 text-4xl font-crimson sm:text-5xl"
    const headStyle1 = "text-gray-500 text-lg font-crimson"
    const divStyle = "border-2 border-gray flex flex-col items-center gap-2 hover:shadow-2xl"
    const divStyle1 = "py-2"
    return (
        <div className='text-center p-10 sm:px-40' id="team">
            <h3 className={headStyle1}>PROFESSIONAL</h3>
            <h1 className={headStyle}>OUR TEAM</h1>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5 py-5'>
                < div className={divStyle} >
                    <img src={Img5} alt='' className='h-96 w-72' />
                    <div className={divStyle1}>
                        <p className='font-bold'>PAUL NARCH</p>
                        <p>BARBER</p>
                    </div>
                </div >
                <div className={divStyle}>
                    <img src={Img6} alt='' className='h-96 w-72' />
                    <div className={divStyle1}>
                        <p className='font-bold'>STEVEN JOSEPHIN</p>
                        <p>BARBER</p>
                    </div>
                </div>
                <div className={divStyle}>
                    <img src={Img7} alt='' className='h-96 w-72' />
                    <div className={divStyle1}>
                        <p className='font-bold'>ALEXANDER DAVID</p>
                        <p>SHAVER</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Team