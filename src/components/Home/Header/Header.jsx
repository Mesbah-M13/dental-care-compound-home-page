import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <Navigationbar></Navigationbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;