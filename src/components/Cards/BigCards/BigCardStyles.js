import styled from 'styled-components';

export const BigCardDiv = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.color3};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.color6};
  }

  .top-border {
    width: 100%;
    height: 5px;
    background: ${({ topBorderColor }) => topBorderColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    top: 0;
  }

  .social-div {
    display: flex;
    align-items: center;
    margin: 15px 0 25px 0;

    img {
      margin-right: 10px;
    }

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.color4};
      font-size: 0.8rem;
    }
  }

  h2 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.color5};
  }

  .type-of-followers {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.9rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.color4};
  }

  .followers-statistics {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${({followersStatisticsColor}) => followersStatisticsColor};

    span {
      margin: 0 2px;
    }
  }
`;
