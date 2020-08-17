import styled from 'styled-components';
import { darken } from 'polished'

export const SmallCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  background-color: ${({ theme }) => theme.colors.color3};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.color6};
  }


  .first-row,
  .second-row {
    display: flex;
    justify-content: space-between;
  }

  .first-row {
    margin-bottom: 20px;

    span {
      font-weight: 700;
      font-size: 0.7rem;
      color: ${({theme}) => theme.colors.color4};
    }
  }

  .second-row {
    display: flex;
    align-items: flex-end;

    h3 {
      font-size: 1.9rem;
      color: ${({theme}) => theme.colors.color5};
    }

    .followers-statistics {
      display: flex;
      align-items: center;
      padding: 5px 0;

      img {
        margin-right: 3px;
      }
      
      span {
        display: inline-block;
        font-weight: 700;
        color: ${({followersStatisticsColor}) => followersStatisticsColor};
      }
    }
  }
`;
