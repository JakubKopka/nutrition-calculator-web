import React from 'react';
import styled from 'styled-components'
import logo from "../logo1.svg"
import {BREAK_POINT_1, BREAK_POINT_2} from "./elements/other";

const Wrapper = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgb(224 223 223);
`

const Logo = styled.img`
width: 90px;
@media only screen and (max-width: ${BREAK_POINT_1}px) {
  width: 75px;
}
@media only screen and (max-width: ${BREAK_POINT_2}px) {
  width: 60px;
}
`
const Menu = styled.ul`
list-style: none;
display: flex;
justify-content: center;
`

const LogoText = styled.h1`
@media only screen and (max-width: ${BREAK_POINT_1}px) {
  font-size: 1.5em;
}
@media only screen and (max-width: ${BREAK_POINT_2}px) {
  font-size: 1.17em;
}
`

const Header = () => {

    return (
        <Wrapper>
            <>
                <Logo src={logo}/>
                <LogoText>Nutrition Calculator</LogoText>
            </>
            <Menu>
            </Menu>
        </Wrapper>
    )
}

export default Header;
