import React from 'react';
import { BigCardDiv } from './BigCardStyles';
import AnimatedNumber from 'react-animated-number'

const BigCard = ({
  userName,
  socialIcon,
  followersNumber,
  typeOfFollowers,
  followersGrowing,
  arrowIcon,
  topBorderColor,
  followersStatisticsColor
}) => {
  return (
    <BigCardDiv topBorderColor={topBorderColor} followersStatisticsColor={followersStatisticsColor}>
      <div className="top-border"></div>
      <div className="social-div">
        <img src={socialIcon} alt={userName} />
        <span>{userName}</span>
      </div>
      <AnimatedNumber 
        value={followersNumber} 
        component="h2"
        stepPrecision={1}
        duration={600}
      >
        {followersNumber}
        </AnimatedNumber>
      <span className="type-of-followers">{typeOfFollowers}</span>
      <div className="followers-statistics">
        <img src={arrowIcon} alt="arrow icon" />
        <span>{followersGrowing}</span>
        <span>Today</span>
      </div>
    </BigCardDiv>
  );
};

export default BigCard;
