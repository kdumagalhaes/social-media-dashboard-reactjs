import React from 'react';
import { BigCardDiv } from './BigCardStyles';

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
      <h2>{followersNumber}</h2>
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
