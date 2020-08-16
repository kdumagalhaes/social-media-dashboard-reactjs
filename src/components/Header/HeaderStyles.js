import styled from 'styled-components';

export const HeaderTag = styled.header`
  width: 100%;
  max-width: 1260px;
  margin: 45px auto;
  display: flex;
  justify-content: space-between;
  padding: var(--safe-area-padding);

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
