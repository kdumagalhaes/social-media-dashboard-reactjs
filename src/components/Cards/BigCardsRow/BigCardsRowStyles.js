import styled from 'styled-components';

export const BigCardsRowDiv = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: var(--safe-area-padding);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media (max-width: 865px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
