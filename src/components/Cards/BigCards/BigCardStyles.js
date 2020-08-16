import styled from 'styled-components';

export const BigCardDiv = styled.div`
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;

  .social-div {
    display: flex;
    align-items: center;
    margin: 15px 0 25px 0;

    img {
      margin-right: 10px;
    }
  }

  h2 {
    font-size: 3.5rem;
  }

  .type-of-followers {
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.9rem;
      margin-bottom: 20px;
  }

  .followers-statistics {
    display: flex;
    align-items: center;

    span {
      margin: 0 2px;
    }
  }
`;
