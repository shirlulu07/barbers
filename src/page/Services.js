import React from 'react';
import Img2 from '../image/6.png';
import Img3 from '../image/7.png';
import Img4 from '../image/8.png';

function Services() {
    const buttonStyle2 = "text-white bg-gray-500 border-2 border-gray-500 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400 hover:border-yellow-400"
    const textStyle = "text-sm text-gray-500 text-poppins"
    const textStyle1 = "text-sm text-gray-500 text-poppins font-bold"
    const divStyle = "border-2 border-gray flex flex-col items-center gap-2 hover:shadow-2xl"
    const divStyle1 = "flex flex-col gap-2 items-center pb-2 w-72"
    const headStyle1 = "text-gray-400 text-lg font-crimson sm:text-xl"
    const headStyle = "text-yellow-400 text-4xl sm:text-5xl font-crimson"
    return (
        <div className='text-center px-10 py-10 sm:px-40' id="services">
            <h3 className={headStyle1}>NOTHING BUT THE BEST</h3>
            <h1 className={headStyle} >OUR SERVICES</h1>
            <div className='flex flex-col gap-5 sm:flex-row justify-center sm:justify-between items-center py-5'>
                <div className={divStyle}>
                    <img src={Img2} alt='' className='h-64 w-80' />
                    <div className={divStyle1}>
                        <p className={textStyle1}>Classic Haircut</p>
                        <p className={textStyle}>Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button type="button" className={buttonStyle2}>READ MORE</button>
                    </div>
                </div>
                <div className={divStyle}>
                    <img src={Img3} alt='' className='h-64 w-80' />
                    <div className={divStyle1}>
                        <p className={textStyle1}>Clipper Cut</p>
                        <p className={textStyle}>Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button type="button" className={buttonStyle2}>READ MORE</button>
                    </div>
                </div>
                <div className={divStyle}>
                    <img src={Img4} alt='' className='h-64 w-80' />
                    <div className={divStyle1}>
                        <p className={textStyle1}>Razoe Shaver</p>
                        <p className={textStyle}>Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button type="button" className={buttonStyle2}>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services