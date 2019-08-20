import React from 'react';
import LinkContainer from '../containers/LinkContainer';
import * as pageNames from '../constants/pages';
import './css/NavBar.css';
import { LOGO_TITLE } from '../constants/Text';

const NavBar = () => (
  <div className='app-bar'>
    <div className='logo'>
      <h1 id='logo-title'>{LOGO_TITLE}</h1>
    </div>
    <ul className='navigation-items'>
      <LinkContainer name={pageNames.LANDLORDS} />
      <LinkContainer name={pageNames.LAWS_AND_RULES} />
      <LinkContainer name={pageNames.ABOUT_SITE} />
    </ul>
  </div>
);

export default NavBar;
