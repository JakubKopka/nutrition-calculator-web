import React from 'react';
import styled from 'styled-components'
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import {BREAK_POINT_1, BREAK_POINT_2} from "./elements/other";

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap');
font-family: 'Lato', sans-serif;
width: 60vw;
@media only screen and (max-width: ${BREAK_POINT_1}px) {
  width: 75vw
}
@media only screen and (max-width: ${BREAK_POINT_2}px) {
  width: 90vw
}
background: rgb(255 255 255 1);
margin: 50px auto auto;
display: flex;
flex-direction: column;
`
const Layout = (props) => {

    return (
        <Wrapper>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </Wrapper>
    )
}

export default Layout;