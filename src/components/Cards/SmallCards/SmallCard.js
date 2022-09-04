import React from 'react';
import { SmallCardDiv } from './SmallCardStyles';
import AnimatedNumber from 'react-animated-number'

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
      <AnimatedNumber 
        value={socialNumber} 
        component="h3"
        stepPrecision={1}
        duration={600}
      >
        {socialNumber}
        </AnimatedNumber>
        <div className="followers-statistics">
          <img src={arrowIcon} alt="arrow icon" />
          <span>{followersGrowing}</span>
        </div>
      </div>
    </SmallCardDiv>
  );
};

export default SmallCard;
