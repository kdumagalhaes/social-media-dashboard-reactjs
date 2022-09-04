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
          followersStatisticsColor="var(--lime-green)"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={FacebookIcon}
          iconName="facebook icon"
          socialNumber="52.000"
          arrowIcon={ArrowDownIcon}
          followersGrowing="2%"
          followersStatisticsColor="var(--bright-red)"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={InstagramIcon}
          iconName="instagram icon"
          socialNumber="5.462"
          arrowIcon={ArrowUpIcon}
          followersGrowing="2257%"
          followersStatisticsColor="var(--lime-green)"
        />
        <SmallCard
          typeOfCount="Profile Views"
          socialIcon={InstagramIcon}
          iconName="instagram icon"
          socialNumber="52.000"
          arrowIcon={ArrowUpIcon}
          followersGrowing="1375%"
          followersStatisticsColor="var(--lime-green)"
        />
        <SmallCard
          typeOfCount="Retweets"
          socialIcon={TwitterIcon}
          iconName="Twitter icon"
          socialNumber="117"
          arrowIcon={ArrowUpIcon}
          followersGrowing="303%"
          followersStatisticsColor="var(--lime-green)"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={TwitterIcon}
          iconName="twitter icon"
          socialNumber="507"
          arrowIcon={ArrowUpIcon}
          followersGrowing="553%"
          followersStatisticsColor="var(--lime-green)"
        />
        <SmallCard
          typeOfCount="Likes"
          socialIcon={YoutubeIcon}
          iconName="youtube icon"
          socialNumber="107"
          arrowIcon={ArrowDownIcon}
          followersGrowing="19%"
          followersStatisticsColor="var(--bright-red)"
        />
        <SmallCard
          typeOfCount="Total Views"
          socialIcon={YoutubeIcon}
          iconName="youtube icon"
          socialNumber="1.407"
          arrowIcon={ArrowDownIcon}
          followersGrowing="12%"
          followersStatisticsColor="var(--bright-red)"
        />
      </SmallCardsRowDiv>
    </Wrapper>
  );
};

export default SmallCardsRow;
