import styled from 'styled-components';

export const SmallCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGrayishBlue};
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
      color: ${({theme}) => theme.colors.darkGrayishBlue};
    }
  }

  .second-row {
    display: flex;
    align-items: flex-end;

    h3 {
      font-size: 1.9rem;
      color: ${({theme}) => theme.colors.veryDarkBlue};
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
