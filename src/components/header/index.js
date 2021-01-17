import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './style';
import "./styles.css";




const HeaderComponent = () => {
    return(
        <>
            <HeaderContainer>
                <Link to="/" className="title">Project Films</Link>
            </HeaderContainer>
        </>
    );
}

export default HeaderComponent;