import React from 'react';
import { HeaderTag } from './HeaderStyles';
import Toggle from './Toggle/Toggle';

const Header = ({ followers }) => {
  return (
    <HeaderTag>
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <span>Total followers: {followers}</span>
      </div>
      <Toggle />
    </HeaderTag>
  );
};

export default Header;
