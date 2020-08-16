import React from 'react';
import { BigCardsRowDiv } from './BigCardsRowStyles';
import BigCard from '../BigCards/BigCard';
import FacebookIcon from '../../../assets/icon-facebook.svg';
import TwitterIcon from '../../../assets/icon-twitter.svg';
import InstagramIcon from '../../../assets/icon-instagram.svg';
import YoutubeIcon from '../../../assets/icon-youtube.svg';
import ArrowDownIcon from '../../../assets/icon-down.svg'
import ArrowUpIcon from '../../../assets/icon-up.svg'

const BigCardsRow = () => {
  return (
    <BigCardsRowDiv>
      <BigCard
        userName="@nathanf"
        socialIcon={FacebookIcon}
        followersNumber="1987"
        typeOfFollowers="followers"
        followersGrowing="12"
        arrowIcon={ArrowUpIcon}
      />
      <BigCard
        userName="@nathanf"
        socialIcon={TwitterIcon}
        followersNumber="1044"
        typeOfFollowers="followers"
        followersGrowing="99"
        arrowIcon={ArrowUpIcon}
      />
      <BigCard
        userName="@realnathanf"
        socialIcon={InstagramIcon}
        followersNumber="11k"
        typeOfFollowers="followers"
        followersGrowing="1099"
        arrowIcon={ArrowUpIcon}
      />
      <BigCard
        userName="@realnathanf"
        socialIcon={YoutubeIcon}
        followersNumber="8239"
        typeOfFollowers="subscribers"
        followersGrowing="144"
        arrowIcon={ArrowDownIcon}
      />
    </BigCardsRowDiv>
  );
};

export default BigCardsRow;
