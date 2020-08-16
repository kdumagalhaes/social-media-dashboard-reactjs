import React from 'react';
import { SmallCardDiv } from './SmallCardStyles';

const SmallCard = ({
  typeOfCount,
  socialIcon,
  iconName,
  socialNumber,
  arrowIcon,
  followersGrowing,
  followersStatisticsColor
}) => {
  return (
    <SmallCardDiv followersStatisticsColor={followersStatisticsColor}>
      <div className="first-row">
        <span>{typeOfCount}</span>
        <img src={socialIcon} alt={iconName} />
      </div>
      <div className="second-row">
        <h3>{socialNumber}</h3>
        <div className="followers-statistics">
          <img src={arrowIcon} alt="arrow icon" />
          <span>{followersGrowing}</span>
        </div>
      </div>
    </SmallCardDiv>
  );
};

export default SmallCard;
