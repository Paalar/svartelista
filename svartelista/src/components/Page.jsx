import React from 'react';
import PropTypes from 'prop-types';
import './css/Page.css';
import './css/About.css';
import LandLordPage from './LandLordPage';
import * as PageNames from '../constants/pages';

const Page = ({ activePage }) => {
  switch (activePage) {
    case PageNames.LANDLORDS: {
      return (
        <div className='page'>
          {<LandLordPage />}
        </div>
      );
    }
    case PageNames.ABOUT_SITE: {
      return (
        <div className='about-site'>
          <p>
            Denne siden er ment til å la folk søke på
            utleiere i de store studentbyene og diskutere
            om denne utleieren er dårlig eller ikke.
          </p>
          <p>
            Det skal også bli lagt til sammendrag og lenker
            til lover og regler som skal kunne beskytte deg
            og andre mot utleierene. Siden er inspirert fra egne
            erfaringer med dårlge utleiere og venner som har møtt
            på dårlige utleiere.
          </p>
          <p>Version 0.1</p>
        </div>
      );
    }
    case PageNames.LAWS_AND_RULES: {
      return (
        <div className='about-site'>
          <h1>Coming soon^tm</h1>
        </div>
      );
    }
    default: {
      return LandLordPage;
    }
  }
};

Page.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default Page;
