import React from 'react';
import { SmallCardsRowDiv, Wrapper } from './SmallCardsRowStyles';
import SmallCard from '../SmallCards/SmallCard';
import FacebookIcon from '../../../assets/icon-facebook.svg';
import TwitterIcon from '../../../assets/icon-twitter.svg';
import InstagramIcon from '../../../assets/icon-instagram.svg';
import YoutubeIcon from '../../../assets/icon-youtube.svg';
import ArrowDownIcon from '../../../assets/icon-down.svg';
import ArrowUpIcon from '../../../assets/icon-up.svg';

const SmallCardsRow = () => {
  return (
    <Wrapper>
      <h2>Overview - Today</h2>
      <SmallCardsRowDiv>
        <SmallCard
          typeOfCount="Page Views"
          socialIcon={FacebookIcon}
          iconName="facebook icon"
          socialNumber="87"
          arrowIcon={ArrowUpIcon}
          followersGrowing="3%"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={FacebookIcon}
          iconName="facebook icon"
          socialNumber="52"
          arrowIcon={ArrowDownIcon}
          followersGrowing="2%"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={InstagramIcon}
          iconName="instagram icon"
          socialNumber="5462"
          arrowIcon={ArrowUpIcon}
          followersGrowing="2257%"
        />
        <SmallCard
          typeOfCount="Profile Views"
          socialIcon={InstagramIcon}
          iconName="instagram icon"
          socialNumber="52k"
          arrowIcon={ArrowUpIcon}
          followersGrowing="1375%"
        />
        <SmallCard
          typeOfCount="Retweets"
          socialIcon={TwitterIcon}
          iconName="Twitter icon"
          socialNumber="117"
          arrowIcon={ArrowUpIcon}
          followersGrowing="303%"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={TwitterIcon}
          iconName="twitter icon"
          socialNumber="507"
          arrowIcon={ArrowUpIcon}
          followersGrowing="553%"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={YoutubeIcon}
          iconName="youtube icon"
          socialNumber="107"
          arrowIcon={ArrowDownIcon}
          followersGrowing="19%"
        />
        <SmallCard
          typeOfCount="Total Views"
          socialIcon={YoutubeIcon}
          iconName="youtube icon"
          socialNumber="1407"
          arrowIcon={ArrowDownIcon}
          followersGrowing="12%"
        />
      </SmallCardsRowDiv>
    </Wrapper>
  );
};

export default SmallCardsRow;
