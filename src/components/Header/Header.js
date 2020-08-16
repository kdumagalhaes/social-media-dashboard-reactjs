import React, { Fragment } from 'react';
import { HeaderTag, BackgroundTop } from './HeaderStyles';
import Toggle from './Toggle/Toggle';


const Header = ({ followers }) => {
  return (
    <Fragment>
      <BackgroundTop/>
      <HeaderTag>
        <div className="title">
          <h1>Social Media Dashboard</h1>
          <span>Total followers: {followers}</span>
        </div>
        <Toggle />
      </HeaderTag>
      </Fragment>
  );
};

export default Header;
