import styled from 'styled-components';

export const BackgroundTop = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.color2};
  height: 250px;
  position: absolute;
  top: 0;
`;

export const HeaderTag = styled.header`
  width: 100%;
  max-width: 1260px;
  margin: 45px auto;
  display: flex;
  justify-content: space-between;
  padding: var(--safe-area-padding);
  position: relative;

  h1 {
    color: ${({ theme }) => theme.colors.color5};
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.color4};
  }

  @media (max-width: 375px) {
    flex-direction: column;

    .title {
      margin-bottom: 20px;
      width: 100%;
      font-size: 0.72rem;
      border-bottom: 1px solid gray;

      h1 {
        margin-bottom: 7px;
      }

      span {
        font-size: 0.9rem;
        display: block;
        padding-bottom: 25px;
      }
    }
  }
`;
