import styled from 'styled-components';

export const ToggleDiv = styled.div`
  display: flex;
  align-items: center;

  span {
      margin-right: 10px;
  }

  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;
