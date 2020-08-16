import styled from 'styled-components';

export const SmallCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  background-color: lightgray;
  border-radius: 5px;

  .first-row,
  .second-row {
    display: flex;
    justify-content: space-between;
  }

  .first-row {
    margin-bottom: 20px;
  }

  .second-row {
    display: flex;
    align-items: flex-end;

    h3 {
      font-size: 1.83rem;
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
      }
    }
  }
`;
