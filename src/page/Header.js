import Top from './header/Top';
import Nav from './header/Nav';
import HeadBody from './header/HeadBody';
import Bg1 from '../image/2.png';

import React from "react";

function Header() {
    return (
        <div className='bg-top pb-60' style={{ backgroundImage: `url(${Bg1})` }} id="home">
            <Top />
            <Nav />
            <HeadBody />
        </div>
    );
}

export default Header;