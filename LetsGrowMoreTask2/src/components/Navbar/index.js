import React from 'react';
import {Nav,NavBtn,NavLink,NavBtnLink,Bars,NavMenu} from './NavbarElements';
import LGM from './LGM.jpg';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={LGM} style={{width: 80}} alt=""></img>
            </NavLink>
            <Bars/>
            <NavMenu>
                 <NavBtn>
                     <NavBtnLink to='./components/getusers' >Get Users</NavBtnLink>
                 </NavBtn>
            </NavMenu>
        </Nav>
        </>
    );
}

export default Navbar;
