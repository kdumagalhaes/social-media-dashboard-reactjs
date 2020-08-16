import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100%;
  max-width: 1260px;
  margin: 45px auto;
  padding: var(--safe-area-padding);

  h2 {
    margin-bottom: 25px;
  }
`

export const SmallCardsRowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 875px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;
