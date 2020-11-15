import React, {useEffect, useState} from 'react';
import {CenterDiv} from "./elements/other";

const Footer = () =>{
    const [year, setYear] = useState(new Date().getFullYear())

    return (
        <CenterDiv>
            <p></p>© {year} Jakub Kopka All rights reserved.
        </CenterDiv>
    )
}

export default Footer;